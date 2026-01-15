
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    const body = document.body;
    const mainImg = document.getElementById('mainImg');
    const thumbs = document.querySelectorAll('.thumb');

    // Toggle men
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
      body.classList.toggle('menu-open');
    });

    // Fermer seulement si clic sur overlay ou burger
    document.addEventListener('click', (e) => {
      if (body.classList.contains('menu-open') && !navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });

    // Empêche la fermeture si clic dans le menu
    navLinks.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Galerie
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImg.src = thumb.src;
        document.querySelector('.thumb.active')?.classList.remove('active');
        thumb.classList.add('active');
      });
    });
  });