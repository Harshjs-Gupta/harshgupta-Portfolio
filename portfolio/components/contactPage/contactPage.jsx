"use client";
import { useRef } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import call from "@/assets/Images/Icons/call.png";
import mail from "@/assets/Images/Icons/mail.png";
import "@/style/home.css";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    const autoReplyData = {
      user_name: form.current.name.value, // The user's name
      to_email: form.current.email.value, // The user's email
    };

    // Send original email
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Original message sent successfully!");
          // Send auto-reply email
          emailjs
            .send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              process.env.NEXT_PUBLIC_AUTO_EMAILJS_TEMPLATE_ID,
              autoReplyData,
              process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
              console.log("Auto-reply sent successfully!");
              toast.success("Message and auto-reply sent successfully");
            })
            .catch((error) => {
              console.error("Auto-reply failed...", error.text);
              toast.error("Message sent, but auto-reply failed.");
            });

          form.current.reset();
        },
        (error) => {
          console.error("Original message failed...", error.text);
          console.log(error.text);
          toast.error("Failed to send the message.");
        }
      );
  };

  return (
    <section className="section" id="Contact-page">
      <div className="container p-20">
        <form ref={form} className="contact-container" onSubmit={sendEmail}>
          <span>Let&apos;s work together</span>
          <div className="flex flex-col gap-3">
            <input type="text" placeholder="Your name" name="name" required />
            <input
              type="number"
              placeholder="Your Mob. Number"
              name="number"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div className="messageBox">
            <select name="service" required>
              <option value="">Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Frontend Development">Frontend Development</option>
            </select>
            <input
              type="text"
              placeholder="Your Message"
              className="message"
              name="message"
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
