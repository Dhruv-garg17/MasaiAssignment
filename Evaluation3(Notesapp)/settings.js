// Dark mode toggle
const darkToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Load preference
if (localStorage.getItem('darkMode') === 'true') {
  darkToggle.checked = true;
  body.classList.add('dark-mode');
}

darkToggle.addEventListener('change', () => {
  if (darkToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
});

// Clear all notes
document.getElementById('clear-notes-btn').addEventListener('click', () => {
  const confirmed = confirm("Are you sure you want to clear all local notes?");
  if (confirmed) {
    localStorage.clear();
    alert("All notes cleared from LocalStorage.");
  }
});

