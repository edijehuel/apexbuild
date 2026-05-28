// ============================================================
//  ClientOverview.jsx — Vue d'ensemble du client
// ============================================================
import { Building2, HardHat, TrendingUp, FileText, Plus, Package } from 'lucide-react'
import StatCard from '../../../components/StatCard.jsx'
import { P, AC, DK } from '../../../constants/brand.js'

export default function ClientOverview({ onNavigate, user }) {
  const quickActions = [
    { label:"Nouveau devis",    icon:Plus,     tab:'devis',       color:P       },
    { label:"Marketplace",      icon:Package,  tab:'marketplace', color:AC      },
    { label:"Suivi chantier",   icon:HardHat,  tab:'tracking',    color:'#3B82F6' },
  ]

  return (
    <div>
      <div style={{ marginBottom:24 }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.4rem', fontWeight:700, color:DK }}>Bienvenue, {user?.name?.split(' ')[0] || 'Client'} 👋</h2>
        <p style={{ color:'#9B8880', fontSize:13, marginTop:3 }}>Voici l'état de vos projets de construction.</p>
      </div>

      {/* KPIs */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(185px,1fr))', gap:16, marginBottom:24 }}>
        <StatCard label="Projets Actifs"   value="1"          icon={Building2}  color={P}       sub="Villa F3 en cours" />
        <StatCard label="Phase Actuelle"   value="Gros Œuvre" icon={HardHat}    color={AC}      />
        <StatCard label="Avancement"       value="25%"        icon={TrendingUp} color="#16A34A" sub="+5% cette semaine" />
        <StatCard label="Budget Engagé"    value="12.5M"      icon={FileText}   color="#3B82F6" sub="sur 45M FCFA"      />
      </div>

      {/* Projet actif */}
      <div style={{ background:'white', borderRadius:16, padding:24, border:'1px solid #EDE0D8', marginBottom:20 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10, marginBottom:16 }}>
          <div>
            <div style={{ fontSize:10, color:AC, letterSpacing:2, fontWeight:700, marginBottom:4 }}>PROJ-001 · EN COURS</div>
            <h3 style={{ fontFamily:"'Cinzel',serif", fontWeight:700, color:DK, fontSize:'1rem' }}>Villa F3 — Cocody, Abidjan</h3>
            <div style={{ color:'#9B8880', fontSize:12, marginTop:3 }}>Budget : 45 000 000 FCFA · Livraison : Nov 2026</div>
          </div>
          <button onClick={() => onNavigate('tracking')} style={{ background:`linear-gradient(135deg,${P},${AC})`, color:'white', border:'none', padding:'9px 18px', borderRadius:8, fontSize:11, fontWeight:700, letterSpacing:1, cursor:'pointer', fontFamily:'inherit' }}>
            VOIR LE SUIVI
          </button>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
          <span style={{ fontSize:12, color:'#6B5E56', fontWeight:600 }}>Avancement global</span>
          <span style={{ fontSize:12, fontWeight:700, color:P }}>25%</span>
        </div>
        <div style={{ background:'#F5EDE6', borderRadius:100, height:8, overflow:'hidden' }}>
          <div style={{ height:'100%', width:'25%', background:`linear-gradient(90deg,${P},${AC})`, borderRadius:100 }} />
        </div>
      </div>

      {/* Actions rapides */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(185px,1fr))', gap:12 }}>
        {quickActions.map(({ label, icon:Icon, tab, color }) => (
          <button key={tab} onClick={() => onNavigate(tab)} style={{ background:'white', border:'1px solid #EDE0D8', borderRadius:12, padding:'18px 20px', cursor:'pointer', display:'flex', alignItems:'center', gap:12, textAlign:'left', transition:'all .2s', fontFamily:'inherit' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#EDE0D8'; e.currentTarget.style.transform = 'none' }}
          >
            <div style={{ width:38, height:38, background:`${color}18`, borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <Icon size={19} style={{ color }} />
            </div>
            <span style={{ fontSize:12, fontWeight:600, color:DK }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
