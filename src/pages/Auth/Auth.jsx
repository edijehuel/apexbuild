// ============================================================
//  Auth.jsx — Page de connexion / inscription
// ============================================================
import { useState } from 'react'
import { Check, Shield, Award, AlertCircle } from 'lucide-react'
import { USERS } from '../../constants/mockData.js'
import { P, AC, DK, LT } from '../../constants/brand.js'

export default function Auth({ mode, onLogin, onBack, onSwitch }) {
  const [form,    setForm]    = useState({ name:'', email:'', password:'' })
  const [error,   setError]   = useState('')
  const [loading, setLoading] = useState(false)

  const set = field => e => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = () => {
    setError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (mode === 'login') {
        const user = USERS.find(u => u.email === form.email && u.pass === form.password)
        user ? onLogin(user) : setError('Email ou mot de passe incorrect.')
      } else {
        if (!form.name || !form.email || !form.password) {
          setError('Veuillez remplir tous les champs obligatoires.')
          return
        }
        onLogin({ id:99, email:form.email, role:'client', name:form.name, av:form.name[0].toUpperCase() })
      }
    }, 900)
  }

  const inputStyle = {
    width:'100%', padding:'11px 14px', border:'1px solid #E8D8CC', borderRadius:8,
    fontSize:13, outline:'none', fontFamily:"'Josefin Sans',sans-serif",
    color:DK, boxSizing:'border-box', transition:'border-color .2s', background:'white',
  }

  return (
    <div style={{ minHeight:'100vh', display:'flex', fontFamily:"'Josefin Sans',sans-serif" }}>

      {/* Panneau gauche (branding) */}
      <div className="desktop-only" style={{
        flex:1, background:`linear-gradient(135deg,${DK},${P})`,
        display:'flex', flexDirection:'column', justifyContent:'center',
        padding:'4rem 3rem', position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', inset:0, opacity:.05, backgroundImage:`repeating-linear-gradient(45deg,${AC} 0,${AC} 1px,transparent 0,transparent 50%)`, backgroundSize:'20px 20px' }} />
        <div style={{ position:'relative', zIndex:1 }}>
          {/* Logo */}
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:52 }}>
            <div style={{ width:44, height:44, background:`linear-gradient(135deg,${P},${AC})`, borderRadius:11, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <span style={{ color:'white', fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:20 }}>A</span>
            </div>
            <div>
              <div style={{ color:'white', fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:18, letterSpacing:2 }}>APEXBUILD</div>
              <div style={{ color:AC, fontSize:8, letterSpacing:3 }}>GAME CHANGER</div>
            </div>
          </div>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'2.2rem', fontWeight:700, color:'white', lineHeight:1.2, marginBottom:20 }}>
            {mode === 'login' ? 'Bienvenue\nà nouveau' : 'Rejoignez\nla révolution'}
          </h2>
          <p style={{ color:'rgba(255,255,255,.6)', lineHeight:1.85, fontSize:14, marginBottom:24 }}>
            Plateforme #1 de construction numérique en Afrique.
          </p>
          {[[Check,'Devis automatique en 3 min'],[Shield,'Paiements 100% sécurisés'],[Award,'Ingénieurs certifiés']].map(([Icon, label], i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:26, height:26, background:AC, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <Icon size={13} color="white" />
              </div>
              <span style={{ color:'rgba(255,255,255,.8)', fontSize:13 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Panneau droit (formulaire) */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', padding:'3rem 2.5rem', background:LT, maxWidth:480, width:'100%' }}>
        <button onClick={onBack} style={{ background:'none', border:'none', color:AC, cursor:'pointer', display:'flex', alignItems:'center', gap:6, marginBottom:36, fontSize:12, letterSpacing:1, fontFamily:'inherit' }}>
          ← Retour à l'accueil
        </button>

        <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:'1.6rem', fontWeight:700, color:DK, marginBottom:6 }}>
          {mode === 'login' ? 'Connexion' : 'Créer un compte'}
        </h2>
        <p style={{ color:'#9B8880', fontSize:13, marginBottom:24 }}>
          {mode === 'login' ? 'Accédez à votre espace APEXBUILD' : 'Rejoignez 500+ familles qui construisent avec nous'}
        </p>

        {/* Astuce démo */}
        {mode === 'login' && (
          <div style={{ background:`${AC}15`, border:`1px solid ${AC}40`, borderRadius:8, padding:'10px 14px', marginBottom:20, fontSize:12, color:'#6B3E1A' }}>
            <strong>Admin :</strong> admin@apexbuild.ci / admin123<br />
            <strong>Client :</strong> arnaud@apexbuild.ci / client123
          </div>
        )}

        {/* Champs */}
        {mode === 'register' && (
          <Field label="Nom complet *" value={form.name} onChange={set('name')} placeholder="Jean-Marc Koffi" style={inputStyle} />
        )}
        <Field label="Email *"         value={form.email}    onChange={set('email')}    placeholder="votre@email.ci"  type="email"    style={inputStyle} />
        <Field label="Mot de passe *"  value={form.password} onChange={set('password')} placeholder="••••••••"        type="password" style={inputStyle} />

        {/* Erreur */}
        {error && (
          <div style={{ background:'#FEE2E2', border:'1px solid #FECACA', borderRadius:7, padding:'9px 13px', color:'#991B1B', fontSize:12, marginBottom:14, display:'flex', alignItems:'center', gap:7 }}>
            <AlertCircle size={14} />{error}
          </div>
        )}

        {/* Bouton soumettre */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{ background:`linear-gradient(135deg,${P},${AC})`, color:'white', border:'none', padding:'13px', borderRadius:8, fontSize:13, letterSpacing:2, fontWeight:700, width:'100%', textTransform:'uppercase', marginBottom:18, opacity:loading ? .7 : 1, cursor:'pointer', fontFamily:'inherit' }}
        >
          {loading ? '...' : mode === 'login' ? 'SE CONNECTER' : 'CRÉER MON COMPTE'}
        </button>

        {/* Switch mode */}
        <div style={{ textAlign:'center', color:'#9B8880', fontSize:13 }}>
          {mode === 'login'
            ? <> Pas de compte ? <span onClick={() => onSwitch('register')} style={{ color:P, cursor:'pointer', fontWeight:700 }}>S'inscrire</span></>
            : <> Déjà inscrit ? <span onClick={() => onSwitch('login')} style={{ color:P, cursor:'pointer', fontWeight:700 }}>Se connecter</span></>
          }
        </div>
      </div>
    </div>
  )
}

// Champ de formulaire réutilisable
function Field({ label, value, onChange, placeholder, type = 'text', style }) {
  return (
    <div style={{ marginBottom:16 }}>
      <label style={{ display:'block', color:'#4A3830', fontSize:11, fontWeight:700, marginBottom:6, letterSpacing:1, textTransform:'uppercase' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        onFocus={e  => e.target.style.borderColor = '#5C2206'}
        onBlur={e   => e.target.style.borderColor = '#E8D8CC'}
      />
    </div>
  )
}
