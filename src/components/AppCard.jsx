// src/components/AppCard.jsx
import { Link } from 'react-router-dom';
import PlatformBadge from './PlatformBadge.jsx';

export default function AppCard({ app }) {
  const onImgError = (e) => { e.currentTarget.style.display = 'none'; };

  return (
    <article className="card">
      <div className="media">
        {app.hero && <img src={app.hero} alt="" onError={onImgError} loading="lazy" />}
      </div>

      <h3 className="title">{app.name}</h3>
      <p className="subtitle">{app.tagline}</p>

      <div className="badges">
        {app.platforms.map(p => <PlatformBadge key={p.id} id={p.id} />)}
      </div>

      <div style={{display:'flex', gap:8, marginTop:12}}>
        <Link className="btn" to={`/app/${app.slug}`}>Ver</Link>
        {app.price > 0 ? (
          <a className="btn primary" href={app.payLink} target="_blank" rel="noreferrer">
            Comprar · €{app.price}
          </a>
        ) : (
          <Link className="btn primary" to={`/app/${app.slug}#descargas`}>Descargar</Link>
        )}
      </div>
    </article>
  );
}