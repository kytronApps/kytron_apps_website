import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useApps } from '../context/AppsContext.jsx'

export default function AppDetail(){
  const { slug } = useParams()
  const { apps } = useApps()
  const app = apps.find(a => a.slug === slug)

  useEffect(()=>{
    const el = document.getElementById('descargas')
    if(window.location.hash==='#descargas' && el){
      el.scrollIntoView({behavior:'smooth'})
    }
  },[])

  if(!app){
    return (
      <div className="container" style={{padding:'48px 24px'}}>
        No encontrada. <Link className="btn" to="/">Volver</Link>
      </div>
    )
  }

  return (
    <div className="container" style={{padding:'32px 24px'}}>
      {app.hero && <img src={app.hero} alt="" style={{width:'100%', maxHeight:320, objectFit:'cover', borderRadius:16}}/>}
      <h1 style={{margin:'16px 0 0'}}>{app.name}</h1>
      <p style={{color:'var(--muted)'}}>{app.tagline}</p>

      <div className="badges" style={{marginBottom:8}}>
        {app.platforms.map(p => <span key={p.id} className="badge">{p.label ?? p.id}</span>)}
      </div>

      <p style={{whiteSpace:'pre-wrap'}}>{(app.description || '').trim()}</p>

      <div className="stack" style={{margin:'12px 0 16px'}}>
        {app.price>0 && app.payLink ? (
          <a className="btn primary" href={app.payLink} target="_blank" rel="noreferrer">Comprar · €{app.price}</a>
        ) : null}
        <Link className="btn" to="/">Volver</Link>
      </div>

      <hr className="sep" />

      <h3 id="descargas">Descargas</h3>
      <div className="stack">
        {app.platforms.map(p => (
          <a key={p.id} className="btn" href={p.url} target="_blank" rel="noreferrer">
            Descargar {p.label ?? p.id}
          </a>
        ))}
      </div>

      {app.checksum && (
        <>
          <p style={{color:'var(--muted)', marginTop:8}}>Checksums</p>
          <pre style={{background:'#0c0f14', border:'1px solid #1b2230', padding:12, borderRadius:12, overflowX:'auto'}}>
{JSON.stringify(app.checksum, null, 2)}
          </pre>
        </>
      )}
    </div>
  )
}