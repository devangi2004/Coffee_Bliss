// PRODUCT COUNT
const products = document.querySelectorAll(".menu-item");
document.getElementById("productCount").textContent = products.length;

// CART LOGIC
let cart = [];
let cartCount = 0;
let cartTotal = 0;

const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartPanel = document.getElementById("cartPanel");

function toggleCart() {
  cartPanel.classList.toggle("active");
}

// ADD TO CART
document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = parseInt(btn.dataset.price);

    cart.push({ name, price });
    cartCount++;
    cartTotal += price;

    updateCart();
  });
});

// UPDATE CART
function updateCart() {
  cartCountEl.textContent = cartCount;
  cartTotalEl.textContent = cartTotal;
  cartItemsEl.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button class="remove-btn" onclick="removeItem(${index})">×</button>
    `;
    cartItemsEl.appendChild(li);
  });
}

// REMOVE ITEM
function removeItem(index) {
  cartTotal -= cart[index].price;
  cart.splice(index, 1);
  cartCount--;
  updateCart();
}

// FILTER
function filterMenu(category) {
  products.forEach(item => {
    const cat = item.getAttribute("data-category");
    item.style.display =
      category === "all" || cat === category ? "block" : "none";
  });
}
