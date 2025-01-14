// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    navbar.style.transform = "translateY(-100%)"; // Hide navbar
  } else {
    navbar.style.transform = "translateY(0)"; // Show navbar
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll
});

// Dynamically update aria-expanded for all buttons
document.querySelectorAll('.blog-card-button').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Reset all buttons to false
    document.querySelectorAll('.blog-card-button').forEach(btn => btn.setAttribute('aria-expanded', 'false'));

    // Set the clicked button
    button.setAttribute('aria-expanded', !isExpanded);

    // Update all card headers' aria-expanded attributes
    document.querySelectorAll('.blog-card-header').forEach(header => {
      const headerTarget = header.querySelector('.blog-card-button').getAttribute('data-target');
      header.setAttribute('aria-expanded', headerTarget === target && !isExpanded ? 'true' : 'false');
    });
  });
});
