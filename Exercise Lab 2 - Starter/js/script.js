//CODE START HERE:


// Number of users to display per 1 page
const usersPerPage = 10; 
let currentPage = 1;

// Function to display users for the current page
function displayUsers(page) {
  const contactList = document.querySelector(".contact-list");
  contactList.innerHTML = ""; 

  const startIndex = (page - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  for (let i = startIndex; i < endIndex && i < users.length; i++) {
    const user = users[i];
    const listItem = document.createElement("li");
    listItem.classList.add("contact-item", "cf");

    // Build html
    listItem.innerHTML = `
      <div class="contact-details">
        <img class="avatar" src="${user.image}">
        <h3>${user.name}</h3>
        <span class="date">Joined ${user.joined}</span>
      </div>
    `;

    contactList.appendChild(listItem);
  }

  // total contact count
  const totalContactsSpan = document.getElementById("total-contacts");
  if (totalContactsSpan) {
    totalContactsSpan.textContent = users.length;
  }
}

// Function to generate pagination links
function generatePaginationLinks() {
  const pagination = document.querySelector(".pagination");
  pagination.innerHTML = ""; 

  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    const pageLink = document.createElement("a");
    pageLink.textContent = i;
    pageLink.href = "#"; 
    pageLink.addEventListener("click", () => {
      currentPage = i;
      displayUsers(currentPage);
    });

    pagination.appendChild(pageLink);
  }
}

// Initial display 
displayUsers(currentPage);
generatePaginationLinks();
