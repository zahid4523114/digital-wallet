import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://deqlqmerbkuumhcaxwlw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlcWxxbWVyYmt1dW1oY2F4d2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5ODI1NzcsImV4cCI6MTk5MDU1ODU3N30.YAuAu4QMGHJ7oVAhQrK8JddP0LLqODY--FEa7Kxbbj4"
);
