// ─────────────────────────────────────────────
//  🏠  Landing — page d'accueil publique
//  Sections : Navbar · Hero · Services ·
//             Processus · Témoignages · CTA · Footer
// ─────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { ArrowRight, ChevronRight, MapPin, Star, Check, Shield, Award, Menu, X, HardHat, Package, FileText } from 'lucide-react'
import { P, PA, AC, GD, DK, LT, MT, FONT_TITLE, FONT_BODY, btnStyle } from '../brand'

export default function Landing({ onLogin, onRegister }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  // Navbar devient solide après 40px de scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // ── Données ──────────────────────────────────
  const STATS = [
    { val: '500+',  label: 'Projets Réalisés'  },
    { val: '98%',   label: 'Satisfaction'       },
    { val: '15 ans',label: "D'Expérience"       },
    { val: '50+',   label: 'Ingénieurs Certifiés'},
  ]

  const SERVICES = [
    { Icon: FileText, title: 'Devis Automatique',  color: P,
      desc: 'Obtenez un devis précis en quelques minutes selon votre type de maison (F1–F4), la superficie et les standards locaux.' },
    { Icon: Package,  title: 'Marketplace BTP',    color: AC,
      desc: 'Achetez ciment, fer, sable et équipements aux meilleurs prix avec livraison garantie directement sur votre chantier.' },
    { Icon: HardHat,  title: 'Suivi de Chantier',  color: PA,
      desc: 'Suivez votre construction en temps réel depuis n\'importe où. Nos ingénieurs certifiés supervisent chaque phase.' },
  ]

  const STEPS = [
    { n: '01', t: 'Demandez votre devis',    d: 'Remplissez le formulaire et obtenez une estimation instantanée.' },
    { n: '02', t: 'Validation du projet',    d: 'Notre équipe analyse votre projet et propose un plan détaillé.' },
    { n: '03', t: 'Approvisionnement',       d: 'Commandez vos matériaux directement sur notre marketplace.' },
    { n: '04', t: 'Construction & Suivi',    d: 'Nos ingénieurs supervisent votre chantier avec rapports hebdomadaires.' },
  ]

  const TESTIMONIALS = [
    { name: 'Coulibaly Abdoulaye', ville: 'Cocody',         txt: 'Transparence totale sur les coûts, matériaux de qualité et suivi impeccable. APEXBUILD a changé ma façon de construire.' },
    { name: 'Traoré Mariam',       ville: 'Diaspora – Paris',txt: "Depuis Paris, j'ai suivi chaque étape de ma maison en Côte d'Ivoire. Le dashboard est incroyable. Merci APEXBUILD !" },
    { name: 'Koné Issouf',         ville: 'Bouaké',          txt: 'Le meilleur service de construction. Devis précis et prix imbattables sur la marketplace.' },
  ]

  // ── Render ────────────────────────────────────
  return (
    <div style={{ fontFamily: FONT_BODY, background: LT, overflowX: 'hidden' }}>

      {/* ──────── NAVBAR ──────── */}
      <nav style={{
        position     : 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background   : scrolled ? 'rgba(26,10,2,.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition   : 'all .4s',
        borderBottom : scrolled ? `1px solid rgba(196,122,58,.2)` : 'none',
        padding      : '0 2rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 40, height: 40, background: `linear-gradient(135deg,${P},${AC})`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontFamily: FONT_TITLE, fontWeight: 700, fontSize: 18 }}>A</span>
            </div>
            <div>
              <div style={{ color: 'white', fontFamily: FONT_TITLE, fontWeight: 700, fontSize: 16, letterSpacing: 2 }}>APEXBUILD</div>
              <div style={{ color: AC, fontSize: 8, letterSpacing: 3 }}>GAME CHANGER</div>
            </div>
          </div>

          {/* Liens desktop */}
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="hide-mobile">
            {['Services', 'Processus', 'Témoignages'].map(l => (
              <span key={l} style={{ color: 'rgba(255,255,255,.75)', fontSize: 12, letterSpacing: 1, cursor: 'pointer', transition: 'color .2s', textTransform: 'uppercase' }}
                onMouseEnter={e => e.target.style.color = AC}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.75)'}>
                {l}
              </span>
            ))}
            <button onClick={onLogin}
              style={{ ...btnStyle(), color: 'rgba(255,255,255,.8)', background: 'transparent', border: '1px solid rgba(255,255,255,.25)', padding: '8px 18px', borderRadius: 7, fontSize: 12 }}
              onMouseEnter={e => { e.target.style.borderColor = AC; e.target.style.color = AC }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,.25)'; e.target.style.color = 'rgba(255,255,255,.8)' }}>
              CONNEXION
            </button>
            <button onClick={onRegister}
              style={{ ...btnStyle(), background: `linear-gradient(135deg,${P},${AC})`, color: 'white', padding: '8px 18px', borderRadius: 7, fontSize: 12, fontWeight: 700 }}>
              COMMENCER
            </button>
          </div>

          {/* Burger mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ ...btnStyle(), color: 'white', background: 'none' }} className="hide-desktop">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div style={{ background: DK, padding: '1rem 2rem', borderTop: `1px solid rgba(196,122,58,.2)` }}>
            {['Services', 'Processus', 'Témoignages'].map(l => (
              <div key={l} style={{ color: 'rgba(255,255,255,.75)', padding: '10px 0', fontSize: 13 }}>{l}</div>
            ))}
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button onClick={onLogin}    style={{ ...btnStyle(), flex: 1, color: 'white', border: '1px solid rgba(255,255,255,.25)', background: 'transparent', padding: '10px', borderRadius: 7, fontSize: 12 }}>CONNEXION</button>
              <button onClick={onRegister} style={{ ...btnStyle(), flex: 1, background: `linear-gradient(135deg,${P},${AC})`, color: 'white', padding: '10px', borderRadius: 7, fontSize: 12, fontWeight: 700 }}>COMMENCER</button>
            </div>
          </div>
        )}
      </nav>

      {/* ──────── HERO ──────── */}
      <section style={{
        minHeight  : '100vh',
        background : `linear-gradient(135deg,${DK} 0%,#2C0E02 40%,${P} 100%)`,
        display    : 'flex', alignItems: 'center', justifyContent: 'center',
        padding    : '7rem 2rem 4rem',
        position   : 'relative', overflow: 'hidden',
      }}>
        {/* Arrière-plan quadrillage */}
        <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: `repeating-linear-gradient(45deg,${AC} 0,${AC} 1px,transparent 0,transparent 50%)`, backgroundSize: '20px 20px' }} />
        {/* Halos */}
        <div style={{ position: 'absolute', top: '15%', right: '8%',  width: 350, height: 350, background: AC, borderRadius: '50%', opacity: .07, filter: 'blur(70px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '3%', width: 250, height: 250, background: P,  borderRadius: '50%', opacity: .15, filter: 'blur(55px)' }} />

        <div style={{ maxWidth: 900, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Pastille */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,122,58,.15)', border: `1px solid rgba(196,122,58,.3)`, borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, background: AC, borderRadius: '50%' }} />
            <span style={{ color: AC, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase' }}>Game Changer · Construction Africaine</span>
          </div>

          {/* Titre */}
          <h1 style={{ fontFamily: FONT_TITLE, fontSize: 'clamp(2.2rem,7vw,5.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.1, marginBottom: 22 }}>
            CONSTRUISONS<br /><span style={{ color: AC }}>VOTRE AVENIR</span>
          </h1>

          {/* Sous-titre */}
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 'clamp(.95rem,2vw,1.15rem)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.9 }}>
            La première plateforme africaine qui simplifie totalement la construction de votre maison. Devis instantané, matériaux certifiés, suivi en temps réel.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onRegister}
              style={{ ...btnStyle(), background: `linear-gradient(135deg,${P},${AC})`, color: 'white', padding: '15px 32px', borderRadius: 8, fontSize: 13, letterSpacing: 2, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, textTransform: 'uppercase', boxShadow: `0 8px 28px rgba(92,34,6,.5)` }}>
              Obtenir mon devis <ArrowRight size={17} />
            </button>
            <button onClick={onLogin}
              style={{ ...btnStyle(), background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,.25)', padding: '15px 32px', borderRadius: 8, fontSize: 13, letterSpacing: 2 }}>
              Se connecter
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: 56, borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 32, gap: 4 }}>
            {STATS.map(({ val, label }, i, arr) => (
              <div key={i} style={{ padding: '12px 28px', borderRight: i < arr.length - 1 ? `1px solid rgba(196,122,58,.2)` : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: FONT_TITLE, fontSize: '1.8rem', fontWeight: 700, color: AC }}>{val}</div>
                <div style={{ color: 'rgba(255,255,255,.55)', fontSize: 11, letterSpacing: 2, marginTop: 3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── SERVICES ──────── */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeader eyebrow="Notre Approche 3G" title="Tout ce dont vous avez besoin" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {SERVICES.map(({ Icon, title, desc, color }, i) => (
              <div key={i}
                style={{ padding: 32, borderRadius: 16, border: `1px solid #F0E8E0`, background: LT, cursor: 'default', transition: 'all .3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 48px rgba(92,34,6,.1)`; e.currentTarget.style.borderColor = AC }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#F0E8E0' }}>
                <div style={{ width: 52, height: 52, background: `${color}1A`, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon size={26} style={{ color }} />
                </div>
                <h3 style={{ fontFamily: FONT_TITLE, fontSize: '1.1rem', fontWeight: 700, color: DK, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#6B5E56', lineHeight: 1.85, fontSize: 13 }}>{desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 20, color, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                  En savoir plus <ChevronRight size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── PROCESSUS ──────── */}
      <section style={{ padding: '5rem 2rem', background: MT }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeader eyebrow="Processus Simple" title="Comment ça marche ?" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 32 }}>
            {STEPS.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: FONT_TITLE, fontSize: '3rem', fontWeight: 700, color: `${P}1A`, lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
                <div style={{ width: 44, height: 3, background: `linear-gradient(90deg,${P},${AC})`, borderRadius: 2, marginBottom: 16 }} />
                <h3 style={{ fontFamily: FONT_TITLE, fontSize: '1rem', fontWeight: 700, color: DK, marginBottom: 8 }}>{s.t}</h3>
                <p style={{ color: '#6B5E56', lineHeight: 1.85, fontSize: 13 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── TÉMOIGNAGES ──────── */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeader eyebrow="Ils nous font confiance" title="Ce que disent nos clients" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ padding: 32, borderRadius: 16, border: `1px solid #F0E8E0`, background: LT, position: 'relative' }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill={GD} color={GD} />)}
                </div>
                <p style={{ color: '#4A3830', lineHeight: 1.85, fontSize: 13, marginBottom: 20, fontStyle: 'italic' }}>"{t.txt}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, background: `linear-gradient(135deg,${P},${AC})`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontFamily: FONT_TITLE, fontSize: 14 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: DK, fontSize: 13 }}>{t.name}</div>
                    <div style={{ color: '#9B8880', fontSize: 11, display: 'flex', alignItems: 'center', gap: 3 }}><MapPin size={11} />{t.ville}</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 52, color: `${P}08`, fontFamily: 'Georgia', lineHeight: 1 }}>"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CTA FINAL ──────── */}
      <section style={{ padding: '4.5rem 2rem', background: `linear-gradient(135deg,${DK},${P})`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: `repeating-linear-gradient(45deg,${AC} 0,${AC} 1px,transparent 0,transparent 50%)`, backgroundSize: '20px 20px' }} />
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: FONT_TITLE, fontSize: 'clamp(1.6rem,4vw,2.8rem)', fontWeight: 700, color: 'white', marginBottom: 16 }}>Prêt à construire votre rêve ?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 15, marginBottom: 32, lineHeight: 1.9 }}>Rejoignez plus de 500 familles qui nous font confiance.</p>
          <button onClick={onRegister}
            style={{ ...btnStyle(), background: `linear-gradient(135deg,${AC},${GD})`, color: DK, padding: '15px 40px', borderRadius: 8, fontSize: 14, letterSpacing: 2, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 28px rgba(0,0,0,.3)' }}>
            Obtenir mon devis gratuit <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* ──────── FOOTER ──────── */}
      <footer style={{ background: DK, padding: '3rem 2rem', borderTop: `1px solid rgba(196,122,58,.15)` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 34, height: 34, background: `linear-gradient(135deg,${P},${AC})`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontFamily: FONT_TITLE, fontWeight: 700 }}>A</span>
              </div>
              <span style={{ color: 'white', fontFamily: FONT_TITLE, fontWeight: 700, letterSpacing: 2 }}>APEXBUILD</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,.45)', fontSize: 12, lineHeight: 1.85 }}>Plateforme #1 de construction numérique en Afrique de l'Ouest.</p>
          </div>
          {[
            { title: 'Services',   links: ['Devis Automatique', 'Marketplace BTP', 'Suivi Chantier', 'Nos Ingénieurs'] },
            { title: 'Entreprise', links: ['À propos', 'Blog', 'Carrières', 'Contact'] },
            { title: 'Contact',    links: ['contact@apexbuild.ci', '+225 27 22 00 00 00', "Abidjan, Côte d'Ivoire", 'Lun–Sam 8h–18h'] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ color: AC, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>{col.title}</div>
              {col.links.map((l, j) => (
                <div key={j} style={{ color: 'rgba(255,255,255,.45)', fontSize: 12, marginBottom: 9, cursor: 'pointer', transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.45)'}>
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1100, margin: '2rem auto 0', paddingTop: 20, borderTop: `1px solid rgba(255,255,255,.08)`, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <span style={{ color: 'rgba(255,255,255,.25)', fontSize: 11 }}>© 2026 APEXBUILD. Tous droits réservés.</span>
          <span style={{ color: AC, fontSize: 11, fontStyle: 'italic' }}>Game Changer · Construction Africaine</span>
        </div>
      </footer>
    </div>
  )
}

// ── Composant interne réutilisable ────────────
function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 52 }}>
      <div style={{ color: AC, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 10 }}>{eyebrow}</div>
      <h2 style={{ fontFamily: FONT_TITLE, fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 700, color: DK }}>{title}</h2>
      <div style={{ width: 56, height: 3, background: `linear-gradient(90deg,${P},${AC})`, margin: '14px auto 0', borderRadius: 2 }} />
    </div>
  )
}
