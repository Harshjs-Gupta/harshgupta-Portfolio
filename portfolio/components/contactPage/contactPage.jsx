"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import Image from "next/image";
import call from "@/assets/Images/Icons/call.png";
import mail from "@/assets/Images/Icons/mail.png";
import "@/style/home.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
    service: "",
  });

  // Initialize EmailJS with your public key once
  if (typeof window !== "undefined") {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (e) => {
    setFormData({
      ...formData,
      service: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Main email sending
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");

          // Auto-reply email data
          const autoReplyData = {
            to_email: formData.email,
            user_name: formData.name,
          };

          // Sending the auto-reply email
          emailjs
            .send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              process.env.NEXT_PUBLIC_AUTO_EMAILJS_TEMPLATE_ID,
              autoReplyData,
              process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then(
              (autoReplyResponse) => {
                console.log(
                  "Auto-reply sent successfully!",
                  autoReplyResponse.status,
                  autoReplyResponse.text
                );
                setFormData({
                  name: "",
                  number: "",
                  email: "",
                  message: "",
                  service: "",
                }); // Clear form
              },
              (error) => {
                console.error("Error in sending auto-reply", error);
              }
            );
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="section" id="Contact-page">
      <div className="container p-20">
        <form className="contact-container" onSubmit={handleSubmit}>
          <span>Let&apos;s work together</span>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Your Mob. Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="messageBox">
            <select
              value={formData.service}
              name="service"
              onChange={handleServiceChange}
              required
            >
              <option value="Select a service">Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Frontend Development">Frontend Development</option>
            </select>
            <input
              type="text"
              placeholder="Your Message"
              className="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="contact">
          <div className="contact-method">
            <div className="icon">
              <Image src={call} alt="PhoneLogo" />
            </div>
            <div className="information-container">
              <pre>Phone</pre>
              <span>(+91) 7667045966</span>
            </div>
          </div>
          <div className="contact-method">
            <div className="icon">
              <Image src={mail} alt="mailLogo" />
            </div>
            <div className="information-container">
              <pre>Email</pre>
              <span>harshgupta88911@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
