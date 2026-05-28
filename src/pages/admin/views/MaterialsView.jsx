// ============================================================
//  MaterialsView.jsx — Gestion du catalogue matériaux (Admin)
// ============================================================
import { Plus } from 'lucide-react'
import { MATERIALS } from '../../../constants/mockData.js'
import { P, AC, PA, DK } from '../../../constants/brand.js'

export default function MaterialsView() {
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20, flexWrap:'wrap', gap:10 }}>
        <div>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.1rem', fontWeight:700, color:DK }}>Gestion des Matériaux</h2>
          <p style={{ color:'#9B8880', fontSize:12 }}>{MATERIALS.length} produits en catalogue</p>
        </div>
        <button style={{ background:`linear-gradient(135deg,${P},${AC})`, color:'white', border:'none', padding:'9px 18px', borderRadius:8, fontSize:12, fontWeight:600, display:'flex', alignItems:'center', gap:5, cursor:'pointer', fontFamily:'inherit' }}>
          <Plus size={14} /> Ajouter
        </button>
      </div>

      <div style={{ background:'white', borderRadius:16, border:'1px solid #EDE0D8', overflowX:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', minWidth:520 }}>
          <thead>
            <tr style={{ background:`${P}08`, borderBottom:'2px solid #EDE0D8' }}>
              {['Produit','Catégorie','Prix Unitaire','Unité','Stock'].map(h => (
                <th key={h} style={{ padding:'12px 14px', textAlign:'left', fontSize:10, fontWeight:700, color:'#9B8880', letterSpacing:1, textTransform:'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MATERIALS.map(m => (
              <tr key={m.id}
                style={{ borderBottom:'1px solid #F5EDE6', transition:'background .15s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#FDF8F5'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding:'14px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <span style={{ fontSize:18 }}>{m.ico}</span>
                    <span style={{ fontSize:12, fontWeight:600, color:DK }}>{m.name}</span>
                  </div>
                </td>
                <td style={{ padding:'14px' }}>
                  <span style={{ background:`${AC}15`, color:PA, fontSize:10, fontWeight:700, padding:'2px 8px', borderRadius:100 }}>{m.cat}</span>
                </td>
                <td style={{ padding:'14px', fontSize:12, fontWeight:700, color:P }}>{m.price} FCFA</td>
                <td style={{ padding:'14px', fontSize:12, color:'#6B5E56' }}>{m.unit}</td>
                <td style={{ padding:'14px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <div style={{ background:'#F0E8E0', borderRadius:100, height:5, flex:1, overflow:'hidden', minWidth:48 }}>
                      <div style={{ height:'100%', width:`${Math.min(m.stock / 50, 100)}%`, background: m.stock > 100 ? '#16A34A' : m.stock > 30 ? AC : '#DC2626', borderRadius:100 }} />
                    </div>
                    <span style={{ fontSize:11, color:'#9B8880', width:36, textAlign:'right' }}>{m.stock}</span>
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
