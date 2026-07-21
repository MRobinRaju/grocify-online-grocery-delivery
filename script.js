// ================= CART FUNCTIONALITY =================

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const addToCartButtons = document.querySelectorAll(".add-cart");

addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName = button.getAttribute("data-product");

        cartCount++;

        cartCounter.textContent = cartCount;

        // Change button temporarily
        const originalText = button.innerHTML;

        button.innerHTML = `
            <i class="bi bi-check-circle"></i>
            Added
        `;

        button.classList.remove("btn-success");
        button.classList.add("btn-dark");

        // Show alert
        alert(productName + " has been added to your cart!");

        // Reset button after 1.5 seconds
        setTimeout(function() {

            button.innerHTML = originalText;

            button.classList.remove("btn-dark");
            button.classList.add("btn-success");

        }, 1500);

    });

});
