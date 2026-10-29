let carrouselInterval = null;

function initCarrousel() {
  clearInterval(carrouselInterval);
  const carrousel = document.querySelector('.carrousel');
  if (!carrousel) return;
  const slides = carrousel.querySelectorAll('img');
  if (slides.length === 0) return;
  const btnPrecedent = carrousel.querySelector('.precedent');
  const btnSuivant = carrousel.querySelector('.suivant');
  let index = 0;
  function afficher(i) {
    slides[index].classList.remove('active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('active');
  }
  function demarrerAuto() {
    clearInterval(carrouselInterval);
    carrouselInterval = setInterval(() => afficher(index + 1), 3000);
  }
  slides.forEach(s => s.classList.remove('active'));
  slides[0].classList.add('active');
  btnSuivant.addEventListener('click', () => {
    afficher(index + 1);
    demarrerAuto();
  });
  btnPrecedent.addEventListener('click', () => {
    afficher(index - 1);
    demarrerAuto();
  });

  demarrerAuto();
}