// Random cloud and bird generator
const cloudContainer = document.getElementById('cloud-container');
const birdContainer = document.getElementById('bird-container');

// Function to randomize background colors
function randomizeBackground() {
    const randomColor1 = `hsl(${Math.random() * 360}, 100%, 85%)`;
    const randomColor2 = `hsl(${Math.random() * 360}, 100%, 95%)`;
    document.body.style.background = `linear-gradient(180deg, ${randomColor1}, ${randomColor2})`;
}

// Function to create a single cloud
function createCloud() {
    const cloud = document.createElement('div');
    const randomWidth = Math.floor(Math.random() * 150) + 100; // Random width between 100px and 250px
    const randomTop = Math.floor(Math.random() * 60); // Random top between 0% and 60%
    cloud.classList.add('cloud');
    cloud.style.width = `${randomWidth}px`;
    cloud.style.height = `${randomWidth / 2}px`; // Height is half of width
    cloud.style.top = `${randomTop}%`;
    cloudContainer.appendChild(cloud);
}

// Function to create a single bird
function createBird() {
    const birdContainer = document.createElement('div');
    birdContainer.classList.add('bird-container');
    const bird = document.createElement('div');
    bird.classList.add('bird');
    birdContainer.appendChild(bird);
    const randomTop = Math.floor(Math.random() * 60); // Random top position
    birdContainer.style.top = `${randomTop}%`;
    birdContainer.style.left = "-100px"; // Start off the left side
    birdContainer.appendChild(bird);
    document.getElementById('bird-container').appendChild(birdContainer);
}

// Generate initial elements
function generateInitialElements() {
    createCloud();  // Create a cloud immediately
    createBird();  // Create a bird immediately
}

// Increase elements over time
function increaseElementsOverTime() {
    setInterval(() => {
        if (document.querySelectorAll('.cloud').length < 6) {
            createCloud();
        }
        if (document.querySelectorAll('.bird-container').length < 3) {
            createBird();
        }
    }, 8000);
}

// Set up the page
randomizeBackground();
generateInitialElements();
increaseElementsOverTime();
