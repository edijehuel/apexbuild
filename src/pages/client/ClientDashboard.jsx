// ============================================================
//  ClientDashboard.jsx — Tableau de bord client
// ============================================================
import { useState } from 'react'
import { Home, FileText, Building2, Package, HardHat } from 'lucide-react'
import Layout        from '../../components/Layout.jsx'
import ClientOverview from './views/ClientOverview.jsx'
import DevisForm     from './views/DevisForm.jsx'
import ClientProjects from './views/ClientProjects.jsx'
import Marketplace   from './views/Marketplace.jsx'
import Tracking      from './views/Tracking.jsx'

const TABS = [
  { id:'overview',    label:'Mon Espace',       icon:Home      },
  { id:'devis',       label:'Demande de Devis', icon:FileText  },
  { id:'projects',    label:'Mes Projets',      icon:Building2 },
  { id:'marketplace', label:'Marketplace',      icon:Package   },
  { id:'tracking',    label:'Suivi Chantier',   icon:HardHat   },
]

export default function ClientDashboard({ user, onLogout }) {
  const [tab, setTab] = useState('overview')

  const renderView = () => {
    switch (tab) {
      case 'overview'    : return <ClientOverview onNavigate={setTab} user={user} />
      case 'devis'       : return <DevisForm />
      case 'projects'    : return <ClientProjects onNavigate={setTab} />
      case 'marketplace' : return <Marketplace />
      case 'tracking'    : return <Tracking />
      default            : return null
    }
  }

  return (
    <Layout user={user} tabs={TABS} tab={tab} setTab={setTab} onLogout={onLogout}>
      {renderView()}
    </Layout>
  )
}
