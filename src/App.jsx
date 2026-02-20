<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Brand Identity — Craniosacral, Mattersburg · Misty Forest</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
<style>
  :root {
    --cream:     #F4F1EA;
    --stone:     #DDD8D0;
    --clay:      #7A6E8A;
    --clay-deep: #4E5845;
    --moss:      #4E5845;
    --moss-mid:  #7A6E8A;
    --dust:      #C8C4D0;
    --midnight:  #1C1E18;
    --white:     #FAF9F6;
    --ink:       #252820;
    --gold:      #B0A8B8;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--white);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    line-height: 1.7;
    overflow-x: hidden;
  }
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 3rem;
    background: rgba(250,249,246,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(122,110,138,0.18);
  }
  .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 0.9rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--clay); font-weight: 500; }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; color: var(--moss); transition: color 0.2s; }
  .nav-links a:hover { color: var(--clay); }

  .cover {
    min-height: 100vh;
    background: var(--moss);
    display: grid; grid-template-columns: 1fr 1fr;
    position: relative; overflow: hidden;
  }
  .cover-left { display: flex; flex-direction: column; justify-content: flex-end; padding: 8rem 4rem 6rem; position: relative; z-index: 2; }
  .cover-tag { font-size: 0.68rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--dust); margin-bottom: 2rem; }
  .cover-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.5rem, 6vw, 7rem); font-weight: 300; line-height: 1.0; color: var(--cream); margin-bottom: 2rem; }
  .cover-title em { font-style: italic; color: #B0A8B8; }
  .cover-sub { font-size: 0.8rem; letter-spacing: 0.1em; color: var(--stone); max-width: 360px; line-height: 1.8; }
  .cover-right { position: relative; overflow: hidden; }
  .cover-visual {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 60% 40%, rgba(122,110,138,0.28) 0%, transparent 70%),
      radial-gradient(ellipse 50% 80% at 80% 80%, rgba(176,168,184,0.18) 0%, transparent 60%);
  }
  .cover-circle {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 55vmax; height: 55vmax; border-radius: 50%;
    border: 1px solid rgba(176,168,184,0.22);
    animation: breathe 8s ease-in-out infinite;
  }
  .cover-circle::before { content: ''; position: absolute; inset: 10%; border-radius: 50%; border: 1px solid rgba(122,110,138,0.3); animation: breathe 8s ease-in-out infinite 1s; }
  .cover-circle::after { content: ''; position: absolute; inset: 22%; border-radius: 50%; border: 1px solid rgba(200,196,208,0.35); animation: breathe 8s ease-in-out infinite 2s; }
  @keyframes breathe {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
    50% { transform: translate(-50%, -50%) scale(1.04); opacity: 1; }
  }
  .cover-corner { position: absolute; bottom: 3rem; right: 3rem; font-family: 'DM Mono', monospace; font-size: 0.6rem; color: rgba(122,110,138,0.55); letter-spacing: 0.1em; text-align: right; line-height: 2; }

  section { padding: 8rem 3rem; max-width: 1400px; margin: 0 auto; }
  .section-full { max-width: 100%; padding: 8rem 0; }
  .section-inner { max-width: 1400px; margin: 0 auto; padding: 0 3rem; }
  .section-label { font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--clay); margin-bottom: 4rem; display: flex; align-items: center; gap: 1rem; }
  .section-label::after { content: ''; display: block; width: 4rem; height: 1px; background: var(--clay); opacity: 0.5; }
  h2 { font-family: 'Cormorant Garamond', serif; font-weight: 300; font-size: clamp(2.2rem, 4vw, 4.5rem); line-height: 1.1; margin-bottom: 1.5rem; }
  h3 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 1.7rem; margin-bottom: 1rem; }
  h4 { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 500; color: var(--clay); margin-bottom: 0.8rem; }
  p { margin-bottom: 1.2rem; font-size: 0.95rem; }
  p:last-child { margin-bottom: 0; }
  .lead { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.3rem, 2vw, 1.9rem); font-weight: 300; line-height: 1.5; color: var(--moss); }
  .rule { height: 1px; background: linear-gradient(to right, transparent, var(--stone) 20%, var(--stone) 80%, transparent); }

  .names-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; border: 1px solid var(--stone); margin-top: 4rem; }
  .name-card { padding: 3rem 2rem; border-right: 1px solid var(--stone); position: relative; transition: background 0.3s; cursor: default; }
  .name-card:hover { background: var(--cream); }
  .name-card:last-child { border-right: none; }
  .name-num { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: var(--clay); letter-spacing: 0.2em; margin-bottom: 1.5rem; display: block; }
  .name-word { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 400; line-height: 1.1; margin-bottom: 0.5rem; }
  .name-meaning { font-size: 0.7rem; color: var(--clay); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.2rem; }
  .name-rationale { font-size: 0.8rem; line-height: 1.7; color: #484A40; }
  .name-rec { position: absolute; top: 1.5rem; right: 1.5rem; font-size: 0.55rem; letter-spacing: 0.2em; text-transform: uppercase; background: var(--moss); color: var(--white); padding: 0.3rem 0.7rem; border-radius: 2px; }

  .strategy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; margin-top: 4rem; }
  .strategy-block { padding: 3rem; border: 1px solid var(--stone); position: relative; }
  .strategy-block::before { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: var(--clay); }

  .archetype-wrap { background: var(--moss); color: var(--cream); padding: 8rem 3rem; }
  .archetype-inner { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1.2fr 1fr; gap: 8rem; align-items: center; }
  .archetype-label { color: var(--dust); }
  .archetype-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 5vw, 6rem); font-weight: 300; line-height: 1.05; color: var(--cream); margin-bottom: 2rem; }
  .archetype-title em { color: #B0A8B8; font-style: italic; }
  .archetype-desc { font-size: 0.9rem; color: var(--stone); line-height: 1.8; }
  .archetype-traits { display: flex; flex-direction: column; gap: 1rem; }
  .trait { padding: 1.5rem 2rem; border: 1px solid rgba(221,216,208,0.18); border-left: 2px solid #B0A8B8; }
  .trait-label { font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--dust); margin-bottom: 0.5rem; }
  .trait-val { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: var(--cream); }

  .voice-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 1px solid var(--stone); margin-top: 3rem; }
  .voice-col { padding: 2.5rem 2rem; border-right: 1px solid var(--stone); }
  .voice-col:last-child { border-right: none; }
  .voice-col h4 { color: var(--moss); }
  .voice-do, .voice-dont { font-size: 0.78rem; line-height: 1.8; margin-bottom: 1rem; }
  .voice-do::before { content: '+ '; color: var(--clay); font-weight: 500; }
  .voice-dont::before { content: '— '; color: #999; }
  .voice-col-header { background: var(--moss); color: var(--cream); padding: 1.2rem 2rem; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; border-right: 1px solid rgba(255,255,255,0.1); }
  .voice-col-header:last-child { border-right: none; }

  .msg-hierarchy { margin-top: 3rem; display: flex; flex-direction: column; }
  .msg-level { display: grid; grid-template-columns: 200px 1fr auto; align-items: start; gap: 3rem; padding: 2.5rem 3rem; border: 1px solid var(--stone); border-bottom: none; transition: background 0.2s; }
  .msg-level:last-child { border-bottom: 1px solid var(--stone); }
  .msg-level:hover { background: var(--cream); }
  .msg-tier { font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--clay); padding-top: 0.3rem; }
  .msg-text { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; line-height: 1.3; color: var(--moss); }
  .msg-note { font-size: 0.72rem; color: #888; text-align: right; max-width: 200px; padding-top: 0.3rem; }

  .logo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--stone); margin-top: 3rem; }
  .logo-dir { padding: 4rem 3rem; border-right: 1px solid var(--stone); }
  .logo-dir:last-child { border-right: none; }
  .logo-canvas { height: 260px; display: flex; align-items: center; justify-content: center; background: var(--cream); margin-bottom: 3rem; position: relative; overflow: hidden; }
  .logo-canvas-dark { background: var(--moss); }
  .logo-a-mark { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
  .logo-b-wrap { display: flex; align-items: center; gap: 1.2rem; }
  .logo-b-mark { width: 44px; height: 44px; flex-shrink: 0; }
  .logo-c-wrap { text-align: center; }
  .logo-wordmark-a { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 300; letter-spacing: 0.3em; text-transform: uppercase; color: var(--moss); }
  .logo-wordmark-a span { color: var(--clay); }
  .logo-sub-a { font-size: 0.58rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--moss-mid); margin-top: 0.3rem; }
  .logo-dir-num { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: var(--clay); letter-spacing: 0.2em; margin-bottom: 1rem; }
  .logo-dir h3 { font-size: 1.4rem; margin-bottom: 0.5rem; }
  .logo-dir p { font-size: 0.8rem; line-height: 1.7; color: #484A40; margin-bottom: 0; }
  .logo-usage { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--stone); }
  .logo-usage h4 { font-size: 0.6rem; margin-bottom: 0.8rem; }
  .usage-chip { display: inline-block; font-size: 0.6rem; letter-spacing: 0.1em; padding: 0.25rem 0.6rem; border: 1px solid var(--stone); margin: 0.2rem; border-radius: 2px; color: var(--moss); }

  .color-system { margin-top: 4rem; }
  .color-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; height: 200px; border: 1px solid var(--stone); overflow: hidden; }
  .swatch { position: relative; cursor: default; }
  .swatch-info { position: absolute; bottom: 1rem; left: 1rem; right: 1rem; }
  .swatch-name { font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 500; display: block; margin-bottom: 0.2rem; }
  .swatch-hex { font-family: 'DM Mono', monospace; font-size: 0.62rem; display: block; opacity: 0.7; }
  .swatch-light .swatch-name, .swatch-light .swatch-hex { color: #252820; }
  .swatch-dark .swatch-name, .swatch-dark .swatch-hex { color: #F4F1EA; }

  .color-usage-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem; }
  .color-usage-card { border: 1px solid var(--stone); overflow: hidden; }
  .color-usage-preview { height: 120px; display: flex; align-items: center; justify-content: center; padding: 2rem; }
  .color-usage-body { padding: 1.5rem; border-top: 1px solid var(--stone); }
  .color-usage-body h4 { font-size: 0.6rem; margin-bottom: 0.5rem; }
  .color-usage-body p { font-size: 0.75rem; margin: 0; }

  .typo-showcase { margin-top: 4rem; border: 1px solid var(--stone); overflow: hidden; }
  .typo-row { display: grid; grid-template-columns: 200px 1fr 200px; align-items: center; padding: 3rem; border-bottom: 1px solid var(--stone); gap: 3rem; }
  .typo-row:last-child { border-bottom: none; }
  .typo-meta h4 { margin-bottom: 0.5rem; }
  .typo-meta p { font-size: 0.7rem; color: #888; margin: 0; line-height: 1.5; }
  .typo-sample-h1 { font-family: 'Cormorant Garamond', serif; font-size: 4.5rem; font-weight: 300; line-height: 1; color: var(--moss); }
  .typo-sample-h2 { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; font-weight: 400; line-height: 1.2; color: var(--moss); font-style: italic; }
  .typo-sample-body { font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 300; line-height: 1.8; color: var(--ink); max-width: 500px; }
  .typo-sample-caption { font-family: 'DM Sans', sans-serif; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--clay); font-weight: 400; }
  .typo-sample-mono { font-family: 'DM Mono', monospace; font-size: 0.75rem; color: var(--moss-mid); letter-spacing: 0.05em; line-height: 1.6; }
  .typo-usage-note { font-size: 0.72rem; color: #888; line-height: 1.6; }
  .typo-usage-note strong { color: var(--clay); font-weight: 500; }

  .imagery-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto auto; gap: 0; border: 1px solid var(--stone); margin-top: 3rem; overflow: hidden; }
  .img-card { padding: 3rem 2.5rem; border-right: 1px solid var(--stone); border-bottom: 1px solid var(--stone); }
  .img-card:nth-child(3), .img-card:nth-child(6) { border-right: none; }
  .img-card:nth-child(4), .img-card:nth-child(5), .img-card:nth-child(6) { border-bottom: none; }
  .img-number { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: var(--clay); letter-spacing: 0.2em; margin-bottom: 1.5rem; display: block; }
  .img-thumb { width: 100%; height: 140px; margin-bottom: 1.5rem; border-radius: 2px; overflow: hidden; position: relative; }
  .mood-a { background: linear-gradient(135deg, #C8C4CC 0%, #A8A4B0 30%, #DDD8D8 70%, #B8B4BC 100%); }
  .mood-b { background: linear-gradient(160deg, #4E5845 0%, #6A7264 40%, #8A9080 100%); }
  .mood-c { background: linear-gradient(120deg, #F0EDE8 0%, #DDD8D0 50%, #E8E4DC 100%); }
  .mood-d { background: linear-gradient(145deg, #7A6E8A 0%, #9A90A8 40%, #BCB4C4 100%); }
  .mood-e { background: linear-gradient(155deg, #E8E4DC 0%, #D4CFC8 60%, #C8C4BC 100%); }
  .mood-f { background: linear-gradient(130deg, #1C1E18 0%, #2C3028 50%, #4E5845 100%); }
  .img-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
  .img-overlay span { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.65); text-shadow: 0 1px 3px rgba(0,0,0,0.35); text-align: center; padding: 0 1rem; }
  .img-card h4 { margin-bottom: 0.5rem; }
  .img-card p { font-size: 0.78rem; color: #484A40; margin: 0; line-height: 1.6; }

  .rules-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--stone); margin-top: 3rem; }
  .rules-col { padding: 3rem; }
  .rules-col:first-child { border-right: 1px solid var(--stone); }
  .rules-col h4 { margin-bottom: 2rem; }
  .rule-item { display: flex; align-items: flex-start; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--stone); font-size: 0.82rem; line-height: 1.6; }
  .rule-item:last-child { border-bottom: none; }
  .rule-icon { flex-shrink: 0; width: 1.5rem; font-size: 0.9rem; }

  footer { background: var(--midnight); color: var(--stone); padding: 5rem 3rem 4rem; }
  .footer-inner { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4rem; }
  footer h4 { color: #B0A8B8; font-size: 0.6rem; margin-bottom: 1rem; }
  footer p { font-size: 0.78rem; color: var(--stone); line-height: 1.8; }
  .footer-bottom { max-width: 1400px; margin: 3rem auto 0; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; font-size: 0.65rem; color: #555; letter-spacing: 0.1em; }

  .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  .critical-note { background: rgba(122,110,138,0.08); border-left: 3px solid var(--clay); padding: 1.5rem 2rem; margin: 2rem 0; font-size: 0.82rem; line-height: 1.7; color: #383A30; }
  .critical-note strong { color: var(--moss); }

  @media (max-width: 900px) {
    nav { display: none; }
    .cover { grid-template-columns: 1fr; }
    .cover-right { height: 40vw; }
    .names-grid { grid-template-columns: 1fr 1fr; }
    .strategy-grid, .archetype-inner, .voice-grid, .logo-grid, .color-usage-grid, .imagery-grid, .rules-grid { grid-template-columns: 1fr; }
    .msg-level, .typo-row { grid-template-columns: 1fr; }
    .footer-inner { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<nav>
  <span class="nav-logo">Brand Identity — Craniosacral · Misty Forest</span>
  <ul class="nav-links">
    <li><a href="#names">Namen</a></li>
    <li><a href="#strategy">Strategie</a></li>
    <li><a href="#logo">Logo</a></li>
    <li><a href="#color">Farbe</a></li>
    <li><a href="#typo">Typografie</a></li>
    <li><a href="#imagery">Bildsprache</a></li>
  </ul>
</nav>

<div class="cover" id="top">
  <div class="cover-left">
    <p class="cover-tag">Pentagram Studio — Brand Identity System · Misty Forest — 2025</p>
    <h1 class="cover-title">Brand<br><em>Identity</em><br>System</h1>
    <p class="cover-sub">Ein vollständiges visuelles und strategisches Markenkonzept für eine Craniosacral-Therapeutin in Mattersburg, Österreich. Farbsystem: Misty Forest — Moos trifft Rauchviolett.</p>
  </div>
  <div class="cover-right">
    <div class="cover-visual"></div>
    <div class="cover-circle"></div>
    <div class="cover-corner">
      Mattersburg · Burgenland<br>
      Services: CST · TCM · Tuina · Aroma<br>
      Target: Young Families, Mothers, Infants<br>
      Palette: Misty Forest
    </div>
  </div>
</div>

<!-- NAMEN -->
<section id="names" class="reveal">
  <div class="section-label">01 — Naming</div>
  <h2>Fünf Namens&shy;optionen</h2>
  <p class="lead">Der Name muss in drei Sekunden Vertrauen aufbauen, regional verankert wirken und gleichzeitig professionell genug sein, um gegen Kinderfachärzte und Kinderphysiotherapeuten zu bestehen.</p>
  <div class="critical-note">
    <strong>Kritische Anmerkung:</strong> Im österreichischen Gesundheitsmarkt tendieren alternative Therapiepraktiken dazu, sich entweder zu spirituell (verliert Glaubwürdigkeit bei jungen Eltern mit akademischem Hintergrund) oder zu medizinisch-klinisch (verliert Warmherzigkeit) zu positionieren. Der Name muss diese Spannung auflösen: wissenschaftlich fundiert, menschlich nah, regional verwurzelt.
  </div>
  <div class="names-grid">
    <div class="name-card">
      <span class="name-num">N — 01</span>
      <div class="name-word">Knospe</div>
      <div class="name-meaning">Die Knospe · The Bud</div>
      <p class="name-rationale">Universell lesbar im DACH-Raum. Die Knospe steht für Potenzial, Anfang, zartes Leben — perfekt für Säuglings- und Kleinkindbetreuung. Knospe Therapie, Knospe Praxis, kurze URL verfügbar.</p>
    </div>
    <div class="name-card">
      <span class="name-num">N — 02</span>
      <div class="name-word">Quell&shy;punkt</div>
      <div class="name-meaning">The Source Point</div>
      <p class="name-rationale">Direkte Referenz zum CRI (Craniosacral Rhythmus) und der CST-Terminologie. "Quell" bedeutet Quelle, Origin, Ursprung — spricht Therapeuten und informierte Eltern an. Stark für SEO.</p>
    </div>
    <div class="name-card">
      <span class="name-num">N — 03</span>
      <div class="name-word">Sanft&shy;klang</div>
      <div class="name-meaning">Gentle Resonance</div>
      <p class="name-rationale">Evoziert Berührung, Klang, Harmonie. Funktioniert gut für das Gesamtspektrum der Leistungen inkl. Aromatherapie und Tuina. Emotional weich, positiv, einprägsam. Risiko: könnte zu "Wellness-Spa" klingen.</p>
    </div>
    <div class="name-card">
      <span class="name-rec">Empfohlen</span>
      <span class="name-num">N — 04</span>
      <div class="name-word">Wurzel&shy;kind</div>
      <div class="name-meaning">Root Child</div>
      <p class="name-rationale">Stärkste emotionale Resonanz. Kombiniert Verwurzelung (Elternschaft, Stabilität, Burgenland) mit Kind (klarer Zielgruppen-Fokus). Unverwechselbar, markierbar, einzigartig in der Branche. Kein direkter Wettbewerb in AT.</p>
    </div>
    <div class="name-card">
      <span class="name-num">N — 05</span>
      <div class="name-word">Hellwieg Therapie</div>
      <div class="name-meaning">Bright Path · Fiktiver Name</div>
      <p class="name-rationale">Klingt wie ein echter österreichischer Familienname, ist es aber nicht. "Hell" (bright) + "Weg" (path). Professionell, vertrauenswürdig, gut für Praxisschild, Überweisungsschreiben, Krankenkassen-Kontext.</p>
    </div>
  </div>
</section>

<div class="rule"></div>

<!-- STRATEGIE -->
<section id="strategy" class="reveal">
  <div class="section-label">02 — Markenstrategie</div>
  <h2>Strategie&shy;fundament</h2>
  <p class="lead">Bevor ein einziges Logo gezeichnet wird: Warum existiert diese Marke, und welchen einzigartigen Platz kann sie in den Köpfen junger Mütter in Mattersburg einnehmen?</p>
  <div class="critical-note">
    <strong>Business-kritische Einschätzung:</strong> Der Markt für alternative Kindertherapien in Österreich ist fragmentiert, aber regional unterversorgt. Mattersburg (ca. 7.800 Einwohner) liegt zwischen Wiener Neustadt und Wien — die strategische Chance liegt nicht nur im Ort, sondern im regionalen Einzugsgebiet Südburgenland bis Niederösterreich. Die Marke muss von Anfang an auf Weiterempfehlung durch Hebammen, Kinderärzte und Stillberaterinnen ausgelegt sein.
  </div>
  <div class="strategy-grid">
    <div class="strategy-block reveal">
      <h4>Brand Story</h4>
      <h3>„Der erste Atem zählt."</h3>
      <p>Jedes Kind kommt mit einer Geschichte auf die Welt — dem Weg durch den Geburtskanal, dem ersten Atemzug, den ersten Stunden. Manche dieser Geschichten hinterlassen Spuren: Verspannungen, Unruhe, Schlafprobleme, Trinkschwierigkeiten. Craniosacral Therapie gibt diesen Spuren eine Antwort.</p>
      <p>Wurzelkind steht für das Wissen, dass ein Kind, das sich in seinem Körper wohlfühlt, tiefer Wurzeln schlägt — sicherer bondet, besser schläft, freier wächst. Die Therapeutin ist kein Heiler. Sie ist eine Übersetzerin: zwischen dem, was das Baby zeigt, und dem, was die Eltern verstehen müssen.</p>
    </div>
    <div class="strategy-block reveal">
      <h4>Positionierung</h4>
      <h3>Die sanfte Wissenschaft</h3>
      <p>Weder rein medizinisch noch esoterisch. Der Sweet Spot liegt zwischen evidenzbasierter Fachkompetenz und warmherziger, intuitiver Betreuung. Die Therapeutin spricht beide Sprachen: die der erschöpften Mutter um 3 Uhr nachts und die des skeptischen Kinderarztes, der eine Überweisung ausstellt.</p>
      <p><strong>Kern-Differenzierung:</strong> Spezialisierung auf Säuglinge und Kleinkinder (nicht allgemeine Cranio), kombinierter Ansatz CST + TCM + Tuina, lokale Verwurzelung Mattersburg/Burgenland, persönliche Ein-Frau-Praxis mit hohem Vertrauensfaktor.</p>
    </div>
  </div>
</section>

<!-- ARCHETYPE -->
<div class="archetype-wrap reveal section-full">
  <div class="archetype-inner">
    <div>
      <div class="section-label archetype-label">02.1 — Brand Archetype</div>
      <h2 class="archetype-title">The<br><em>Caregiver</em><br>& Sage</h2>
      <p class="archetype-desc">Primär-Archetyp: Der Caregiver. Sekundär: Der Sage. Diese Kombination spiegelt exakt die Doppelrolle der Therapeutin: einfühlsame Begleiterin UND fundierte Fachexpertin. Der Caregiver baut emotionales Vertrauen auf. Der Sage schützt vor Glaubwürdigkeitsverlust gegenüber skeptischen Partnern oder medizinischem Fachpersonal.</p>
      <p class="archetype-desc" style="margin-top:1rem">Viele Wellness-Marken machen den Fehler, nur beim Caregiver zu bleiben — und verlieren damit die Väter, die Kinderärzte und die zweifelnden Mütter. Die Sage-Komponente ist die Versicherungspolice gegen "das ist doch Hokuspokus".</p>
    </div>
    <div class="archetype-traits">
      <div class="trait"><div class="trait-label">Core Desire</div><div class="trait-val">Das Wohlbefinden des Kindes schützen und stärken</div></div>
      <div class="trait"><div class="trait-label">Core Fear</div><div class="trait-val">Als unwissenschaftlich oder wirkungslos abgetan zu werden</div></div>
      <div class="trait"><div class="trait-label">Gift to the World</div><div class="trait-val">Ruhe und Klarheit in einer aufgewühlten Lebensphase</div></div>
      <div class="trait"><div class="trait-label">Emotional Territory</div><div class="trait-val">Warmth · Trust · Quiet Expertise · Relief</div></div>
      <div class="trait"><div class="trait-label">Shadow to Avoid</div><div class="trait-val">Martyrer-Aufopferung, Esoterik-Klischees, übertriebene Wellness-Ästhetik</div></div>
    </div>
  </div>
</div>

<!-- VOICE MATRIX -->
<section class="reveal">
  <div class="section-label">02.2 — Voice & Tone</div>
  <h2>Voice Matrix</h2>
  <p class="lead">Vier Kommunikationsdimensionen — jede definiert durch was die Marke IST und was sie explizit vermeidet.</p>
  <div style="display:grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--stone);">
    <div class="voice-col-header">Warm, not</div>
    <div class="voice-col-header">Expert, not</div>
    <div class="voice-col-header">Grounded, not</div>
    <div class="voice-col-header">Simple, not</div>
  </div>
  <div class="voice-grid">
    <div class="voice-col">
      <div class="voice-do">Empathisch, verständnisvoll, präsent</div>
      <div class="voice-do">Spricht die Mutter, nicht die Diagnose an</div>
      <div class="voice-do">Verwendet "wir" und "gemeinsam"</div>
      <div class="voice-dont">Mütterlich-schwülstig oder sentimental</div>
      <div class="voice-dont">Überschwänglich begeistert</div>
      <div class="voice-dont">Bemitleidend</div>
    </div>
    <div class="voice-col">
      <div class="voice-do">Fundierte Erklärungen ohne Jargon</div>
      <div class="voice-do">Benennt Methoden beim Namen</div>
      <div class="voice-do">Zitiert Wirkprinzipien</div>
      <div class="voice-dont">Überheblich oder belehrend</div>
      <div class="voice-dont">Medizin-Sprache ohne Übersetzung</div>
      <div class="voice-dont">Distanziert oder kalt</div>
    </div>
    <div class="voice-col">
      <div class="voice-do">Verankert im Alltag der Familie</div>
      <div class="voice-do">Österreichisch, regional, nah</div>
      <div class="voice-do">Ehrlich über Grenzen der Therapie</div>
      <div class="voice-dont">Esoterisch, spirituell aufgeladen</div>
      <div class="voice-dont">Utopische Versprechen</div>
      <div class="voice-dont">Generisch international</div>
    </div>
    <div class="voice-col">
      <div class="voice-do">Klare, kurze Sätze</div>
      <div class="voice-do">Eltern auf Augenhöhe ansprechen</div>
      <div class="voice-do">Konkrete Fallbeispiele</div>
      <div class="voice-dont">Vereinfachend oder bevormundend</div>
      <div class="voice-dont">Akademische Abhandlungen</div>
      <div class="voice-dont">Marketing-Phrasen ohne Substanz</div>
    </div>
  </div>
</section>

<!-- MESSAGING -->
<section class="reveal">
  <div class="section-label">02.3 — Messaging Hierarchy</div>
  <h2>Botschafts&shy;architektur</h2>
  <p>Vom übergeordneten Brand Promise bis zur taktischen Einzelleistung — jede Ebene hat ihren Platz und ihre Funktion.</p>
  <div class="msg-hierarchy">
    <div class="msg-level"><div class="msg-tier">Level 01<br>Brand Promise</div><div class="msg-text">Dein Kind darf sich wohlfühlen — und du auch.</div><div class="msg-note">Immer sichtbar. Website Hero, Praxisschild, Visitenkarte.</div></div>
    <div class="msg-level"><div class="msg-tier">Level 02<br>Value Proposition</div><div class="msg-text">Spezialisierte Craniosacral Therapie für Säuglinge und Kleinkinder — sanft, fundiert, mit Herz.</div><div class="msg-note">About-Seite, Google My Business, Flyer.</div></div>
    <div class="msg-level"><div class="msg-tier">Level 03<br>Credibility Bridge</div><div class="msg-text">Ausgebildet nach internationalen Standards. Empfohlen von Hebammen und Kinderfachärzten in der Region.</div><div class="msg-note">Erst nach erstem Vertrauensaufbau.</div></div>
    <div class="msg-level"><div class="msg-tier">Level 04<br>Service Messages</div><div class="msg-text">CST bei Schlafproblemen, Dreimonatskoliken, Stillschwierigkeiten, nach Kaiserschnitt oder Saugglocke.</div><div class="msg-note">SEO-Seiten, soziale Medien.</div></div>
    <div class="msg-level"><div class="msg-tier">Level 05<br>Supporting Services</div><div class="msg-text">Ergänzend: TCM-Ernährungsberatung, Tuina-Massage, Aromatherapie — ein ganzheitlicher Begleitrahmen.</div><div class="msg-note">Nie prominent — immer als Ergänzung.</div></div>
  </div>
  <div class="critical-note" style="margin-top: 2rem">
    <strong>Strategische Warnung:</strong> Das häufigste Fehler bei Mehrdienstleister-Praxen ist das Dilemma der Komplexität — je mehr Leistungen gleichzeitig beworben werden, desto schwächer wird das Vertrauenssignal. Die Craniosacral-Spezialisierung ist der Anker — alles andere ist Upsell.
  </div>
</section>

<div class="rule"></div>

<!-- LOGO -->
<section id="logo" class="reveal">
  <div class="section-label">03 — Logo System</div>
  <h2>Drei Logo&shy;richtungen</h2>
  <p class="lead">Drei vollständig ausgearbeitete Richtungen, entwickelt aus der Markenstrategie — nicht aus ästhetischer Beliebigkeit.</p>
  <div class="logo-grid">
    <div class="logo-dir">
      <div class="logo-dir-num">LOGO A — Empfohlen</div>
      <div class="logo-canvas">
        <div class="logo-a-mark">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <ellipse cx="28" cy="38" rx="3" ry="14" fill="none" stroke="#4E5845" stroke-width="1.2"/>
            <path d="M28 30 C28 30, 16 24, 16 14 C16 8, 22 6, 28 12 C34 6, 40 8, 40 14 C40 24, 28 30, 28 30Z" fill="none" stroke="#7A6E8A" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M28 12 C26 16, 24 18, 24 22 C24 26, 26 28, 28 28" fill="none" stroke="#7A6E8A" stroke-width="0.7" stroke-dasharray="1 2"/>
          </svg>
          <div style="text-align:center">
            <div class="logo-wordmark-a">WURZEL<span>KIND</span></div>
            <div class="logo-sub-a">Craniosacral Therapie · Mattersburg</div>
          </div>
        </div>
      </div>
      <div class="logo-dir-num">A — Stacked Mark + Wordmark</div>
      <h3>Das Knospenzeichen</h3>
      <p>Das Markenzeichen kombiniert eine stilisierte Knospe mit einer fein gestrichelten Innenspirale — eine diskrete Referenz auf den Craniosakralen Rhythmus. In der Misty-Forest-Palette arbeitet das Logo mit dem Kontrast Waldmoos (dunkel) und Rauchviolett (weich) — geerdet und gleichzeitig distinkt.</p>
      <div class="logo-usage"><h4>Verwendungsfelder</h4><span class="usage-chip">Website Header</span><span class="usage-chip">Praxisschild</span><span class="usage-chip">Visitenkarte</span><span class="usage-chip">Briefkopf</span><span class="usage-chip">Social Avatar</span><span class="usage-chip">Stempel</span></div>
    </div>
    <div class="logo-dir">
      <div class="logo-canvas logo-canvas-dark">
        <div class="logo-b-wrap">
          <svg class="logo-b-mark" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M6 22 C6 13, 13 6, 22 6" stroke="#C8C4D0" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <path d="M3 22 C3 11, 11 3, 22 3" stroke="#B0A8B8" stroke-width="1" fill="none" stroke-linecap="round"/>
            <path d="M10 22 C10 15, 15 10, 22 10" stroke="#C8C4D0" stroke-width="0.8" fill="none" stroke-linecap="round"/>
            <path d="M38 22 C38 31, 31 38, 22 38" stroke="#C8C4D0" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <path d="M41 22 C41 33, 33 41, 22 41" stroke="#B0A8B8" stroke-width="1" fill="none" stroke-linecap="round"/>
            <path d="M34 22 C34 29, 29 34, 22 34" stroke="#C8C4D0" stroke-width="0.8" fill="none" stroke-linecap="round"/>
            <circle cx="22" cy="22" r="2.5" fill="#B0A8B8"/>
          </svg>
          <div>
            <div style="font-family:'Cormorant Garamond',serif; font-size:1.5rem; font-weight:300; letter-spacing:0.15em; color:#F4F1EA; line-height:1.2;">WURZEL<br>KIND</div>
            <div style="font-size:0.5rem; letter-spacing:0.3em; text-transform:uppercase; color:#C8C4D0; margin-top:0.3rem;">Mattersburg</div>
          </div>
        </div>
      </div>
      <div class="logo-dir-num">B — Horizontal Lockup</div>
      <h3>Die Schwingung</h3>
      <p>Das Mark abstrahiert den craniosakralen Rhythmus als konzentrische Bögen. Auf dem tiefen Waldmoos-Grund entfalten die Quarz-Töne eine stille, neblige Eleganz — wie ein früher Morgen im Wald. Optimal für Kooperationsmaterialien.</p>
      <div class="logo-usage"><h4>Verwendungsfelder</h4><span class="usage-chip">Briefkopf horizontal</span><span class="usage-chip">E-Mail Signatur</span><span class="usage-chip">Kooperationsmaterial</span><span class="usage-chip">Dunkel-Hintergrund</span></div>
    </div>
    <div class="logo-dir">
      <div class="logo-canvas" style="background: var(--stone);">
        <div class="logo-c-wrap">
          <svg width="60" height="36" viewBox="0 0 60 36" fill="none" style="display:block; margin: 0 auto 0.8rem;">
            <circle cx="30" cy="18" r="16" stroke="#4E5845" stroke-width="1" fill="none"/>
            <text x="30" y="23" font-family="Cormorant Garamond, serif" font-size="16" font-weight="300" fill="#4E5845" text-anchor="middle" letter-spacing="1">WK</text>
          </svg>
          <div style="font-family:'DM Sans',sans-serif; font-size:0.62rem; letter-spacing:0.35em; text-transform:uppercase; color:#4E5845; text-align:center;">Wurzelkind<br><span style="color:#7A6E8A; font-size:0.55rem;">Craniosacral · Mattersburg</span></div>
        </div>
      </div>
      <div class="logo-dir-num">C — Monogram Stamp</div>
      <h3>Das Monogramm</h3>
      <p>Das WK-Monogramm im Kreis auf Quarz-Grund. Das Waldmoos wirkt hier klassisch und geerdet — so als wäre diese Praxis immer schon da gewesen. Höchste Vielseitigkeit, niedrigstes Risiko.</p>
      <div class="logo-usage"><h4>Verwendungsfelder</h4><span class="usage-chip">Favicon</span><span class="usage-chip">Gutscheinkarte</span><span class="usage-chip">Stickerei</span><span class="usage-chip">Wachssiegel</span><span class="usage-chip">App-Icon</span></div>
    </div>
  </div>
</section>

<!-- LOGO REGELN -->
<section class="reveal" style="padding-top: 2rem">
  <div class="section-label">03.1 — Logo Usage Rules</div>
  <h2>Anwendungs&shy;regeln</h2>
  <div class="rules-grid">
    <div class="rules-col">
      <h4>✦ &nbsp;Do — Erlaubt</h4>
      <div class="rule-item"><span class="rule-icon">✦</span>Logo immer mit ausreichend Freiraum (min. 1× Logo-Höhe rundum)</div>
      <div class="rule-item"><span class="rule-icon">✦</span>Monochrome Variante (Moos oder Rauch) auf einfarbigen Hintergründen</div>
      <div class="rule-item"><span class="rule-icon">✦</span>Weiße Ausführung auf dunklen Hintergründen (Moos, Midnight)</div>
      <div class="rule-item"><span class="rule-icon">✦</span>Mark allein (ohne Schriftzug) ab Logo-Höhe von mind. 24px</div>
      <div class="rule-item"><span class="rule-icon">✦</span>Skalierung proportional, niemals verzerren</div>
      <div class="rule-item"><span class="rule-icon">✦</span>Auf Linen, Quarz, Weiß und Moos Hintergrund</div>
    </div>
    <div class="rules-col">
      <h4>✗ &nbsp;Don't — Verboten</h4>
      <div class="rule-item"><span class="rule-icon" style="color:#999">✗</span>Logo auf Fotos ohne ausreichenden Kontrast platzieren</div>
      <div class="rule-item"><span class="rule-icon" style="color:#999">✗</span>Farben des Logos eigenständig verändern oder mischen</div>
      <div class="rule-item"><span class="rule-icon" style="color:#999">✗</span>Schatten, Verläufe, Outlines zum Logo hinzufügen</div>
      <div class="rule-item"><span class="rule-icon" style="color:#999">✗</span>Wordmark ohne Markenzeichen unter 60px Logo-Breite</div>
      <div class="rule-item"><span class="rule-icon" style="color:#999">✗</span>Logo kleiner als 20px Höhe verwenden</div>
      <div class="rule-item"><span class="rule-icon" style="color:#999">✗</span>Logo auf Lavendel- oder Mitteltönen (zu geringer Kontrast)</div>
    </div>
  </div>
</section>

<div class="rule"></div>

<!-- FARBE -->
<section id="color" class="reveal">
  <div class="section-label">04 — Farbsystem</div>
  <h2>Misty Forest — Das Farbsystem</h2>
  <p class="lead">Moos trifft Rauchviolett. Fünf Farben, klar hierarchisiert. Die ruhigste, ausgewogenste Palette — maximale Zugänglichkeit für alle Zielgruppen.</p>
  <div class="critical-note">
    <strong>Was Misty Forest strategisch leistet:</strong> Das Rauchviolett (#7A6E8A) ist so geerdet, dass es keine Violett-Diskussion mit medizinischen Überweisungspartnern auslöst — es liest sich fast als natürliches Grau-Blau. Das Waldmoos (#4E5845) ist botanisch glaubwürdig ohne das saturierte Grün der Apotheken-Welt. Diese Palette ist der sicherste Weg — sie überrascht niemanden negativ. Der Preis: Sie überrascht auch niemanden positiv. Einsatz empfohlen, wenn die Klientel mehrheitlich konservative Erstverwender sind.
  </div>
  <div class="color-system">
    <div class="color-row">
      <div class="swatch swatch-light" style="background: #FAF9F6; flex: 0.7">
        <div class="swatch-info"><span class="swatch-name">Weiß</span><span class="swatch-hex">#FAF9F6</span></div>
      </div>
      <div class="swatch swatch-light" style="background: #F4F1EA; flex: 1">
        <div class="swatch-info"><span class="swatch-name">Linen</span><span class="swatch-hex">#F4F1EA</span></div>
      </div>
      <div class="swatch swatch-light" style="background: #DDD8D0; flex: 0.9">
        <div class="swatch-info"><span class="swatch-name">Quarz</span><span class="swatch-hex">#DDD8D0</span></div>
      </div>
      <div class="swatch swatch-dark" style="background: #B0A8B8; flex: 1">
        <div class="swatch-info"><span class="swatch-name">Lavendel</span><span class="swatch-hex">#B0A8B8</span></div>
      </div>
      <div class="swatch swatch-dark" style="background: #7A6E8A; flex: 1.2">
        <div class="swatch-info"><span class="swatch-name">Rauch ★ Primär</span><span class="swatch-hex">#7A6E8A</span></div>
      </div>
      <div class="swatch swatch-dark" style="background: #4E5845; flex: 1.3">
        <div class="swatch-info"><span class="swatch-name">Moos ★ Anker</span><span class="swatch-hex">#4E5845</span></div>
      </div>
    </div>
  </div>
  <div class="color-usage-grid">
    <div class="color-usage-card">
      <div class="color-usage-preview" style="background: #4E5845;">
        <div style="font-family:'Cormorant Garamond',serif; font-size:1.8rem; color: #F4F1EA; font-weight:300; text-align:center; line-height:1.2;">Wurzel<br>Kind</div>
      </div>
      <div class="color-usage-body">
        <h4>Dark Iteration</h4>
        <p>Moos auf Linen — für Premiumkanäle: Visitenkarte, Umschlag, Gutscheinkarte. Zeitlos, geerdet, vertrauenswürdig. ~30% aller Kommunikationsträger.</p>
      </div>
    </div>
    <div class="color-usage-card">
      <div class="color-usage-preview" style="background: #F4F1EA;">
        <div style="font-family:'Cormorant Garamond',serif; font-size:1.8rem; color: #7A6E8A; font-weight:300; text-align:center; line-height:1.2;">Craniosacral<br>Therapie</div>
      </div>
      <div class="color-usage-body">
        <h4>Primary Iteration</h4>
        <p>Rauch auf Linen — Hauptkommunikation: Website, Social Media, Flyer. Sanft, beruhigend, einladend. 60% aller Kommunikationsträger.</p>
      </div>
    </div>
    <div class="color-usage-card">
      <div class="color-usage-preview" style="background: #DDD8D0;">
        <div style="font-family:'DM Mono',monospace; font-size:0.65rem; color: #4E5845; letter-spacing:0.15em; text-align:center; line-height:2.2; text-transform:uppercase;">Termin · 09:00<br>Wiedner Str. 4<br>Mattersburg</div>
      </div>
      <div class="color-usage-body">
        <h4>Neutral Iteration</h4>
        <p>Moos auf Quarz — für Formulare, Terminkarten, Erinnerungen. Ruhig, funktional, nie störend. ~10% aller Materialien.</p>
      </div>
    </div>
  </div>
</section>

<div class="rule"></div>

<!-- TYPOGRAFIE -->
<section id="typo" class="reveal">
  <div class="section-label">05 — Typografie</div>
  <h2>Typografisches System</h2>
  <p class="lead">Drei Schriftfamilien. Strikte Hierarchie. Cormorant Garamond als emotionaler Anker, DM Sans als sachliche Brücke, DM Mono für Daten und Labels.</p>
  <div class="typo-showcase">
    <div class="typo-row">
      <div class="typo-meta"><h4>Display / H1</h4><p>Cormorant Garamond<br>Light 300<br>Use: Headlines, Hero</p></div>
      <div class="typo-sample-h1">Sanfte<br><em>Hände.</em></div>
      <div class="typo-usage-note"><strong>Warum Cormorant?</strong><br>In der Misty-Forest-Palette bekommt Cormorant Garamond seine ruhigste, natürlichste Wirkung. Die Schrift und das Farbsystem atmen dasselbe: geerdet, zeitlos, nie laut.</div>
    </div>
    <div class="typo-row" style="background: var(--cream);">
      <div class="typo-meta"><h4>Headline / H2</h4><p>Cormorant Garamond<br>Italic 400<br>Use: Subheadings, Quotes</p></div>
      <div class="typo-sample-h2">"Jedes Kind zeigt, was es braucht."</div>
      <div class="typo-usage-note"><strong>Italic als Stimme.</strong><br>Kursiv = Menschenstimme, direktes Zitat, emotionaler Moment. Nur für echte Aussagen der Therapeutin — nie für Produktnamen.</div>
    </div>
    <div class="typo-row">
      <div class="typo-meta"><h4>Body Text</h4><p>DM Sans<br>Light 300<br>16px / 1.8 leading</p></div>
      <div class="typo-sample-body">Die Craniosacral Therapie arbeitet mit dem natürlichen Rhythmus des Körpers. Mit kaum spürbarem Druck — weniger als fünf Gramm — werden Restriktionen im Bindegewebe sanft gelöst. Auch Säuglinge und Neugeborene reagieren empfindlich auf diese Berührungsqualität.</div>
      <div class="typo-usage-note"><strong>DM Sans als Brücke.</strong><br>Light-Schnitt macht den Text zugänglich, nie aufdringlich. Fließtext immer ≤ 65 Zeichen pro Zeile.</div>
    </div>
    <div class="typo-row" style="background: var(--cream);">
      <div class="typo-meta"><h4>Caption / Label</h4><p>DM Sans<br>Medium 500<br>Uppercase</p></div>
      <div class="typo-sample-caption">Craniosacral Therapie · Erstbehandlung · 60 min</div>
      <div class="typo-usage-note"><strong>Kaps als Struktur.</strong><br>Labels, Sektionsbezeichnungen, Preisangaben. Immer in Rauch oder Moos — niemals in Quarz oder Lavendel allein.</div>
    </div>
    <div class="typo-row">
      <div class="typo-meta"><h4>Data / Numbers</h4><p>DM Mono<br>Regular 400<br>Use: Preise, Zeiten</p></div>
      <div class="typo-sample-mono">
        Erstbehandlung (Säugling) .......... € 75,–<br>
        Folgebehandlung ................... € 60,–<br>
        Tuina + Aromatherapie ............. € 55,–<br>
        TCM Ernährungsberatung ............ € 65,–
      </div>
      <div class="typo-usage-note"><strong>Mono für Vertrauen.</strong><br>Monospace-Schriften signalisieren Präzision und Transparenz — wichtig bei Preisangaben in der Gesundheitsbranche.</div>
    </div>
  </div>
</section>

<div class="rule"></div>

<!-- BILDSPRACHE -->
<section id="imagery" class="reveal">
  <div class="section-label">06 — Bildsprache</div>
  <h2>Imagery Style Guide</h2>
  <p class="lead">Die Bildsprache ist ein stilles Versprechen. Vor dem ersten gelesenen Wort hat das Bild schon kommuniziert: "Hier bist du sicher."</p>
  <div class="critical-note">
    <strong>Photography Brief — Misty Forest Grading:</strong> Alle Bilder werden mit einem kühlen, nebeligen Grading bearbeitet: Schatten leicht in Richtung Blaugrün, Highlights in Richtung Linen, leichte globale Entsättigung −10%. Das Ergebnis: Bilder wie Morgennebel über einem Wald — ruhig, schützend, tief. Budget: € 800–1.200 für Praxis-Shooting.
  </div>
  <div class="imagery-grid">
    <div class="img-card"><span class="img-number">I — 01</span><div class="img-thumb mood-a"><div class="img-overlay"><span>Nahaufnahme Hände · Kühle Töne</span></div></div><h4>Behandlungs-Nahaufnahmen</h4><p>Hände der Therapeutin auf Babykopf oder Becken. Kühle, natürliche Beleuchtung, die das Misty-Forest-Grading unterstützt. Schärfe auf der Berührungsstelle, sanfte Unschärfe im Raum.</p></div>
    <div class="img-card"><span class="img-number">I — 02</span><div class="img-thumb mood-b"><div class="img-overlay"><span>Raum · Atmosphäre · Stille</span></div></div><h4>Praxisraum-Atmosphäre</h4><p>Der Behandlungsraum als visuelles Versprechen. Natürliche Materialien — dunkles Holz, Leinen, Moos-farbene Textilien. Tageslichtstimmung, keine künstlichen Warmlichter.</p></div>
    <div class="img-card"><span class="img-number">I — 03</span><div class="img-thumb mood-c"><div class="img-overlay"><span>Mutter + Kind · Diffuses Licht</span></div></div><h4>Mutter-Kind-Momente</h4><p>Nach der Behandlung. Das entspannte Kind, die erleichterte Mutter. Diffuses, bewölktes Tageslicht passt perfekt zum nebelig-ruhigen Grading dieser Palette.</p></div>
    <div class="img-card"><span class="img-number">I — 04</span><div class="img-thumb mood-d"><div class="img-overlay"><span>Details · Kräuter · Steine · Nebel</span></div></div><h4>Materielle Details</h4><p>Dunkle Steine, Moose, Kräuter in gedämpften Tönen. Aromaöl-Fläschchen vor nebeligem Hintergrund. Die Misty-Forest-Palette erlaubt dunklere, erdige Requisiten.</p></div>
    <div class="img-card"><span class="img-number">I — 05</span><div class="img-thumb mood-e"><div class="img-overlay"><span>Burgenland · Nebel · Morgenstille</span></div></div><h4>Regionale Verortung</h4><p>Burgenland im Morgennebel — Felder, Wald, Tau. Diese Palette findet in nebligen Landschaftsstimmungen ihr stärkstes fotografisches Äquivalent.</p></div>
    <div class="img-card"><span class="img-number">I — 06</span><div class="img-thumb mood-f"><div class="img-overlay"><span>Therapeutin · Portrait · Ruhe</span></div></div><h4>Portrait der Therapeutin</h4><p>Das wichtigste Bild überhaupt. In dieser Palette: natürliches Licht, ruhiger Hintergrund in Moostönen, kein Kittel. Die Farbe trägt das Portrait — ruhig, präsent, geerdet.</p></div>
  </div>
  <div style="margin-top: 3rem; padding: 2.5rem 3rem; border: 1px solid var(--stone); background: var(--cream);">
    <h4>Nachbearbeitung & Filterregel — Misty Forest</h4>
    <p style="font-size:0.85rem; max-width: 800px; line-height:1.8;">Globale Entsättigung: −10 bis −15%. Schatten: leichter Grün-Blau-Stich (Hue shift −5° Richtung Cyan). Highlights: neutral-kühl in Richtung Linen. Kein VSCo-Filter, kein Braun-Warmton-Grading. Das Ziel: <em>wie ein Waldlichtung bei diffusem Morgenlicht — ruhig, schützend, tief.</em></p>
  </div>
</section>

<!-- RATIONALE -->
<div class="archetype-wrap reveal section-full" style="background: var(--cream);">
  <div class="archetype-inner" style="color: var(--ink);">
    <div>
      <div class="section-label" style="color: var(--clay);">07 — Strategie-Begründung</div>
      <h2 style="color: var(--moss);">Warum jede Entscheidung<br><em>zählt</em></h2>
      <p style="color: #5A6050; font-size: 0.9rem; line-height:1.8; margin-bottom: 1.5rem">Jedes Element dieses Brand Systems ist aus einer strategischen Notwendigkeit heraus entstanden — nicht aus ästhetischer Willkür.</p>
      <div class="critical-note">
        <strong>Abschließende Business-Kritik:</strong> Ein Brand System allein generiert keine Patienten. Die stärksten Wachstumshebel: (1) Empfehlungsnetzwerk Hebammen/Kinderärzte, (2) Google My Business-Optimierung, (3) Symptombasierte Website-Navigation — "Mein Kind schläft schlecht" statt "Craniosacral Therapie".
      </div>
    </div>
    <div style="display:flex; flex-direction:column; gap:1rem;">
      <div class="trait" style="border: 1px solid rgba(78,88,69,0.2); background:white;">
        <div class="trait-label" style="color:var(--clay)">Entscheidung 01 — Farbe</div>
        <div class="trait-val" style="color:var(--moss); font-size:1.1rem; line-height:1.4">Misty Forest ist die zugänglichste Palette — sie baut keine Barrieren bei medizinischen Überweisungspartnern auf. Rauchviolett (#7A6E8A) liefert Persönlichkeit ohne Risiko. Waldmoos verankert im Natürlichen.</div>
      </div>
      <div class="trait" style="border: 1px solid rgba(78,88,69,0.2); background:white;">
        <div class="trait-label" style="color:var(--clay)">Entscheidung 02 — Name</div>
        <div class="trait-val" style="color:var(--moss); font-size:1.1rem; line-height:1.4">Wurzelkind schafft die einzige wirklich eigenständige Markenposition in diesem Segment in Österreich. Nicht beschreibend genug, um kopiert zu werden — nicht abstrakt genug, um erklärungsbedürftig zu sein.</div>
      </div>
      <div class="trait" style="border: 1px solid rgba(78,88,69,0.2); background:white;">
        <div class="trait-label" style="color:var(--clay)">Entscheidung 03 — Archetype Mix</div>
        <div class="trait-val" style="color:var(--moss); font-size:1.1rem; line-height:1.4">Caregiver + Sage ist die einzige Kombination, die gleichzeitig Mütter emotional abholt UND skeptische Partner sowie das medizinische Netzwerk überzeugt. Die Misty-Forest-Palette unterstützt den Sage-Archetyp besonders stark.</div>
      </div>
    </div>
  </div>
</div>

<footer>
  <div class="footer-inner">
    <div>
      <h4>Brand Identity System · Misty Forest</h4>
      <p>Craniosacral-Therapeutin in Mattersburg, Burgenland, Österreich. Farbsystem: Misty Forest.</p>
      <p style="margin-top:1rem; color: #B0A8B8;">Empfohlener Name: WURZELKIND<br>Empfohlene Logo-Richtung: A — Knospenzeichen<br>Palette: #4E5845 · #7A6E8A · #B0A8B8</p>
    </div>
    <div>
      <h4>Leistungsspektrum der Praxis</h4>
      <p>Craniosacral Therapie (Primär)<br>CST spezialisiert auf Säuglinge & Kleinkinder<br>TCM Ernährungsberatung<br>Tuina-Massage<br>Aromatherapie</p>
    </div>
    <div>
      <h4>Nächste Schritte</h4>
      <p>1. Markenname final entscheiden + Domaincheck<br>2. Gewerbliche Anmeldung / Namensschutz<br>3. Fotografin für Praxis-Shooting<br>4. Logo-Variante A vektoriell ausarbeiten<br>5. Website nach Messaging Hierarchy aufbauen<br>6. Google My Business einrichten</p>
    </div>
  </div>
  <div class="footer-bottom">
    <span>Pentagram Creative Direction — Wurzelkind / Mattersburg 2025 · Misty Forest</span>
    <span>Confidential — Not for distribution</span>
  </div>
</footer>

<script>
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(e => e.forEach(el => { if(el.isIntersecting){ el.target.classList.add('visible'); observer.unobserve(el.target); } }), { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(el => observer.observe(el));
  document.querySelectorAll('.name-card').forEach((c,i) => c.style.transitionDelay = `${i*0.07}s`);
</script>
</body>
</html>
