# EmailJS Setup Guide

To make the contact and partnership forms work, you need to set up EmailJS. Here's how:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Templates
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Create a template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{university}}` - University name (optional)
   - `{{message}}` - Message content
   - `{{contact_name}}` - Contact person name (for partnership)
   - `{{contact_email}}` - Contact person email (for partnership)
   - `{{phone}}` - Phone number (optional)
4. Set the recipient email to: `jamesonkoonce@gmail.com`
5. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Configuration
Open `src/lib/emailService.ts` and replace these values:
- `EMAILJS_SERVICE_ID` with your Service ID
- `EMAILJS_TEMPLATE_ID` with your Template ID  
- `EMAILJS_PUBLIC_KEY` with your Public Key

## Alternative: Simple Form Action
If EmailJS setup is too complex, you can use a simple form action that opens the user's email client:

```html
<form action="mailto:jamesonkoonce@gmail.com" method="post" enctype="text/plain">
  <!-- form fields -->
</form>
```

This will open the user's default email client with the form data pre-filled.
