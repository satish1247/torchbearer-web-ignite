
-- Create table for TB Solutions contact messages
CREATE TABLE public.tb_contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT,
  message TEXT NOT NULL,
  user_type TEXT NOT NULL CHECK (user_type IN ('Student', 'Industry')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for TB Solutions project inquiries
CREATE TABLE public.tb_project_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT,
  project_title TEXT NOT NULL,
  project_description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) - allow public access for form submissions
ALTER TABLE public.tb_contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tb_project_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert (public forms)
CREATE POLICY "Allow public contact form submissions" 
  ON public.tb_contact_messages 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public project inquiry submissions" 
  ON public.tb_project_inquiries 
  FOR INSERT 
  WITH CHECK (true);
