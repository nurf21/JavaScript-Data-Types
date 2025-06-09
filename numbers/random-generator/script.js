// DOM elements
const minInput = document.getElementById('minValue');
const maxInput = document.getElementById('maxValue');
const generateBtn = document.getElementById('generateBtn');
const resultDisplay = document.getElementById('result');
const historyList = document.getElementById('historyList');

// History array
let history = [];

// The randomInteger function as specified
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate and display a random number
function generateRandom() {
  // Get input values
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  // Validate inputs
  if (isNaN(min) || isNaN(max)) {
    resultDisplay.textContent = 'Invalid input';
    return;
  }

  if (min >= max) {
    resultDisplay.textContent = 'Min must be < Max';
    return;
  }

  // Generate random number
  const randomNum = randomInteger(min, max);

  // Display result with animation
  resultDisplay.style.transform = 'scale(0.8)';
  resultDisplay.style.opacity = '0.5';

  setTimeout(() => {
    resultDisplay.textContent = randomNum;
    resultDisplay.style.transform = 'scale(1)';
    resultDisplay.style.opacity = '1';

    // Add to history
    addToHistory(randomNum);
  }, 300);
}

// Function to add result to history
function addToHistory(number) {
  // Add to beginning of array
  history.unshift(number);

  // Keep only 10 items
  if (history.length > 10) {
    history.pop();
  }

  updateHistory();
}

// Update history display
function updateHistory() {
  historyList.innerHTML = '';

  history.forEach(num => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.textContent = num;
    historyList.appendChild(item);
  });
}

// Event listeners
generateBtn.addEventListener('click', generateRandom);

// Initialize with a random number
generateRandom();
updateHistory();