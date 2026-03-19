import React, { useState } from "react";
import ContactImage from "./assets/selfPortrait.jpg";
import MiniContact from "./assets/croppedPortrait.jpg";

/* ================================
   Types
================================ */
type FormData = {
  name: string;
  email: string;
  message: string;
};

/* ================================
   Styles (Reusable)
================================ */

const inputClass = `
  w-full px-4 py-3
  bg-primary
  border border-border
  rounded-xl
  text-primary
  placeholder:text-muted
  focus:outline-none
  focus:ring-2 focus:ring-accent
  focus:border-accent
  transition-all duration-200
`;

const labelClass = `
  mb-2 font-medium text-primary text-center w-full
`;

const fieldWrapper = `
  flex flex-col items-center lg:items-start w-full
`;

/* ================================
   Component
================================ */

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  /* Handle Input */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Handle Submit */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // ✅ Validation
    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    // 🎯 Subject (as requested)
    const subject = "✨📩 New Connection from Portfolio Website 🚀";

    // ✅ Clean formatted body
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // ⚠️ Replace with your actual email
    const recipient = "your-email@example.com";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoLink;
    } catch (error) {
      alert("Unable to open mail client.");
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="w-full py-16 bg-primary transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-stretch">
          {/* ================= IMAGE ================= */}
          <div className="w-full h-full">
            <picture>
              <source media="(min-width: 1024px)" srcSet={MiniContact} />
              <img
                src={ContactImage}
                alt="Contact"
                className="
                  w-full h-full object-cover
                  rounded-3xl
                  shadow-medium
                "
              />
            </picture>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex flex-col gap-10 h-full justify-between items-center lg:items-start">
            {/* TEXT */}
            <div className="text-center lg:text-left max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Get in Touch
              </h2>

              <p className="mt-4 text-secondary leading-relaxed">
                Have a project in mind or just want to say hello? Fill out the
                form below and I’ll get back to you as soon as possible.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="
                flex flex-col gap-6
                w-full max-w-lg
                mx-auto lg:mx-0
                bg-surface
                border border-border
                rounded-3xl
                shadow-soft
                p-6 md:p-8
              "
            >
              {/* NAME */}
              <div className={fieldWrapper}>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={inputClass}
                  required
                />
              </div>

              {/* EMAIL */}
              <div className={fieldWrapper}>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={inputClass}
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className={fieldWrapper}>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  mt-4 self-center
                  px-8 py-3
                  rounded-full
                  bg-accent
                  text-accent-foreground
                  font-semibold
                  tracking-wide
                  hover:opacity-90
                  active:scale-95
                  transition-all duration-200
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
