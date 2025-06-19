
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DigitalInquiryRequest {
  name: string;
  email: string;
  phone: string;
  serviceRequired: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Digital notification function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, serviceRequired, message }: DigitalInquiryRequest = await req.json();
    
    console.log("Processing digital inquiry for:", { name, email, serviceRequired });

    // Send notification email to TB Digital team
    const emailResponse = await resend.emails.send({
      from: "TB Digital <onboarding@resend.dev>",
      to: ["tbdigital.official@gmail.com"],
      subject: `New Digital Marketing Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #27ae60; border-bottom: 2px solid #f1c40f; padding-bottom: 10px;">
            🚀 New TB Digital Inquiry
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Client Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service Required:</strong> ${serviceRequired}</p>
          </div>
          
          <div style="background: #fff; border-left: 4px solid #27ae60; padding: 20px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="background: #2c3e50; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 30px;">
            <p style="margin: 0;">
              📧 Reply to: <a href="mailto:${email}" style="color: #f1c40f;">${email}</a> |
              📱 Call: <a href="tel:${phone}" style="color: #f1c40f;">${phone}</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to client
    const confirmationResponse = await resend.emails.send({
      from: "TB Digital <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your interest in TB Digital!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #27ae60; text-align: center;">
            🎉 Thank You, ${name}!
          </h2>
          
          <div style="background: linear-gradient(135deg, #27ae60, #f1c40f); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0;">Your Digital Marketing Inquiry Has Been Received!</h3>
            <p style="margin: 0; opacity: 0.9;">We'll boost your brand and get back to you within 24 hours.</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #2c3e50;">What happens next?</h4>
            <ul style="color: #666; line-height: 1.8;">
              <li>📞 Our team will review your requirements</li>
              <li>💡 We'll prepare a customized digital strategy</li>
              <li>🎯 You'll receive a detailed proposal within 24 hours</li>
              <li>🚀 We'll schedule a free consultation call</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666;">
              Questions? Contact us at 
              <a href="mailto:tbdigital.official@gmail.com" style="color: #27ae60;">tbdigital.official@gmail.com</a>
              or call <a href="tel:+916303987443" style="color: #27ae60;">+91 6303987443</a>
            </p>
          </div>
          
          <div style="background: #2c3e50; color: white; padding: 20px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-weight: bold;">TB Digital - Powering Your Brand, Digitally</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Part of Torch Bearer Ecosystem</p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      emailResponse,
      confirmationResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-digital-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
