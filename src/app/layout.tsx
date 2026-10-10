import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://omm-portfolio-sigma.vercel.app";
const profileImage = `${siteUrl}/images/Omm.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Omm Prakash Parida | Full Stack & AI Developer",

  description:
    "Explore the official portfolio of Omm Prakash Parida, a Full Stack Developer and AI & Agentic AI Developer building modern web applications and intelligent AI-powered systems.",

  applicationName: "Omm Portfolio",

  keywords: [
    "Omm Prakash Parida",
    "Omm Prakash Parida Portfolio",
    "Full Stack Developer",
    "AI Developer",
    "Agentic AI Developer",
    "Next.js Developer",
    "React Developer",
    "Python",
    "MERN Stack Developer",
    "Portfolio",
  ],

  authors: [{ name: "Omm Prakash Parida", url: siteUrl }],

  creator: "Omm Prakash Parida",
  publisher: "Omm Prakash Parida",

  verification: {
    google: "inRq3HNqyEfiRijJ0EFJxfJ3lgIMolZQgwxwGBoZXNE",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Omm Prakash Parida | Full Stack & AI Developer",
    description:
      "Explore the projects, skills, and work of Omm Prakash Parida, a Full Stack and AI Developer.",
    url: siteUrl,
    siteName: "Omm Prakash Parida Portfolio",
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Omm Prakash Parida",
  url: siteUrl,
  image: {
    "@type": "ImageObject",
    url: profileImage,
    contentUrl: profileImage,
    caption: "Omm Prakash Parida",
  },
  jobTitle: "Full Stack & AI Developer",
  description:
    "Full Stack Developer working on modern web applications, backend APIs, and AI-powered software.",
  sameAs: [
    "https://github.com/OmmPrakash-07",
    "https://www.linkedin.com/in/omm-prakash-parida/",
    "https://www.instagram.com/genius_omm/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        <div className="ambient-background">
          <div className="grid-background" />
        </div>

        {children}
      </body>
    </html>
  );
}