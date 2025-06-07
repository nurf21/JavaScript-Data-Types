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

  const newItems = [];

  history.forEach(item => {
    const li = document.createElement('li');

    const timestampSpan = document.createElement('strong');
    timestampSpan.textContent = item.timestamp;

    const inputSpan = document.createElement('code');
    inputSpan.textContent = `"${item.input}"`;

    const statusSpan = document.createElement('span');
    statusSpan.textContent = item.status;
    statusSpan.style.color = item.status === 'Valid' ? '#27ae60' : '#e74c3c';

    const resultSpan = document.createElement('span');
    resultSpan.textContent = item.result;
    if (item.result === 'Cancelled') resultSpan.classList.add('result-null');

    li.appendChild(timestampSpan);
    li.appendChild(document.createTextNode(" - Input: "));
    li.appendChild(inputSpan);
    li.appendChild(document.createTextNode(" → Status: "));
    li.appendChild(statusSpan);
    li.appendChild(document.createTextNode(" → Result: "));
    li.appendChild(resultSpan);

    li.setAttribute("data-visible", "false");
    li.style.opacity = "0";

    historyList.appendChild(li);
    newItems.push(li);
  });

  lazyLoadHistoryItems(newItems);
}

function lazyLoadHistoryItems(items) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-visible", "true");
        entry.target.style.opacity = "1";
        entry.target.style.transition = "opacity 0.5s ease-in";
        observer.unobserve(entry.target);
      }
    });

    if (items.every(item => item.getAttribute("data-visible") === "true")) {
      observer.disconnect();
    }
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));
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

  if (!resultDisplay) return;

  if (result === null) {
    resultDisplay.textContent = "Operation cancelled";
    resultDisplay.className = "result-null";
  } else {
    resultDisplay.textContent = result;
    resultDisplay.className = "result-value";

    // Add to history
    addToHistory(result, true, result);
  }
}, { passive: true });

// Initial history update
updateHistoryDisplay();