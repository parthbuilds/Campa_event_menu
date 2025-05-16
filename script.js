const menuData = {
    beverages: [
        {
            title: "Campa Cola",
            description: "Chilled fizzy cola drink",
            price: "₹130",
            image: "https://campabeveragesadmin.ril.com/uploads/Powerup_Big_Bottle_Hover_78828cdbbe_b8334a780f.png",
            details: "Original Indian cola, served cold."
        },
        {
            title: "Campa Orange",
            description: "Refreshing orange-based drink",
            price: "₹130",
            image: "https://campabeveragesadmin.ril.com/uploads/Orange_Big_Bottle_Hover_cd42bf91e0_fa65dd0a7f.png",
            details: "Fresh orange fizz with a bold twist."
        },
        {
            title: "Campa Lemon",
            description: "Refreshing lemon-based drink",
            price: "₹130",
            image: "https://campabeveragesadmin.ril.com/uploads/Lemon_Big_Bottle_Hover_0475c5f2c7_7c368c3bcb.png",
            details: "Zesty lemon soda with a dash of spice."
        },
        {
            title: "Campa Power Up",
            description: "Energy drink to charge your day",
            price: "₹130",
            image: "https://campabeveragesadmin.ril.com/uploads/Powerup_Big_Bottle_Hover_78828cdbbe_b8334a780f.png",
            details: "Instant energy boost with great taste."
        },
        {
            title: "Campa Cricket",
            description: "Special edition cola",
            price: "₹130",
            image: "https://campabeveragesadmin.ril.com/uploads/Group_109_1_0d313c31ee.png",
            details: "Cricket-themed bottle, same fizzy taste."
        }
    ],
    starters: [
        {
            title: "Paneer Tikka",
            description: "Grilled cottage cheese with spices",
            price: "₹250",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-paneer-tikka-png-image_12239154.png",
            details: "Served with green chutney and salad."
        },
        {
            title: "Veg Spring Rolls",
            description: "Crispy rolls filled with veggies",
            price: "₹300",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-spring-roll-png-image_12239156.png",
            details: "Served with sweet and sour sauce."
        },
        {
            title: "French Fries",
            description: "Crispy golden fries",
            price: "₹200",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-french-fries-png-image_12239158.png",
            details: "Perfectly salted and served hot."
        },
        {
            title: "Onion Rings",
            description: "Crispy fried onion rings",
            price: "₹240",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-onion-rings-png-image_12239160.png",
            details: "Served with tangy dip."
        },
        {
            title: "Veg Pakora",
            description: "Spicy vegetable fritters",
            price: "₹180",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-vegetable-pakora-png-image_12239162.png",
            details: "Crispy and delicious, served with chutney."
        }
    ],
    fastfood: [
        {
            title: "Veg Burger",
            description: "Classic burger with crispy patty",
            price: "₹200",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-veggie-burger-png-image_12239164.png",
            details: "Loaded with veggies, sauces and love."
        },
        {
            title: "Cheese Pizza",
            description: "Melty cheese and crispy crust",
            price: "₹500",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-cheese-pizza-png-image_12239166.png",
            details: "Served hot, with oregano and chili flakes."
        },
        {
            title: "Pasta",
            description: "Creamy pasta with veggies",
            price: "₹350",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-pasta-png-image_12239168.png",
            details: "Tossed in a rich white sauce."
        },
        {
            title: "Veg Sandwich",
            description: "Toasted sandwich with fresh veggies",
            price: "₹150",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-vegetable-sandwich-png-image_12239170.png",
            details: "Served with ketchup and chips."
        },
        {
            title: "Chaat",
            description: "Spicy Indian street food",
            price: "₹120",
            image: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-chaat-png-image_12239172.png",
            details: "A mix of flavors and textures."
        }
    ]
};

function createMenuCard(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.setAttribute('data-aos', 'zoom-in');
    div.onclick = () => openModal(item.title, item.description, item.price, item.details, item.image);

    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="menu-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span>${item.price}</span>
        </div>
    `;
    return div;
}

function loadMenu() {
    Object.entries(menuData).forEach(([category, items]) => {
        const container = document.getElementById(category);
        if (!container) return;
        items.forEach(item => {
            const card = createMenuCard(item);
            container.appendChild(card);
        });
    });
}

function openModal(title, description, price, details, imgSrc) {
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-details').textContent = details;
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

window.addEventListener('DOMContentLoaded', loadMenu);
