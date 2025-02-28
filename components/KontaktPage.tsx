import React, { useState, FormEvent, ChangeEvent } from "react";
import Head from "next/head";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  datenschutz: boolean;
}

// Typen für die Formularfehler
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  datenschutz?: string;
}

const KontaktPage = () => {
  // Status für die Formulardaten
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "Einzelsupervision", // Standardwert
    message: "",
    datenschutz: false,
  });

  // Status für Fehler, Erfolgsmeldung und Ladevorgang
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handler für Änderungen in den Eingabefeldern
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Checkbox-Werte anders behandeln
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Fehler zurücksetzen, wenn der Benutzer Änderungen vornimmt
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  // Validierung des Formulars
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Pflichtfelder prüfen
    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie eine Nachricht ein";
    }

    // Datenschutz-Checkbox prüfen
    if (!formData.datenschutz) {
      newErrors.datenschutz = "Bitte akzeptieren Sie die Datenschutzerklärung";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handler für das Absenden des Formulars
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Erfolgsmeldung zurücksetzen
    setSuccessMessage("");

    // Formular validieren
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // API-Anfrage an den Server
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Erfolgreiche Übermittlung
        setSuccessMessage(
          "Vielen Dank für Ihre Nachricht! Ich werde mich zeitnah bei Ihnen melden."
        );
        // Formular zurücksetzen
        setFormData({
          name: "",
          email: "",
          subject: "Einzelsupervision",
          message: "",
          datenschutz: false,
        });
      } else {
        // Fehler vom Server
        setErrors({
          message:
            data.message ||
            "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error: unknown) {
      // Netzwerkfehler oder andere unerwartete Fehler
      setErrors({
        message:
          "Es konnte keine Verbindung zum Server hergestellt werden. Bitte überprüfen Sie Ihre Internetverbindung.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Kontakt | Supervision in Bremen</title>
        <meta
          name="description"
          content="Nehmen Sie Kontakt auf für professionelle Supervision in Bremen. Einzelsupervision, Teamsupervision und Gruppensupervision für Ihre berufliche Weiterentwicklung."
        />
      </Head>

      <h1 className="title">Kontakt</h1>

      <div className="kontakt-container">
        <div className="service-card">
          <h2 className="service-title">Kontaktaufnahme</h2>
          <p className="service-description">
            Nutzen Sie gerne das Kontaktformular, ich freue mich, Sie
            kennenzulernen und gemeinsam mit Ihnen die nächsten Schritte zu
            planen.
          </p>
          <p className="service-description">
            Alternativ können Sie mir auch direkt eine E-Mail schreiben:
          </p>
          <p className="service-description">
            <strong>
              <a href="mailto:info@koehlersupervision.de">
                info@koehlersupervision.de
              </a>
            </strong>
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">Kontaktformular</h2>

          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="kontakt-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error-input" : ""}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <div id="name-error" className="error-text">
                  {errors.name}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">E-Mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error-input" : ""}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <div id="email-error" className="error-text">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Betreff</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="Einzelsupervision">Einzelsupervision</option>
                <option value="Teamsupervision">Teamsupervision</option>
                <option value="Gruppensupervision">Gruppensupervision</option>
                <option value="Coaching">Coaching</option>
                <option value="Fallsupervision">Fallsupervision</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Nachricht *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={errors.message ? "error-input" : ""}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
              {errors.message && (
                <div id="message-error" className="error-text">
                  {errors.message}
                </div>
              )}
            </div>

            <div className="form-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="datenschutz"
                  name="datenschutz"
                  checked={formData.datenschutz}
                  onChange={handleChange}
                  className={errors.datenschutz ? "error-input" : ""}
                  aria-describedby={
                    errors.datenschutz ? "datenschutz-error" : undefined
                  }
                />
                <label htmlFor="datenschutz">
                  Ich habe die{" "}
                  <Link href="/datenschutz">Datenschutzerklärung</Link> gelesen
                  und bin mit der Verarbeitung meiner Daten einverstanden. *
                </label>
              </div>
              {errors.datenschutz && (
                <div id="datenschutz-error" className="error-text">
                  {errors.datenschutz}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;
