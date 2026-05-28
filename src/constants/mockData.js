// ============================================================
//  mockData.js — Données de démonstration APEXBUILD
// ============================================================

export const USERS = [
  { id:1, email:'admin@apexbuild.ci',  pass:'admin123',  role:'admin',  name:'Assale Jehuel',  av:'AJ' },
  { id:2, email:'arnaud@apexbuild.ci', pass:'client123', role:'client', name:'Koffi Arnaud',   av:'KA' },
  { id:3, email:'joelle@apexbuild.ci', pass:'client123', role:'client', name:'Koffi Joelle',   av:'KJ' },
  { id:4, email:'joel@apexbuild.ci',   pass:'client123', role:'client', name:'Bley Joel',      av:'BJ' },
]

export const MONTHLY_STATS = [
  { m:'Jan', projets:4,  ca:12500000 },
  { m:'Fév', projets:6,  ca:18700000 },
  { m:'Mar', projets:8,  ca:24300000 },
  { m:'Avr', projets:5,  ca:15900000 },
  { m:'Mai', projets:9,  ca:28400000 },
  { m:'Jun', projets:11, ca:33600000 },
  { m:'Jul', projets:7,  ca:21200000 },
  { m:'Aoû', projets:12, ca:36800000 },
]

export const PIE_TYPES = [
  { name:'F1', value:15, color:'#D4A853' },
  { name:'F2', value:28, color:'#8B3A0F' },
  { name:'F3', value:35, color:'#5C2206' },
  { name:'F4', value:22, color:'#C47A3A' },
]

export const ALL_DEVIS = [
  { id:'DV-001', client:'Koffi Arnaud',  type:'F3', surface:120, ville:'Cocody',      budget:'45 000 000', statut:'En attente', date:'22 Mai 2026' },
  { id:'DV-002', client:'Koffi Joelle',  type:'F2', surface:85,  ville:'Yopougon',    budget:'28 000 000', statut:'Approuvé',   date:'20 Mai 2026' },
  { id:'DV-003', client:'Bley Joel',     type:'F4', surface:180, ville:'Bingerville', budget:'72 000 000', statut:'En cours',   date:'18 Mai 2026' },
  { id:'DV-004', client:'Koffi Arnaud',  type:'F1', surface:60,  ville:'Abobo',       budget:'18 000 000', statut:'Approuvé',   date:'15 Mai 2026' },
  { id:'DV-005', client:'Bley Joel',     type:'F3', surface:135, ville:'Marcory',     budget:'52 000 000', statut:'Rejeté',     date:'12 Mai 2026' },
]

export const ALL_PROJECTS = [
  { id:'PROJ-001', name:'Villa F3 Cocody',      client:'Koffi Arnaud', phase:'Fondations', progress:25, budget:'45M FCFA', dl:'Nov 2026' },
  { id:'PROJ-002', name:'Maison F2 Yopougon',   client:'Koffi Joelle', phase:'Gros Œuvre', progress:60, budget:'28M FCFA', dl:'Aoû 2026' },
  { id:'PROJ-003', name:'Villa F4 Bingerville', client:'Bley Joel',    phase:'Toiture',    progress:75, budget:'72M FCFA', dl:'Jul 2026' },
  { id:'PROJ-004', name:'Studio F1 Abobo',      client:'Koffi Arnaud', phase:'Finitions',  progress:90, budget:'18M FCFA', dl:'Jun 2026' },
]

export const MATERIALS = [
  { id:1, name:'Ciment CPA 42.5',  cat:'Maçonnerie', price:'8 500',  unit:'Sac 50kg', stock:248,  ico:'🏗' },
  { id:2, name:'Fer à béton 12mm', cat:'Ferraillage', price:'45 000', unit:'Barre 12m', stock:180, ico:'⚙'  },
  { id:3, name:'Sable de rivière', cat:'Granulats',   price:'35 000', unit:'M³',       stock:95,   ico:'🟡' },
  { id:4, name:'Gravier 10/20',    cat:'Granulats',   price:'42 000', unit:'M³',       stock:72,   ico:'⬛' },
  { id:5, name:'Brique de 15',     cat:'Maçonnerie',  price:'450',    unit:'Unité',    stock:5000, ico:'🟫' },
  { id:6, name:'Tôle bac acier',   cat:'Couverture',  price:'28 000', unit:'ml',       stock:140,  ico:'🔵' },
]

export const HOUSE_TYPES = [
  { type:'F1', pieces:'1 Pièce',  desc:"Studio + salle d'eau",              surface:'40–60 m²',   prix:'15–22M FCFA' },
  { type:'F2', pieces:'2 Pièces', desc:'Chambre + salon + salle d\'eau',     surface:'60–90 m²',   prix:'22–35M FCFA' },
  { type:'F3', pieces:'3 Pièces', desc:'2 chambres + salon + cuisine + 2SDB', surface:'90–140 m²', prix:'35–55M FCFA' },
  { type:'F4', pieces:'4 Pièces', desc:'3 chambres + salon + cuisine + 2SDB', surface:'140–200 m²',prix:'55–90M FCFA' },
]
