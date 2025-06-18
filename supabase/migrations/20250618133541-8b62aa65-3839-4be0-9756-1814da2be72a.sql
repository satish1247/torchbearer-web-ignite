
-- Create table for general contact form submissions
CREATE TABLE public.tb_general_contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (we'll make this public for now since no authentication is required)
ALTER TABLE public.tb_general_contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert general contacts (public form)
CREATE POLICY "Anyone can submit general contact forms" 
  ON public.tb_general_contacts 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to prevent public access to view contacts (admin only)
CREATE POLICY "Only authenticated users can view general contacts" 
  ON public.tb_general_contacts 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
