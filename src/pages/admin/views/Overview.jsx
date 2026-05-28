// ============================================================
//  Overview.jsx — Vue globale admin (KPIs + 3 graphiques)
// ============================================================
import { Building2, FileText, TrendingUp, Users } from 'lucide-react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import StatCard from '../../../components/StatCard.jsx'
import { MONTHLY_STATS, PIE_TYPES } from '../../../constants/mockData.js'
import { P, AC, DK } from '../../../constants/brand.js'

const cardStyle = { background:'white', borderRadius:16, padding:24, border:'1px solid #EDE0D8' }

export default function Overview() {
  return (
    <div>
      {/* ── KPIs ── */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))', gap:16, marginBottom:28 }}>
        <StatCard label="Projets Actifs"        value="12"   icon={Building2}  color={P}         sub="+3 ce mois"  />
        <StatCard label="Devis en Attente"       value="5"    icon={FileText}   color={AC}        sub="+2 hier"     />
        <StatCard label="CA Mensuel (M FCFA)"    value="36.8" icon={TrendingUp} color="#16A34A"   sub="+12.5% ce mois" />
        <StatCard label="Clients Actifs"         value="48"   icon={Users}      color="#3B82F6"   sub="+5 ce mois"  />
      </div>

      {/* ── Ligne 2 : AreaChart + PieChart ── */}
      <div style={{ display:'grid', gridTemplateColumns:'3fr 2fr', gap:20, marginBottom:20 }}>
        {/* CA mensuel */}
        <div style={cardStyle}>
          <div style={{ marginBottom:16 }}>
            <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, color:DK, fontSize:'.95rem' }}>Chiffre d'Affaires Mensuel</div>
            <div style={{ color:'#9B8880', fontSize:11 }}>Évolution 8 mois · FCFA</div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={MONTHLY_STATS}>
              <defs>
                <linearGradient id="caGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={P} stopOpacity={.25} />
                  <stop offset="95%" stopColor={P} stopOpacity={0}   />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0E8E0" />
              <XAxis dataKey="m"  tick={{ fontSize:11, fill:'#9B8880' }} />
              <YAxis             tick={{ fontSize:10, fill:'#9B8880' }} tickFormatter={v => `${(v/1e6).toFixed(0)}M`} />
              <Tooltip           formatter={v => [`${(v/1e6).toFixed(1)}M FCFA`, 'CA']} />
              <Area type="monotone" dataKey="ca" stroke={P} fill="url(#caGrad)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Types de maisons */}
        <div style={cardStyle}>
          <div style={{ marginBottom:16 }}>
            <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, color:DK, fontSize:'.95rem' }}>Types de Maisons</div>
            <div style={{ color:'#9B8880', fontSize:11 }}>Répartition des projets</div>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={PIE_TYPES} cx="50%" cy="50%" innerRadius={42} outerRadius={68} paddingAngle={3} dataKey="value">
                {PIE_TYPES.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v, n) => [`${v}%`, n]} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6, justifyContent:'center', marginTop:8 }}>
            {PIE_TYPES.map((d, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:4 }}>
                <div style={{ width:7, height:7, borderRadius:'50%', background:d.color }} />
                <span style={{ fontSize:10, color:'#6B5E56' }}>{d.name} {d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projets par mois ── */}
      <div style={cardStyle}>
        <div style={{ marginBottom:16 }}>
          <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, color:DK, fontSize:'.95rem' }}>Projets Démarrés par Mois</div>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={MONTHLY_STATS}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F0E8E0" />
            <XAxis dataKey="m"       tick={{ fontSize:11, fill:'#9B8880' }} />
            <YAxis                   tick={{ fontSize:11, fill:'#9B8880' }} />
            <Tooltip />
            <Bar dataKey="projets" fill={AC} radius={[5,5,0,0]} name="Projets" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
