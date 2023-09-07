document.addEventListener("click", function () {
    const generateButton = document.getElementById("generateButton");
    const phraseOutput = document.getElementById("phrase");
    const currentTimeDisplay = document.getElementById("currentTime");

    // Fonction pour générer une phrase en fonction de l'heure et des minutes actuelles.
    function generatePhrase() {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();


        const phrase = generateCustomPhrase(hours, minutes);

        currentTimeDisplay.textContent = `${hours} ${minutes}`;
        phraseOutput.textContent = phrase;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    // Fonction pour générer une phrase en fonction de l'heure et des minutes spécifiques.
   function generateCustomPhrase(hours, minutes) {
    // Tableau multidimensionnel pour les différents types de mots.
    const words = [
        [[" "," "," "],             ["President"," "," "],         ["∈"],                                   ["0"]],
        [["All", "Any", ""],        ["Ambassador"],                ["Are"],                                 ["Asshole"]],
        [["Both of"],               ["Bank"],                      ["Becomes"],                             ["Bastard"]],
        [[],                        ["Cops", "CEO", "CRS"],        ["Commit to being a"],                   ["Cocksuker"]],
        [[],                        ["Director"],                  ["Dreams"],                              ["Dumb"]],
        [[],                        ["Economist"],                 ["Enjoy"],                               ["Enrage"]],
        [[],                        ["Federal Agent"],             [],                                      ["Fucked"]],
        [[],                        ["Governor"],                  [],                                      ["Goof"]],
        [[],                        ["Highway patrol officer"],    [],                                      ["Hatred"]],
        [[],                        ["Investment Banker"],         [],                                      ["Inequality"]]
    ];
    

    // Obtenir les chiffres des heures et des minutes.
    const hourDigit1 = Math.floor(hours / 10);
    const hourDigit2 = hours % 10;
    const minuteDigit1 = Math.floor(minutes / 10);
    const minuteDigit2 = minutes % 10;

    // Sélectionner les mots en fonction des chiffres.
    const adjective = words[hourDigit1][0][0] //[getRandomInt(3)];
    const noun = words[hourDigit2][1][0] //[getRandomInt(3)];
    const verb = words[minuteDigit1][2][0] //[getRandomInt(3)];
    const adjective2 = words[minuteDigit2][3][0] //[getRandomInt(3)];

    // Créer et retourner la phrase.
    const phrase = `${adjective} ${noun} ${verb} ${adjective2}`;
    return phrase;
}

        
    // Gérer le clic sur le bouton de génération de phrase.
    generateButton.addEventListener("click", generatePhrase);

    // Génération de la phrase initiale lors du chargement de la page.
    generatePhrase();
});
