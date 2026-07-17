"use client";

import { useEffect, useRef, useState } from "react";
import useReveal from "@/app/hooks/useReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useReveal(sectionRef);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/pharezsigasa@gmail.com", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container contact-container reveal">
        <h3 className="contact-title">
          Let&apos;s <span className="contact-title-thin">Talk</span>
        </h3>
        
        {submitted ? (
          <div className="form-success">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <p>Message sent successfully! We will be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`contact-input ${errors.name ? 'invalid' : ''}`}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="contact-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`contact-input ${errors.email ? 'invalid' : ''}`}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>
            
            <div className="contact-form-group full-width">
              <textarea
                name="message"
                placeholder="Tell us about our project"
                value={formData.message}
                onChange={handleChange}
                className={`contact-textarea ${errors.message ? 'invalid' : ''}`}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <div className="contact-form-footer">
              <div className="contact-disclaimer">
                <span className="accent-asterisk">*</span> We promise not to disclose your personal information to third parties.
              </div>
              <button type="submit" className="contact-submit-btn" disabled={submitting}>
                <span>{submitting ? "Sending..." : "Send message"}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5.3418C13.7441 5.3418 13.488 5.44122 13.293 5.63672L13.207 5.72266C12.816 6.11366 12.816 6.74672 13.207 7.13672L17.0703 11H4C3.448 11 3 11.448 3 12C3 12.552 3.448 13 4 13H17.0703L13.207 16.8633C12.816 17.2543 12.816 17.8873 13.207 18.2773L13.293 18.3633C13.684 18.7543 14.317 18.7543 14.707 18.3633L20.3633 12.707C20.7543 12.316 20.7543 11.683 20.3633 11.293L14.707 5.63672C14.5115 5.44122 14.2559 5.3418 14 5.3418Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
