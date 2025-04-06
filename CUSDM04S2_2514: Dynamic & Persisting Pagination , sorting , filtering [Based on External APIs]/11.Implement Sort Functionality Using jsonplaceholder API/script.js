const API_URL = 'https://jsonplaceholder.typicode.com/users';
const userList = document.getElementById('user-list');
const sortSelect = document.getElementById('sort');
const errorDiv = document.getElementById('error');

// Fetch users and render
async function fetchUsers(sortBy = '') {
  try {
    userList.innerHTML = 'Loading...';
    errorDiv.textContent = '';

    const res = await fetch(API_URL);

    if (!res.ok) throw new Error('Failed to fetch users.');

    let users = await res.json();

    // Simulate query param sorting (since JSONPlaceholder doesn't support it)
    if (sortBy) {
      users.sort((a, b) =>
        a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
      );
    }

    renderUsers(users);

  } catch (err) {
    userList.innerHTML = '';
    errorDiv.textContent = 'Something went wrong. Please try again.';
    console.error(err);
  }
}

// Render user cards to the DOM
function renderUsers(users) {
  userList.innerHTML = '';

  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'user-card';

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> ${user.website}</p>
    `;

    userList.appendChild(card);
  });
}

// Event Listener for Sorting
sortSelect.addEventListener('change', (e) => {
  const selected = e.target.value;
  fetchUsers(selected);
});

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
  fetchUsers(); // Default without sorting
});
