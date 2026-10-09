import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omm-portfolio-sigma.vercel.app"),

  title: "Omm Prakash Parida | Full Stack & AI Developer",

  description:
    "Explore the portfolio of Omm Prakash Parida, a developer building modern web applications, full-stack solutions, and AI-powered systems.",

  applicationName: "Omm Portfolio",

  keywords: [
    "Omm Prakash Parida",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "Python",
    "Agentic AI",
    "Portfolio",
  ],

  authors: [{ name: "Omm Prakash Parida" }],

  verification: {
    google: "inRq3HNqyEfiRijJ0EFJxfJ3lgIMolZQgwxwGBoZXNE",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Omm Prakash Parida | Full Stack & AI Developer",
    description:
      "Building modern web applications and intelligent AI-powered solutions.",
    url: "/",
    siteName: "Omm Prakash Portfolio",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Omm Prakash Parida — Full Stack & AI Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Omm Prakash Parida | Full Stack & AI Developer",
    description:
      "Explore my full-stack projects, AI applications, and software development journey.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
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