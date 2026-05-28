// ============================================================
//  App.jsx — Routeur principal de l'application APEXBUILD
//  Gère la navigation entre : Landing / Auth / Admin / Client
// ============================================================
import { useState, useEffect } from 'react'
import Landing         from './pages/Landing/Landing.jsx'
import Auth            from './pages/Auth/Auth.jsx'
import AdminDashboard  from './pages/admin/AdminDashboard.jsx'
import ClientDashboard from './pages/client/ClientDashboard.jsx'

export default function App() {
  // page : 'landing' | 'auth' | 'admin' | 'client'
  const [page,     setPage]     = useState('landing')
  const [authMode, setAuthMode] = useState('login')   // 'login' | 'register'
  const [user,     setUser]     = useState(null)      // utilisateur connecté

  // Chargement des polices Google Fonts
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap'
    link.rel  = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  const handleLogin = (loggedUser) => {
    setUser(loggedUser)
    setPage(loggedUser.role === 'admin' ? 'admin' : 'client')
  }

  const handleLogout = () => {
    setUser(null)
    setPage('landing')
  }

  const goToAuth = (mode = 'login') => {
    setAuthMode(mode)
    setPage('auth')
  }

  if (page === 'landing') return (
    <Landing
      onLogin    ={() => goToAuth('login')}
      onRegister ={() => goToAuth('register')}
    />
  )

  if (page === 'auth') return (
    <Auth
      mode     = {authMode}
      onLogin  = {handleLogin}
      onBack   = {() => setPage('landing')}
      onSwitch = {setAuthMode}
    />
  )

  if (page === 'admin'  && user) return <AdminDashboard  user={user} onLogout={handleLogout} />
  if (page === 'client' && user) return <ClientDashboard user={user} onLogout={handleLogout} />

  return null
}
