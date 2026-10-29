// PAGE ACCUEIL : le HTML est rangé dans une variable JavaScript
const pageAccueil = `
<!-- PAGE ACCUEIL : seulement le contenu, sans <html>, <head> ni <body> -->

<section class="banniere">
  <h2>Phrase d’accroche</h2>
  <a href="#" class="bouton" onclick="afficherPage('contact'); return false;">Call to action</a>
</section>

<section class="realisations">
  <h2>Nos plus belles réalisations</h2>
  <div class="grille">
    <div class="image"></div>
    <div class="image"></div>
    <div class="image"></div>
  </div>
</section>

<section class="services">
  <h2>Nos services</h2>
  <div class="grille">

    <div class="carte">
      <div class="image"></div>
      <h3>Création de bouquets personnalisés</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto repellat tenetur cumque harum perferendis maiores quisquam iure quibusdam animi.</p>
      <a href="#">En savoir plus</a>
    </div>

    <div class="carte">
      <div class="image"></div>
      <h3>Décoration Florale d'Événements</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto repellat tenetur cumque harum perferendis maiores quisquam iure quibusdam animi.</p>
      <a href="#">En savoir plus</a>
    </div>

    <div class="carte">
      <div class="image"></div>
      <h3>Ateliers de Composition Florale</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto repellat tenetur cumque harum perferendis maiores quisquam iure quibusdam animi.</p>
      <a href="#">En savoir plus</a>
    </div>

  </div>
</section>
`;