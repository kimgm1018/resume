(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.photo-deck').forEach(deck => {
    let busy = false;
    let current = 0;
    const cards = [...deck.querySelectorAll('.shuffle-card')];
    const updateOrder = () => {
      cards.forEach((card, index) => {
        const depth = (index - current + cards.length) % cards.length;
        card.dataset.depth = depth;
        card.style.zIndex = cards.length - depth;
      });
      deck.querySelector('.deck-count').textContent = `${current + 1} / ${cards.length}`;
    };
    updateOrder();
    const shuffle = async () => {
      if (busy || cards.length < 2) return;
      busy = true;
      const front = cards[current];
      const nextIndex = (current + 1) % cards.length;
      const next = cards[nextIndex];
      const direction = Number(deck.dataset.direction) || 1;
      const side = `translateX(${direction * 38}%) translateY(-22px) rotate(${direction * 14}deg)`;
      const pose = depth => depth === 0
        ? 'translateX(0) translateY(0) rotate(-3deg)'
        : `translateX(${depth * 5}%) translateY(${depth * 12}px) rotate(${depth * 5}deg)`;
      const previous = cards.map((card, index) => pose((index - current + cards.length) % cards.length));
      const animations = [];
      const promote = () => {
        front.classList.replace('is-front', 'is-back');
        next.classList.replace('is-back', 'is-front');
        current = nextIndex;
        updateOrder();
      };
      try {
        if (reduced.matches || !front.animate) {
          promote();
          return;
        }
        // Send the front card out while it is still above the stack.
        const outgoing = front.animate([
          { transform: pose(0) },
          { transform: side }
        ], { duration: 300, easing: 'cubic-bezier(.3,0,.3,1)', fill: 'forwards' });
        animations.push(outgoing);
        await outgoing.finished;
        promote();
        if (reduced.matches) return;
        // Every remaining card advances one slot; the outgoing card returns underneath.
        const settling = cards.map((card, index) => card.animate([
          { transform: card === front ? side : previous[index] },
          { transform: pose((index - current + cards.length) % cards.length) }
        ], { duration: 440, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' }));
        animations.push(...settling);
        outgoing.cancel();
        await Promise.all(settling.map(animation => animation.finished));
      } catch {
        // Interrupted animations leave the current card order usable.
      } finally {
        animations.forEach(animation => animation.cancel());
        busy = false;
      }
    };
    deck.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse' && !reduced.matches) shuffle();
    });
    deck.addEventListener('click', shuffle);
  });
  document.querySelectorAll('.visual-bottom[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const details = document.getElementById(link.hash.slice(1));
      if (details instanceof HTMLDetailsElement) details.open = true;
    });
  });
})();
