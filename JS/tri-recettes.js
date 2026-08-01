document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("recettes-container");
    const categories = Array.from(container.querySelectorAll(".categorie"));

    // Trie les recettes A-Z à l'intérieur de chaque catégorie
    categories.forEach(function (cat) {
        const liste = cat.querySelector(".liste-recettes");
        const liens = Array.from(liste.querySelectorAll("a"));

        liens.sort(function (a, b) {
            return a.textContent.trim().localeCompare(b.textContent.trim(), "fr", { sensitivity: "base" });
        });

        liens.forEach(function (lien) {
            liste.appendChild(lien);
        });
    });

    // Trie les catégories A-Z entre elles
    categories.sort(function (a, b) {
        const titreA = a.querySelector("h4").textContent.trim();
        const titreB = b.querySelector("h4").textContent.trim();
        return titreA.localeCompare(titreB, "fr", { sensitivity: "base" });
    });

    categories.forEach(function (cat) {
        container.appendChild(cat);
    });
});