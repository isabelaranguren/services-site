import { BASE_URL, BUSINESS_INFO } from "@/lib/constants";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const formData: ContactFormData = await request.json();

    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { message: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD, // Use the App Password
      },
    });

    const mailOptions = {
      from: `"${formData.name}" <${process.env.GMAIL_EMAIL}>`, // Sender address (your Gmail, name is from form)
      replyTo: formData.email, // Sets the Reply-To header to the user's email
      to: process.env.CONTACT_FORM_RECEIVER_EMAIL, // List of receivers (your email where you want to receive submissions)
      subject: `New Contact Form Submission from ${formData.name} (${
        formData.name || "N/A"
      })`,
      text: `You have received a new contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}


Message:
${formData.message || "No message provided."}
      `,
      html: `
      <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="format-detection" content="telephone=no">
            <meta name="format-detection" content="date=no">
            <meta name="format-detection" content="address=no">
            <meta name="format-detection" content="email=no">
            <title>New Contact Form Submission</title>
            <style>body{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:1.6;background-color:#f8f9fa;margin:0;padding:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.email-container{width:100%;max-width:600px;margin:30px auto;background-color:#fff;border:1px solid #dee2e6;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.05)}.email-header{padding:30px 30px 20px;text-align:center;border-bottom:1px solid #e9ecef}.email-logo{max-width:150px;height:auto;margin-bottom:15px}.email-header h2{margin:0;font-size:24px;font-weight:500;color:#212529}.email-content{padding:25px 30px}.email-content p{margin-bottom:15px;color:#495057;font-size:16px}.email-content strong{color:#212529;font-weight:600}.email-content h3{color:#343a40;font-size:18px;margin-top:25px;margin-bottom:10px;border-bottom:1px solid #e9ecef;padding-bottom:8px}.email-content a{color:#007bff;text-decoration:none}.email-content a:hover{text-decoration:underline}.message-block{background-color:#f8f9fa;padding:15px;border-radius:5px;border:1px solid #e9ecef;margin-top:5px;color:#343a40}.message-block p{color:#343a40;margin-bottom:0}.email-footer{text-align:center;padding:20px 30px;font-size:12px;color:#6c757d;background-color:#f1f3f5;border-top:1px solid #dee2e6}.email-footer p{margin:0 0 5px}.email-footer a{color:#007bff;text-decoration:none}.email-footer a:hover{text-decoration:underline}@media screen and (max-width:600px){.email-container{width:95%!important;margin:10px auto!important;border-radius:0!important;border:none!important}.email-header{padding:20px 15px 15px;border-radius:0!important}.email-content{padding:20px 15px}.email-header h2{font-size:20px}.email-content p{font-size:15px}.email-footer{padding:15px;border-radius:0!important}}</style>
          </head>
          <body>
            <div class="email-container">
              <div class="email-header">
                <img src="${BASE_URL}${BUSINESS_INFO.brand.logo}" alt="Your Company Logo" class="email-logo">
                <h2>New Contact Form Submission</h2>
              </div>

              <div class="email-content">
                <p>You've received a new message from your website contact form:</p>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${formData.email}">${
                  formData.email
                }</a></p>
                <p><strong>Phone:</strong> ${formData.phone || "N/A"}</p>

                <h3>Message Details:</h3>
                <div class="message-block">
                  <p>${
                    formData.message
                      ? formData.message.replace(/\n/g, "<br>")
                      : "No message provided."
                  }</p>
                </div>
              </div>

              <div class="email-footer">
                <p>&copy; ${new Date().getFullYear()} ${
                  BUSINESS_INFO.name
                }. All rights reserved.</p>
                <p>This is an automated notification. You can reply to the email address provided in the submission.</p>
              </div>
            </div>
          </body>          </html>

      `,
    };

    // --- Send Email ---
    try {
      await transporter.sendMail(mailOptions);
      console.log(
        "Email sent successfully to:",
        process.env.CONTACT_FORM_RECEIVER_EMAIL
      );
      return NextResponse.json(
        { message: "Form submitted successfully! We will be in touch soon." },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error("Failed to send email:", emailError);
      return NextResponse.json(
        {
          message: `Failed to send email: ${
            emailError.message || "Unknown error"
          }`,
        },
        { status: 500 } // Internal Server Error for email sending failure
      );
    }
  } catch (error: any) {
    console.error("Error processing form submission request:", error);
    // Handle JSON parsing errors or other unexpected errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid JSON payload received." },
        { status: 400 } // Bad Request
      );
    }
    return NextResponse.json(
      {
        message: `Error processing request: ${
          error.message || "Unknown error"
        }`,
      },
      { status: 500 } // Internal Server Error
    );
  }
}
