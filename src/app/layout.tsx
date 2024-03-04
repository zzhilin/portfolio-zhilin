import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/_components/Footer";


const urbanist = Urbanist({ subsets: ["latin"] });
const name = "Zhilin Li";
 const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    // More navigation items...
 ];
 const linkedinLink = "https://linkedin.com/in/juliali19";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-800">
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/images/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <Footer name={name} navItems={navItems} linkedinLink={linkedinLink} />
      </body>
    </html>
  );
}