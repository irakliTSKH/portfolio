import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormStyled } from "./Contact.styled";
import EmailSent from "./EmailSent";




function ContactForm() {
  const [Sent, setSent] = useState(true);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement> ) => {

    e.preventDefault();

    if (!form.current) {
      console.error("Form ref is null.");
      return;
    }
  
    try {
      const result = await emailjs.sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_user_id"
      );
  
      console.log(result.text);
      setSent(false);
    } catch (error) {
      console.error("Error");
    }
  };
  


  return Sent ? (
    <ContactFormStyled ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name *" required />
      <input type="email" name="user_email" placeholder="Email *" required />
      <textarea name="message" placeholder="Message *"required />
      <button type="submit" value="Send">
        Submit
      </button>
    </ContactFormStyled>
  ) : (
    <EmailSent />
  );
}

export default ContactForm;
