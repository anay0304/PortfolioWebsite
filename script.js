// Tabbed navigation with hash routing (#home, #about, etc.)
document.addEventListener('DOMContentLoaded', () => {
  const sections = Array.from(document.querySelectorAll('.site-section, .hero')); // hero + all content sections
  const navLinks = Array.from(document.querySelectorAll('header nav a'));

  function showSection(id) {
    // hide/show sections
    sections.forEach(sec => sec.classList.toggle('hidden', sec.id !== id));

    // highlight active nav link
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));

    // a11y focus: h1 for home, h2 for other sections
    const focusEl = id === 'home'
      ? document.querySelector('#home h1')
      : document.querySelector(`#${id} h2`);
    if (focusEl) {
      if (!focusEl.hasAttribute('tabindex')) focusEl.setAttribute('tabindex', '-1');
      focusEl.focus({ preventScroll: true });
    }

    // always keep viewport at top for tab switch
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function handleRoute() {
    const route = (location.hash || '#home').slice(1);
    const valid = new Set(sections.map(s => s.id));
    showSection(valid.has(route) ? route : 'home');
  }

  // handle clicks on nav items (no page jump)
  navLinks.forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.startsWith('#')) {
      a.addEventListener('click', e => {
        e.preventDefault();
        const targetId = href.slice(1);
        history.pushState(null, '', '#' + targetId);
        showSection(targetId);
      });
    }
  });

  // support back/forward and manual hash edit
  window.addEventListener('popstate', handleRoute);
  window.addEventListener('hashchange', handleRoute);

  // initial route (default to home)
  handleRoute();

  // ------- Project card expand/collapse (kept from your code) -------
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;  // ignore link clicks
      card.classList.toggle('expanded');
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('expanded');
      }
    });
  });
});
