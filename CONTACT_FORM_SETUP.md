# 📧 Contact Form Setup Guide for Dream Axis

## 🚀 **Overview**
Your contact form is now integrated with EmailJS for seamless email functionality when deployed. This guide will walk you through the complete setup process.

## 📋 **What's Already Implemented**
- ✅ **ContactForm Component** - Fully functional form with validation
- ✅ **EmailJS Integration** - Ready for configuration
- ✅ **Form Fields** - Name, Email, Phone, Service Interest, Message
- ✅ **Success/Error Handling** - User feedback and form reset
- ✅ **Loading States** - Professional submission experience
- ✅ **Responsive Design** - Works on all devices

## 🔧 **Step 1: EmailJS Account Setup**

### **1.1 Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### **1.2 Email Service Setup**
1. **Add Email Service:**
   - Click "Email Services" in dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow authentication steps
   - **Save the Service ID** (you'll need this)

### **1.3 Email Template Setup**
1. **Create Email Template:**
   - Click "Email Templates" in dashboard
   - Click "Create New Template"
   - Use this template structure:

```html
Subject: New Contact Form Submission - Dream Axis

Name: {{user_name}}
Email: {{user_email}}
Phone: {{user_phone}}
Service Interest: {{user_service}}
Message: {{user_message}}

This is a new contact form submission from the Dream Axis website.
```

2. **Save the Template ID** (you'll need this)

### **1.4 Get Public Key**
1. Go to "Account" → "API Keys"
2. **Copy your Public Key**

## 🔑 **Step 2: Update Configuration**

### **2.1 Update ContactForm Component**
Open `src/components/ui/contact-form.tsx` and replace the placeholder values:

```typescript
// Replace these with your actual EmailJS credentials
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',        // ← Replace with your Service ID
  'YOUR_TEMPLATE_ID',       // ← Replace with your Template ID  
  'YOUR_PUBLIC_KEY'         // ← Replace with your Public Key
);
```

**Example:**
```typescript
const result = await emailjs.sendForm(
  'service_abc123',         // Your actual Service ID
  'template_xyz789',        // Your actual Template ID
  'user_def456'             // Your actual Public Key
);
```

## 🚀 **Step 3: Test the Form**

### **3.1 Local Testing**
1. Run `npm run dev`
2. Fill out the contact form
3. Submit and check your email
4. Verify EmailJS dashboard shows successful sends

### **3.2 Deployment Testing**
1. Deploy to your hosting platform (Vercel, Netlify, etc.)
2. Test the live form
3. Check email delivery

## 📱 **Form Features**

### **Enhanced Fields:**
- **Full Name** - Required field
- **Email Address** - Required field with validation
- **Phone Number** - Optional field
- **Service Interest** - Dropdown with relevant options:
  - Heavy Truck Driving Jobs
  - Trailer Operations
  - Work Visa & Permits
  - General Recruitment
  - Other Services
- **Message** - Required field with placeholder text

### **User Experience:**
- ✅ **Real-time Validation** - Form validation on submit
- ✅ **Loading States** - Spinner and "Sending..." text
- ✅ **Success Messages** - Green confirmation box
- ✅ **Error Handling** - Red error messages with retry option
- ✅ **Form Reset** - Automatically clears after successful submission
- ✅ **Disabled States** - Prevents multiple submissions

## 🔒 **Security & Privacy**

### **EmailJS Security:**
- ✅ **Client-side Only** - No server-side code needed
- ✅ **Rate Limiting** - Built-in spam protection
- ✅ **Template Validation** - Prevents injection attacks
- ✅ **HTTPS Required** - Secure transmission

### **Data Protection:**
- ✅ **No Data Storage** - Emails only, no database
- ✅ **GDPR Compliant** - User consent and data control
- ✅ **Secure Transmission** - Encrypted email delivery

## 💰 **Pricing & Limits**

### **Free Tier (EmailJS):**
- ✅ **200 emails/month** - Perfect for small businesses
- ✅ **2 email templates** - Sufficient for basic needs
- ✅ **1 email service** - Connect one email account

### **Paid Plans:**
- **Starter: $15/month** - 1,000 emails, 5 templates
- **Professional: $25/month** - 10,000 emails, 20 templates
- **Enterprise: Custom** - Unlimited emails, custom features

## 🚨 **Troubleshooting**

### **Common Issues:**

**1. Form Not Sending:**
- Check EmailJS credentials are correct
- Verify email service is connected
- Check browser console for errors

**2. Emails Not Received:**
- Check spam/junk folder
- Verify email template is correct
- Check EmailJS dashboard for delivery status

**3. Form Validation Errors:**
- Ensure all required fields are filled
- Check email format is valid
- Verify phone number format

### **Debug Steps:**
1. Open browser console (F12)
2. Submit form and check for errors
3. Verify EmailJS credentials
4. Test email service connection

## 📞 **Support Resources**

### **EmailJS Support:**
- 📧 **Email:** support@emailjs.com
- 📚 **Documentation:** [docs.emailjs.com](https://docs.emailjs.com/)
- 💬 **Community:** [community.emailjs.com](https://community.emailjs.com/)

### **Dream Axis Integration:**
- ✅ **Form Component:** Ready to use
- ✅ **EmailJS Setup:** Follow this guide
- ✅ **Testing:** Local and deployment ready
- ✅ **Customization:** Easy to modify fields and styling

## 🎯 **Next Steps**

1. **Complete EmailJS Setup** - Follow Steps 1-2
2. **Test Locally** - Verify form functionality
3. **Deploy & Test** - Ensure live form works
4. **Monitor Usage** - Check EmailJS dashboard
5. **Customize Further** - Add additional fields if needed

---

**🎉 Your contact form is now ready for production deployment!**

The form will automatically send emails to your specified address whenever someone submits a contact request, making it easy to capture leads and inquiries from your website visitors. 