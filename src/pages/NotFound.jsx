import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <div className="container" style={{padding:'48px 24px'}}>
      <h1>404</h1>
      <p>Esta página no existe. (Como mi tiempo libre.)</p>
      <Link className="btn" to="/">Volver al inicio</Link>
    </div>
  )
}