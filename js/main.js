/* ============================================
   CONCEPT ARQUITECTOS — INTERACTIONS & ANIMATIONS
   ============================================ */

'use strict';

/* ── TRANSLATIONS ─────────────────────────── */
const translations = {
  en: {
    'nav.studio': 'Studio', 'nav.projects': 'Projects', 'nav.team': 'Team',
    'nav.services': 'Services', 'nav.contact': 'Contact',
    'nav.desc': 'We design spaces that challenge perception and transform the way human beings inhabit the world.',
    'hero.label': 'Architecture Studio · Est. 2010',
    'hero.headline': 'Where<br/><em>Space</em><br/>Thinks',
    'hero.scroll': 'Explore', 'hero.cta': 'View Projects',
    'hero.country': 'Portugal',
    'marquee.1': 'Architecture', 'marquee.2': 'Interior Design',
    'marquee.3': 'Urbanism', 'marquee.4': 'Landscaping',
    'marquee.5': 'Consulting', 'marquee.6': 'Brand Architecture',
    'marquee.7': 'Sustainable Design',
    'about.label': 'About Us', 'about.side': 'Studio Philosophy',
    'about.headline': 'We build<br/><span class="accent">beyond</span><br/>walls',
    'about.p1': "We don't design buildings. We create experience systems. Each project is an investigation into how human beings perceive, inhabit and feel the space that contains them.",
    'about.p2': "Our process begins from the productive tension between constructive reason and poetic intuition. Between what the client needs and what they don't yet know they want.",
    'about.stat1': 'Years of practice', 'about.stat2': 'Completed projects',
    'about.stat3': 'International awards', 'about.stat4': 'Countries of work',
    'projects.label': 'Featured Work', 'projects.title': 'Projects',
    'projects.count': '08 selected', 'projects.cta': 'View Project',
    'tag.residential': 'Residential', 'tag.corporate': 'Corporate',
    'tag.cultural': 'Cultural', 'tag.institutional': 'Institutional', 'tag.commercial': 'Commercial',
    'proj0.title': 'Open Sky Residence', 'proj1.title': 'Vértice Tower',
    'proj2.title': 'Root Pavilion', 'proj3.title': 'Casa Umbra',
    'proj4.title': 'Quórum Centre', 'proj5.title': 'Villa Vale de Milho',
    'proj6.title': 'Algarve Residence',
    'proj7.title': 'Portimão Atlantic Terraces',
    'team.label': 'Who We Are', 'team.title': 'Team',
    'team.role1': 'Director · Founder', 'team.role2': 'Design Director', 'team.role3': 'Senior Architect',
    'services.label': 'What We Do', 'services.title': 'Services',
    'services.name1': 'Residential Architecture',
    'services.desc1': "We design homes that articulate private life with the natural environment. Each home is a unique work, conceived from the dialogue between the inhabitant and the territory.",
    'services.name2': 'Commercial Architecture',
    'services.desc2': "Corporate, commercial and institutional spaces that communicate brand identity through built form. Strategic design with high experiential impact.",
    'services.name3': 'Interior Design',
    'services.desc3': "Integral intervention of interior space: materials, light, furniture and atmosphere. We question the conventional to build unique sensory experiences.",
    'stag.single': 'Single-family', 'stag.multi': 'Multi-unit', 'stag.luxury': 'Luxury',
    'stag.sustain': 'Sustainable', 'stag.office': 'Offices', 'stag.retail': 'Retail',
    'stag.hotel': 'Hospitality', 'stag.inst': 'Institutional',
    'stag.res': 'Residential', 'stag.com': 'Commercial', 'stag.light': 'Lighting',
    'contact.label': "Let's Begin",
    'contact.headline': "Let's make<br/><em>something</em><br/>real",
    'contact.desc': "Every great project begins with a conversation. Tell us your vision — we'll find the form.",
    'contact.field.name': 'Full name', 'contact.field.email': 'Email address',
    'contact.field.type': 'Project type', 'contact.field.message': 'Tell us about your project',
    'contact.opt.residential': 'Residential', 'contact.opt.commercial': 'Commercial',
    'contact.opt.interior': 'Interior Design', 'contact.opt.urbanism': 'Urbanism',
    'contact.opt.consult': 'General Inquiry',
    'contact.submit': 'Start a Project', 'contact.note': 'We respond within 24–48 hours',
    'map.label': 'Location', 'map.title': 'Find Us',
    'map.hours': 'Mon–Fri · 9h–18h', 'map.directions': 'Get Directions →',
    'map.studio': 'Architecture Studio · Portimão',
    'footer.tagline': 'Architecture as Experience',
    'footer.copy': '© 2024 Concept Arquitectos · Portimão, Portugal',
    'modal.category': 'Category', 'modal.year': 'Year', 'modal.location': 'Location',
    'modal.area': 'Area', 'modal.status': 'Status', 'modal.materials': 'Materials',
    'modal.concept': 'Concept', 'modal.narrative': 'Narrative', 'modal.vision': 'Vision',
  },
  pt: {
    'nav.studio': 'Estúdio', 'nav.projects': 'Projetos', 'nav.team': 'Equipa',
    'nav.services': 'Serviços', 'nav.contact': 'Contacto',
    'nav.desc': 'Projetamos espaços que desafiam a perceção e transformam a forma como o ser humano habita o mundo.',
    'hero.label': 'Estúdio de Arquitetura · Est. 2010',
    'hero.headline': 'Onde o<br/><em>Espaço</em><br/>Pensa',
    'hero.scroll': 'Explorar', 'hero.cta': 'Ver Projetos',
    'hero.country': 'Portugal',
    'marquee.1': 'Arquitetura', 'marquee.2': 'Design de Interiores',
    'marquee.3': 'Urbanismo', 'marquee.4': 'Paisagismo',
    'marquee.5': 'Consultoria', 'marquee.6': 'Arquitetura de Marca',
    'marquee.7': 'Design Sustentável',
    'about.label': 'Sobre Nós', 'about.side': 'Filosofia do Estúdio',
    'about.headline': 'Construímos<br/><span class="accent">além</span><br/>das paredes',
    'about.p1': 'Não projetamos edifícios. Criamos sistemas de experiência. Cada projeto é uma investigação sobre como o ser humano percebe, habita e sente o espaço que o contém.',
    'about.p2': 'O nosso processo parte da tensão produtiva entre a razão construtiva e a intuição poética. Entre o que o cliente precisa e o que ainda não sabe que quer.',
    'about.stat1': 'Anos de prática', 'about.stat2': 'Projetos concluídos',
    'about.stat3': 'Prémios internacionais', 'about.stat4': 'Países de trabalho',
    'projects.label': 'Trabalho em Destaque', 'projects.title': 'Projetos',
    'projects.count': '08 selecionados', 'projects.cta': 'Ver Projeto',
    'tag.residential': 'Residencial', 'tag.corporate': 'Corporativo',
    'tag.cultural': 'Cultural', 'tag.institutional': 'Institucional', 'tag.commercial': 'Comercial',
    'proj0.title': 'Residência Céu Aberto', 'proj1.title': 'Torre Vértice',
    'proj2.title': 'Pavilhão Raiz', 'proj3.title': 'Casa Umbra',
    'proj4.title': 'Centro Quórum', 'proj5.title': 'Villa Vale de Milho',
    'proj6.title': 'Residência Algarve',
    'proj7.title': 'Portimão Atlantic Terraces',
    'team.label': 'Quem Somos', 'team.title': 'Equipa',
    'team.role1': 'Diretor · Fundador', 'team.role2': 'Diretor de Design', 'team.role3': 'Arquiteto Sénior',
    'services.label': 'O Que Fazemos', 'services.title': 'Serviços',
    'services.name1': 'Arquitetura Residencial',
    'services.desc1': 'Projetamos habitações que articulam a vida privada com o ambiente natural. Cada casa é uma obra singular, concebida a partir do diálogo entre o habitante e o território.',
    'services.name2': 'Arquitetura Comercial',
    'services.desc2': 'Espaços corporativos, comerciais e institucionais que comunicam a identidade de marca através da forma construída. Design estratégico com alto impacto experiencial.',
    'services.name3': 'Design de Interiores',
    'services.desc3': 'Intervenção integral do espaço interior: materiais, luz, mobiliário e atmosfera. Questionamos o convencional para construir experiências sensoriais únicas.',
    'stag.single': 'Unifamiliar', 'stag.multi': 'Coletivo', 'stag.luxury': 'Luxo',
    'stag.sustain': 'Sustentável', 'stag.office': 'Escritórios', 'stag.retail': 'Retalho',
    'stag.hotel': 'Hotelaria', 'stag.inst': 'Institucional',
    'stag.res': 'Residencial', 'stag.com': 'Comercial', 'stag.light': 'Iluminação',
    'contact.label': 'Vamos Começar',
    'contact.headline': 'Vamos fazer<br/><em>algo</em><br/>real',
    'contact.desc': 'Cada grande projeto começa com uma conversa. Conte-nos a sua visão — nós encontramos a forma.',
    'contact.field.name': 'Nome completo', 'contact.field.email': 'Endereço de email',
    'contact.field.type': 'Tipo de projeto', 'contact.field.message': 'Conte-nos sobre o seu projeto',
    'contact.opt.residential': 'Residencial', 'contact.opt.commercial': 'Comercial',
    'contact.opt.interior': 'Design de Interiores', 'contact.opt.urbanism': 'Urbanismo',
    'contact.opt.consult': 'Consulta Geral',
    'contact.submit': 'Iniciar Projeto', 'contact.note': 'Respondemos em 24–48 horas',
    'map.label': 'Localização', 'map.title': 'Encontre-nos',
    'map.hours': 'Seg–Sex · 9h–18h', 'map.directions': 'Como Chegar →',
    'map.studio': 'Atelier de Arquitetura · Portimão',
    'footer.tagline': 'Arquitetura como Experiência',
    'footer.copy': '© 2024 Concept Arquitectos · Portimão, Portugal',
    'modal.category': 'Categoria', 'modal.year': 'Ano', 'modal.location': 'Localização',
    'modal.area': 'Área', 'modal.status': 'Estado', 'modal.materials': 'Materiais',
    'modal.concept': 'Conceito', 'modal.narrative': 'Narrativa', 'modal.vision': 'Visão',
  }
};

/* ── I18N ENGINE ──────────────────────────── */
let currentLang = 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  // textContent elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML elements (headlines with <em>, <br>, <span>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update lang toggle active state
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('is-active', opt.dataset.lang === lang);
  });
}

/* ── LANGUAGE TOGGLE ──────────────────────── */
(function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const next = currentLang === 'en' ? 'pt' : 'en';
    applyTranslations(next);
  });
})();

/* ── THEME TOGGLE ─────────────────────────── */
(function initThemeToggle() {
  const btn      = document.getElementById('themeToggle');
  const html     = document.documentElement;
  const iconDark = btn && btn.querySelector('.theme-icon--dark');
  const iconLight= btn && btn.querySelector('.theme-icon--light');
  if (!btn) return;

  function storeGet(k, def) { try { return localStorage.getItem(k) || def; } catch { return def; } }
  function storeSet(k, v)   { try { localStorage.setItem(k, v); } catch {} }

  const stored = storeGet('ca-theme', 'dark');
  html.dataset.theme = stored;
  updateThemeIcon(stored);

  btn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    storeSet('ca-theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    if (!iconDark || !iconLight) return;
    iconDark.style.display  = theme === 'dark'  ? 'flex' : 'none';
    iconLight.style.display = theme === 'light' ? 'flex' : 'none';
  }
})();

/* ── NAV SCROLL STATE ─────────────────────── */
(function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  function update() {
    const heroH = (document.getElementById('hero') || {}).offsetHeight || window.innerHeight;
    nav.classList.toggle('scrolled', window.scrollY > heroH - 80);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ── CUSTOM CURSOR ────────────────────────── */
(function initCursor() {
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  if (!cursor || !cursorRing) return;

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  })();

  document.querySelectorAll('a, button, .project-card, .team-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('is-hover'); cursorRing.classList.add('is-hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('is-hover'); cursorRing.classList.remove('is-hover'); });
  });

  document.addEventListener('mousedown', () => cursor.classList.add('is-click'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('is-click'));
})();

/* ── PROGRESS BAR ─────────────────────────── */
(function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / total * 100) + '%';
  }, { passive: true });
})();

/* ── OVERLAY NAVIGATION ───────────────────── */
(function initNav() {
  const menuBtn    = document.getElementById('menuBtn');
  const overlayNav = document.getElementById('overlayNav');
  if (!menuBtn || !overlayNav) return;

  let isOpen = false;

  function open()  { isOpen = true;  menuBtn.classList.add('is-open');    menuBtn.setAttribute('aria-expanded', 'true');  overlayNav.classList.add('is-open');    document.body.style.overflow = 'hidden'; }
  function close() { isOpen = false; menuBtn.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); overlayNav.classList.remove('is-open'); document.body.style.overflow = ''; }

  menuBtn.addEventListener('click', () => isOpen ? close() : open());
  overlayNav.querySelectorAll('.nav-link-item').forEach(l => l.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) close(); });
})();

/* ── HERO VIDEO FALLBACK ─────────────────── */
(function initHeroVideo() {
  const video = document.querySelector('.hero-bg-video');
  const fallback = document.querySelector('.hero-bg-img--fallback');
  if (!video || !fallback) return;

  video.addEventListener('error', () => {
    video.style.display = 'none';
    fallback.style.zIndex = '0';
  });

  video.addEventListener('loadeddata', () => {
    fallback.style.opacity = '0';
  });
})();

/* ── HERO CANVAS ANIMATION ────────────────── */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    initParticles();
  }

  function initParticles() {
    particles = [];
    const cols = 14, rows = 10;
    for (let i = 0; i <= cols; i++) particles.push({ type: 'v', x: (W / cols) * i, opacity: Math.random() * 0.06 + 0.02, speed: Math.random() * 0.3 + 0.1, phase: Math.random() * Math.PI * 2 });
    for (let i = 0; i <= rows; i++) particles.push({ type: 'h', y: (H / rows) * i, opacity: Math.random() * 0.06 + 0.02, speed: Math.random() * 0.3 + 0.1, phase: Math.random() * Math.PI * 2 });
    for (let i = 0; i < 40; i++) particles.push({ type: 'dot', x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.5 + 0.5, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, opacity: Math.random() * 0.12 + 0.04 });
  }

  let t = 0;
  function draw() {
    t += 0.008;
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = 'rgba(6, 5, 4, 0.42)';
    ctx.fillRect(0, 0, W, H);

    particles.forEach(p => {
      if (p.type === 'v') {
        const a = p.opacity * (0.5 + 0.5 * Math.sin(t * p.speed + p.phase));
        ctx.strokeStyle = `rgba(207, 198, 184, ${a})`; ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.moveTo(p.x, 0); ctx.lineTo(p.x, H); ctx.stroke();
      } else if (p.type === 'h') {
        const a = p.opacity * (0.5 + 0.5 * Math.sin(t * p.speed + p.phase));
        ctx.strokeStyle = `rgba(207, 198, 184, ${a})`; ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.moveTo(0, p.y); ctx.lineTo(W, p.y); ctx.stroke();
      } else {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(207, 198, 184, ${p.opacity})`; ctx.fill();
      }
    });

    const lx1 = W * 0.6 + Math.sin(t * 0.3) * 80;
    const lx2 = W * 0.9 + Math.sin(t * 0.3) * 40;
    ctx.strokeStyle = 'rgba(207, 198, 184, 0.04)'; ctx.lineWidth = 120;
    ctx.beginPath(); ctx.moveTo(lx1, 0); ctx.lineTo(lx2, H); ctx.stroke();

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ── SCROLL REVEAL ────────────────────────── */
(function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger').forEach(el => observer.observe(el));

  const archObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); archObserver.unobserve(e.target); } });
  }, { threshold: 0.3 });
  document.querySelectorAll('.arch-line').forEach(el => archObserver.observe(el));
})();

/* ── PROJECT DATA ─────────────────────────── */
const projectData = [
  {
    en: { title: 'Open Sky Residence', category: 'Residential', status: 'Built', concept: 'A home that dissolves into the Caribbean landscape. The program fragments into pavilions connected by floating horizontal planes, generating total permeability between inside and outside.', narrative: 'The project begins with an essential question: can a house be simultaneously shelter and watchtower? The answer was to build in layers — a succession of thresholds from the most private to the infinite horizon of the sea.', vision: 'Materials were chosen for their capacity to age with dignity. Concrete records the passage of time; wood gains character. Architecture as a living process.' },
    pt: { title: 'Residência Céu Aberto', category: 'Residencial', status: 'Construído', concept: 'Uma habitação que se dissolve na paisagem caribenha. O programa fragmenta-se em pavilhões ligados por planos horizontais flutuantes, gerando uma permeabilidade total entre interior e exterior.', narrative: 'O projeto nasce de uma questão essencial: pode uma casa ser simultaneamente refúgio e miradouro? A resposta foi construir em camadas — uma sucessão de limiares que vão do mais privado ao horizonte infinito do mar.', vision: 'Os materiais foram selecionados pela sua capacidade de envelhecer com dignidade. O betão regista a passagem do tempo; a madeira ganha carácter. A arquitetura como processo vivo.' },
    year: '2023', location: 'Portimão, Algarve, Portugal',
    area: '620 m²', materials: 'Exposed concrete · Laminated glass · Teak wood',
    heroImg: 'images/470571901_9114091031990644_3914962260874532592_n.jpg',
    img1: 'images/471158464_9114091275323953_2797154666458548224_n.jpg', img2: 'images/details.jpg'
  },
  {
    en: { title: 'Vértice Tower', category: 'Corporate', status: 'Built', concept: 'A tower that redefines corporate presence on the Santiago skyline. The slightly conical section optimises floor area while reducing wind load on upper floors.', narrative: "The client asked for 'presence'. We proposed 'precision'. Every detail of the modular façade was developed to create a changing light pattern throughout the day — a living surface.", vision: "Corporate architecture doesn't have to be anonymous. Vértice Tower is a symbol of a company that bets on design as a differential value." },
    pt: { title: 'Torre Vértice', category: 'Corporativo', status: 'Construído', concept: 'Uma torre que redefine a presença corporativa no skyline de Santiago. A secção ligeiramente cónica optimiza a planta útil enquanto reduz a carga de vento nos pisos superiores.', narrative: 'O cliente pediu "presença". Nós propusemos "precisão". Cada detalhe da fachada modular foi desenvolvido para criar um padrão de luz variável ao longo do dia — uma superfície viva.', vision: 'A arquitetura corporativa não tem de ser anónima. A Torre Vértice é o símbolo de uma empresa que aposta no design como valor diferencial.' },
    year: '2022', location: 'Portimão, Algarve, Portugal',
    area: '8,400 m²', materials: 'Tempered glass · Structural steel · Anodised aluminium',
    heroImg: 'images/471158464_9114091275323953_2797154666458548224_n.jpg',
    img1: 'images/470571901_9114091031990644_3914962260874532592_n.jpg', img2: 'images/131273270_3738645572868577_4171945136956633290_n.jpg'
  },
  {
    en: { title: 'Root Pavilion', category: 'Cultural', status: 'Built', concept: 'A cultural pavilion rooted in Dominican constructive tradition. Local timber and bamboo define a community gathering space that dialogues with topography and vegetation.', narrative: "The brief was simple: create a space for art and culture in the heart of the Yaque valley. The answer was complex: a building that grows from the earth, not upon it.", vision: 'Sustainability not as certification, but as ethics. Every material is local, every building technique is regional. The pavilion employs local craftspeople and will continue to do so throughout its life.' },
    pt: { title: 'Pavilhão Raiz', category: 'Cultural', status: 'Construído', concept: 'Um pavilhão cultural enraizado na tradição construtiva dominicana. Estruturas de madeira local e bambu definem um espaço de reunião comunitária que dialoga com a topografia e a vegetação.', narrative: 'A encomenda era simples: criar um espaço para a arte e a cultura no coração do vale do Yaque. A resposta foi complexa: um edifício que cresce da terra, não sobre ela.', vision: 'Sustentabilidade não como certificação, mas como ética. Cada material é local, cada técnica construtiva é regional. O pavilhão emprega artesãos da zona e continuará a fazê-lo durante a sua vida útil.' },
    year: '2023', location: 'Portimão, Algarve, Portugal',
    area: '380 m²', materials: 'Local timber · Treated bamboo · Rammed earth',
    heroImg: 'images/130824417_3738645486201919_8523422455263461037_n.jpg',
    img1: 'images/130923255_3738645492868585_1490597373984909298_n.jpg', img2: 'images/131095912_3738645562868578_8281928021500282238_n.jpg'
  },
  {
    en: { title: 'Casa Umbra', category: 'Residential', status: 'Built', concept: 'A brutally honest residence. The mass concrete walls are not concealed — they are celebrated. Openings are strategically positioned to create dramatic shadow plays throughout the day.', narrative: 'Casa Umbra was born from a fascination with shadow as a design material. In the tropics, shadow is as important as light. Here, both are architecture.', vision: 'In an environment of hedonistic tourist architecture, Casa Umbra proposes the opposite: austerity as luxury. Restraint as the highest expression.' },
    pt: { title: 'Casa Umbra', category: 'Residencial', status: 'Construído', concept: 'Uma residência brutalmente honesta. Os muros de betão em massa não se dissimulam — celebram-se. As aberturas estão estrategicamente posicionadas para criar jogos de sombra dramáticos ao longo do dia.', narrative: 'A Casa Umbra nasceu de uma fascinação com a sombra como material de design. Nos trópicos, a sombra é tão importante quanto a luz. Aqui, ambas são arquitetura.', vision: 'Num ambiente de arquitetura turística e hedonista, a Casa Umbra propõe o oposto: austeridade como luxo. A contenção como máxima expressão.' },
    year: '2021', location: 'Portimão, Algarve, Portugal',
    area: '450 m²', materials: 'Mass concrete · River stone · Black steel',
    heroImg: 'images/130923255_3738645492868585_1490597373984909298_n.jpg',
    img1: 'images/130824417_3738645486201919_8523422455263461037_n.jpg', img2: 'images/131273270_3738645572868577_4171945136956633290_n.jpg'
  },
  {
    en: { title: 'Quórum Centre', category: 'Institutional', status: 'Built', concept: "A conference centre designed for the Latin American community in Miami. The architecture articulates the tension between cultural identity and international vocation.", narrative: 'The project was conceived as a "contemporary agora" — a space where ideas meet, debate and transform. The free plan and movable partitions allow total versatility.', vision: 'Quórum is our first international work and marks a milestone in the studio\'s trajectory. We prove that Dominican architecture can compete and win in any market.' },
    pt: { title: 'Centro Quórum', category: 'Institucional', status: 'Construído', concept: 'Um centro de conferências projetado para a comunidade latino-americana em Miami. A arquitetura articula a tensão entre identidade cultural e vocação internacional.', narrative: 'O projeto foi concebido como uma "ágora contemporânea" — um espaço onde as ideias se encontram, debatem e transformam. A planta livre e as divisórias móveis permitem uma versatilidade total.', vision: 'O Quórum é a nossa primeira obra internacional e marca um marco na projeção do estúdio. Demonstramos que a arquitetura dominicana pode competir e ganhar em qualquer mercado.' },
    year: '2022', location: 'Portimão, Algarve, Portugal',
    area: '3,200 m²', materials: 'White concrete · Low-emission glass · Black granite',
    heroImg: 'images/131095912_3738645562868578_8281928021500282238_n.jpg',
    img1: 'images/131273270_3738645572868577_4171945136956633290_n.jpg', img2: 'images/details.jpg'
  },
  {
    en: { title: 'Mirror Studio', category: 'Commercial', status: 'Under construction', concept: "A commercial and creative space that plays with the duality of reflection and opacity. The mirrored glass façade dialogues with the urban environment, transforming the street into part of the architectural programme.", narrative: "Mirror Studio was born from the question: what happens when a building doesn't want to look at itself, but at the world? The answer was an architecture that looks outward with a surface that reflects everything back.", vision: 'The project marks the beginning of a new commercial typology in Santo Domingo — a hybrid between art gallery, workspace and brand experience.' },
    pt: { title: 'Estúdio Espelho', category: 'Comercial', status: 'Em construção', concept: 'Um espaço comercial e criativo que joga com a dualidade reflexo-opacidade. A fachada de vidro espelhado dialoga com o ambiente urbano, transformando a rua em parte do programa arquitetónico.', narrative: 'O Estúdio Espelho nasceu da questão: o que acontece quando um edifício não quer ver-se a si mesmo, mas ao mundo? A resposta foi uma arquitetura que olha para fora com uma superfície que tudo devolve.', vision: 'O projeto marca o início de uma nova tipologia comercial em Santo Domingo — um híbrido entre galeria de arte, espaço de trabalho e experiência de marca.' },
    year: '2024', location: 'Portimão, Algarve, Portugal',
    area: '1,100 m²', materials: 'Mirror glass · Polished concrete · Corten steel',
    heroImg: 'images/131273270_3738645572868577_4171945136956633290_n.jpg',
    img1: 'images/details.jpg', img2: 'images/470571901_9114091031990644_3914962260874532592_n.jpg'
  },
  {
    en: { title: 'Villa Vale de Milho', category: 'Residential', status: 'Built', concept: 'A private villa set into the hillside of Vale de Milho, commanding views across the Algarve coastline. The project integrates into the terrain through a series of terraced volumes in local stone and glass.', narrative: 'The brief called for a home that felt simultaneously rooted and elevated — of the land but above it. We resolved this through split-level planning that steps with the natural topography.', vision: 'Vale de Milho is one of our first completed works in the Algarve. It established the language of materiality and site-responsiveness that now defines the studio\'s residential practice.' },
    pt: { title: 'Villa Vale de Milho', category: 'Residencial', status: 'Construído', concept: 'Uma villa privada inserida na encosta do Vale de Milho, com vistas sobre a costa algarvia. O projeto integra-se no terreno através de uma série de volumes em socalco em pedra local e vidro.', narrative: 'O programa pedia uma casa que se sentisse simultaneamente enraizada e elevada — da terra, mas acima dela. Resolvemos isso através de um planeamento em meios-níveis que acompanha a topografia natural.', vision: 'O Vale de Milho é uma das nossas primeiras obras concluídas no Algarve. Estabeleceu a linguagem de materialidade e resposta ao lugar que agora define a prática residencial do estúdio.' },
    year: '2024', location: 'Carvoeiro, Algarve, Portugal',
    area: '480 m²', materials: 'Local limestone · Structural glass · Ipe wood',
    heroImg: 'images/Villa in Vale de Milho-2026-04-18 024833.jpg',
    img1: 'images/130824417_3738645486201919_8523422455263461037_n.jpg',
    img2: 'images/130923255_3738645492868585_1490597373984909298_n.jpg'
  },
  {
    en: { title: 'Algarve Residence', category: 'Residential', status: 'Built', concept: 'A contemporary residence designed around the relationship between solid and void — thick white walls punctuated by precise openings that frame specific views of the Algarve landscape.', narrative: 'The client sought a home that felt both open and sheltered. We achieved this through a courtyard typology: inward-looking spaces that open dramatically toward sea views at key moments.', vision: 'This project represents our commitment to contemporary Portuguese architecture — rigorous in geometry, generous in light, and always in conversation with the land.' },
    pt: { title: 'Residência Algarve', category: 'Residencial', status: 'Construído', concept: 'Uma residência contemporânea desenhada em torno da relação entre sólido e vazio — paredes brancas espessas pontuadas por aberturas precisas que enquadram vistas específicas da paisagem algarvia.', narrative: 'O cliente procurava uma casa que se sentisse simultaneamente aberta e protegida. Alcançamos isso através de uma tipologia de pátio: espaços voltados para dentro que se abrem dramaticamente para as vistas do mar em momentos-chave.', vision: 'Este projeto representa o nosso compromisso com a arquitetura portuguesa contemporânea — rigorosa na geometria, generosa na luz e sempre em diálogo com a terra.' },
    year: '2025', location: 'Portimão, Algarve, Portugal',
    area: '560 m²', materials: 'White render · Travertine · Powder-coated steel',
    heroImg: 'images/2026-04-18 025154.jpg',
    img1: 'images/131095912_3738645562868578_8281928021500282238_n.jpg',
    img2: 'images/471158464_9114091275323953_2797154666458548224_n.jpg'
  },
  {
    en: { title: 'Portimão Atlantic Terraces', category: 'Residential', status: 'Built', concept: 'A terraced residential development cascading toward the Atlantic coastline. The building\'s section adapts to the natural topography, creating a sequence of private terraces that frame the ocean horizon as a living panorama.', narrative: 'The Atlantic Terraces project emerged from a fundamental question: how does a building belong to a place defined entirely by the meeting of land and sea? The answer was to refuse the conventional wall — to build instead a series of thresholds, each one a stage between the private interior and the infinite Atlantic.', vision: 'This project is our most direct dialogue with the Portuguese coast. Where others build barriers to the elements, we built filters — letting light, wind and the sound of the sea become materials as real as concrete and glass.' },
    pt: { title: 'Portimão Atlantic Terraces', category: 'Residencial', status: 'Construído', concept: 'Um empreendimento residencial em socalcos que se estende em direção à costa atlântica. A secção do edifício adapta-se à topografia natural, criando uma sequência de terraços privados que enquadram o horizonte oceânico como um panorama vivo.', narrative: 'O projeto Atlantic Terraces nasceu de uma questão fundamental: como pode um edifício pertencer a um lugar definido inteiramente pelo encontro da terra com o mar? A resposta foi recusar a parede convencional — construir em vez disso uma série de limiares, cada um uma passagem entre o interior privado e o Atlântico infinito.', vision: 'Este projeto é o nosso diálogo mais direto com a costa portuguesa. Onde outros constroem barreiras aos elementos, nós construímos filtros — deixando a luz, o vento e o som do mar tornarem-se materiais tão reais como o betão e o vidro.' },
    year: '2024', location: 'Portimão, Algarve, Portugal',
    area: '2,800 m²', materials: 'White render · Marine timber · Tempered glass · Local stone',
    videoUrl: 'https://www.youtube-nocookie.com/embed/pOThdhPi3pw?si=wyZ47DUT_0F8RYbo',
    heroImg: 'https://img.youtube.com/vi/pOThdhPi3pw/maxresdefault.jpg',
    img1: 'images/130824417_3738645486201919_8523422455263461037_n.jpg',
    img2: 'images/131095912_3738645562868578_8281928021500282238_n.jpg'
  }
];

/* ── PROJECT MODAL ────────────────────────── */
(function initModal() {
  const modal    = document.getElementById('projectModal');
  const inner    = document.getElementById('modalInner');
  const closeBtn = document.getElementById('modalClose');
  if (!modal) return;

  const t = () => translations[currentLang];

  function buildModalContent(data) {
    const d   = data[currentLang] || data.en;
    const loc = data.location;
    const heroBlock = data.videoUrl
      ? `<div class="modal-video-wrap">
           <iframe src="${data.videoUrl}&autoplay=1" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>`
      : `<div class="modal-hero-img">
           <img src="${data.heroImg}" alt="${d.title}" style="width:100%;height:100%;object-fit:cover;display:block;" />
         </div>`;
    return `
      <div class="modal-header">
        <h2 class="modal-title">${d.title}</h2>
        <div class="modal-meta">
          <strong>${d.category}</strong>
          ${loc}<br/>${data.year} · ${data.area}
        </div>
      </div>
      ${heroBlock}
      <div class="modal-body">
        <aside class="modal-sidebar">
          <h3>${t()['modal.category'] || 'Category'}</h3>
          <ul>
            <li><span>${t()['modal.category'] || 'Category'}</span><span>${d.category}</span></li>
            <li><span>${t()['modal.year'] || 'Year'}</span><span>${data.year}</span></li>
            <li><span>${t()['modal.location'] || 'Location'}</span><span>${loc}</span></li>
            <li><span>${t()['modal.area'] || 'Area'}</span><span>${data.area}</span></li>
            <li><span>${t()['modal.status'] || 'Status'}</span><span>${d.status}</span></li>
            <li><span>${t()['modal.materials'] || 'Materials'}</span><span style="text-align:right;max-width:200px">${data.materials}</span></li>
          </ul>
        </aside>
        <div class="modal-content">
          <h2>${t()['modal.concept'] || 'Concept'}</h2>
          <p>${d.concept}</p>
          <h2>${t()['modal.narrative'] || 'Narrative'}</h2>
          <p>${d.narrative}</p>
          <h2>${t()['modal.vision'] || 'Vision'}</h2>
          <p>${d.vision}</p>
          <div class="modal-img-row">
            <div><img src="${data.img1}" alt="${d.title} — detail" style="width:100%;height:100%;object-fit:cover;display:block;" /></div>
            <div><img src="${data.img2}" alt="${d.title} — interior" style="width:100%;height:100%;object-fit:cover;display:block;" /></div>
          </div>
        </div>
      </div>`;
  }

  function openModal(index) {
    if (!projectData[index]) return;
    inner.innerHTML = buildModalContent(projectData[index]);
    modal.classList.add('is-open');
    modal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const iframe = inner.querySelector('iframe');
    if (iframe) iframe.src = iframe.src; // stops playback
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.addEventListener('click', () => openModal(i));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(i); } });
  });

  closeBtn && closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
})();

/* ── TEAM HORIZONTAL DRAG SCROLL ──────────── */
(function initTeamDrag() {
  const scroll = document.querySelector('.team-scroll');
  if (!scroll) return;
  let isDown = false, startX, left;
  scroll.addEventListener('mousedown', e => { isDown = true; scroll.style.cursor = 'grabbing'; startX = e.pageX - scroll.offsetLeft; left = scroll.scrollLeft; });
  document.addEventListener('mouseup',  () => { isDown = false; scroll.style.cursor = ''; });
  scroll.addEventListener('mouseleave', () => { isDown = false; scroll.style.cursor = ''; });
  scroll.addEventListener('mousemove', e => {
    if (!isDown) return; e.preventDefault();
    scroll.scrollLeft = left - (e.pageX - scroll.offsetLeft - startX) * 1.5;
  });
})();

/* ── HERO PARALLAX ────────────────────────── */
(function initParallax() {
  const heroContent = document.querySelector('.hero-content');
  const heroBottom  = document.querySelector('.hero-bottom');
  if (!heroContent) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroContent.style.transform = `translateY(${y * 0.35}px)`;
    heroContent.style.opacity   = Math.max(0, 1 - y / 600);
    if (heroBottom) { heroBottom.style.transform = `translateY(${y * 0.15}px)`; heroBottom.style.opacity = Math.max(0, 1 - y / 400); }
  }, { passive: true });
})();

/* ── GRID OVERLAY TOGGLE ──────────────────── */
(function initGridToggle() {
  const btn = document.getElementById('gridToggle'), overlay = document.getElementById('gridOverlay');
  if (!btn || !overlay) return;
  let v = false;
  btn.addEventListener('click', () => { v = !v; overlay.classList.toggle('is-visible', v); btn.textContent = v ? 'Grid ✕' : 'Grid'; });
})();

/* ── CONTACT FORM ─────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const select = form.querySelector('select');
  if (select) {
    function updateSelectLabel() {
      const label = select.parentElement.querySelector('label');
      if (!label) return;
      const active = !!select.value;
      label.style.top = active ? '0.5rem' : '';
      label.style.fontSize = active ? '0.5rem' : '';
      label.style.color = active ? 'var(--accent)' : '';
    }
    select.addEventListener('change', updateSelectLabel);
    updateSelectLabel();
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const span = btn.querySelector('[data-i18n]');
    const orig = span ? span.textContent : '';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    if (span) span.textContent = '...';

    setTimeout(() => {
      btn.style.background = 'var(--white)';
      if (span) span.textContent = '✓';
      setTimeout(() => {
        if (span) span.textContent = orig;
        btn.style.background = '';
        btn.style.opacity = '';
        btn.disabled = false;
        form.reset();
        if (select) { const l = select.parentElement.querySelector('label'); if (l) { l.style.top = ''; l.style.fontSize = ''; l.style.color = ''; } }
      }, 2500);
    }, 1600);
  });
})();

/* ── MARQUEE PAUSE ON HOVER ───────────────── */
(function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  const section = track.closest('.marquee-section');
  if (section) {
    section.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    section.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
  }
})();

/* ── FONT LOAD ────────────────────────────── */
document.fonts && document.fonts.ready.then(() => document.body.classList.add('fonts-loaded'));
