const images = document.querySelectorAll('.carrousel img');
let index = 0;
 
function afficher(n) {
  images[index].classList.remove('active');
  index = (n + images.length) % images.length;
  images[index].classList.add('active');
}
 
document.querySelector('.precedent').addEventListener('click', () => afficher(index - 1));
document.querySelector('.suivant').addEventListener('click', () => afficher(index + 1));

setInterval(() => afficher(index + 1), 4000);