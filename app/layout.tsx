import "@/style/globals.css";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Présence - La clé du succès",
  description: "Gestion de l'assiduité scolaire au Gabon",
  // C'est ici qu'on force l'icône HD depuis le dossier public
  icons: {
    icon: "/Logo.png", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-[#F8F7F2]">{children}</body>
    </html>
  );
}



