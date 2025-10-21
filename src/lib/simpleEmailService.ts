// Simple email service using mailto links as a fallback
// This doesn't require any external services

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
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
University: ${formData.university || 'Not specified'}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:management@rydelatch.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    return true;
  } catch (error) {
    console.error('Error opening email client:', error);
    return false;
  }
};

export const sendPartnershipEmail = async (formData: PartnershipFormData): Promise<boolean> => {
  try {
    const subject = encodeURIComponent(`Partnership Inquiry from ${formData.university}`);
    const body = encodeURIComponent(`
University: ${formData.university}
Contact Name: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

This is a partnership inquiry from the Rydelatch website.
    `);
    
    const mailtoLink = `mailto:management@rydelatch.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    return true;
  } catch (error) {
    console.error('Error opening email client:', error);
    return false;
  }
};
