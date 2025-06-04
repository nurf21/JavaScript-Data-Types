const startBtn = document.getElementById('startBtn');
const resultDisplay = document.getElementById('result');
const historyList = document.getElementById('historyList');

// Initialize history array
let history = [];

// Function to add item to history
function addToHistory(input, isValid, result) {
  const timestamp = new Date().toLocaleTimeString();
  const status = isValid ? 'Valid' : 'Invalid';
  const resultText = result !== null ? result : 'Cancelled';

  history.unshift({
    input,
    status,
    result: resultText,
    timestamp
  });

  // Keep only last 5 items
  if (history.length > 5) {
    history.pop();
  }

  updateHistoryDisplay();
}

// Function to update history display
function updateHistoryDisplay() {
  historyList.innerHTML = '';

  history.forEach(item => {
    const li = document.createElement('li');
    const resultClass = item.result === 'Cancelled' ? 'result-null' : '';

    li.innerHTML = `
                    <strong>${item.timestamp}</strong> - 
                    Input: <code>"${item.input}"</code> → 
                    Status: <span style="color:${item.status === 'Valid' ? '#27ae60' : '#e74c3c'}">${item.status}</span> → 
                    Result: <span class="${resultClass}">${item.result}</span>
                `;
    historyList.appendChild(li);
  });
}

function readNumber() {
  while (true) {
    const input = prompt("Enter a number (or cancel to exit):", "");

    // If user cancels or enters empty string
    if (input === null || input.trim() === "") {
      return null;
    }

    const num = Number(input);

    // Check if conversion is successful (not NaN)
    if (!isNaN(num)) {
      return num;
    }

    // For history - record invalid attempt
    addToHistory(input, false, NaN);
  }
}

// Event listener for button click
startBtn.addEventListener('click', () => {
  const result = readNumber();

  if (result === null) {
    resultDisplay.textContent = "Operation cancelled";
    resultDisplay.className = "result-null";
  } else {
    resultDisplay.textContent = result;
    resultDisplay.className = "result-value";

    // Add to history
    addToHistory(result, true, result);
  }
});

// Initial history update
updateHistoryDisplay();