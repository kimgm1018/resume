// Progressive enhancement: all content stays visible without JavaScript.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  // Project covers also open their associated story.
  document.querySelectorAll('.visual[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const details = document.getElementById(link.hash.slice(1));
      if (details instanceof HTMLDetailsElement) details.open = true;
    });
  });
  if (reduced.matches || !('IntersectionObserver' in window)) return;
  const targets = document.querySelectorAll('.hero > *, .section-head, .project, .portrait, .about-copy, .timeline > div, .moment-grid > div, footer .wrap > *');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
  targets.forEach(element => {
    if (element.getBoundingClientRect().top < innerHeight) {
      if (element.parentElement.classList.contains('hero')) element.classList.add('hero-enter');
      return;
    }
    element.classList.add('reveal');
    observer.observe(element);
  });
  document.addEventListener('focusin', event => {
    event.target.closest('.reveal')?.classList.add('is-visible');
  });
  const showAll = () => {
    observer.disconnect();
    targets.forEach(element => {
      element.classList.remove('reveal', 'hero-enter');
      element.classList.add('is-visible');
    });
  };
  reduced.addEventListener('change', event => { if (event.matches) showAll(); });
  window.addEventListener('beforeprint', showAll);
})();
