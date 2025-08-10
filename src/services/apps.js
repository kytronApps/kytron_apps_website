// Define aquí tu catálogo. Puedes generar estos enlaces desde Firebase Storage.
// Si vendes, usa Payment Links de Stripe / Gumroad / Lemon Squeezy.

export const APPS = [
  {
    slug: "casa-en-orden",
    name: "Casa en Orden",
    tagline: "Organiza y rota las tareas del hogar.",
    version: "1.1.0",
    hero: "/og.png",
    platforms: [
      { id: "android", label: "Android (.apk)", url: "https://.../casa-en-orden-1.1.0.apk" },
      { id: "ios", label: "iOS (App Store)", url: "https://apps.apple.com/app/..." },
      { id: "windows", label: "Windows (.exe)", url: "https://.../casa-en-orden-1.1.0.exe" },
      { id: "mac", label: "macOS (.dmg)", url: "https://.../casa-en-orden-1.1.0.dmg" },
      { id: "linux", label: "Linux (.AppImage)", url: "https://.../casa-en-orden-1.1.0.AppImage" },
    ],
    price: 0,
    payLink: "",
    description: `Historial de limpieza, perfiles por vivienda y calendario opcional.`,
    highlights: ["Notificaciones", "Perfiles", "Historial", "Calendario"],
    releaseNotes: [
      { date: "2025-08-01", text: "Mejoras de rendimiento y deep links." }
    ],
    checksum: { apk: "sha256:xxxx" }
  },
  {
    slug: "simple-notes",
    name: "Simple Notes",
    tagline: "Notas ligeras con sincronización.",
    version: "0.9.3",
    hero: "/og.png",
    platforms: [
      { id: "android", label: "Android (.apk)", url: "https://.../simple-notes-0.9.3.apk" },
      { id: "mac", label: "macOS (.dmg)", url: "https://.../simple-notes-0.9.3.dmg" },
    ],
    price: 4.99,
    payLink: "https://buy.stripe.com/xxxx",
    description: "Bloc de notas sin distracciones con búsqueda instantánea y exportación.",
    highlights: ["Sync", "Markdown", "Export"]
  }
]