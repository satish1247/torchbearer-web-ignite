
-- Create table for TB Digital inquiries
CREATE TABLE public.tb_digital_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_required TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (we'll make this public for now since no authentication is required)
ALTER TABLE public.tb_digital_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert inquiries (public form)
CREATE POLICY "Anyone can submit TB Digital inquiries" 
  ON public.tb_digital_inquiries 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to prevent public access to view inquiries (admin only)
CREATE POLICY "Only authenticated users can view TB Digital inquiries" 
  ON public.tb_digital_inquiries 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
