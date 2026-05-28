// ============================================================
//  Layout.jsx — Gabarit commun des dashboards (Admin + Client)
//  Contient : sidebar rétractable + topbar sticky
// ============================================================
import { useState } from 'react'
import { Bell, LogOut, ChevronRight } from 'lucide-react'
import { P, AC, DK } from '../constants/brand.js'

export default function Layout({ user, children, tab, setTab, tabs, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div style={{ display:'flex', minHeight:'100vh', fontFamily:"'Josefin Sans',sans-serif", background:'#F8F4F1' }}>

      {/* ── SIDEBAR ── */}
      <aside style={{
        width      : sidebarOpen ? 252 : 64,
        background : DK,
        flexShrink : 0,
        display    : 'flex',
        flexDirection: 'column',
        position   : 'sticky',
        top        : 0,
        height     : '100vh',
        overflow   : 'hidden',
        transition : 'width .3s ease',
      }}>
        {/* Logo */}
        <div style={{
          padding        : '20px 16px',
          borderBottom   : 'rgba(196,122,58,.15) 1px solid',
          display        : 'flex',
          alignItems     : 'center',
          gap            : 10,
          minHeight      : 64,
        }}>
          <div style={{
            width        : 34,
            height       : 34,
            background   : `linear-gradient(135deg,${P},${AC})`,
            borderRadius : 8,
            display      : 'flex',
            alignItems   : 'center',
            justifyContent:'center',
            flexShrink   : 0,
          }}>
            <span style={{ color:'white', fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:15 }}>A</span>
          </div>
          {sidebarOpen && (
            <div>
              <div style={{ color:'white', fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:14, letterSpacing:2, whiteSpace:'nowrap' }}>
                APEXBUILD
              </div>
              <div style={{ color:AC, fontSize:8, letterSpacing:2, whiteSpace:'nowrap' }}>
                {user.role === 'admin' ? 'ADMINISTRATION' : 'ESPACE CLIENT'}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav style={{ flex:1, padding:'12px 10px', overflowY:'auto' }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                width         : '100%',
                display       : 'flex',
                alignItems    : 'center',
                gap           : 10,
                padding       : '10px 12px',
                borderRadius  : 9,
                marginBottom  : 3,
                border        : 'none',
                cursor        : 'pointer',
                background    : tab === t.id ? `linear-gradient(135deg,${P}90,${AC}60)` : 'transparent',
                color         : tab === t.id ? 'white' : 'rgba(255,255,255,.5)',
                transition    : 'all .2s',
                fontFamily    : 'inherit',
              }}
            >
              <t.icon size={18} style={{ flexShrink:0, color: tab === t.id ? AC : 'inherit' }} />
              {sidebarOpen && (
                <span style={{ fontSize:12, letterSpacing:.5, whiteSpace:'nowrap', fontWeight: tab === t.id ? 600 : 400 }}>
                  {t.label}
                </span>
              )}
              {sidebarOpen && tab === t.id && (
                <ChevronRight size={13} style={{ marginLeft:'auto', color:AC }} />
              )}
            </button>
          ))}
        </nav>

        {/* Profil + Déconnexion */}
        <div style={{ padding:'12px 10px', borderTop:'rgba(196,122,58,.15) 1px solid' }}>
          <div style={{
            display   : 'flex',
            alignItems: 'center',
            gap       : 10,
            padding   : '8px 12px',
            background: 'rgba(255,255,255,.05)',
            borderRadius: 9,
            marginBottom: 6,
          }}>
            <div style={{
              width        : 32,
              height       : 32,
              background   : `linear-gradient(135deg,${P},${AC})`,
              borderRadius : '50%',
              display      : 'flex',
              alignItems   : 'center',
              justifyContent:'center',
              flexShrink   : 0,
              color        : 'white',
              fontWeight   : 700,
              fontSize     : 13,
            }}>
              {user.av || user.name[0]}
            </div>
            {sidebarOpen && (
              <div style={{ overflow:'hidden' }}>
                <div style={{ color:'white', fontSize:12, fontWeight:600, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
                  {user.name}
                </div>
                <div style={{ color:AC, fontSize:10, textTransform:'capitalize' }}>{user.role}</div>
              </div>
            )}
          </div>
          <button
            onClick={onLogout}
            style={{
              width      : '100%',
              display    : 'flex',
              alignItems : 'center',
              gap        : 8,
              padding    : '9px 12px',
              background : 'transparent',
              border     : 'none',
              cursor     : 'pointer',
              color      : 'rgba(255,255,255,.35)',
              borderRadius: 9,
              transition : 'all .2s',
              fontFamily : 'inherit',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(220,38,38,.15)'; e.currentTarget.style.color = '#FCA5A5' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent';          e.currentTarget.style.color = 'rgba(255,255,255,.35)' }}
          >
            <LogOut size={16} style={{ flexShrink:0 }} />
            {sidebarOpen && <span style={{ fontSize:12 }}>Déconnexion</span>}
          </button>
        </div>

        {/* Bouton toggle sidebar */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position     : 'absolute',
            top          : 20,
            right        : -11,
            width        : 22,
            height       : 22,
            borderRadius : '50%',
            background   : AC,
            border       : `2px solid ${DK}`,
            cursor       : 'pointer',
            display      : 'flex',
            alignItems   : 'center',
            justifyContent:'center',
            color        : 'white',
            zIndex       : 10,
          }}
        >
          <ChevronRight size={11} style={{ transform: sidebarOpen ? 'rotate(180deg)' : 'none', transition:'transform .3s' }} />
        </button>
      </aside>

      {/* ── CONTENU PRINCIPAL ── */}
      <main style={{ flex:1, minWidth:0, display:'flex', flexDirection:'column' }}>

        {/* Topbar */}
        <header style={{
          background   : 'white',
          borderBottom : '1px solid #EDE0D8',
          padding      : '0 28px',
          height       : 60,
          display      : 'flex',
          alignItems   : 'center',
          justifyContent:'space-between',
          position     : 'sticky',
          top          : 0,
          zIndex       : 50,
        }}>
          <div>
            <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'1rem', fontWeight:700, color:DK }}>
              {tabs.find(t => t.id === tab)?.label}
            </h1>
            <div style={{ color:'#9B8880', fontSize:10, letterSpacing:.5 }}>
              {new Date().toLocaleDateString('fr-FR', { weekday:'long', day:'numeric', month:'long', year:'numeric' })}
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ position:'relative', cursor:'pointer' }}>
              <Bell size={19} style={{ color:'#9B8880' }} />
              <div style={{ position:'absolute', top:-3, right:-3, width:7, height:7, background:P, borderRadius:'50%' }} />
            </div>
            <div style={{
              width        : 34,
              height       : 34,
              background   : `linear-gradient(135deg,${P},${AC})`,
              borderRadius : '50%',
              display      : 'flex',
              alignItems   : 'center',
              justifyContent:'center',
              color        : 'white',
              fontWeight   : 700,
              cursor       : 'pointer',
              fontSize     : 13,
            }}>
              {user.av || user.name[0]}
            </div>
          </div>
        </header>

        {/* Zone de contenu scrollable */}
        <div style={{ flex:1, padding:28, overflowY:'auto' }}>
          {children}
        </div>
      </main>
    </div>
  )
}
