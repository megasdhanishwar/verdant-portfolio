import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { profile } from "../data/content.js";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  function submit(e) {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !/^\S+@\S+\.\S+$/.test(form.email) ||
      form.message.trim().length < 10
    ) {
      setStatus(
        "Please enter your name, a valid email, and a message of at least 10 characters.",
      );
      return;
    }
    setSending(true);
    setStatus("");
    const subject = encodeURIComponent("Portfolio inquiry from " + form.name);
    const body = encodeURIComponent(
      form.message + "\n\nFrom: " + form.name + " (" + form.email + ")",
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSending(false);
    setStatus(
      "Your email app should open with a prefilled message. Please send it there.",
    );
  }
  return (
    <section id="contact" className="section-pad section-tint">
      <div className="container-main">
        <SectionHeading
          eyebrow="04 / GET IN TOUCH"
          title={
            <>
              Let's make something <span className="gradient-text">great.</span>
            </>
          }
          description="Have a project in mind or want to say hello? I'd love to hear from you."
        />
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <h3 className="text-3xl font-bold leading-snug">
              Let's turn your next idea into reality.
            </h3>
            <p className="mt-5 max-w-md leading-8 text-[#93aa9d]">
              I'm always interested in meaningful projects, new opportunities,
              and creative collaborations.
            </p>
            <div className="mt-9 space-y-5">
              <a href={"mailto:" + profile.email} className="contact-detail">
                <Mail size={20} />
                <span>{profile.email}</span>
              </a>
              <div className="contact-detail">
                <MapPin size={20} />
                <span>{profile.location}</span>
              </div>
            </div>
            <div className="mt-10 flex gap-3">
              {[
                [Github, profile.github, "GitHub"],
                [Linkedin, profile.linkedin, "LinkedIn"],
                [Instagram, profile.instagram, "Instagram"],
              ].map(([Icon, url, label]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="social-icon"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">
                  Your name
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="form-label">
                  Email address
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>
              <label className="form-label mt-6">
                Your message
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary mt-7 w-full justify-center disabled:opacity-60"
              >
                {sending ? "Preparing email..." : "Send message"}
                <Send size={18} />
              </button>
              {status && (
                <div
                  role="status"
                  className="mt-4 flex items-start gap-2 text-sm text-[#b9d6c2]"
                >
                  {status.startsWith("Please") ? (
                    <AlertCircle size={18} />
                  ) : (
                    <CheckCircle2 size={18} />
                  )}
                  <span>{status}</span>
                </div>
              )}
              <p className="mt-5 text-xs leading-6 text-[#789082]">
                This demo opens your email application; it does not send
                messages to a server. Replace the sample email in the profile
                data before publishing.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
