import { useState } from 'react'
import './App.css'

type Category = 'sweet' | 'savory'

interface Product {
  id: number
  name: string
  note: string
  price: string
  category: Category
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Kettle Corn', note: 'Buttery vanilla with a warm caramel finish.', price: '$24', category: 'sweet' },
  { id: 2, name: 'Almond Gelato', note: 'Silky almond cream with a soft luminous sheen.', price: '$24', category: 'sweet' },
  { id: 3, name: 'Chili Lime', note: 'Sharp citrus with a slow, warming heat.', price: '$24', category: 'savory' },
  { id: 4, name: 'Sea Salt', note: 'Clean mineral finish with coastal clarity.', price: '$24', category: 'savory' },
]

const INGREDIENTS = [
  {
    title: 'Peptides',
    desc: 'Clinically-proven lip-plumping peptide complex that enhances volume and definition with continued use.',
  },
  {
    title: 'Cushion Oils',
    desc: 'Ultra-lightweight oils delivering intense gloss without heaviness, stickiness, or migration.',
  },
  {
    title: 'Long Wear',
    desc: '8-hour wear formula that locks color and shine through meals, drinks, and the full day.',
  },
]

export default function App() {
  const [heroCategory, setHeroCategory] = useState<Category>('sweet')
  const [menuCategory, setMenuCategory] = useState<Category>('sweet')

  const filteredProducts = PRODUCTS.filter((p) => p.category === menuCategory)
  const featuredProduct = PRODUCTS.find((p) => p.category === heroCategory) ?? PRODUCTS[0]

  return (
    <div className="app">

      {/* ── Header ── */}
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="header-dot" aria-hidden="true" />
            <img src="/brissa-logo.png" alt="brissa by JS" className="header-logo" />
            <span className="header-by">By JS</span>
          </div>
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#menu">Menu</a>
            <a href="#ingredients">Ingredients</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </nav>
          <button className="cart-btn" aria-label="Shopping cart">Cart (0)</button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">

          <div className="hero-left">
            <div className="hero-badges">
              <span className="badge">brissa by JS</span>
              <span className="badge">peptide gloss</span>
              <span className="badge">drop 01</span>
            </div>
            <h1 className="hero-headline">
              Gloss that<br />commands attention.
            </h1>
            <p className="hero-sub">
              Treatment-grade shine meets editorial flavour.<br />
              One drop. All day.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary">Shop Now</button>
              <button
                className="btn-toggle-pill"
                onClick={() => setHeroCategory((c) => (c === 'sweet' ? 'savory' : 'sweet'))}
              >
                {heroCategory === 'sweet' ? 'Switch to Savory' : 'Switch to Sweet'}
              </button>
              <a href="#ingredients" className="btn-text-link">Ingredients ↗</a>
            </div>
            <div className="hero-tags">
              <span className="tag-pill">✦ Peptide-infused</span>
              <span className="tag-pill">✦ 8-hr wear</span>
              <span className="tag-pill">✦ 4 flavors</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="product-frame">
              <div className="product-frame-inner">
                <span className="product-frame-label">Featured Tube</span>
                <div className="product-frame-packshot" aria-hidden="true" />
                <div className="product-frame-meta">
                  <span className="product-frame-name">{featuredProduct.name}</span>
                  <span className="product-frame-price">{featuredProduct.price}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Menu ── */}
      <section className="menu-section" id="menu">
        <div className="section-inner">
          <div className="menu-header">
            <div>
              <p className="section-eyebrow">The Collection</p>
              <h2 className="section-title">The Menu.</h2>
            </div>
            <div className="toggle-group" role="group" aria-label="Filter by flavor profile">
              <button
                className={`toggle-btn${menuCategory === 'sweet' ? ' active' : ''}`}
                onClick={() => setMenuCategory('sweet')}
              >
                Sweet
              </button>
              <button
                className={`toggle-btn${menuCategory === 'savory' ? ' active' : ''}`}
                onClick={() => setMenuCategory('savory')}
              >
                Savory
              </button>
            </div>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <button key={product.id} className="product-card" aria-label={`View ${product.name}`}>
                <div className="product-card-packshot" aria-hidden="true" />
                <div className="product-card-info">
                  <span className="product-card-name">{product.name}</span>
                  <span className="product-card-note">{product.note}</span>
                  <div className="product-card-footer">
                    <span className="product-card-price">{product.price}</span>
                    <span className="product-card-arrow" aria-hidden="true">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ingredients ── */}
      <section className="ingredients-section" id="ingredients">
        <div className="section-inner">
          <p className="section-eyebrow">What's inside</p>
          <h2 className="section-title">Treatment-level shine.</h2>
          <div className="ingredients-grid">
            {INGREDIENTS.map((ing) => (
              <div key={ing.title} className="ingredient-card">
                <div className="ingredient-card-bar" aria-hidden="true" />
                <h3 className="ingredient-card-title">{ing.title}</h3>
                <p className="ingredient-card-desc">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="about-section" id="about">
        <div className="section-inner">
          <p className="section-eyebrow">Our Story</p>
          <h2 className="section-title">Made for the bold.</h2>
          <p className="about-body">
            brissa by JS was born from the belief that lip care should be as considered as skincare.
            Every formula is built on a treatment base — peptides, cushion oils, and long-wear polymers —
            then finished with an editorial edge. No compromise.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section" id="faq">
        <div className="section-inner">
          <p className="section-eyebrow">Questions</p>
          <h2 className="section-title">Common questions.</h2>
          <div className="faq-list">
            {[
              { q: 'What is peptide gloss?', a: 'A lip gloss formulated with a clinical-grade peptide complex that firms and plumps the lip line over time.' },
              { q: 'How long does it wear?', a: 'Up to 8 hours with our proprietary long-wear polymer base, tested across meals and drinks.' },
              { q: 'Is it flavored or scented?', a: 'Yes. Each gloss carries a signature editorial flavor note. Savory and sweet profiles available.' },
              { q: 'When does Drop 01 ship?', a: 'Drop 01 ships within 7–10 business days of your order confirmation.' },
            ].map((item) => (
              <div key={item.q} className="faq-item">
                <h3 className="faq-q">{item.q}</h3>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand">brissa by JS</span>
          <span className="footer-copy">© 2025 All rights reserved.</span>
        </div>
      </footer>

    </div>
  )
}
