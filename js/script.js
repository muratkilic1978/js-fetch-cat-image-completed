
"use strict"; // Sikrer, at koden køres i "strict mode" for at undgå fejl

// Tilføjer en eventlistener til knappen med id'et 'fetchCats', som venter på et klik
document.getElementById('fetchCats').addEventListener('click', function() {

    // Henter data fra JSON-filen 'cats.json' i mappen 'json'
    fetch('json/cats.json')  
        .then(response => response.json()) // Konverterer svaret til JSON-format
        .then(data => {
            // Henter elementet med id'et 'catDisplay', som skal vise katteinformationerne
            const catDisplay = document.getElementById('catDisplay');
            catDisplay.innerHTML = ''; // Rydder tidligere indhold i display-området

            // Gennemgår hver kat i JSON-dataene
            data.forEach(cat => {
                // Opretter et nyt div-element til hver kats kort
                const catCard = document.createElement('div');
                catCard.classList.add('cat-card'); // Tilføjer CSS-klassen 'cat-card' til div-elementet

                // Opretter et h2-element til kattens navn
                const catName = document.createElement('h2');
                catName.textContent = cat.name; // Sætter kattens navn som tekstindhold

                // Opretter et p-element til kattens vægt
                const catWeight = document.createElement('p');
                catWeight.textContent = `Weight: ${cat.weight}`; // Sætter kattens vægt som tekstindhold

                // Opretter et p-element til kattens race
                const catBreed = document.createElement('p');
                catBreed.textContent = `Breed: ${cat.breed}`; // Sætter kattens race som tekstindhold

                // Opretter et img-element til kattens billede
                const catImage = document.createElement('img');
                catImage.src = cat.image; // Sætter billedets kilde til kattens billede (fra JSON-data)
                catImage.alt = `${cat.name}`; // Sætter alt-teksten til kattens navn

                // Tilføjer navn, vægt, race og billede til kattekortet
                catCard.appendChild(catName);
                catCard.appendChild(catWeight);
                catCard.appendChild(catBreed);
                catCard.appendChild(catImage);

                // Tilføjer kattekortet til display-området
                catDisplay.appendChild(catCard);
            });
        });
});
