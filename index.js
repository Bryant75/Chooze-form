let score = 0;
let currentForm = 1;
const totalForms = 3;

function checkAnswer(button) {
  const selectedButton = button;
  const options = selectedButton.parentNode.getElementsByClassName('options')[0].getElementsByTagName('button');
  
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = true; // désactive tous les boutons d'options
  }
  
  if (selectedButton.textContent === 'Célibataire' || // Vérifiez ici les réponses correctes pour chaque question
      selectedButton.textContent === '18-25' ||
      selectedButton.textContent === '0') {
    selectedButton.classList.add('correct'); // ajoute la classe "correct" pour mettre en évidence la réponse correcte
    score++;
  } else {
    selectedButton.classList.add('incorrect'); // ajoute la classe "incorrect" pour mettre en évidence la réponse incorrecte
  }
  
  document.getElementById('score').textContent = score; // met à jour le score affiché
  
  // Vérifie si toutes les questions ont été répondues
  const allOptions = document.getElementById(`form-${currentForm}`).getElementsByClassName('options');
  let allAnswered = true;
  
  for (let i = 0; i < allOptions.length; i++) {
    if (allOptions[i].getElementsByTagName('button')[0].disabled === false) {
      allAnswered = false;
      break;
    }
  }
  
  if (allAnswered) {
    showNextForm();
  }
}

function showNextForm() {
  document.getElementById(`form-${currentForm}`).style.display = 'none'; // masque le formulaire actuel
  
  if (currentForm === totalForms) {
    showResults();
  } else {
    currentForm++;
    updateProgressBar();
    document.getElementById(`form-${currentForm}`).style.display = 'block'; // affiche le formulaire suivant
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const percentage = (currentForm / totalForms) * 100;
  progressBar.style.width = percentage + '%';
}

function showResults() {
  document.getElementById('form-3').style.display = 'none'; // masque le dernier formulaire
  document.getElementById('results').style.display = 'block'; // affiche les résultats
  
  // Affiche le score final
  const scoreDisplay = document.getElementById('score');
  scoreDisplay.textContent = `Votre score final est de ${score} sur ${totalForms}.`;
}
