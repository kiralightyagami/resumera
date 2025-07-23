import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import PuterInit from "../components/PuterInit";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

export const metadata: Metadata = {
    title: "Resumera | Auth",
    description: "Log in to your account",
  };
  
  export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <PuterInit />
        <script src="https://js.puter.com/v2/"></script>
        {children}
      </div>
    );
  }
  