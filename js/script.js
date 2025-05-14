document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  mobileMenuClose.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  mobileMenuOverlay.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Cart Toggle
  const cartIcon = document.querySelector(".cart-icon");
  const cartSidebar = document.querySelector(".cart-sidebar");
  const cartOverlay = document.querySelector(".cart-overlay");
  const cartClose = document.querySelector(".cart-close");

  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  cartClose.addEventListener("click", function () {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  cartOverlay.addEventListener("click", function () {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial) =>
      testimonial.classList.remove("active")
    );
    dots.forEach((dot) => dot.classList.remove("active"));

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
    currentTestimonial = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showTestimonial(index));
  });

  prevBtn.addEventListener("click", () => {
    currentTestimonial =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);

  // Product Data
  const products = [
    {
      id: 1,
      title: "Premium Leather Jacket",
      price: 199.99,
      oldPrice: 249.99,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      badge: "Sale",
      description:
        "High-quality leather jacket with premium stitching and comfortable fit. Perfect for any occasion.",
    },
    {
      id: 2,
      title: "Wireless Headphones Pro",
      price: 149.99,
      oldPrice: 179.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      badge: "Popular",
      description:
        "Crystal clear sound with noise cancellation technology. 30-hour battery life.",
    },
    {
      id: 3,
      title: "Designer Handbag",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description:
        "Luxury designer handbag with multiple compartments and genuine leather finish.",
    },
    {
      id: 4,
      title: "Smart Watch Series 5",
      price: 249.99,
      oldPrice: 299.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      badge: "New",
      description:
        "Track your fitness, receive notifications, and more with this advanced smartwatch.",
    },
    {
      id: 5,
      title: "Men's Dress Shoes",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description:
        "Classic dress shoes with comfortable cushioning and durable sole.",
    },
    {
      id: 6,
      title: "Women's Sunglasses",
      price: 89.99,
      oldPrice: 119.99,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      badge: "Sale",
      description:
        "UV protection sunglasses with stylish frame design and lightweight materials.",
    },
    {
      id: 7,
      title: "Bluetooth Speaker",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description:
        "Portable speaker with 20-hour battery life and waterproof design.",
    },
    {
      id: 8,
      title: "Luxury Throw Pillow",
      price: 49.99,
      oldPrice: 59.99,
      image:
        "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      badge: "Sale",
      description:
        "Soft and comfortable throw pillow with premium fabric and elegant design.",
    },
  ];

  // Render Products
  const productGrid = document.querySelector(".product-grid");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    let badgeHTML = "";
    if (product.badge) {
      badgeHTML = `<span class="product-badge">${product.badge}</span>`;
    }

    let oldPriceHTML = "";
    if (product.oldPrice) {
      oldPriceHTML = `<span class="old-price">$${product.oldPrice.toFixed(
        2
      )}</span>`;
    }

    productCard.innerHTML = `
            ${badgeHTML}
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-actions">
                    <button class="quick-view" data-id="${
                      product.id
                    }"><i class="fas fa-eye"></i></button>
                    <button class="add-to-wishlist"><i class="far fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(
                      2
                    )}</span>
                    ${oldPriceHTML}
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span>(24)</span>
                </div>
                <button class="add-to-cart" data-id="${
                  product.id
                }">Add to Cart</button>
            </div>
        `;

    productGrid.appendChild(productCard);
  });

  // Quick View Modal
  const quickViewModal = document.querySelector("#quickViewModal");
  const modalClose = document.querySelector(".modal-close");
  const modalProductTitle = document.querySelector("#modalProductTitle");
  const modalProductPrice = document.querySelector("#modalProductPrice");
  const modalProductDescription = document.querySelector(
    "#modalProductDescription"
  );
  const modalMainImage = document.querySelector("#modalMainImage");
  const thumbnailImages = document.querySelector(".thumbnail-images");
  const addToCartModal = document.querySelector("#addToCartModal");

  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("quick-view") ||
      e.target.closest(".quick-view")
    ) {
      const productId = e.target.closest(".quick-view").dataset.id;
      const product = products.find((p) => p.id == productId);

      if (product) {
        modalProductTitle.textContent = product.title;

        if (product.oldPrice) {
          modalProductPrice.innerHTML = `$${product.price.toFixed(
            2
          )} <span class="old-price">$${product.oldPrice.toFixed(2)}</span>`;
        } else {
          modalProductPrice.textContent = `$${product.price.toFixed(2)}`;
        }

        modalProductDescription.textContent = product.description;
        modalMainImage.src = product.image;

        // Clear thumbnails
        thumbnailImages.innerHTML = "";

        // Add thumbnails (in a real app, these would be different images)
        for (let i = 0; i < 3; i++) {
          const thumbnail = document.createElement("img");
          thumbnail.src = product.image;
          thumbnail.alt = product.title;
          thumbnail.addEventListener("click", function () {
            modalMainImage.src = this.src;
          });
          thumbnailImages.appendChild(thumbnail);
        }

        quickViewModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    }
  });

  modalClose.addEventListener("click", function () {
    quickViewModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  quickViewModal.addEventListener("click", function (e) {
    if (e.target === quickViewModal) {
      quickViewModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Quantity Selector
  const quantityDecrease = document.querySelector(".quantity-decrease");
  const quantityIncrease = document.querySelector(".quantity-increase");
  const quantityInput = document.querySelector("#modalProductQuantity");

  quantityDecrease.addEventListener("click", function () {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });

  quantityIncrease.addEventListener("click", function () {
    let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
  });

  // Color Selector
  const colorOptions = document.querySelectorAll(".color-option");

  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
      colorOptions.forEach((opt) => opt.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Cart Functionality
  let cart = [];
  const cartCount = document.querySelector(".cart-count");
  const cartItems = document.querySelector(".cart-items");
  const emptyCart = document.querySelector(".empty-cart");
  const totalAmount = document.querySelector(".total-amount");

  function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
      emptyCart.style.display = "flex";
      cartItems.innerHTML = "";
    } else {
      emptyCart.style.display = "none";

      let itemsHTML = "";
      let subtotal = 0;

      cart.forEach((item) => {
        const product = products.find((p) => p.id == item.id);
        if (product) {
          const itemTotal = product.price * item.quantity;
          subtotal += itemTotal;

          itemsHTML += `
                        <div class="cart-item" data-id="${item.id}">
                            <div class="cart-item-img">
                                <img src="${product.image}" alt="${
            product.title
          }">
                            </div>
                            <div class="cart-item-details">
                                <h4 class="cart-item-title">${
                                  product.title
                                }</h4>
                                <div class="cart-item-price">$${product.price.toFixed(
                                  2
                                )}</div>
                                <div class="cart-item-quantity">
                                    <button class="quantity-decrease">-</button>
                                    <input type="number" value="${
                                      item.quantity
                                    }" min="1">
                                    <button class="quantity-increase">+</button>
                                </div>
                                <div class="cart-item-remove">Remove</div>
                            </div>
                        </div>
                    `;
        }
      });

      cartItems.innerHTML = itemsHTML;
      totalAmount.textContent = `$${subtotal.toFixed(2)}`;

      // Add event listeners to cart items
      document
        .querySelectorAll(".cart-item .quantity-decrease")
        .forEach((btn) => {
          btn.addEventListener("click", function () {
            const itemId = this.closest(".cart-item").dataset.id;
            const item = cart.find((i) => i.id == itemId);
            if (item.quantity > 1) {
              item.quantity--;
              updateCart();
            }
          });
        });

      document
        .querySelectorAll(".cart-item .quantity-increase")
        .forEach((btn) => {
          btn.addEventListener("click", function () {
            const itemId = this.closest(".cart-item").dataset.id;
            const item = cart.find((i) => i.id == itemId);
            item.quantity++;
            updateCart();
          });
        });

      document.querySelectorAll(".cart-item input").forEach((input) => {
        input.addEventListener("change", function () {
          const itemId = this.closest(".cart-item").dataset.id;
          const item = cart.find((i) => i.id == itemId);
          const newQuantity = parseInt(this.value);
          if (newQuantity > 0) {
            item.quantity = newQuantity;
            updateCart();
          } else {
            this.value = item.quantity;
          }
        });
      });

      document.querySelectorAll(".cart-item-remove").forEach((btn) => {
        btn.addEventListener("click", function () {
          const itemId = this.closest(".cart-item").dataset.id;
          cart = cart.filter((i) => i.id != itemId);
          updateCart();
        });
      });
    }
  }

  // Add to cart from product card
  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("add-to-cart") ||
      e.target.closest(".add-to-cart")
    ) {
      const productId = e.target.closest(".add-to-cart").dataset.id;
      addToCart(productId);
    }
  });

  // Add to cart from modal
  addToCartModal.addEventListener("click", function () {
    const productId =
      this.dataset.id || document.querySelector(".add-to-cart").dataset.id;
    const quantity = parseInt(quantityInput.value);
    addToCart(productId, quantity);
    quickViewModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  function addToCart(productId, quantity = 1) {
    const existingItem = cart.find((item) => item.id == productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: productId,
        quantity: quantity,
      });
    }

    updateCart();

    // Show cart sidebar
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Newsletter Form
  const newsletterForm = document.querySelector(".newsletter-form");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector("input").value;
    alert(`Thank you for subscribing with ${email}!`);
    this.querySelector("input").value = "";
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
