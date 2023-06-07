let width = 0; // Initialise la barre de progression à 1/3
let currentForm = 1;
function move() {
    
    // Cacher le formulaire actuel
    if (document.getElementById(`form-${currentForm}`) && currentForm < 3) {
        document.getElementById(`form-${currentForm}`).classList.add('hidden');
        currentForm++;
    }
    else if (document.getElementById(`form-${currentForm}`) && currentForm == 3) {
        setTimeout(() => {
            document.getElementById(`form-${currentForm}`).classList.add('hidden');
            currentForm++;
        }, 3000);
        setTimeout(() => {
            // J'enlève la barre de progréssion
            let progressBar = document.getElementById('progress-bar');
            progressBar.remove();
            // J'enlève le conteneur de la barre de progréssion
            let test = document.getElementById('hidden-container');
            test.remove();            
        }, 3000);
        // J'affiche le GIF de chargement
        setTimeout(() => {
            // Afficher le GIF de chargement
            let loadingGif = document.getElementById('loading-gif');
            loadingGif.classList.remove('hidden-gif');
        }, 10000);
            // Redirige vers la page de résultats après un délai
        setTimeout(() => {
            window.location.href = "resultats.html";
        }, 3000); // Durée du GIF en millisecondes (3secondes)
    }    
    
    // Mettre à jour le numéro de la question
    if (document.getElementById(`QT-${currentForm}`)) {
        document.getElementById(`QT-${currentForm}`).innerText = `Question ${currentForm}/3`;
    }
    // Gestion de la Barre de progression
    let elem = document.getElementById("progress-bar"); 
    
        width += 16.66; // 100 / 3 = 33.33
        elem.style.width = width + '%';
    
    // Afficher le formulaire suivant
    if (document.getElementById(`form-${currentForm}`)) {
        document.getElementById(`form-${currentForm}`).classList.remove('hidden');
    }    
};