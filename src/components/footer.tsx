import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="container flex h-10 items-center  justify-between px-4 text-xs text-muted-foreground">
        &copy; 2023 Adrian Gajdulewicz
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/adrian-gajdulewicz-50137518b/"
            target="_blank"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/Vithrax" target="_blank">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
