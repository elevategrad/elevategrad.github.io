import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "ElevateGrad - Empower Your Campus Experience",
  description:
    "ElevateGrad enhances student engagement, networking, and career opportunities. Connect with peers, find events, and advance your career.",
  keywords: [
    "student engagement",
    "campus networking",
    "career opportunities",
    "university platform",
    "student events",
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-dvh flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
