import { createFileRoute } from "@tanstack/react-router";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  exam: string;
  pkg: string;
  message: string;
};

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as Partial<ContactForm>;

          const name = body.name?.trim() ?? "";
          const email = body.email?.trim() ?? "";
          const phone = body.phone?.trim() ?? "";
          const exam = body.exam?.trim() ?? "";
          const pkg = body.pkg?.trim() ?? "";
          const message = body.message?.trim() ?? "";

          // Basic validation
          if (!name || !email || !exam || !pkg) {
            return Response.json(
              { error: "Please complete all required fields." },
              { status: 400 },
            );
          }

          if (name.length > 100 || email.length > 254 || message.length > 5000) {
            return Response.json(
              { error: "One or more fields are too long." },
              { status: 400 },
            );
          }

          // Simple email format check
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json(
              { error: "Please enter a valid email address." },
              { status: 400 },
            );
          }

          const apiKey = process.env["RESEND_API_KEY"];

          if (!apiKey) {
            console.error("RESEND_API_KEY is not configured.");
            return Response.json(
              { error: "Email service is not configured." },
              { status: 500 },
            );
          }

          const emailBody = [
            `New consultation request from French Excel`,
            ``,
            `Name: ${name}`,
            `Email: ${email}`,
            `WhatsApp: ${phone || "Not provided"}`,
            `Exam: ${exam}`,
            `Package of interest: ${pkg}`,
            ``,
            `Goal & timeline:`,
            message || "Not provided",
          ].join("\n");

          const resendResponse = await fetch(
            "https://api.resend.com/emails",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                from: "French Excel <bonjour@frenchexcel.org>",
                to: ["bonjour@frenchexcel.org"],
                reply_to: email,
                subject: `Consultation request — ${exam}`,
                text: emailBody,
              }),
            },
          );

          if (!resendResponse.ok) {
            const errorText = await resendResponse.text();
            console.error("Resend error:", errorText);

            return Response.json(
              { error: "We couldn't send your request. Please try again." },
              { status: 500 },
            );
          }

          return Response.json({ success: true });
        } catch (error) {
          console.error("Contact form error:", error);

          return Response.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 },
          );
        }
      },
    },
  },
});