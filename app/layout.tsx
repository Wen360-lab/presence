// import { Oswald, Inter, Sora, Fraunces } from "next/font/google";

// const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
// const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

import "@/style/globals.css";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prezence - L'appel autrement",
  description: "Gestion de l'assiduité scolaire au Gabon",
  icons: {
    icon: "/favicon.ico", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}



