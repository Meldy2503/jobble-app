"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import Button from "@/components/button";
import { InputElement } from "@/components/ui/input-element";
import { useState } from "react";

function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    console.log({ fullName, email, password, confirmPassword });
  };

  return (
    <AuthWrapper authType="signup">
      <InputElement
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
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
      <InputElement
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button onSubmit={handleSignUp} w={"full"} py="1.3rem" mt="1.5rem">
        Sign up
      </Button>
    </AuthWrapper>
  );
}
export default SignupPage;
