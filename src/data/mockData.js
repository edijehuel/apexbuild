// ─────────────────────────────────────────────
//  📦  APEXBUILD — Données Mock
//  Remplacez ces données par de vraies API
//  quand vous connecterez un backend.
// ─────────────────────────────────────────────

// ── Utilisateurs (comptes de démonstration) ──
export const USERS = [
  {
    id    : 1,
    email : 'admin@apexbuild.ci',
    pass  : 'admin123',
    role  : 'admin',
    name  : 'Koffi Jean-Marc',
    av    : 'K',
    phone : '+225 07 00 00 01',
  },
  {
    id    : 2,
    email : 'winner@apexbuild.ci',
    pass  : 'winner123',
    role  : 'client',
    name  : 'Assale Jehuel Winner',
    av    : 'A',
    phone : '+225 01 02 03 04',
  },
  {
    id    : 3,
    email : 'fatou@apexbuild.ci',
    pass  : 'client123',
    role  : 'client',
    name  : 'Coulibaly Fatou',
    av    : 'F',
    phone : '+225 05 06 07 08',
  },
]

// ── Statistiques mensuelles (pour les graphiques admin) ──
export const MONTHLY_STATS = [
  { mois: 'Jan', projets: 4,  ca: 12_500_000 },
  { mois: 'Fév', projets: 6,  ca: 18_700_000 },
  { mois: 'Mar', projets: 8,  ca: 24_300_000 },
  { mois: 'Avr', projets: 5,  ca: 15_900_000 },
  { mois: 'Mai', projets: 9,  ca: 28_400_000 },
  { mois: 'Jun', projets: 11, ca: 33_600_000 },
  { mois: 'Jul', projets: 7,  ca: 21_200_000 },
  { mois: 'Aoû', projets: 12, ca: 36_800_000 },
]

// ── Répartition des types de maison (camembert) ──
export const HOUSE_TYPES = [
  { name: 'F1', value: 15, color: '#D4A853' },
  { name: 'F2', value: 28, color: '#8B3A0F' },
  { name: 'F3', value: 35, color: '#5C2206' },
  { name: 'F4', value: 22, color: '#C47A3A' },
]

// ── Devis ──
export const ALL_DEVIS = [
  { id: 'DV-001', client: 'Assale Winner',   type: 'F3', surface: 120, ville: 'Cocody',      budget: '45 000 000', statut: 'En attente', date: '22 Mai 2026' },
  { id: 'DV-002', client: 'Coulibaly Fatou', type: 'F2', surface: 85,  ville: 'Yopougon',    budget: '28 000 000', statut: 'Approuvé',   date: '20 Mai 2026' },
  { id: 'DV-003', client: 'Traoré Moussa',   type: 'F4', surface: 180, ville: 'Bingerville', budget: '72 000 000', statut: 'En cours',   date: '18 Mai 2026' },
  { id: 'DV-004', client: 'Kouassi Aya',     type: 'F1', surface: 60,  ville: 'Abobo',       budget: '18 000 000', statut: 'Approuvé',   date: '15 Mai 2026' },
  { id: 'DV-005', client: 'Bamba Ibrahim',   type: 'F3', surface: 135, ville: 'Marcory',     budget: '52 000 000', statut: 'Rejeté',     date: '12 Mai 2026' },
]

// ── Projets ──
export const ALL_PROJECTS = [
  { id: 'PROJ-001', name: 'Villa F3 Cocody',      client: 'Assale Winner',   phase: 'Fondations', progress: 25, budget: '45M FCFA', dl: 'Nov 2026' },
  { id: 'PROJ-002', name: 'Maison F2 Yopougon',   client: 'Coulibaly Fatou', phase: 'Gros Œuvre', progress: 60, budget: '28M FCFA', dl: 'Aoû 2026' },
  { id: 'PROJ-003', name: 'Villa F4 Bingerville', client: 'Traoré Moussa',   phase: 'Toiture',    progress: 75, budget: '72M FCFA', dl: 'Jul 2026' },
  { id: 'PROJ-004', name: 'Studio F1 Abobo',      client: 'Kouassi Aya',     phase: 'Finitions',  progress: 90, budget: '18M FCFA', dl: 'Jun 2026' },
]

// ── Matériaux de construction ──
export const MATERIALS = [
  { id: 1, name: 'Ciment CPA 42.5',  cat: 'Maçonnerie',  price: '8 500 FCFA',  unit: 'Sac 50 kg', stock: 248, ico: '🏗' },
  { id: 2, name: 'Fer à béton 12mm', cat: 'Ferraillage',  price: '45 000 FCFA', unit: 'Barre 12m', stock: 180, ico: '⚙' },
  { id: 3, name: 'Sable de rivière', cat: 'Granulats',    price: '35 000 FCFA', unit: 'M³',        stock: 95,  ico: '🟡' },
  { id: 4, name: 'Gravier 10/20',    cat: 'Granulats',    price: '42 000 FCFA', unit: 'M³',        stock: 72,  ico: '⬛' },
  { id: 5, name: 'Brique de 15',     cat: 'Maçonnerie',   price: '450 FCFA',    unit: 'Unité',     stock: 5000,ico: '🟫' },
  { id: 6, name: 'Tôle bac acier',   cat: 'Couverture',   price: '28 000 FCFA', unit: 'ml',        stock: 140, ico: '🔵' },
]

// ── Phases du chantier (suivi client) ──
export const CHANTIER_PHASES = [
  { label: 'Études & Plans', done: true,  current: false, pct: 100, date: '10 Mars 2026' },
  { label: 'Fondations',     done: true,  current: false, pct: 100, date: '28 Mars 2026' },
  { label: 'Gros Œuvre',     done: false, current: true,  pct: 40,  date: 'En cours'     },
  { label: 'Toiture',        done: false, current: false, pct: 0,   date: 'Juil 2026'    },
  { label: 'Finitions',      done: false, current: false, pct: 0,   date: 'Sept 2026'    },
  { label: 'Livraison',      done: false, current: false, pct: 0,   date: 'Nov 2026'     },
]
