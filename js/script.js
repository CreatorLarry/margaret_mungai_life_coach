// Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Navbar toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const body = document.body;

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  body.classList.toggle("nav-open");
  menuToggle.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
    body.classList.remove("nav-open");
    menuToggle.classList.remove("open");
  }
});


// Shrink navbar on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

