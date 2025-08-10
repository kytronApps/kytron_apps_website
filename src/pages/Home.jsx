import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useApps } from '../context/AppsContext.jsx'
import AppCard from '../components/AppCard.jsx'

export default function Home(){
  const { apps } = useApps()
  const [params] = useSearchParams()
  const q = (params.get('q') || '').toLowerCase()

  const items = useMemo(()=>{
    if(!q) return apps
    return apps.filter(a=>{
      const haystack = `${a.name} ${a.tagline} ${a.description}`.toLowerCase()
      return haystack.includes(q)
    })
  },[q, apps])

  return (
    <>
      <section className="hero">
        <h1>Apps minimalistas que hacen el trabajo</h1>
        <p>Descarga directa o compra sencilla. Sin dramas.</p>
      </section>
      <section className="section container">
        <div className="grid">
          {items.map(app => <AppCard key={app.slug} app={app} />)}
        </div>
      </section>
    </>
  )
}