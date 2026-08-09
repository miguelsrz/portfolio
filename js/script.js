if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// Navbar: transparente arriba del todo, efecto "cristal" (blur + tinte oscuro) al hacer scroll
const navbarEl = document.querySelector('.navbar');
if (navbarEl) {
  const glassClasses = ['backdrop-blur-md', 'bg-black/70', 'border-white/10'];
  const transparentClasses = ['bg-transparent', 'border-transparent'];

  const toggleNavbarGlass = () => {
    if (window.scrollY > 20) {
      navbarEl.classList.remove(...transparentClasses);
      navbarEl.classList.add(...glassClasses);
    } else {
      navbarEl.classList.remove(...glassClasses);
      navbarEl.classList.add(...transparentClasses);
    }
  };

  toggleNavbarGlass();
  window.addEventListener('scroll', toggleNavbarGlass);
}