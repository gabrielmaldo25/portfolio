import { useRef } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import emailjs from "@emailjs/browser";
import BackgroundWords from "../BackgroundWords";
const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_poexkeh",
        "template_saa0nws",
        refForm.current,
        "ISZTj8sf15_sEfZ9U"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={"Contact me".split("")}
              idx={15}
              letterClass={"text-animate"}
            />
          </h1>
          {/* <p>
            I am interested in new opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p> */}
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <BackgroundWords arrWords={["hola", "mba'éichapa", "hello"]} />
      </div>
    </>
  );
};

export default Contact;
