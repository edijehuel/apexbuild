// ─────────────────────────────────────────────
//  🎨  APEXBUILD — Charte graphique
//  Modifiez ces valeurs pour changer tout le design
// ─────────────────────────────────────────────

export const P   = '#5C2206'  // Marron profond  → couleur principale
export const PA  = '#8B3A0F'  // Marron moyen    → hover / variante
export const AC  = '#C47A3A'  // Caramel / Or    → accent & highlights
export const GD  = '#D4A853'  // Or clair        → étoiles, badges
export const DK  = '#1A0A02'  // Quasi-noir      → textes forts
export const LT  = '#FDF8F5'  // Blanc cassé     → fonds clairs
export const MT  = '#F5EDE6'  // Beige moyen     → sections alternées

// Polices (chargées dans index.html via Google Fonts)
export const FONT_TITLE = "'Cinzel', serif"
export const FONT_BODY  = "'Josefin Sans', sans-serif"

// Raccourcis styles inline souvent réutilisés
export const cardStyle = (extra = {}) => ({
  background : 'white',
  borderRadius: 16,
  border      : '1px solid #EDE0D8',
  padding     : 24,
  ...extra,
})

export const btnStyle = (extra = {}) => ({
  border      : 'none',
  cursor      : 'pointer',
  fontFamily  : FONT_BODY,
  transition  : 'all .2s',
  ...extra,
})
