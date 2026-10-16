"use client";
import { useState } from "react";
export default function ProjectEnquiry() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;
    setStatus("sending");
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/924a2bfaa2f2c2d8303baad475cd0a2b",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            _subject: "TS Industries project enquiry",
            message: `Service: ${data.get("service")}\nBudget: ${data.get("budget")}\nTimeline: ${data.get("timeline")}\n\n${data.get("message")}`,
          }),
          signal: AbortSignal.timeout(20000),
        },
      );
      if (!response.ok) throw new Error();
      const result = await response.json();
      if (result.success !== true && result.success !== "true")
        throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form
      className="studio-enquiry"
      onSubmit={submit}
      aria-busy={status === "sending"}
    >
      <fieldset className="studio-form-grid">
        <legend className="studio-visually-hidden">
          Contact and project details
        </legend>
        <label>
          Your name
          <input
            required
            name="name"
            autoComplete="name"
            maxLength={120}
            placeholder="Name and surname"
          />
        </label>
        <label>
          Email address
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@company.com"
          />
        </label>
        <label>
          What do you need?
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Website or online store</option>
            <option>Mobile app</option>
            <option>Custom software</option>
            <option>UI/UX design</option>
            <option>Help me decide</option>
          </select>
        </label>
        <label>
          Estimated budget
          <select name="budget" defaultValue="Let’s discuss">
            <option>Let’s discuss</option>
            <option>Under R10,000</option>
            <option>R10,000–R30,000</option>
            <option>R30,000–R75,000</option>
            <option>R75,000+</option>
          </select>
        </label>
      </fieldset>
      <label>
        Ideal timeline
        <input
          name="timeline"
          placeholder="e.g. Within the next three months"
          maxLength={150}
        />
      </label>
      <label>
        A little about your project
        <textarea
          name="message"
          required
          rows={3}
          maxLength={5000}
          placeholder="Your idea, your goals, or the problem you want to solve."
        />
      </label>
      <fieldset className="studio-honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </fieldset>
      <p className="studio-form-note">
        Your enquiry is processed by FormSubmit so we can reply. Read our{" "}
        <a href="/privacy-policy/">privacy policy</a>.
      </p>
      <button className="studio-button" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send project enquiry"}
        <span>↗</span>
      </button>
      <output className="studio-form-status" aria-live="polite">
        {status === "success" && (
          <p className="studio-feedback">
            Thank you. Your enquiry has been sent. We’ll be in touch by email.
          </p>
        )}
        {status === "error" && (
          <p className="studio-feedback error">
            Your enquiry couldn’t be sent. Please try again or email
            pharezsigasa@gmail.com. Your details are still here.
          </p>
        )}
      </output>
    </form>
  );
}
