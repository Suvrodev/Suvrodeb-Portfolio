import React from "react";

const sendEmail = () => {
  const emailAddress = "suvrodeb.cse@gmail.com";
  window.location.href = `mailto:${emailAddress}`;
};

export default sendEmail;
