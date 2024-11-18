
// Function to change text on the welcome section
function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");

    // Change text content
    welcomeText.innerText = "JavaScript is Dynamic and Fun!";

    // Add a pulsating animation (optional)
    welcomeText.classList.add("pulse-animation");

    // Change button color randomly
    button.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create floating circles randomly
function createFloatingCircles() {
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        // Random size and position
        const size = Math.floor(Math.random() * 20) + 10; // size between 10px and 30px
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        // Random position
        const xPos = Math.floor(Math.random() * window.innerWidth);
        const yPos = Math.floor(Math.random() * window.innerHeight);

        circle.style.left = `${xPos}px`;
        circle.style.top = `${yPos}px`;

        // Random animation timing
        const delay = Math.random() * 5;
        circle.style.animationDelay = `${delay}s`;

        document.body.appendChild(circle);
    }
}

// Call the function to generate the circles when the page loads
window.onload = function () {
    createFloatingCircles();
}

// Function to toggle light/dark theme
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';

    // Switch to the other theme
    if (currentTheme === 'light-theme') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');

        // Apply dark theme to buttons and navbar
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.classList.add('dark-theme'));

        const nav = document.querySelector('nav');
        nav.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');

        // Apply light theme to buttons and navbar
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.classList.remove('dark-theme'));

        const nav = document.querySelector('nav');
        nav.classList.remove('dark-theme');
    }
}

// Array of random quotes
const quotes = [
    "JavaScript is the best language ever!",
    "In programming, the first step is always the hardest.",
    "Keep calm and write JavaScript.",
    "JavaScript: The good parts are still better than the bad parts.",
    "The future of web development is JavaScript!",
];

// Function to generate and display a random quote
function generateQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

// Show section when user clicks a navigation link
function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('visible');
    });

    // Show the clicked section
    const section = document.getElementById(sectionId);
    section.classList.add('visible');
}
