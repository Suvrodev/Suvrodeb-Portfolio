import React, { useContext, useRef } from "react";
import "./Contact.css";

import contactLottie from "../../../assets/MyLottie/contact.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Contact = () => {
  const { successfullToast, errorToast } = useContext(AuthContext);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const Form = e.target;
    const name = Form.user_name.value;
    const email = Form.user_email.value;
    const message = Form.message.value;

    if (!name) {
      errorToast("Please Provide your name");
      return;
    }
    if (!email) {
      errorToast("Please Provide your gmail");
      return;
    }
    if (!email.includes("@gmail.com")) {
      errorToast("Please provide valid gmail");
      return;
    }
    if (!message) {
      errorToast("Please Write Your message");
      return;
    }
    // console.log("Name: ", name, "Email: ", email, "Message: ", message);

    emailjs
      .sendForm("service_d4pyq16", "template_aovt5cz", form.current, {
        publicKey: "_kzTXrFfQk2uFNUe9",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result);
          if (result.text == "OK") {
            successfullToast("Your mail send successfully");
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <section className="mb-20">
        <div className="flex flex-col md:flex-row bg-[#192655] p-4 md:p-10 rounded-lg">
          <div className="w-full  md:w-1/2 relative">
            <h1 className="text-white md:text-4xl font-bold md:absolute top-0 left-0">
              Contact with Me
            </h1>
            <div className="h-full w-full flex flex-col  items-center justify-center">
              <Lottie animationData={contactLottie} loop={true} />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-[#333333] p-4 md:p-10 rounded-lg contactForm">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  id=""
                  className="w-full bg-transparent p-5 myBorder shadow-md hover:shadow-xl pText "
                  placeholder="Name"
                />

                <input
                  type="text"
                  name="user_email"
                  id=""
                  className="w-full bg-transparent p-5 myBorder mt-10 shadow-md hover:shadow-xl pText"
                  placeholder="Email"
                />
                {/* <label>Message</label>
          <textarea name="message" /> */}
                <textarea
                  type=""
                  name="message"
                  id=""
                  className="w-full bg-transparent  p-5 h-60 textBorder mt-10 pText"
                  placeholder="Message"
                />
                <input
                  type="submit"
                  value="Send"
                  className="btn text-white w-full md:w-[250px] mt-10 bg-[#192655] hover:bg-[#192655] border-0 shadow-md hover:shadow-xl"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
