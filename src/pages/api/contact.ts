import type { APIRoute } from 'astro';

export const prerender = false;

import { contactFormSchema as ContactFormSchema } from '@/features/contact/type'; // Using alias for clarity if needed, or direct import
import { sendEmail } from '@/lib/email';
import { ui, type LanguageCode } from '@/i18n/ui';
import type {
  ContactFormTranslations,
  ContactFormApiResponse,
} from '@/features/contact/type';

// Initialize Resend with the API key from environment variables
const resendApiKey = import.meta.env.RESEND_API_KEY;
const resendFromEmail = import.meta.env.RESEND_FROM_EMAIL;
const contactFormToEmail = import.meta.env.CONTACT_FORM_TO_EMAIL;

if (!resendApiKey) {
  console.error('RESEND_API_KEY is not set in environment variables.');
  // Potentially throw an error or handle this case as per your app's needs
}
if (!resendFromEmail) {
  console.error('RESEND_FROM_EMAIL is not set in environment variables.');
}
if (!contactFormToEmail) {
  console.error('CONTACT_FORM_TO_EMAIL is not set in environment variables.');
}

export const POST: APIRoute = async ({ request }) => {
  let lang: LanguageCode = 'en'; // Default language
  let currentTranslations: ContactFormTranslations = ui[lang]
    .contactPage as ContactFormTranslations; // Default translations
  if (!resendApiKey || !resendFromEmail || !contactFormToEmail) {
    return new Response(
      JSON.stringify({
        message:
          'Server configuration error: Email service not properly configured.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let formDataForValidation;
  try {
    const requestBody = await request.json();
    const requestLang = requestBody.lang as LanguageCode | undefined;
    if (requestLang && ui[requestLang]) {
      lang = requestLang;
      currentTranslations = ui[lang].contactPage as ContactFormTranslations;
    }
    // Separate formData for Zod validation (without lang property)
    const { lang: _lang, ...restOfBody } = requestBody;
    formDataForValidation = restOfBody;
  } catch (error) {
    // Use default (English) translations if JSON parsing fails or lang is not available
    const errorResponse: ContactFormApiResponse = {
      status: 'error',
      message: currentTranslations.toastErrorUnexpected,
      error: 'Invalid JSON input',
    };
    return new Response(JSON.stringify(errorResponse), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const validationResult = ContactFormSchema.safeParse(formDataForValidation);

  if (!validationResult.success) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorValidationFailed,
        errors: validationResult.error.flatten().fieldErrors,
      } as ContactFormApiResponse),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { firstName, lastName, email, message } = validationResult.data;

  try {
    const text = `You have a new contact form submission:`;
    const html = `<div>
<p>You have a new contact form submission:</p>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
</div>`;

    console.log('Sending email to:', contactFormToEmail);
    console.log(
      'Email subject:',
      `New Contact Form Submission from ${firstName} ${lastName}`
    );
    console.log('Email text:', text);
    console.log('Email html:', html);
    const response = await sendEmail({
      to: contactFormToEmail,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text,
      html,
    });
    // testing error
    if (response.status === 'error') {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: currentTranslations.toastErrorFailedToSend,
          error: response.error.message,
        } as ContactFormApiResponse),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    return new Response(
      JSON.stringify({
        status: 'success',
        message: currentTranslations.toastSuccessMessageSent,
        data: response.data,
      } as ContactFormApiResponse),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (exception) {
    console.error('Error sending email:', exception);
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorUnexpected,
        error: exception instanceof Error ? exception.message : 'Unknown error',
      } as ContactFormApiResponse),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
