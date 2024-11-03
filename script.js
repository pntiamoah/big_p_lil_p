// Line 2 to 40 captures floating heart functionality
// Define a function that creates a heart element with random properties
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.width = `${Math.floor(Math.random() * 65) + 10}px`;
    heart.style.height = heart.style.width;
    heart.style.left = `${Math.floor(Math.random() * 100) + 1}%`;
    heart.style.background = `rgba(255, ${Math.floor(Math.random() * 25) + 100 - 25}, ${Math.floor(Math.random() * 25) + 100}, 1)`;
    const duration = Math.floor(Math.random() * 5) + 5;
    heart.style.animation = `love ${duration}s ease`;
    return heart;
}

// Get the container element where the hearts will be added
const container = document.querySelector('.bg_heart');

// Define a function that removes hearts that have gone off screen
function removeHearts() {
    const hearts = container.querySelectorAll('.heart');
    hearts.forEach((heart) => {
        const top = parseFloat(getComputedStyle(heart).getPropertyValue('top'));
        const width = parseFloat(getComputedStyle(heart).getPropertyValue('width'));
        if (top <= -100 || width >= 150) {
            heart.remove();
        }
    });
}

// Define a function that repeatedly adds hearts to the container
function addHeart() {
    const heart1 = createHeart();
    const heart2 = createHeart();
    container.appendChild(heart1);
    container.appendChild(heart2);
    setTimeout(removeHearts, 1000);
}

// Start the animation loop
const love = setInterval(addHeart, 500);

// Define the start date and time
const startDate = new Date('March 31, 2024 19:01:00').getTime();

// Function to update elapsed time
function updateElapsedTime() {
    const now = new Date().getTime();
    let elapsed = now - startDate;

    // Calculate months
    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
    elapsed -= months * 1000 * 60 * 60 * 24 * 30.44;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    // Update the timer display
    document.getElementById("elapsed-timer").innerHTML =
        `  ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Update the elapsed time every second
setInterval(updateElapsedTime, 1000);


