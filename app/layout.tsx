import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

// const firaMono = Fira_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-firaMono",
// });

export const metadata: Metadata = {
  title: "Event Ways",
  description: "EventWays By Vantech Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
