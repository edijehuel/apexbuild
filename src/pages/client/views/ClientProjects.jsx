// ============================================================
//  ClientProjects.jsx — Mes projets (Client)
// ============================================================
import { Building2 } from 'lucide-react'
import Badge from '../../../components/Badge.jsx'
import { ALL_PROJECTS } from '../../../constants/mockData.js'
import { P, AC, DK } from '../../../constants/brand.js'

export default function ClientProjects({ onNavigate }) {
  // Filtre : projets appartenant au client connecté (Winner)
  const myProjects = ALL_PROJECTS.filter(p => p.client.includes('Winner'))

  return (
    <div>
      <div style={{ marginBottom:20 }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.1rem', fontWeight:700, color:DK }}>Mes Projets</h2>
        <p style={{ color:'#9B8880', fontSize:12 }}>Suivez l'avancement de vos constructions</p>
      </div>

      {myProjects.length === 0 ? (
        <div style={{ background:'white', borderRadius:16, padding:48, border:'1px solid #EDE0D8', textAlign:'center' }}>
          <Building2 size={40} style={{ color:'#EDE0D8', marginBottom:12 }} />
          <h3 style={{ color:'#9B8880', fontFamily:"'Cinzel',serif", marginBottom:16 }}>Aucun projet pour le moment</h3>
          <button onClick={() => onNavigate('devis')} style={{ background:`linear-gradient(135deg,${P},${AC})`, color:'white', border:'none', padding:'10px 22px', borderRadius:8, fontSize:12, fontWeight:700, cursor:'pointer', fontFamily:'inherit' }}>
            Faire une demande de devis
          </button>
        </div>
      ) : (
        myProjects.map(proj => (
          <div key={proj.id} style={{ background:'white', borderRadius:16, padding:24, border:'1px solid #EDE0D8', marginBottom:14 }}>
            <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:10, marginBottom:14 }}>
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                  <span style={{ fontSize:10, color:AC, fontWeight:700, letterSpacing:1 }}>{proj.id}</span>
                  <Badge status={proj.phase} />
                </div>
                <h3 style={{ fontFamily:"'Cinzel',serif", fontWeight:700, color:DK, fontSize:'.95rem', marginBottom:3 }}>{proj.name}</h3>
                <div style={{ color:'#9B8880', fontSize:12 }}>Budget : {proj.budget} · Livraison : {proj.dl}</div>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:'1.6rem', fontWeight:700, color:P }}>{proj.progress}%</div>
                <div style={{ color:'#9B8880', fontSize:10 }}>Avancement</div>
              </div>
            </div>
            <div style={{ background:'#F5EDE6', borderRadius:100, height:8, overflow:'hidden' }}>
              <div style={{ height:'100%', width:`${proj.progress}%`, background:`linear-gradient(90deg,${P},${AC})`, borderRadius:100 }} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}
