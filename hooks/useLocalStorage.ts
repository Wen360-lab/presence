import { useState, useEffect } from "react"

// Hook générique : se comporte comme useState, mais persiste la valeur
// dans le localStorage du navigateur à chaque changement.
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    // Le rendu serveur (SSR) n'a pas accès à `window` : on retourne
    // la valeur par défaut dans ce cas, la vraie valeur sera lue au montage.
    if (typeof window === "undefined") return initialValue

    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  // À chaque changement de `value`, on répercute dans le localStorage.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error("Erreur localStorage:", err)
    }
  }, [key, value])

  return [value, setValue] as const
}