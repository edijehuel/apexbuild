// ============================================================
//  AdminDashboard.jsx — Tableau de bord administrateur
//  Orchestre les onglets et injecte les vues dans le Layout
// ============================================================
import { useState } from 'react'
import { BarChart2, FileText, Building2, Users, Package, Settings } from 'lucide-react'
import Layout         from '../../components/Layout.jsx'
import Overview       from './views/Overview.jsx'
import DevisView      from './views/DevisView.jsx'
import ProjectsView   from './views/ProjectsView.jsx'
import ClientsView    from './views/ClientsView.jsx'
import MaterialsView  from './views/MaterialsView.jsx'

// Onglets de la sidebar admin
const TABS = [
  { id:'overview',   label:'Vue Globale',  icon:BarChart2  },
  { id:'devis',      label:'Devis',        icon:FileText   },
  { id:'projects',   label:'Projets',      icon:Building2  },
  { id:'clients',    label:'Clients',      icon:Users      },
  { id:'materials',  label:'Matériaux',    icon:Package    },
  { id:'settings',   label:'Paramètres',   icon:Settings   },
]

export default function AdminDashboard({ user, onLogout }) {
  const [tab, setTab] = useState('overview')

  const renderView = () => {
    switch (tab) {
      case 'overview'  : return <Overview />
      case 'devis'     : return <DevisView />
      case 'projects'  : return <ProjectsView />
      case 'clients'   : return <ClientsView />
      case 'materials' : return <MaterialsView />
      default          : return <div style={{ color:'#9B8880', padding:48, textAlign:'center' }}>Section en développement…</div>
    }
  }

  return (
    <Layout user={user} tabs={TABS} tab={tab} setTab={setTab} onLogout={onLogout}>
      {renderView()}
    </Layout>
  )
}
