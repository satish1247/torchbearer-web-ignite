
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ProjectInquiryRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  projectTitle: string;
  projectDescription: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Project notification function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, phoneNumber, projectTitle, projectDescription }: ProjectInquiryRequest = await req.json();
    
    console.log("Processing project inquiry for:", { fullName, email, projectTitle });

    // Send notification email to TB Solutions team
    const emailResponse = await resend.emails.send({
      from: "TB Solutions <onboarding@resend.dev>",
      to: ["tbsolutions.official@gmail.com"],
      subject: `New Project Inquiry: ${projectTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #27ae60; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
            🚀 New TB Solutions Project Inquiry
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Client Information:</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
          </div>
          
          <div style="background: #e8f5e8; border-left: 4px solid #27ae60; padding: 20px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Project Title:</h3>
            <h4 style="color: #27ae60; margin: 0;">${projectTitle}</h4>
          </div>
          
          <div style="background: #fff; border-left: 4px solid #3498db; padding: 20px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Project Description:</h3>
            <p style="line-height: 1.6;">${projectDescription}</p>
          </div>
          
          <div style="background: #2c3e50; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 30px;">
            <p style="margin: 0;">
              📧 Reply to: <a href="mailto:${email}" style="color: #3498db;">${email}</a> |
              📱 Call: <a href="tel:${phoneNumber}" style="color: #3498db;">${phoneNumber}</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to client
    const confirmationResponse = await resend.emails.send({
      from: "TB Solutions <onboarding@resend.dev>",
      to: [email],
      subject: "Your Project Inquiry Has Been Received!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #27ae60; text-align: center;">
            🎉 Thank You, ${fullName}!
          </h2>
          
          <div style="background: linear-gradient(135deg, #27ae60, #3498db); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0;">Your Project "${projectTitle}" Has Been Received!</h3>
            <p style="margin: 0; opacity: 0.9;">Our expert team will review your requirements and get back to you soon.</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #2c3e50;">What happens next?</h4>
            <ul style="color: #666; line-height: 1.8;">
              <li>🔍 Our technical team will analyze your project requirements</li>
              <li>📋 We'll prepare a detailed project proposal with timeline and costs</li>
              <li>📞 You'll receive a call within 24-48 hours to discuss details</li>
              <li>🤝 We'll schedule a consultation to finalize the project scope</li>
            </ul>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #2c3e50;">Your Project Summary:</h4>
            <p><strong>Title:</strong> ${projectTitle}</p>
            <p><strong>Description:</strong> ${projectDescription.substring(0, 100)}...</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666;">
              Questions? Contact us at 
              <a href="mailto:tbsolutions.official@gmail.com" style="color: #27ae60;">tbsolutions.official@gmail.com</a>
              or call <a href="tel:+916303987443" style="color: #27ae60;">+91 6303987443</a>
            </p>
          </div>
          
          <div style="background: #2c3e50; color: white; padding: 20px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-weight: bold;">TB Solutions - Bridging Academic Learning & Industry Requirements</p>
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
    console.error("Error in send-project-notification function:", error);
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
