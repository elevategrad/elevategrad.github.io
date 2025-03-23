"use client";

import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo size="md" />
        {pathname == "/" && (
          <>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#engagement"
                className="text-sm font-medium hover:text-primary"
              >
                Engagement
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium hover:text-primary"
              >
                FAQ
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href={"/get-started"}>
                <Button size="sm" variant="primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </>
        )}
        {pathname == "/request-demo" && (
          <>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#values"
                className="text-sm font-medium hover:text-primary"
              >
                Values
              </Link>
              <Link
                href="#schedule-demo"
                className="text-sm font-medium hover:text-primary"
              >
                Schedule Demo
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium hover:text-primary"
              >
                FAQ
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href={"/get-started"}>
                <Button size="sm" variant="primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
