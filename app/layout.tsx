import "@/app/ui/global.css";
import { roboto } from "./ui/fonts";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} mantialiased`}>{children}</body>
    </html>
  );
}
