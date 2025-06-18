
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ProjectData {
  fullName: string;
  email: string;
  phoneNumber: string;
  projectTitle: string;
  projectDescription: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, phoneNumber, projectTitle, projectDescription }: ProjectData = await req.json();

    const emailResponse = await resend.emails.send({
      from: "TB Solutions <onboarding@resend.dev>",
      to: ["tbsolutions.official@gmail.com"],
      subject: "New Project Inquiry Received",
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Project Title:</strong> ${projectTitle}</p>
        <p><strong>Project Description:</strong></p>
        <p>${projectDescription}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toISOString()}</small></p>
      `,
    });

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending project notification:", error);
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
