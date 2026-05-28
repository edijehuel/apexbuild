// ============================================================
//  Badge.jsx — Pastille de statut colorée
//  Usage : <Badge status="Approuvé" />
// ============================================================

const STATUS_STYLES = {
  'En attente' : { bg:'#FEF3C7', color:'#92400E' },
  'Approuvé'   : { bg:'#D1FAE5', color:'#065F46' },
  'En cours'   : { bg:'#DBEAFE', color:'#1E40AF' },
  'Rejeté'     : { bg:'#FEE2E2', color:'#991B1B' },
  'Fondations' : { bg:'#FEF3C7', color:'#92400E' },
  'Gros Œuvre' : { bg:'#DBEAFE', color:'#1E40AF' },
  'Toiture'    : { bg:'#EDE9FE', color:'#4C1D95' },
  'Finitions'  : { bg:'#D1FAE5', color:'#065F46' },
}

export default function Badge({ status }) {
  const style = STATUS_STYLES[status] || { bg:'#F3F4F6', color:'#374151' }
  return (
    <span style={{
      background  : style.bg,
      color       : style.color,
      padding     : '3px 10px',
      borderRadius: 100,
      fontSize    : 11,
      fontWeight  : 700,
      whiteSpace  : 'nowrap',
    }}>
      {status}
    </span>
  )
}
