const questionContent = document.querySelector('.question-content');
const successContent = document.querySelector('.success-content');
const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');
const heartsContainer = document.querySelector('.hearts-container');

let yesScale = 1;

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.color = Math.random() > 0.5 ? '#ff4b6e' : '#ff8fa3'; // Randomize red/pink

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start background hearts
setInterval(createHeart, 300);

// Interaction Logic
noBtn.addEventListener('click', () => {
    yesScale += 0.3; // Increase scale
    yesBtn.style.transform = `scale(${yesScale})`;

    // Optional: make No button shift slightly to make it harder to click (playful)
    // noBtn.style.transform = `translateX(${Math.random() * 50 - 25}px)`; 
    // Staying strict to requirements: just make yes button big.
});

yesBtn.addEventListener('click', () => {
    questionContent.classList.add('hidden');
    successContent.classList.remove('hidden');
    successContent.style.display = 'flex'; // Ensure flex display works if css has specific rules

    // Launch confetti/hearts
    setInterval(createHeart, 50);
});
