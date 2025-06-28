document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Product data
    const products = [
        {
            id: 1,
            title: "Cable one",
            description: "This is a nice cable.",
            price: "N20,500",
            image: "img/cable1.jpeg"
        },
        {
            id: 2,
            title: "Cable Two",
            description: "Another very nice cable",
            price: "N49,250",
            image: "img/cable2.jpeg"
        },
        {
            id: 3,
            title: "Cable Three",
            description: "A very good cable",
            price: "N12,050",
            image: "img/cable3.jpeg"
        },
        {
            id: 4,
            title: "Cable Four",
            description: "Special Cable for everyone",
            price: "N85,200",
            image: "img/cable1.jpeg"
        }
    ];
    
    // Display products
    const productsGrid = document.querySelector('.products-grid');
    
    function displayProducts() {
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
    }
    
    // Initialize
    displayProducts();
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
});