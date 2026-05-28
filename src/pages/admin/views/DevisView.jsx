// ============================================================
//  DevisView.jsx — Gestion des devis (Admin)
//  Fonctionnalité : changer le statut d'un devis
// ============================================================
import { useState } from 'react'
import Badge from '../../../components/Badge.jsx'
import { ALL_DEVIS } from '../../../constants/mockData.js'
import { P, AC, PA, DK } from '../../../constants/brand.js'

export default function DevisView() {
  const [devis, setDevis] = useState(ALL_DEVIS)

  const updateStatus = (id, newStatus) => {
    setDevis(prev => prev.map(d => d.id === id ? { ...d, statut: newStatus } : d))
  }

  return (
    <div>
      <div style={{ marginBottom:20 }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.1rem', fontWeight:700, color:DK }}>Gestion des Devis</h2>
        <p style={{ color:'#9B8880', fontSize:12 }}>{devis.length} devis au total</p>
      </div>

      <div style={{ background:'white', borderRadius:16, border:'1px solid #EDE0D8', overflowX:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', minWidth:720 }}>
          <thead>
            <tr style={{ background:`${P}08`, borderBottom:'2px solid #EDE0D8' }}>
              {['Réf','Client','Type','Surface','Ville','Budget FCFA','Statut','Date','Actions'].map(h => (
                <th key={h} style={{ padding:'12px 14px', textAlign:'left', fontSize:10, fontWeight:700, color:'#9B8880', letterSpacing:1, textTransform:'uppercase', whiteSpace:'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {devis.map(d => (
              <tr key={d.id}
                style={{ borderBottom:'1px solid #F5EDE6', transition:'background .15s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#FDF8F5'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding:'14px', fontSize:12, fontWeight:700, color:P }}>{d.id}</td>
                <td style={{ padding:'14px', fontSize:12, fontWeight:600, color:DK }}>{d.client}</td>
                <td style={{ padding:'14px' }}>
                  <span style={{ background:`${AC}20`, color:PA, fontSize:11, fontWeight:700, padding:'2px 9px', borderRadius:100 }}>{d.type}</span>
                </td>
                <td style={{ padding:'14px', fontSize:12, color:'#6B5E56' }}>{d.surface} m²</td>
                <td style={{ padding:'14px', fontSize:12, color:'#6B5E56' }}>{d.ville}</td>
                <td style={{ padding:'14px', fontSize:12, fontWeight:600, color:DK }}>{d.budget}</td>
                <td style={{ padding:'14px' }}><Badge status={d.statut} /></td>
                <td style={{ padding:'14px', fontSize:11, color:'#9B8880', whiteSpace:'nowrap' }}>{d.date}</td>
                <td style={{ padding:'14px' }}>
                  <div style={{ display:'flex', gap:4 }}>
                    {['Approuvé','En cours','Rejeté'].map(s => (
                      <button key={s} onClick={() => updateStatus(d.id, s)} style={{
                        padding:'3px 7px', fontSize:10, borderRadius:4,
                        border:`1px solid #EDE0D8`, cursor:'pointer', transition:'all .2s',
                        background: d.statut === s ? P      : 'white',
                        color     : d.statut === s ? 'white' : '#6B5E56',
                        fontFamily:'inherit', whiteSpace:'nowrap',
                      }}>{s}</button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
