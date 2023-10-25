import React from "react";
import Logo from "./logo";
import { getServerAuthSession } from "@/server/auth";
import LoginButton from "./login-button";
import { ModeToggle } from "./theme-toggle";

const Navbar = async () => {
  const session = await getServerAuthSession();

  return (
    <header className="sticky top-0 h-16 border-b">
      <nav className="container flex h-full items-center justify-between px-4">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <ModeToggle />
          <LoginButton session={session} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
