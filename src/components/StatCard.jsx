// ============================================================
//  StatCard.jsx — Carte métrique pour les dashboards
//  Usage : <StatCard label="Projets" value="12" icon={Building2} color="#5C2206" sub="+3 ce mois" />
// ============================================================
import { DK } from '../constants/brand.js'

export default function StatCard({ label, value, icon: Icon, color, sub }) {
  return (
    <div
      style={{
        background   : 'white',
        borderRadius : 16,
        border       : '1px solid #EDE0D8',
        padding      : 24,
        display      : 'flex',
        flexDirection: 'column',
        gap          : 12,
        transition   : 'all .2s',
        cursor       : 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform  = 'translateY(-2px)'
        e.currentTarget.style.boxShadow  = '0 8px 24px rgba(92,34,6,.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform  = 'none'
        e.currentTarget.style.boxShadow  = 'none'
      }}
    >
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <div>
          <div style={{ color:'#9B8880', fontSize:11, letterSpacing:1, textTransform:'uppercase', marginBottom:6 }}>
            {label}
          </div>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:'1.7rem', fontWeight:700, color:DK, lineHeight:1 }}>
            {value}
          </div>
          {sub && (
            <div style={{ color:'#8B3A0F', fontSize:11, marginTop:4 }}>{sub}</div>
          )}
        </div>
        <div style={{
          width        : 44,
          height       : 44,
          background   : `${color}18`,
          borderRadius : 12,
          display      : 'flex',
          alignItems   : 'center',
          justifyContent: 'center',
          flexShrink   : 0,
        }}>
          <Icon size={22} style={{ color }} />
        </div>
      </div>
    </div>
  )
}
