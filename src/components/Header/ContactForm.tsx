import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormStyled } from "./Header.styled";
import EmailSent from "./EmailSent";

function ContactForm() {
  const [Sent, setSent] = useState(true);
  const form = useRef();

  const sendEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailjs
      .sendForm(
        "service_yi92myp",
        "template_brhf3yn",
        form.current,
        "1vi3FZC-Ut70jNoq-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();

    setSent(false);
  };

  return Sent ? (
      <ContactFormStyled ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />
        <textarea name="message" rows={10} cols={30} required />
        <button type="submit" value="Send" />
      </ContactFormStyled>
    ) : (
      <EmailSent />
    );
  }


export default ContactForm;
