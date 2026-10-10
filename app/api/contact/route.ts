import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(80), email: z.string().email().max(200),
  subject: z.string().min(2).max(120), message: z.string().min(10).max(4000), website: z.string().optional(),
});
const hits = new Map<string, number[]>();

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "local";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 5) return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ error: "Email delivery is not configured" }, { status: 501 });

  const { name, email, subject, message } = parsed.data;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>", to: [to], reply_to: email, subject: `[Portfolio] ${subject}`, text: `From: ${name} <${email}>\n\n${message}` }),
  });
  if (!res.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
