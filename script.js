const products = [
  ["https://via.placeholder.com/100?text=Headphones", "Wireless Headphones", "₹7,999", "Noise-cancelling over-ear headphones."],
  ["https://via.placeholder.com/100?text=Watch", "Smartwatch", "₹12,999", "Fitness tracking smartwatch."],
  ["https://via.placeholder.com/100?text=Mouse", "Gaming Mouse", "₹2,499", "Ergonomic gaming mouse."],
  ["https://via.placeholder.com/100?text=Stand", "Laptop Stand", "₹1,999", "Adjustable aluminium stand."],
  ["https://via.placeholder.com/100?text=Keyboard", "Mechanical Keyboard", "₹4,999", "RGB backlit mechanical keyboard."],
  ["https://via.placeholder.com/100?text=Speaker", "Bluetooth Speaker", "₹3,499", "Portable wireless speaker."],
  ["https://via.placeholder.com/100?text=Camera", "Web Camera", "₹2,999", "HD video calling webcam."],
  ["https://via.placeholder.com/100?text=USB", "USB Hub", "₹1,299", "Multi-port USB hub."],
  ["https://via.placeholder.com/100?text=Charger", "Fast Charger", "₹999", "Quick charging adapter."],
  ["https://via.placeholder.com/100?text=Bag", "Laptop Bag", "₹2,199", "Water-resistant laptop backpack."],
  ["https://via.placeholder.com/100?text=Monitor", "LED Monitor", "₹10,999", "Full HD display monitor."],
  ["https://via.placeholder.com/100?text=Powerbank", "Power Bank", "₹1,799", "10000mAh portable power bank."]
];

let currentPage = 1;
const productsPerPage = 10;

const table = document.getElementById("productTable");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function displayProducts() {
  table.innerHTML = "";

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const currentProducts = products.slice(start, end);

  currentProducts.forEach(product => {
    table.innerHTML += `
      <tr>
        <td><img src="${product[0]}" alt="${product[1]}"></td>
        <td>${product[1]}</td>
        <td>${product[2]}</td>
        <td>${product[3]}</td>
      </tr>
    `;
  });

  updatePagination();
}

function updatePagination() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", () => {
  currentPage--;
  displayProducts();
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  displayProducts();
});

displayProducts();