"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const contactLinks = [
  {
    label: "Email",
    value: "mayuxuan020330@gmail.com",
    href: "mailto:mayuxuan020330@gmail.com",
    icon: "gmail_new_logo_icon_159149.svg",
    alt: "Gmail Icon",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/devin-ma",
    href: "https://linkedin.com/in/devin-ma-35309932b",
    icon: "LI-In-Bug.png",
    alt: "LinkedIn Icon",
  },
  {
    label: "GitHub",
    value: "github.com/ditafy",
    href: "https://github.com/ditafy",
    icon: "GitHub_Invertocat_White.png",
    alt: "GitHub Icon",
  },
] as const;

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Unable to send your message right now.");
        return;
      }

      setStatus("success");
      setFeedback(data.message ?? "Message sent successfully.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setFeedback("Unable to send your message right now.");
    }
  }

  function isSending() {
    return status === "sending";
  }

  return (
    <section id="contact" className="py-16 scroll-mt-24 sm:py-20">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-16">
        <div className="space-y-8">
          <div className="max-w-xl space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <div className="space-y-3">
              <h2 className="max-w-md text-5xl font-semibold tracking-tight text-text sm:text-6xl md:text-7xl md:leading-[0.95]">
                Send me
                <br />
                a <span className="text-accent">message.</span>
              </h2>
            </div>
          </div>

          <div className="border-t border-border pt-6 sm:pt-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
              REACH OUT
            </p>
            <div className="mt-5 space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-transparent p-1 transition-colors hover:border-[var(--accent-border)]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-accent">
                    <span className="text-sm font-medium">
                      <img src={link.icon} alt={link.alt} className="h-7 w-7"/>
                    </span>
                  </div>
                  <p className="text-2xl font-medium tracking-tight text-text">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-card/80 p-6 shadow-[0_0_0_1px_rgba(107,141,181,0.06)] sm:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-3">
                <span className="mt-4 block text-2xl font-medium tracking-tight text-text">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Enter your name"
                  className="w-full h-13 rounded-2xl border border-border bg-bg/30 px-5 py-4 text-lg text-text outline-none transition-colors placeholder:text-muted/80 focus:border-[var(--accent-border)]"
                />
              </label>

              <label className="space-y-3">
                <span className="mt-4 block text-2xl font-medium tracking-tight text-text">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  placeholder="Enter your email"
                  className="w-full h-13 rounded-2xl border border-border bg-bg/30 px-5 py-4 text-lg text-text outline-none transition-colors placeholder:text-muted/80 focus:border-[var(--accent-border)]"
                />
              </label>
            </div>

            <label className="space-y-3">
              <span className="mt-4 block text-2xl font-medium tracking-tight text-text">
                Subject
              </span>
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    subject: event.target.value,
                  }))
                }
                placeholder="What's this about?"
                className="w-full h-13 rounded-2xl border border-border bg-bg/30 px-5 py-4 text-lg text-text outline-none transition-colors placeholder:text-muted/80 focus:border-[var(--accent-border)]"
              />
            </label>

            <label className="space-y-3">
              <span className="mt-4 block text-2xl font-medium tracking-tight text-text">
                Message
              </span>
              <textarea
                name="message"
                value={values.message}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                placeholder="Write your message here..."
                rows={8}
                className="w-full rounded-2xl border border-border bg-bg/30 px-5 py-4 text-lg text-text outline-none transition-colors placeholder:text-muted/80 focus:border-[var(--accent-border)]"
              />
            </label>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={isSending()}
                className="mt-4 block inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(40,88,199,0.95),rgba(63,114,220,0.95))] px-6 text-2xl font-medium text-white transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {feedback ? (
                <p
                  className={`text-base ${
                    status === "error" ? "text-[rgb(248,113,113)]" : "text-accent"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
