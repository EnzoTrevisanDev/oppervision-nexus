import { createClient } from '@supabase/supabase-js';

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  const supabase = createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_ANON_KEY || ''
  );

  try {
    const { error } = await supabase.functions.invoke('send-email', {
      body: JSON.stringify(data),
    });

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};