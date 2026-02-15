import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Reliance Diamond Tools",
  description:
    "Get in touch with Reliance Diamond Tools. Chennai office address, email and contact form.",
};

export default function ContactPage() {
  return (
    <div className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-14">
          Get in Touch
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}
