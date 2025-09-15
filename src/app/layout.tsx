import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import formatMetadata from "@/utils/formatMetadata";
import StyledComponentsRegistry from "@/lib/registry";

const ManropeSans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = formatMetadata({
  title: "Raihan Muhammad – Your Reliable Frontend Developer Partner",
  description:
    "Raihan Muhammad is Your Reliable Frontend Developer Partner With 6 Years of Experience, Specializing in Front-End Development Using Next.js, TypeScript, Styled Components, and React.js",
  keywords: [
    "Raihan Muhammad",
    "Raihan",
    "Software Engineer",
    "Frontend Engineer",
    "Surakarta",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ManropeSans.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
