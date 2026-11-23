import './App.css'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M10 1.8c.8 4.1 2.1 5.4 8.2 8.2-6.1 2.8-7.4 4.1-8.2 8.2-1.1-4.4-2.6-6.2-8.2-8.2 5.6-2 7.1-3.8 8.2-8.2Z" />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Morrow home">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          morrow
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#why-morrow">Why Morrow</a>
          <a href="#ritual">The ritual</a>
          <a href="#stories">Stories</a>
        </nav>
        <a className="header-cta" href="#ritual">
          Find your flow <ArrowIcon />
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> A gentler way to get things done</p>
            <h1 id="hero-title">Make room<br />for <em>what matters.</em></h1>
            <p className="hero-description">
              A thoughtful little planner for your very human life. Less rush,
              more rhythm — and a day that feels like yours again.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#ritual">
                Meet your new ritual <ArrowIcon />
              </a>
              <a className="text-link" href="#why-morrow">Take a look around</a>
            </div>
            <div className="hero-note">
              <div className="avatar-stack" aria-hidden="true">
                <span className="avatar avatar-one">J</span>
                <span className="avatar avatar-two">M</span>
                <span className="avatar avatar-three">A</span>
              </div>
              <p><strong>A little more human.</strong><br />Loved by 12,000+ thoughtful doers</p>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of a calm daily planning ritual">
            <div className="art-grain" />
            <div className="art-caption"><span>01 — YOUR DAY, REIMAGINED</span><span>✳</span></div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="sun">
              <div className="sun-core" />
            </div>
            <span className="art-star star-one">✳</span>
            <span className="art-star star-two">✳</span>
            <span className="art-star star-three">✧</span>
            <div className="focus-card">
              <div className="focus-card-top">
                <span className="focus-kicker">TUESDAY, AT YOUR PACE</span>
                <span className="focus-menu">···</span>
              </div>
              <p className="focus-title">A day with<br />a little breathing room.</p>
              <div className="focus-divider" />
              <div className="focus-task"><span className="task-check">✓</span><span>Make something good</span><span className="task-time">9:30</span></div>
              <div className="focus-task"><span className="task-check task-check-empty" /><span>Step outside awhile</span><span className="task-time">12:15</span></div>
              <div className="focus-task"><span className="task-check task-check-empty" /><span>Call someone you love</span><span className="task-time">4:00</span></div>
            </div>
            <div className="breath-badge"><span className="breath-icon"><SparkleIcon /></span><span><strong>One thing at a time</strong><br />You’re right where you need to be.</span></div>
            <div className="art-footnote"><span>MAKE SPACE FOR YOURSELF</span><span>EST. EVERY MORNING</span></div>
          </div>
        </section>

        <section className="proof-strip" id="stories" aria-label="Morrow community">
          <p>For the beautifully busy, and everyone becoming.</p>
          <div className="proof-logos" aria-label="Featured in">
            <span className="logo-serif">well+good</span>
            <span className="logo-spaced">THE GOOD TRADE</span>
            <span className="logo-italic">mindful</span>
            <span className="logo-serif logo-serif-small">goop</span>
          </div>
        </section>

        <section className="ritual-section" id="why-morrow" aria-labelledby="ritual-heading">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-dot" /> A softer structure</p>
            <h2 id="ritual-heading">Your day can hold<br />more than a to-do list.</h2>
            <p>Life isn't a productivity contest. Morrow helps you find a pace that feels good — with just enough structure to make space for the important stuff.</p>
          </div>
          <div className="feature-grid" id="ritual">
            <article className="feature-card feature-card-sage">
              <span className="feature-number">01 / INTENTION</span>
              <div className="feature-icon icon-sun"><span /></div>
              <h3>Start with how<br />you want to feel.</h3>
              <p>Choose a feeling, not a finish line. Let it shape the kind of day you need.</p>
              <a href="#start" aria-label="Learn about setting an intention"><ArrowIcon /></a>
            </article>
            <article className="feature-card feature-card-peach">
              <span className="feature-number">02 / FOCUS</span>
              <div className="feature-icon icon-focus"><span /></div>
              <h3>Make space for<br />one thing at a time.</h3>
              <p>A calm, clear view of what matters now — and permission to leave the rest for later.</p>
              <a href="#start" aria-label="Learn about focusing on what matters"><ArrowIcon /></a>
            </article>
            <article className="feature-card feature-card-lilac">
              <span className="feature-number">03 / REFLECT</span>
              <div className="feature-icon icon-moon"><span /></div>
              <h3>Notice how far<br />you've already come.</h3>
              <p>Close the day with a little gratitude. Tomorrow can wait until tomorrow.</p>
              <a href="#start" aria-label="Learn about reflecting on your day"><ArrowIcon /></a>
            </article>
          </div>
        </section>

        <section className="closing-cta" id="start">
          <div className="closing-sparkle"><SparkleIcon /></div>
          <p className="eyebrow">A small invitation</p>
          <h2>Tomorrow can feel<br /><em>a little different.</em></h2>
          <p className="closing-description">Take a breath. Begin again. Your next chapter starts whenever you do.</p>
          <a className="button button-dark" href="#top">Begin your Morrow <ArrowIcon /></a>
          <span className="closing-note">Free to begin · A little more human, every day</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Morrow home">
          <span className="brand-mark" aria-hidden="true"><span /></span>morrow
        </a>
        <span>Make space for what matters.</span>
        <span>© 2026 Morrow Studio</span>
      </footer>
    </div>
  )
}

export default App
