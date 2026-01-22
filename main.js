// Main JavaScript

// Expand/collapse all project cards
const expandAll = document.getElementById('expand-all');
const collapseAll = document.getElementById('collapse-all');
const projectCards = document.querySelectorAll('.project-card');

expandAll?.addEventListener('click', () => {
  projectCards.forEach(card => card.open = true);
});

collapseAll?.addEventListener('click', () => {
  projectCards.forEach(card => card.open = false);
});

// Active section highlighting
const sections = document.querySelectorAll('main section[id]:not(#hero)');
const navLinks = document.querySelectorAll('nav ul a');

function setActiveLink(id) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${id}`) {
      link.classList.add('active');
    }
  });
}

const observerOptions = {
  rootMargin: '-20% 0px -70% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveLink(entry.target.id);
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Handle nav link clicks
let clickedRecently = false;
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const id = link.getAttribute('href').slice(1);
    setActiveLink(id);
    clickedRecently = true;
    setTimeout(() => { clickedRecently = false; }, 1000);
  });
});

// Handle bottom of page for last section
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  if (clickedRecently) return;
  const scrollingDown = window.scrollY > lastScrollY;
  const scrolledToBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;
  if (scrolledToBottom && scrollingDown) {
    setActiveLink('contact');
  }
  lastScrollY = window.scrollY;
});
