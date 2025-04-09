"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import Button from "@/components/button";
import { InputElement } from "@/components/ui/input-element";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
  };
  return (
    <AuthWrapper authType="login">
      <InputElement
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputElement
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        onSubmit={handleLogin}
        href={"/profile"}
        w={"full"}
        py="1.3rem"
        mt="1.5rem"
      >
        Login
      </Button>
    </AuthWrapper>
  );
};

export default LoginPage;
