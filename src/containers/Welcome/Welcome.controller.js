import React, { useState } from "react";
import WelcomeScreen from "./Welcome.screen";

const WelcomeController = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlers = {
    email,
    setEmail,
    password,
    setPassword,
  };
  return <WelcomeScreen handlers={handlers} />;
};

export default WelcomeController;
