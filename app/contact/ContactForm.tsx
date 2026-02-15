"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: would send to API or email service
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Company info */}
      <div>
        <div className="space-y-4 text-sm text-gray-600">
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 shrink-0 text-gray-500" />
            <div>
              <p className="font-medium text-gray-900 mb-1">Company Address</p>
              <p>
                No 6 & 7, Association Road,
                <br />
                Madhavaram,
                <br />
                Chennai – 600 060
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail className="w-5 h-5 shrink-0 text-gray-500" />
            <div>
              <p className="font-medium text-gray-900 mb-1">Email</p>
              <a
                href="mailto:info@reliancediamondtools.com"
                className="hover:text-gray-900"
              >
                info@reliancediamondtools.com
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="w-5 h-5 shrink-0 text-gray-500" />
            <div>
              <p className="font-medium text-gray-900 mb-1">Phone</p>
              <p>+91-XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Contact form */}
      <div className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formState.company}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-800 active:scale-[0.99] transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
