import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div style={{display:'flex', minHeight:'100vh', flexDirection:'column'}}>
      <Header />
      <main style={{flex:1}}>{children}</main>
      <Footer />
    </div>
  )
}