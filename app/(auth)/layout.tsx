// Layout commun à /connexion et /creer-compte :

// fond vert plein écran 
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-emeraude px-6 py-12">
      {children}
    </section>
  )
}