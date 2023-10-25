import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { Toaster } from "sonner";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} grid h-[100dvh] w-screen grid-cols-1 grid-rows-[auto,1fr,auto]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <TRPCReactProvider headers={headers()}>
            <Navbar />
            <main className="px-2 sm:container sm:pt-24">
              {children}
              <Toaster richColors />
            </main>
            <Footer />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
