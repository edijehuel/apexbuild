// ============================================================
//  DevisForm.jsx — Formulaire de devis multi-étapes (Client)
//  Étapes : Type → Superficie & Lieu → Matériaux → Confirmation
// ============================================================
import { useState } from 'react'
import { Check, CheckCircle, Package } from 'lucide-react'
import { HOUSE_TYPES } from '../../../constants/mockData.js'
import { P, AC, DK } from '../../../constants/brand.js'

const STEPS_LABELS = ['Type de Maison', 'Superficie & Lieu', 'Matériaux', 'Confirmation']

const MATERIAUX_OPTIONS = [
  { id:'economique', label:'Économique', desc:'Matériaux standards, finitions simples. Idéal pour budget maîtrisé.',     badge:'-20%',     color:'#6B7280' },
  { id:'standard',   label:'Standard',  desc:'Bon rapport qualité/prix. Matériaux certifiés ISO, finitions soignées.',   badge:'Populaire', color:'#3B82F6' },
  { id:'premium',    label:'Premium',   desc:'Matériaux haute qualité, finitions luxueuses, équipements modernes.',      badge:'Premium',   color:AC        },
  { id:'luxe',       label:'Luxe',      desc:'Le meilleur du marché. Matériaux importés, domotique incluse.',            badge:'Top Gamme', color:P         },
]

const FORM_INIT = { type:'', surface:'', ville:'', pieces:'', etages:'1', budget:'', materiau:'standard', desc:'', deadline:'' }

export default function DevisForm() {
  const [step,      setStep]      = useState(1)
  const [form,      setForm]      = useState(FORM_INIT)
  const [submitted, setSubmitted] = useState(false)

  const set = field => e => setForm({ ...form, [field]: e.target.value })

  const inputStyle = {
    width:'100%', padding:'10px 13px', border:'1px solid #E8D8CC', borderRadius:8,
    fontSize:13, outline:'none', fontFamily:"'Josefin Sans',sans-serif",
    color:DK, boxSizing:'border-box', transition:'border-color .2s', background:'white',
  }

  // ── Vue succès après soumission ──────────────────────────
  if (submitted) return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:380, textAlign:'center' }}>
      <div style={{ width:72, height:72, background:`${AC}20`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20 }}>
        <CheckCircle size={36} style={{ color:AC }} />
      </div>
      <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.6rem', fontWeight:700, color:DK, marginBottom:10 }}>Devis Soumis !</h2>
      <p style={{ color:'#9B8880', fontSize:14, maxWidth:380, lineHeight:1.9, marginBottom:28 }}>
        Votre demande est enregistrée. Notre équipe vous contactera dans les <strong>24 heures ouvrables</strong>.
      </p>
      <div style={{ background:'#FDF8F5', borderRadius:12, padding:20, border:'1px solid #EDE0D8', maxWidth:360, width:'100%', marginBottom:20 }}>
        {[['Type', form.type], ['Surface', `${form.surface} m²`], ['Ville', form.ville], ['Matériaux', form.materiau]].filter(([,v]) => v).map(([k, v]) => (
          <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #EDE0D8' }}>
            <span style={{ color:'#9B8880', fontSize:12 }}>{k}</span>
            <span style={{ fontWeight:600, color:DK, fontSize:12 }}>{v}</span>
          </div>
        ))}
      </div>
      <button
        onClick={() => { setSubmitted(false); setStep(1); setForm(FORM_INIT) }}
        style={{ background:`linear-gradient(135deg,${P},${AC})`, color:'white', border:'none', padding:'11px 24px', borderRadius:8, fontSize:12, fontWeight:700, cursor:'pointer', fontFamily:'inherit' }}
      >
        Faire un autre devis
      </button>
    </div>
  )

  return (
    <div style={{ maxWidth:640, margin:'0 auto' }}>
      {/* ── Indicateur d'étapes ── */}
      <StepsIndicator current={step} steps={STEPS_LABELS} />

      <div style={{ background:'white', borderRadius:20, padding:28, border:'1px solid #EDE0D8', boxShadow:'0 4px 20px rgba(92,34,6,.07)' }}>

        {/* Étape 1 : Type de maison */}
        {step === 1 && (
          <div>
            <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.2rem', fontWeight:700, color:DK, marginBottom:6 }}>Choisissez votre type de maison</h3>
            <p style={{ color:'#9B8880', fontSize:13, marginBottom:24 }}>Sélectionnez le type correspondant à vos besoins.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:12 }}>
              {HOUSE_TYPES.map(x => (
                <div key={x.type}
                  onClick={() => setForm({ ...form, type:x.type })}
                  style={{ padding:18, borderRadius:12, border:`2px solid ${form.type === x.type ? P : '#EDE0D8'}`, cursor:'pointer', transition:'all .2s', background: form.type === x.type ? `${P}07` : 'white' }}
                >
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6 }}>
                    <span style={{ fontFamily:"'Cinzel',serif", fontSize:'1.4rem', fontWeight:700, color: form.type === x.type ? P : DK }}>{x.type}</span>
                    {form.type === x.type && <CheckCircle size={18} style={{ color:P }} />}
                  </div>
                  <div style={{ fontWeight:700, color:DK, fontSize:12, marginBottom:3 }}>{x.pieces}</div>
                  <div style={{ color:'#9B8880', fontSize:11, marginBottom:8 }}>{x.desc}</div>
                  <div style={{ display:'flex', gap:6 }}>
                    <span style={{ background:`${AC}15`, color:'#8B3A0F', fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:100 }}>{x.surface}</span>
                    <span style={{ background:`${P}10`,  color:P, fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:100 }}>{x.prix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Étape 2 : Superficie & localisation */}
        {step === 2 && (
          <div>
            <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.2rem', fontWeight:700, color:DK, marginBottom:6 }}>Superficie & Localisation</h3>
            <p style={{ color:'#9B8880', fontSize:13, marginBottom:22 }}>Précisez la superficie souhaitée et l'emplacement.</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              {[
                ['Superficie (m²)',      'surface',  'number', '120'],
                ["Nb. de pièces",        'pieces',   'number', '3'  ],
                ["Nb. d'étages",         'etages',   'number', '1'  ],
                ['Ville / Commune',      'ville',    'text',   'Cocody, Abidjan'],
                ['Budget estimé (FCFA)', 'budget',   'text',   '45 000 000'],
                ['Délai souhaité',       'deadline', 'text',   'Déc. 2026'],
              ].map(([label, field, type, ph]) => (
                <div key={field} style={{ gridColumn: field === 'ville' || field === 'budget' ? '1 / 3' : 'auto' }}>
                  <label style={{ display:'block', color:'#4A3830', fontSize:10, fontWeight:700, marginBottom:5, letterSpacing:1, textTransform:'uppercase' }}>{label}</label>
                  <input type={type} value={form[field]} onChange={set(field)} placeholder={ph} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = P}
                    onBlur={e  => e.target.style.borderColor = '#E8D8CC'}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Étape 3 : Matériaux */}
        {step === 3 && (
          <div>
            <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.2rem', fontWeight:700, color:DK, marginBottom:6 }}>Qualité des Matériaux</h3>
            <p style={{ color:'#9B8880', fontSize:13, marginBottom:22 }}>Choisissez la gamme correspondant à votre budget.</p>
            {MATERIAUX_OPTIONS.map(opt => (
              <div key={opt.id}
                onClick={() => setForm({ ...form, materiau:opt.id })}
                style={{ display:'flex', alignItems:'center', gap:14, padding:16, borderRadius:11, border:`2px solid ${form.materiau === opt.id ? P : '#EDE0D8'}`, cursor:'pointer', transition:'all .2s', background: form.materiau === opt.id ? `${P}06` : 'white', marginBottom:10 }}
              >
                <div style={{ width:38, height:38, borderRadius:'50%', background:`${opt.color}18`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  {form.materiau === opt.id
                    ? <CheckCircle size={19} style={{ color:P }} />
                    : <Package     size={19} style={{ color:opt.color }} />
                  }
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:7, marginBottom:2 }}>
                    <span style={{ fontWeight:700, color:DK, fontSize:13 }}>{opt.label}</span>
                    <span style={{ fontSize:9, fontWeight:700, background:`${opt.color}20`, color:opt.color, padding:'2px 7px', borderRadius:100 }}>{opt.badge}</span>
                  </div>
                  <div style={{ color:'#9B8880', fontSize:11 }}>{opt.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop:14 }}>
              <label style={{ display:'block', color:'#4A3830', fontSize:10, fontWeight:700, marginBottom:6, letterSpacing:1, textTransform:'uppercase' }}>Informations complémentaires</label>
              <textarea value={form.desc} onChange={set('desc')} placeholder="Ex : garage, terrasse, clôture, piscine…" rows={3}
                style={{ ...inputStyle, resize:'vertical' }}
                onFocus={e => e.target.style.borderColor = P}
                onBlur={e  => e.target.style.borderColor = '#E8D8CC'}
              />
            </div>
          </div>
        )}

        {/* Étape 4 : Récapitulatif */}
        {step === 4 && (
          <div>
            <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.2rem', fontWeight:700, color:DK, marginBottom:6 }}>Récapitulatif</h3>
            <p style={{ color:'#9B8880', fontSize:13, marginBottom:22 }}>Vérifiez les informations avant de soumettre.</p>
            <div style={{ background:'#FDF8F5', borderRadius:11, padding:20, border:'1px solid #EDE0D8', marginBottom:16 }}>
              {[
                ['Type de maison', form.type],
                ['Superficie',     form.surface  ? `${form.surface} m²`    : ''],
                ['Pièces',         form.pieces],
                ['Étages',         form.etages],
                ['Localisation',   form.ville],
                ['Budget',         form.budget   ? `${form.budget} FCFA`   : ''],
                ['Matériaux',      form.materiau ? form.materiau.charAt(0).toUpperCase() + form.materiau.slice(1) : ''],
                ['Délai',          form.deadline],
              ].filter(([, v]) => v).map(([k, v], i, arr) => (
                <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'9px 0', borderBottom: i < arr.length - 1 ? '1px solid #EDE0D8' : 'none' }}>
                  <span style={{ color:'#9B8880', fontSize:12 }}>{k}</span>
                  <span style={{ fontWeight:600, color:DK, fontSize:12 }}>{v}</span>
                </div>
              ))}
            </div>
            {form.desc && (
              <div style={{ background:`${AC}10`, borderRadius:9, padding:14, border:`1px solid ${AC}25`, marginBottom:14 }}>
                <div style={{ color:AC, fontSize:10, fontWeight:700, letterSpacing:1, marginBottom:4 }}>INFORMATIONS COMPLÉMENTAIRES</div>
                <div style={{ color:'#4A3830', fontSize:12 }}>{form.desc}</div>
              </div>
            )}
            <div style={{ background:`${P}08`, borderRadius:9, padding:14, border:`1px solid ${P}18` }}>
              <div style={{ color:P, fontSize:12, fontWeight:700, marginBottom:3 }}>⏱ Délai de réponse</div>
              <div style={{ color:'#4A3830', fontSize:12 }}>Notre équipe vous contactera dans les <strong>24h ouvrables</strong> pour confirmer et planifier la visite terrain.</div>
            </div>
          </div>
        )}

        {/* Boutons de navigation */}
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:24, gap:10 }}>
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} style={{ padding:'11px 22px', borderRadius:8, border:'1px solid #EDE0D8', background:'white', color:'#6B5E56', fontSize:12, fontWeight:600, cursor:'pointer', fontFamily:'inherit' }}>
              ← Précédent
            </button>
          )}
          <button
            onClick={() => step < 4 ? setStep(step + 1) : setSubmitted(true)}
            disabled={step === 1 && !form.type}
            style={{ marginLeft:'auto', background:`linear-gradient(135deg,${P},${AC})`, color:'white', border:'none', padding:'11px 24px', borderRadius:8, fontSize:12, fontWeight:700, letterSpacing:1, cursor:'pointer', fontFamily:'inherit', opacity: (step === 1 && !form.type) ? .5 : 1 }}
          >
            {step < 4 ? 'SUIVANT →' : '✓ SOUMETTRE MON DEVIS'}
          </button>
        </div>
      </div>
    </div>
  )
}

// Composant indicateur de progression
function StepsIndicator({ current, steps }) {
  return (
    <div style={{ display:'flex', alignItems:'center', marginBottom:32 }}>
      {steps.map((label, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', flex: i < steps.length - 1 ? 1 : 'none' }}>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:5 }}>
            <div style={{
              width:34, height:34, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:13, fontWeight:700, transition:'all .3s',
              background : current > i + 1 ? '#16A34A' : current === i + 1 ? P : '#EDE0D8',
              color      : current >= i + 1 ? 'white' : '#9B8880',
              border     : current === i + 1 ? `3px solid ${AC}` : '3px solid transparent',
            }}>
              {current > i + 1 ? <Check size={15} /> : i + 1}
            </div>
            <span style={{ fontSize:9, color: current >= i + 1 ? P : '#9B8880', fontWeight:600, letterSpacing:.5, textAlign:'center', whiteSpace:'nowrap' }}>
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div style={{ flex:1, height:2, background: current > i + 1 ? '#16A34A' : '#EDE0D8', margin:'0 6px', marginBottom:20, transition:'background .3s' }} />
          )}
        </div>
      ))}
    </div>
  )
}
