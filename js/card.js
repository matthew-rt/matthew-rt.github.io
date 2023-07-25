const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active-card');
    } else {
      card.classList.remove('active-card');
    }
  });
}

function cycleCards() {
  showCard(currentIndex);
  currentIndex = (currentIndex + 1) % cards.length;
}

// Show the first card initially
showCard(currentIndex);

// Start cycling the cards every 3 seconds
setInterval(cycleCards, 5000);