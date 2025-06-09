// DOM Elements
const numberInput = document.getElementById('numberInput');
const addBtn = document.getElementById('addBtn');
const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.getElementById('clearBtn');
const numbersList = document.getElementById('numbersList');
const resultDisplay = document.getElementById('result');

// Array to store numbers
let numbers = [];

// Function to add a number to the list
function addNumber() {
  const inputValue = numberInput.value.trim();

  // Skip if input is empty
  if (inputValue === '') return;

  // Convert to number
  const number = Number(inputValue);

  // Validate if it's a number
  if (isNaN(number)) {
    // Show error effect
    numberInput.style.borderColor = '#e74c3c';
    setTimeout(() => {
      numberInput.style.borderColor = '#ddd';
    }, 1000);
    return;
  }

  // Add to array
  numbers.push(number);

  // Clear input
  numberInput.value = '';
  numberInput.focus();

  // Update UI
  updateNumbersList();
}

// Function to calculate and display sum
function calculateSum() {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  resultDisplay.textContent = sum;

  // Add animation
  resultDisplay.style.transform = 'scale(1.1)';
  setTimeout(() => {
    resultDisplay.style.transform = 'scale(1)';
  }, 300);
}

// Function to clear all data
function clearAll() {
  numbers = [];
  numberInput.value = '';
  updateNumbersList();
  resultDisplay.textContent = '0';
  numberInput.focus();
}

// Function to update the numbers list display
function updateNumbersList() {
  // Clear existing content
  numbersList.innerHTML = '';

  if (numbers.length === 0) {
    numbersList.innerHTML = '<div class="empty-message">No numbers entered yet</div>';
    return;
  }

  // Add each number to display
  numbers.forEach(num => {
    const numberItem = document.createElement('div');
    numberItem.className = 'number-item';
    numberItem.textContent = num;
    numbersList.appendChild(numberItem);
  });
}

// Event Listeners
addBtn.addEventListener('click', addNumber);

calculateBtn.addEventListener('click', calculateSum);

clearBtn.addEventListener('click', clearAll);

numberInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNumber();
  }
});

// Initialize
updateNumbersList();