const RESEND_ENDPOINT = "https://api.resend.com/emails";
const FROM_EMAIL = "onboarding@resend.dev";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !contactToEmail) {
    return Response.json(
      {
        error:
          "Server email configuration is missing. Add RESEND_API_KEY and CONTACT_TO_EMAIL.",
      },
      { status: 500 }
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return Response.json(
      { error: "Name, email, subject, and message are all required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const resendResponse = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "devin-portfolio-contact/1.0",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [contactToEmail],
      reply_to: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 502 }
    );
  }

  return Response.json({
    message: "Your message has been sent successfully.",
  });
}
