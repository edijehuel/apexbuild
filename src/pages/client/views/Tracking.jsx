// ============================================================
//  Tracking.jsx — Suivi de chantier en temps réel (Client)
//  Timeline des 6 phases de construction
// ============================================================
import { FileText, Hammer, Building2, HardHat, Wrench, Truck, CheckCircle, Check } from 'lucide-react'
import { P, AC, GD, DK } from '../../../constants/brand.js'

// Phases du chantier (à adapter selon le projet réel)
const PHASES = [
  { label:'Études & Plans',  Icon:FileText,  done:true,  current:false, pct:null, date:'10 Mars 2026' },
  { label:'Fondations',      Icon:Hammer,    done:true,  current:false, pct:null, date:'28 Mars 2026' },
  { label:'Gros Œuvre',      Icon:Building2, done:false, current:true,  pct:40,   date:'En cours'     },
  { label:'Toiture',         Icon:HardHat,   done:false, current:false, pct:null, date:'Juil 2026'    },
  { label:'Finitions',       Icon:Wrench,    done:false, current:false, pct:null, date:'Sept 2026'    },
  { label:'Livraison',       Icon:Truck,     done:false, current:false, pct:null, date:'Nov 2026'     },
]

export default function Tracking() {
  return (
    <div>
      <div style={{ marginBottom:22 }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.1rem', fontWeight:700, color:DK }}>Suivi de Chantier</h2>
        <p style={{ color:'#9B8880', fontSize:12 }}>Villa F3 — Cocody, Abidjan · PROJ-001</p>
      </div>

      {/* ── Carte résumé ── */}
      <div style={{ background:`linear-gradient(135deg,${DK},${P})`, borderRadius:18, padding:28, marginBottom:22, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:0, right:0, width:180, height:180, background:AC, borderRadius:'50%', opacity:.07, transform:'translate(40%,-40%)' }} />
        <div style={{ position:'relative', zIndex:1, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:14, alignItems:'center' }}>
          <div>
            <div style={{ color:AC, fontSize:10, letterSpacing:2, fontWeight:700, marginBottom:5 }}>AVANCEMENT GLOBAL</div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'2.8rem', fontWeight:700, color:'white', lineHeight:1 }}>25%</div>
            <div style={{ color:'rgba(255,255,255,.65)', fontSize:12, marginTop:5 }}>Phase actuelle : Gros Œuvre</div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            {[['Budget Total','45M FCFA'],['Budget Engagé','12.5M'],['Ingénieur','M. Kouassi'],['Livraison','Nov 2026']].map(([k,v]) => (
              <div key={k} style={{ textAlign:'right' }}>
                <div style={{ color:'rgba(255,255,255,.45)', fontSize:9, letterSpacing:1 }}>{k.toUpperCase()}</div>
                <div style={{ color:'white', fontWeight:700, fontSize:12 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop:20, background:'rgba(255,255,255,.12)', borderRadius:100, height:7 }}>
          <div style={{ height:'100%', width:'25%', background:`linear-gradient(90deg,${AC},${GD})`, borderRadius:100 }} />
        </div>
      </div>

      {/* ── Timeline des phases ── */}
      <div style={{ background:'white', borderRadius:16, padding:28, border:'1px solid #EDE0D8' }}>
        <h3 style={{ fontFamily:"'Cinzel',serif", fontWeight:700, color:DK, fontSize:'.95rem', marginBottom:24 }}>Phases du Chantier</h3>
        <div style={{ position:'relative' }}>
          {/* Ligne verticale */}
          <div style={{ position:'absolute', left:18, top:0, bottom:0, width:2, background:'#EDE0D8', zIndex:0 }} />

          {PHASES.map((phase, i) => (
            <div key={i} style={{ display:'flex', gap:16, marginBottom: i < PHASES.length - 1 ? 28 : 0, position:'relative' }}>
              {/* Icône de phase */}
              <div style={{
                width:38, height:38, borderRadius:'50%', flexShrink:0, zIndex:1,
                display:'flex', alignItems:'center', justifyContent:'center',
                border:'2px solid white',
                background   : phase.done ? '#16A34A' : phase.current ? P : '#EDE0D8',
                boxShadow    : phase.current ? `0 0 0 4px ${P}28` : 'none',
              }}>
                {phase.done
                  ? <Check size={17} color="white" />
                  : <phase.Icon size={16} color={phase.current ? 'white' : '#9B8880'} />
                }
              </div>

              {/* Contenu de la phase */}
              <div style={{ flex:1, paddingTop:5 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:3, flexWrap:'wrap', gap:6 }}>
                  <span style={{ fontWeight:700, color: phase.done || phase.current ? DK : '#9B8880', fontSize:13 }}>{phase.label}</span>
                  <span style={{ fontSize:11, color: phase.done ? '#16A34A' : phase.current ? P : '#9B8880', fontWeight:600 }}>{phase.date}</span>
                </div>
                {/* Barre de progression pour la phase en cours */}
                {phase.current && (
                  <div>
                    <div style={{ background:'#F5EDE6', borderRadius:100, height:5, marginTop:7 }}>
                      <div style={{ height:'100%', width:`${phase.pct}%`, background:`linear-gradient(90deg,${P},${AC})`, borderRadius:100 }} />
                    </div>
                    <div style={{ color:P, fontSize:11, marginTop:3, fontWeight:600 }}>{phase.pct}% complété</div>
                  </div>
                )}
                {phase.done && (
                  <div style={{ color:'#16A34A', fontSize:11, fontWeight:600, display:'flex', alignItems:'center', gap:4 }}>
                    <CheckCircle size={11} /> Terminé
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
