let width = 16.66; // Initialise la barre de progression à 1/3
let currentForm = 1;
function move() {
    
    // Cacher le formulaire actuel
    document.getElementById(`form-${currentForm}`).classList.add('hidden');

    // Passer au formulaire suivant
    currentForm += 1;

    // Mettre à jour le numéro de la question
    if (document.getElementById(`QT-${currentForm}`)) {
        document.getElementById(`QT-${currentForm}`).innerText = `Question ${currentForm}/3`;
    }
    // Gestion de la Barre de progression
    let elem = document.getElementById("progress-bar"); 
    if (width <= 49.98) {
        width += 16.66; // Augmente la barre de progression de 33.33%
        elem.style.width = width + '%';
    }

    // Afficher le formulaire suivant s'il existe
    if (document.getElementById(`form-${currentForm}`)) {
        document.getElementById(`form-${currentForm}`).classList.remove('hidden');
    }

    // Afficher le GIF de chargement
    if (currentForm > 3) {
        // J'enlève la barre de progréssion
        let progressBar = document.getElementById('progress-bar');
        progressBar.remove();
        // J'enlève le conteneur de la barre de progréssion
        let test = document.getElementById('hidden-container');
        test.remove();
        let loadingGif = document.getElementById('loading-gif');
        loadingGif.classList.remove('hidden-gif');
        
        // Redirige vers la page de résultats après un délai
        setTimeout(function() {
            window.location.href = "resultats.html";
        }, 3000); // Durée du GIF en millisecondes (3secondes)
    }
};