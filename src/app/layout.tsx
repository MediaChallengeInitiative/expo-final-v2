import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Africa Media and Creatives Career Expo 2024 | The Future of Work",
  description:
    "Join the premier event for media and creative professionals in Africa. Explore the future of work in media, journalism, art, design, fashion, and entertainment. Network, learn, and shape the African narrative.",
  keywords: [
    "Africa Media Expo",
    "Creatives Career Expo",
    "Media Challenge Initiative",
    "African journalism",
    "digital media",
    "creative industry",
    "media landscape",
    "career development",
    "networking",
    "AI in media",
    "media viability",
    "African narrative",
    "journalism training",
    "media innovation",
    "content creation",
    "digital storytelling",
    "media literacy",
    "fact-checking",
    "misinformation",
    "disinformation",
    "media regulation",
    "media freedom",
    "Uganda media",
    "East African media",
    "journalism students",
    "media professionals",
    "PR and communications",
    "marketing",
    "advertising",
    "animation",
    "graphic design",
    "media firms",
    "media policymakers",
    "media development",
    "SDGs in media",
    "climate change reporting",
    "gender equality in media",
    "media sustainability",
    "Everything Media",
    "Future of Work",
    "Lugogo UMA Show Grounds",
    "media exhibition",
    "media workshops",
    "media career fair"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
