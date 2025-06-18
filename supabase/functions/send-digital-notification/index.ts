
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
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, serviceRequired, message }: DigitalInquiryRequest = await req.json();

    // Send notification to TB Digital team
    const teamEmailResponse = await resend.emails.send({
      from: "TB Digital <onboarding@resend.dev>",
      to: ["tbdigital.official@gmail.com"],
      subject: `New TB Digital Inquiry from ${name}`,
      html: `
        <h2>New TB Digital Service Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Required:</strong> ${serviceRequired}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This inquiry was submitted through the TB Digital contact form.</em></p>
      `,
    });

    // Send confirmation to the user
    const userEmailResponse = await resend.emails.send({
      from: "TB Digital <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your TB Digital inquiry!",
      html: `
        <h2>Thank you for contacting TB Digital, ${name}!</h2>
        <p>We have received your inquiry for <strong>${serviceRequired}</strong> and will get back to you within 24 hours.</p>
        <p>Our team will review your requirements and provide you with a customized solution that fits your needs and budget.</p>
        <br>
        <p>Best regards,<br>The TB Digital Team</p>
        <hr>
        <p><em>Powering Your Brand, Digitally.</em></p>
      `,
    });

    console.log("Emails sent successfully:", { teamEmailResponse, userEmailResponse });

    return new Response(JSON.stringify({ 
      success: true, 
      teamEmailResponse, 
      userEmailResponse 
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
