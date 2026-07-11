import { Oswald, Inter, Sora } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

import "@/style/globals.css";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Présence - La clé du succès",
  description: "Gestion de l'assiduité scolaire au Gabon",
  icons: {
    icon: "/iconPresence.svg", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-full flex flex-col bg-[F8F7F2]">{children}</body>
    </html>
  );
}



