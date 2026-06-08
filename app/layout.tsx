import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Code Review Recorder",
  description: "Record and analyze technical interview coding sessions with automatic diff tracking, performance metrics, and standardized evaluation rubrics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d606ebdc-0aeb-4a86-ab36-6555fc77d327"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
