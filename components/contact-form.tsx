"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { identity, links } from "@/lib/portfolio-data";
import SectionHead from "./section-head";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(2, "Enter a subject or project type"),
  message: z.string().min(10, "Write at least 10 characters"),
  website: z.string().optional(),
});
type Values = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<"idle" | "sent" | "error" | "unconfigured">("idle");
  const [copied, setCopied] = useState(false);

  const onSubmit = async (v: Values) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      if (res.ok) { setStatus("sent"); reset(); } else setStatus(res.status === 501 ? "unconfigured" : "error");
    } catch { setStatus("error"); }
  };
  const copy = async () => { try { await navigator.clipboard.writeText(identity.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {} };
  const err = (m?: string) => m && <p role="alert" className="meta mt-1 text-accent">{m}</p>;

  return (
    <section id="contact" className="surface-ink py-20 md:py-28" aria-labelledby="contact-h">
      <div className="wrap">
        <SectionHead index="08" label="CONTACT" right={identity.location} />
        <h2 id="contact-h" className="display mt-8 text-[clamp(3rem,10vw,9rem)]">Have something worth building?</h2>
        <p className="meta mt-6 text-accent">Let&apos;s turn the idea into something real.</p>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <p className="max-w-[48ch] text-[15px] leading-relaxed opacity-85">I&apos;m interested in software engineering roles and projects involving full-stack development, modern web applications, backend systems and Web3.</p>
            <ul className="mt-8 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    className="nav-link meta"
                    href={l.href}
                    {...(l.download
                      ? { download: "Aimiuwu_Victor_CV.pdf", target: "_blank", rel: "noopener noreferrer" }
                      : l.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
              <li><button type="button" onClick={copy} className="meta underline underline-offset-4">{copied ? "Copied" : `Copy ${identity.email}`}</button></li>
            </ul>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            <div className="sr-only" style={{ display: "none" }}>
              <label htmlFor="website-hp">Website</label>
              <input id="website-hp" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>
            {(["name", "email", "subject"] as const).map((f) => (
              <div key={f}>
                <label htmlFor={f} className="meta opacity-90">{f}</label>
                <input id={f} type={f === "email" ? "email" : "text"} autoComplete={f === "subject" ? "off" : f} aria-invalid={!!errors[f]} aria-describedby={errors[f] ? `${f}-e` : undefined} className="field" {...register(f)} />
                <div id={`${f}-e`}>{err(errors[f]?.message)}</div>
              </div>
            ))}
            <div>
              <label htmlFor="message" className="meta opacity-90">message</label>
              <textarea id="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-e" : undefined} className="field" {...register("message")} />
              <div id="message-e">{err(errors.message?.message)}</div>
            </div>
            <button disabled={isSubmitting} className="meta border border-accent bg-accent px-6 py-3 text-ink transition-colors hover:bg-transparent hover:text-accent disabled:opacity-50">{isSubmitting ? "SENDING" : "SEND MESSAGE ↗"}</button>
            <div aria-live="polite" className="text-[15px]">
              {status === "sent" && <p>Message sent. I&apos;ll reply by email.</p>}
              {status === "error" && <p className="text-accent">Your message wasn&apos;t sent. Try again or email {identity.email}.</p>}
              {status === "unconfigured" && <p className="text-accent">The form isn&apos;t connected to email yet, so nothing was sent. <a className="underline" href={`mailto:${identity.email}`}>Email me directly</a>.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
