import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";

const raleway = Raleway({
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sleeky Programmers",
  description: "Church Workflow Attendance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
