const modal = document.getElementById('contact-modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

// När användaren klickar på "Contact Me"
openModal.addEventListener('click', (e) => {
  e.preventDefault(); // Förhindra standardlänkens beteende
  modal.style.display = 'flex'; // Visa modalen
});

// När användaren klickar på krysset
closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Dölj modalen
});

// När användaren klickar utanför modalens innehåll
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'; // Dölj modalen
  }
});