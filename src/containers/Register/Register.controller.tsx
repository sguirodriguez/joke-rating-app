import React, { useState } from "react";
import RegisterScreen from "./Register.screen";

const RegisterController = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlers = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };
  return <RegisterScreen handlers={handlers} />;
};
export default RegisterController;
