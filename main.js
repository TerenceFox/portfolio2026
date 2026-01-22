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
