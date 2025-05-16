const menuData = {
  "Beverages": {
    background: "backgrounds/beverages-bg.jpg",
    items: [
      {
        title: "Coca Cola",
        description: "Chilled soft drink.",
        price: "$3",
        image: "images/coke.jpg",
        details: "330ml can of classic Coca Cola served chilled."
      }
    ]
  },
  "Starters": {
    background: "backgrounds/starters-bg.jpg",
    items: [
      {
        title: "French Fries",
        description: "Crispy and golden.",
        price: "$5",
        image: "images/fries.jpg",
        details: "Served with ketchup and mayo dips."
      }
    ]
  },
  "Fast Food": {
    background: "backgrounds/fastfood-bg.jpg",
    items: [
      {
        title: "Classic Cheeseburger",
        description: "Juicy beef patty with cheddar.",
        price: "$8",
        image: "images/burger.jpg",
        details: "Includes lettuce, tomato, pickles and special sauce."
      },
      {
        title: "Truffle Pasta",
        description: "Creamy pasta with truffle oil.",
        price: "$12",
        image: "images/pasta.jpg",
        details: "Topped with truffle shavings and parmesan."
      }
    ]
  },
  "Desserts": {
    background: "backgrounds/desserts-bg.jpg",
    items: [
      {
        title: "Chocolate Brownie",
        description: "Warm brownie with chocolate chunks.",
        price: "$6",
        image: "images/brownie.jpg",
        details: "Served with a scoop of vanilla ice cream."
      }
    ]
  }
};

const menuContainer = document.getElementById("menu-sections");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const modalDetails = document.getElementById("modal-details");

for (const category in menuData) {
  const section = document.createElement("section");
  section.className = "menu-section";
  section.style.backgroundImage = `url(${menuData[category].background})`;

  const heading = document.createElement("h2");
  heading.textContent = category;
  section.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "menu-container";

  menuData[category].items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="menu-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span>${item.price}</span>
      </div>
    `;
    card.addEventListener("click", () => openModal(item));
    grid.appendChild(card);
  });

  section.appendChild(grid);
  menuContainer.appendChild(section);
}

function openModal(item) {
  modal.classList.add("active");
  modalImg.src = item.image;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.description;
  modalPrice.textContent = item.price;
  modalDetails.textContent = item.details;
}

function closeModal() {
  modal.classList.remove("active");
}
