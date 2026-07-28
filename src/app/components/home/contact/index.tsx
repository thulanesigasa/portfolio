"use client";

import { useEffect, useRef, useState } from "react";
import useReveal from "@/app/hooks/useReveal";

const Contact = () => {
  const [contactType, setContactType] = useState<"say-hi" | "get-quote">("say-hi");
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
      const res = await fetch("https://formsubmit.co/ajax/924a2bfaa2f2c2d8303baad475cd0a2b", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...formData, inquiryType: contactType }),
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
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="positivus-header-row reveal">
          <div className="positivus-badge-title">Contact Us</div>
          <p className="positivus-header-desc">
            Connect with us: Let&apos;s discuss your software development and digital marketing needs.
          </p>
        </div>

        {/* Positivus Contact Container */}
        <div className="positivus-contact-card reveal">
          <div className="positivus-contact-left">
            {submitted ? (
              <div className="form-success">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B9FF66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <p>Message sent successfully! We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Radio Selectors */}
                <div className="positivus-radio-group">
                  <label className="positivus-radio-label">
                    <input
                      type="radio"
                      name="inquiryType"
                      checked={contactType === "say-hi"}
                      onChange={() => setContactType("say-hi")}
                    />
                    <span>Say Hi</span>
                  </label>
                  <label className="positivus-radio-label">
                    <input
                      type="radio"
                      name="inquiryType"
                      checked={contactType === "get-quote"}
                      onChange={() => setContactType("get-quote")}
                    />
                    <span>Get a Quote</span>
                  </label>
                </div>

                <div className="positivus-form-group">
                  <label>Name*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'invalid' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="positivus-form-group">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'invalid' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="positivus-form-group">
                  <label>Message*</label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'invalid' : ''}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-positivus-dark full-width" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="positivus-contact-right">
            <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="130" cy="130" r="100" fill="#191A23"/>
              <path d="M90 100L170 180M170 100L90 180" stroke="#B9FF66" strokeWidth="16" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
