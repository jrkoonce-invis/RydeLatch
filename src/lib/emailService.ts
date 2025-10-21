import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_rydelatch'; // You'll need to replace this with your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_contact'; // You'll need to replace this with your actual template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // You'll need to replace this with your actual public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  university?: string;
  message: string;
}

export interface PartnershipFormData {
  university: string;
  contactName: string;
  email: string;
  phone?: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      university: formData.university || 'Not specified',
      message: formData.message,
      to_email: 'jamesonkoonce@gmail.com'
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendPartnershipEmail = async (formData: PartnershipFormData): Promise<boolean> => {
  try {
    const templateParams = {
      university: formData.university,
      contact_name: formData.contactName,
      contact_email: formData.email,
      phone: formData.phone || 'Not provided',
      to_email: 'jamesonkoonce@gmail.com'
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Partnership email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending partnership email:', error);
    return false;
  }
};
