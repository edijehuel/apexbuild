// ============================================================
//  ClientsView.jsx — Liste des clients (Admin)
// ============================================================
import { USERS } from '../../../constants/mockData.js'
import { P, AC, DK } from '../../../constants/brand.js'

export default function ClientsView() {
  const clients = USERS.filter(u => u.role === 'client')
  return (
    <div>
      <div style={{ marginBottom:20 }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.1rem', fontWeight:700, color:DK }}>Gestion des Clients</h2>
        <p style={{ color:'#9B8880', fontSize:12 }}>{clients.length} clients enregistrés</p>
      </div>
      <div style={{ background:'white', borderRadius:16, border:'1px solid #EDE0D8' }}>
        {clients.map((u, i) => (
          <div key={u.id}
            style={{ padding:'18px 22px', display:'flex', alignItems:'center', gap:14, borderBottom: i < clients.length - 1 ? '1px solid #F5EDE6' : 'none', transition:'background .15s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#FDF8F5'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ width:42, height:42, background:`linear-gradient(135deg,${P},${AC})`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:700, flexShrink:0 }}>
              {u.av}
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, color:DK, fontSize:13 }}>{u.name}</div>
              <div style={{ color:'#9B8880', fontSize:11 }}>{u.email}</div>
            </div>
            <button style={{ padding:'6px 14px', fontSize:11, borderRadius:7, border:`1px solid ${P}`, color:P, background:'white', cursor:'pointer', fontFamily:'inherit' }}>
              Voir projets
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
