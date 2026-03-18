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
   Main Component
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

    console.log("Form Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="w-full py-16 bg-primary transition-colors duration-300">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
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
          <div className="flex flex-col gap-10 h-full justify-between">
            {/* TEXT */}
            <div className="text-center lg:text-left">
              <h2
                className="
                  text-3xl md:text-4xl
                  font-bold
                  text-primary
                  tracking-tight
                "
              >
                Get in Touch
              </h2>

              <p
                className="
                  mt-4
                  text-secondary
                  leading-relaxed
                "
              >
                Have a project in mind or just want to say hello? Fill out the
                form below and I’ll get back to you as soon as possible.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="
                flex flex-col gap-6

                bg-surface
                border border-border
                rounded-3xl
                shadow-soft

                p-6 md:p-8
              "
            >
              {/* NAME */}
              <div className="flex flex-col items-center lg:items-start w-full">
                <label
                  className="
                    mb-2
                    font-medium
                    text-primary
                    text-center w-full
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="
                    w-full
                    px-4 py-3

                    bg-primary
                    border border-border
                    rounded-xl

                    text-primary
                    placeholder:text-muted

                    focus:outline-none
                    focus:ring-2 focus:ring-accent
                    focus:border-accent

                    transition-all duration-200
                  "
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col items-center lg:items-start w-full">
                <label
                  className="
                    mb-2
                    font-medium
                    text-primary
                    text-center w-full
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    w-full
                    px-4 py-3

                    bg-primary
                    border border-border
                    rounded-xl

                    text-primary
                    placeholder:text-muted

                    focus:outline-none
                    focus:ring-2 focus:ring-accent
                    focus:border-accent

                    transition-all duration-200
                  "
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col items-center lg:items-start w-full">
                <label
                  className="
                    mb-2
                    font-medium
                    text-primary
                    text-center w-full
                  "
                >
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  className="
                    w-full
                    px-4 py-3

                    bg-primary
                    border border-border
                    rounded-xl

                    text-primary
                    placeholder:text-muted

                    focus:outline-none
                    focus:ring-2 focus:ring-accent
                    focus:border-accent

                    resize-none
                    transition-all duration-200
                  "
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  mt-4
                  self-center

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
