import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omm Prakash | Full Stack & AI Developer",
  description:
    "Portfolio of Omm Prakash Parida — Full Stack Web Developer and AI Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="ambient-background">
          <div className="grid-background" />
        </div>

        {children}
      </body>
    </html>
  );
}