"use client";

import type { Session } from "next-auth";
import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

interface LoginButtonProps {
  session: Session | null;
}

const LoginButton = ({ session }: LoginButtonProps) => {
  return !session ? (
    <Button onClick={() => signIn("google")}>Sign in</Button>
  ) : (
    <Button onClick={() => signOut()}>Sign out</Button>
  );
};

export default LoginButton;
