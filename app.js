let cart = JSON.parse(localStorage.getItem('cart')) || [];

function searchProducts() {
    let input = document.getElementById('search').value.toLowerCase();
    let products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        let name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(input)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function toggleSidebar() {
const sidebar = document.getElementById('sidebar');
const container = document.getElementById('container');
const toggleBtn = document.querySelector('.toggle-btn');

sidebar.classList.toggle('open');
container.classList.toggle('sidebar-open');

// تغيير حجم الزر عند الفتح أو الإغلاق
toggleBtn.style.fontSize = sidebar.classList.contains('open') ? '20px' : '30px';

// تحريك العنصر بناءً على حالة الفتح أو الإغلاق
toggleBtn.style.transform = sidebar.classList.contains('open') ? 'translateX(33px)' : 'translateX(-0.5px)';
}


function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
}

function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.textContent = `🛒 (${cart.length})`;
}

updateCartIcon();