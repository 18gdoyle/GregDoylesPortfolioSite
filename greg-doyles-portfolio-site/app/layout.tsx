import "./globals.css";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Greg Doyle",
  description: "Software Development Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:url" content="https://gregoryvincentdoyle.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Greg Doyle" />
      <meta property="og:description" content="Software Development Services" />
      <meta property="og:image" content="https://gregoryvincentdoyle.com/_next/image?url=%2Fassets%2FGregDoyle.jpg&w=2048&q=75" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
