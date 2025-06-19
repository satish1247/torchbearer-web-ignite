
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://thetorchbearer.xyz',
        'X-Title': 'Torch Bearer',
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant for Torch Bearer, a company with three divisions:

1. TB Academy - YouTube-based educational platform offering tech tutorials, project guidance, and skill development
2. TB Solutions - Provides software development (web apps, mobile apps) and hardware solutions (IoT, robotics, embedded systems)
3. TB Digital - Digital marketing services including social media management, branding, SEO, and content creation

Be helpful, professional, and knowledgeable about these services. Always encourage users to contact the appropriate division for their needs.`
          },
          { role: 'user', content: message }
        ],
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'API request failed');
    }

    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-ai function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
