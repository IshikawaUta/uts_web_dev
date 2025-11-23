'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Nama harus memiliki setidaknya 2 karakter.' }),
  email: z.string().email({ message: 'Harap masukkan alamat email yang valid.' }),
  message: z.string().min(10, { message: 'Pesan harus memiliki setidaknya 10 karakter.' }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const parsed = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return {
      success: false,
      error: 'Data yang dimasukkan tidak valid.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'komikers09@gmail.com', 
      subject: `Pesan baru dari ${name} via portofolio`,
      html: `
        <p>Anda menerima pesan baru dari formulir kontak portofolio Anda.</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: 'Gagal mengirim email karena kesalahan server.' };
    }

    return { success: true, data };
  } catch (exception) {
    console.error('Email Sending Exception:', exception);
    return { success: false, error: 'Terjadi kesalahan tak terduga saat mengirim email.' };
  }
}
