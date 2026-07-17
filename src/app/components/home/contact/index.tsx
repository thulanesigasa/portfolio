"use client";

import { useEffect, useRef, useState } from "react";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", number: "", email: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [contactData]);

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
        setFormData({ name: "", number: "", email: "", message: "" });
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

  const contactInfoItems = [
    { icon: "/images/icon/mail-icon.svg", label: "pharezsigasa@gmail.com", link: "mailto:pharezsigasa@gmail.com" },
    { icon: "/images/icon/call-icon.svg", label: "+447544357979", link: "tel:+447544357979" },
    { icon: "/images/icon/web-icon.svg", label: "ts-industries.co.za", link: "https://ts-industries.co.za" },
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2>Contact Us</h2>
          <span className="section-number">05</span>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="reveal">
            {submitted && (
              <div className="form-success visible">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Message sent successfully! We will be in touch soon.
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className={`form-group${errors.name ? " invalid" : formData.name ? " valid" : ""}`}>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <div className="form-error">{errors.name}</div>
                </div>
                <div className={`form-group${errors.number ? " invalid" : ""}`}>
                  <input
                    className="form-input"
                    type="tel"
                    name="number"
                    id="number"
                    placeholder=" "
                    value={formData.number}
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="number">Phone Number</label>
                  <div className="form-error">{errors.number}</div>
                </div>
              </div>

              <div className={`form-group${errors.email ? " invalid" : formData.email ? " valid" : ""}`}>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="email">Email Address *</label>
                <div className="form-error">{errors.email}</div>
              </div>

              <div className={`form-group${errors.message ? " invalid" : formData.message ? " valid" : ""}`}>
                <textarea
                  className="form-input form-textarea"
                  name="message"
                  id="message"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="message">Your Message *</label>
                <div className="form-error">{errors.message}</div>
              </div>

              <button type="submit" className="btn-primary" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div className="contact-info-panel reveal">
            <div>
              <h3 style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>Get in touch</h3>
              <div className="contact-info-block">
                {contactInfoItems.map((item, i) => (
                  <Link key={i} href={item.link} className="contact-info-link"
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="contact-info-icon">
                      <Image src={getImgPath(item.icon)} alt="" width={18} height={18} />
                    </div>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h5 style={{ marginBottom: "1rem", color: "var(--color-text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.8rem" }}>
                Follow Us
              </h5>
              <div className="contact-social-row">
                {contactData?.socialLinks?.map((value: any, index: number) => (
                  <Link
                    key={index}
                    href={value?.href || "#!"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    {value?.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
