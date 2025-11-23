import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/firebase'
import type { AppData } from '../types/App'
import { Smartphone, Globe, Monitor } from 'lucide-react'

const Apps = () => {
  const [apps, setApps] = useState<AppData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadApps() {
      const ref = collection(db, 'apps') 
      const snapshot = await getDocs(ref)

      console.log('Apps encontradas:', snapshot.docs.length)

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as AppData[]

      setApps(data)
      setLoading(false)
    }

    loadApps()
  }, [])

  // Asignar iconos según plataforma/uso
  const getIcon = (platforms: string[]) => {
    if (platforms.includes('Android') || platforms.includes('IOS')) return Smartphone
    if (platforms.includes('Web')) return Globe
    return Monitor
  }

  return (
    <section id="apps" className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Aplicaciones
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Proyectos móviles y web diseñados con atención al detalle y experiencia de usuario
            excepcional
          </p>
        </div>

        {loading && <p className="text-center text-muted-foreground">Cargando aplicaciones...</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {!loading &&
            apps.map((app, index) => {
              const Icon = getIcon(app.dispositivos)

              return (
                <div
                  key={app.id}
                  className="group bg-card border border-border p-8 hover:border-primary transition-all duration-300 animate-fade-in hover:shadow-[0_8px_40px_hsl(var(--foreground)/0.08)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-secondary/50 rounded-sm border border-accent-secondary/20 group-hover:border-accent-secondary/40 transition-all">
                      <Icon className="w-6 h-6 text-accent-secondary" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {app.title}
                        </h3>

                    
                      </div>

                      <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                        {app.Description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {app.dispositivos.map((tag) => (
                          <span
                            key={tag}
                            className="font-geometric text-[10px] bg-retro-light/40 text-foreground/80 px-2 py-0.5 rounded-sm border border-accent-secondary/15"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {app.link && (
                        <a
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-primary underline text-sm"
                        >
                          Ver más →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Apps
