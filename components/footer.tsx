import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "Twitter", icon: Twitter, url: "https://x.com/ElevateGrad/" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/elevategrad/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/elevategrad/",
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-teal/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground max-w-sm">
              Empowering students, universities, and employers to connect and
              thrive in the academic and professional world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full border hover:bg-muted"
                >
                  <span className="sr-only">{name}</span>
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Get Started", href: "/get-started" },
                  { label: "Request Demo", href: "/request-demo" },
                  { label: "Contact Support", href: "/contact-support" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookie Policy",
                  "GDPR",
                  "Accessibility",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ElevateGrad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
