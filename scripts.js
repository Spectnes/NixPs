// Smooth scroll for navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
      // Active class toggle
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Fade-in animation for About on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.about-text').style.animationPlayState = 'running';
  // Slide-in for news cards on scroll
  const newsCards = document.querySelectorAll('.news-card');
  function revealCards() {
    newsCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60)
        card.style.animationPlayState = 'running';
    });
  }
  revealCards();
  window.addEventListener('scroll', revealCards);
});

// Simple ripple for submit button
document.querySelectorAll('.submit-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = e.offsetX + 'px';
    ripple.style.top = e.offsetY + 'px';
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(), 600);
  });
});