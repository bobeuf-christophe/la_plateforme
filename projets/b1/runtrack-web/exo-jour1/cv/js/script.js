const phrase    = "CV de Bobeuf Christophe";
const conteneur = document.getElementById("vague"); // ===== Création d'un <span> par lettre =====
const lettres = [...phrase].map(car => {
    const span = document.createElement("span");
    span.textContent = car;
    conteneur.appendChild(span);
    return span;
});

requestAnimationFrame(animer);

// ===== Animation =====
function animer(temps) {
    lettres.forEach((span, i) => {
    const y = Math.sin(temps * 0.004 + i * 0.4) * 20; // Position verticale : sinus qui se décale de lettre en lettre
    const teinte = (i * (360 / lettres.length) + temps * 0.1) % 360; // Couleur : teinte HSL qui tourne sur le cercle chromatique
    span.style.transform = `translateY(${y}px)`;
    span.style.color = `hsl(${teinte}, 100%, 60%)`;
});
    requestAnimationFrame(animer);
}

