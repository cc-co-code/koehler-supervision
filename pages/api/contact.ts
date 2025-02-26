import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

// Initialisieren von Resend mit deinem API-Key
const resend = new Resend(process.env.RESEND_API_KEY);

// Typen für die Antwort
type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Nur POST-Anfragen akzeptieren
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Einfache Validierung
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, E-Mail und Nachricht sind erforderlich",
      });
    }

    // E-Mail an die Supervisorin senden
    const { error } = await resend.emails.send({
      from: "Köhler Supervision <noreply@koehlersupervision.de>", // Hier deine Domain anpassen
      to: "cecilia.christina@proton.me", // E-Mail der Supervisorin
      subject: `Neue Kontaktanfrage: ${subject}`,
      html: `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Fehler beim Senden der E-Mail:", error);
      return res.status(500).json({
        success: false,
        message: "Es ist ein Fehler beim Senden der E-Mail aufgetreten",
      });
    }

    // Optional: Bestätigungs-E-Mail an den Absender
    await resend.emails.send({
      from: "noreply@koehlersupervision.de", // Hier deine Domain anpassen
      to: email,
      subject: "Vielen Dank für Ihre Kontaktanfrage",
      html: `
        <h2>Vielen Dank für Ihre Nachricht</h2>
        <p>Liebe(r) ${name},</p>
        <p>ich habe Ihre Kontaktanfrage erhalten und werde mich in Kürze bei Ihnen melden.</p>
        <p>Mit freundlichen Grüßen,<br>Köhler Supervision</p>
      `,
    });

    // Erfolgreiche Antwort
    return res.status(200).json({
      success: true,
      message: "Nachricht erfolgreich gesendet",
    });
  } catch (error) {
    console.error("Unerwarteter Fehler:", error);
    return res.status(500).json({
      success: false,
      message: "Es ist ein unerwarteter Fehler aufgetreten",
    });
  }
}
