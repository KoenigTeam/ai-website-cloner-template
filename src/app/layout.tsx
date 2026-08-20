import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const arapey = localFont({
  variable: "--font-arapey",
  src: [
    {
      path: "../../public/fonts/arapey-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/arapey-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

const robotoCondensed = localFont({
  variable: "--font-roboto-condensed",
  src: [
    {
      path: "../../public/fonts/roboto-condensed-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/roboto-condensed-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/roboto-condensed-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Rich Mindset — It's a Lifestyle",
  description:
    "A clothing brand that represents who you are and the legacy you building. A commitment to becoming the best version of yourself every single day.",
  icons: {
    icon: "/seo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${arapey.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
