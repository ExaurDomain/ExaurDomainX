document.addEventListener("DOMContentLoaded", function () {

    const imageCarousel = document.getElementById("image-carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    function slideImages() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * 100;
        imageCarousel.style.transform = `translateX(${offset}%)`;
    }

    setInterval(slideImages, 3000); // Change image every 3 seconds
});


document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout");
    const viewCartButton = document.getElementById("view-cart");
    const orderForm = document.getElementById("order-form");

    let cart = [];

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const product = {
                name: `Product ${index + 1}`,
                price: index === 0 ? 10 : 15,
            };
            cart.push(product);
            updateCart();
        });
    });

    checkoutButton.addEventListener("click", () => {
        orderForm.classList.remove("hidden");
    });

    viewCartButton.addEventListener("click", () => {
        updateCart();
    });

    document.getElementById("user-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // You can send this order information to a backend for processing here.
        alert(`Order placed by ${name} with email ${email}.`);

        // Reset the cart and form
        cart = [];
        updateCart();
        orderForm.classList.add("hidden");
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((product) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
            total += product.price;
        });
        cartTotal.textContent = total.toFixed(2);
    }
});

/*Place Order Form*/
const checkoutButton = document.getElementById("checkout");
const orderModal = document.getElementById("order-modal");
const closeOrderButton = document.getElementById("close-modal");

checkoutButton.addEventListener("click", () => {
    orderModal.style.display = "flex";
});

closeOrderButton.addEventListener("click", () => {
    orderModal.style.display = "none";
});
