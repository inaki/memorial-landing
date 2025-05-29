/*
  # Initial schema for Memorial Event App

  1. New Tables
     - `settings` - Stores application settings like the event password
     - `events` - Stores event details
     - `tributes` - Stores user tributes with optional images
  
  2. Security
     - Enable RLS on all tables
     - Add policies for authenticated users
*/

-- Settings table for app configuration
CREATE TABLE IF NOT EXISTS settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Insert default event password
INSERT INTO settings (key, value) 
VALUES ('event_password', 'memorial2025')
ON CONFLICT (key) DO NOTHING;

-- Events table to store memorial event details
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date timestamptz NOT NULL,
  location text NOT NULL,
  image_url text,
  additional_info text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Insert sample event data
INSERT INTO events (title, description, date, location, image_url, additional_info)
VALUES (
  'In Loving Memory of Jane Smith',
  'Join us as we celebrate the life of Jane Smith, a beloved mother, wife, and friend. Jane touched the lives of everyone she met with her kindness, generosity, and infectious laughter. This gathering is an opportunity for all who knew her to share memories and honor her legacy.',
  '2025-06-15 14:00:00',
  'Greenwood Memorial Park, 123 Serenity Lane',
  'https://images.pexels.com/photos/19605618/pexels-photo-19605618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Please bring your favorite photo or memory to share. The ceremony will begin at 2:00 PM followed by a reception. In lieu of flowers, donations may be made to the American Cancer Society.'
)
ON CONFLICT DO NOTHING;

-- Tributes table to store user messages and optional images
CREATE TABLE IF NOT EXISTS tributes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author text NOT NULL,
  message text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Insert sample tributes
INSERT INTO tributes (author, message, created_at)
VALUES 
  ('Robert Johnson', 'Jane was always the light of every room she entered. I''ll never forget our college days and how she could make everyone laugh even during finals week. Her kindness knew no bounds.', now() - interval '2 days'),
  ('Sarah Williams', 'I worked with Jane for over 10 years. She was not just a colleague but a true friend who always had time to listen and offer advice. The office will never be the same without her.', now() - interval '1 day')
ON CONFLICT DO NOTHING;

-- Enable Row Level Security
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE tributes ENABLE ROW LEVEL SECURITY;

-- Create security policies
CREATE POLICY "Anyone can read settings"
  ON settings
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can read events"
  ON events
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can read tributes"
  ON tributes
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert tributes"
  ON tributes
  FOR INSERT
  WITH CHECK (true);

-- Create storage bucket for tribute images
-- Note: This would normally be done through the Supabase dashboard or CLI