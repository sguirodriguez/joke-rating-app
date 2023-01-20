import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import WelcomeScreen from "./Welcome.screen";

const WelcomeController = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  const handleSignIn = async () => {
    await signIn();
  };

  const handlers = {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
  };
  return <WelcomeScreen handlers={handlers} />;
};

export default WelcomeController;
