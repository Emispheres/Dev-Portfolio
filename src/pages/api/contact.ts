import nodemailer from 'nodemailer';
import {NextApiRequest, NextApiResponse} from 'next';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Méthode non autorisée'});
  }

  const {name, email, message}: ContactFormData = req.body;

  // Validation basique
  if (!name || !email || !message) {
    return res.status(400).json({error: 'Tous les champs sont requis'});
  }

  try {
    // Configuration du transporteur Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Vérifier la connexion
    await transporter.verify();

    // Envoyer l'email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'DzawaEmile@gmail.com',
      replyTo: email,
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({success: true, message: 'Email envoyé avec succès'});
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return res.status(500).json({error: 'Erreur lors de l\'envoi du message'});
  }
}

function escapeHtml(text: string): string {
  const map: {[key: string]: string} = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
