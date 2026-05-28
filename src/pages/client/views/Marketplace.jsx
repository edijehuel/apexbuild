// ============================================================
//  Marketplace.jsx — Catalogue matériaux avec panier (Client)
// ============================================================
import { useState } from 'react'
import { Package } from 'lucide-react'
import { MATERIALS } from '../../../constants/mockData.js'
import { P, AC, DK } from '../../../constants/brand.js'

export default function Marketplace() {
  const [cart, setCart] = useState([]) // ids des produits ajoutés

  const toggleCart = (id) => {
    setCart(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10, marginBottom:20 }}>
        <div>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.1rem', fontWeight:700, color:DK }}>Marketplace Matériaux</h2>
          <p style={{ color:'#9B8880', fontSize:12 }}>Commandez avec livraison garantie sur votre chantier</p>
        </div>
        {cart.length > 0 && (
          <div style={{ background:`linear-gradient(135deg,${P},${AC})`, color:'white', padding:'8px 16px', borderRadius:8, fontSize:12, fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', gap:6 }}>
            <Package size={14} /> Panier ({cart.length})
          </div>
        )}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16 }}>
        {MATERIALS.map(item => {
          const inCart = cart.includes(item.id)
          return (
            <div key={item.id}
              style={{ background:'white', borderRadius:14, border:'1px solid #EDE0D8', overflow:'hidden', transition:'all .2s', cursor:'default' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(92,34,6,.1)' }}
              onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none' }}
            >
              {/* Icône produit */}
              <div style={{ background:`${P}07`, padding:'22px 18px', textAlign:'center', borderBottom:'1px solid #EDE0D8' }}>
                <div style={{ fontSize:40, marginBottom:6 }}>{item.ico}</div>
                <div style={{ fontSize:9, color:AC, fontWeight:700, letterSpacing:2 }}>{item.cat.toUpperCase()}</div>
              </div>
              {/* Infos + action */}
              <div style={{ padding:16 }}>
                <h4 style={{ fontWeight:700, color:DK, fontSize:12, marginBottom:5 }}>{item.name}</h4>
                <div style={{ color:'#9B8880', fontSize:11, marginBottom:12 }}>Unité : {item.unit}</div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, color:P, fontSize:'.9rem' }}>{item.price} FCFA</div>
                  <button
                    onClick={() => toggleCart(item.id)}
                    style={{
                      padding:'6px 12px', borderRadius:7,
                      border    : `1px solid ${inCart ? '#DC2626' : P}`,
                      background: inCart ? '#FEE2E2' : 'white',
                      color     : inCart ? '#DC2626'  : P,
                      fontSize:11, fontWeight:600, cursor:'pointer', transition:'all .2s', fontFamily:'inherit',
                    }}
                  >
                    {inCart ? 'Retirer' : '+ Panier'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
