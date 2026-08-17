import { NextResponse } from "next/server";
import { sanityWriteClient } from "@/lib/sanity";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "contact@batimob.net";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // 1. Save to Sanity
    const doc = {
      _type: "contact",
      name,
      email,
      company: company || "",
      message,
      submittedAt: new Date().toISOString(),
      status: "new",
    };

    const result = await sanityWriteClient.create(doc);

    // 2. Send email notification
    if (resend) {
      const subject = [name, company].filter(Boolean).join(" — ") || "Nouvelle demande Batimob";
      await resend.emails.send({
        from: "Batimob Contact <onboarding@resend.dev>",
        to: CONTACT_EMAIL,
        subject: `📩 ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Nouvelle demande de contact</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 120px;">Nom</td><td style="padding: 8px 0; color: #333;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; color: #333;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              ${company ? `<tr><td style="padding: 8px 0; color: #666;">Société</td><td style="padding: 8px 0; color: #333;">${escapeHtml(company)}</td></tr>` : ""}
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px; color: #333;">
              ${escapeHtml(message).replace(/\n/g, "<br>")}
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #999;">
              Voir dans <a href="https://batimob-studio.sanity.studio">Sanity Studio</a>
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
