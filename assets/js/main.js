document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    updateCartCount();
    
    // Load homepage products if on homepage
    if (document.getElementById('bestSellers')) {
        loadHomepageProducts();
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', function() {
            searchModal.classList.remove('hidden');
            searchModal.classList.add('flex');
            searchInput.focus();
        });
    }
    
    if (closeSearch && searchModal) {
        closeSearch.addEventListener('click', function() {
            searchModal.classList.add('hidden');
            searchModal.classList.remove('flex');
        });
        
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                searchModal.classList.add('hidden');
                searchModal.classList.remove('flex');
            }
        });
    }
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 2) {
                const results = filterProducts({ search: query }).slice(0, 8);
                displaySearchResults(results);
            } else {
                searchResults.innerHTML = '';
            }
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to VELORÉ!');
            this.reset();
        });
    }
    
    // Initialize GSAP animations
    initializeAnimations();
});

function loadHomepageProducts() {
    // Best Sellers
    const bestSellers = sortProducts(filterProducts({ rating: 4.5 }), 'best-selling').slice(0, 8);
    displayProducts('bestSellers', bestSellers);
    
    // New Arrivals
    const newArrivals = sortProducts(filterProducts({ new: true }), 'newest').slice(0, 8);
    displayProducts('newArrivals', newArrivals);
    
    // Trending Products
    const trending = sortProducts(products.slice(), 'rating').slice(0, 8);
    displayProducts('trendingProducts', trending);
}

function displayProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = productList.map(product => createProductCard(product)).join('');
    
    // Add event listeners to new buttons
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product-id');
            addToCart(parseInt(productId));
            showNotification('Added to cart!');
        });
    });
    
    container.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product-id');
            toggleWishlist(parseInt(productId));
            updateWishlistIcon(this, parseInt(productId));
        });
    });
}

function createProductCard(product) {
    const price = product.discountPrice || product.price;
    const originalPrice = product.discountPrice ? product.price : null;
    const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;
    const inWishlist = isInWishlist(product.id);
    
    return `
        <div class="product-card">
            <div class="relative overflow-hidden mb-4">
                <a href="pages/product.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover">
                </a>
                <div class="product-overlay absolute inset-0 bg-black/10 flex items-center justify-center gap-2 opacity-0 transition-opacity">
                    <button class="add-to-cart-btn bg-white text-black px-4 py-2 text-sm font-medium" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
                <button class="wishlist-btn absolute top-3 right-3 bg-white p-2 rounded-full" data-product-id="${product.id}">
                    <i data-lucide="${inWishlist ? 'heart' : 'heart'}" class="w-5 h-5 ${inWishlist ? 'fill-red-500 text-red-500' : ''}"></i>
                </button>
                ${product.isNew ? '<span class="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">NEW</span>' : ''}
                ${product.isSale ? '<span class="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1">' + discount + '% OFF</span>' : ''}
            </div>
            <a href="pages/product.html?id=${product.id}">
                <p class="text-sm text-gray-500 mb-1">${product.brand}</p>
                <h3 class="font-medium mb-1">${product.name}</h3>
                <div class="flex items-center gap-2">
                    <span class="font-semibold">$${price.toLocaleString()}</span>
                    ${originalPrice ? '<span class="text-gray-400 line-through text-sm">$' + originalPrice.toLocaleString() + '</span>' : ''}
                </div>
                <div class="flex items-center gap-1 mt-2">
                    ${Array(5).fill(0).map((_, i) => `
                        <i data-lucide="star" class="w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}"></i>
                    `).join('')}
                    <span class="text-xs text-gray-500">(${product.reviewCount})</span>
                </div>
            </a>
        </div>
    `;
}

function displaySearchResults(results) {
    const container = document.getElementById('searchResults');
    if (!container) return;
    
    if (results.length === 0) {
        container.innerHTML = '<p class="text-gray-500">No products found</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${results.map(product => `
                <a href="pages/product.html?id=${product.id}" class="block border border-gray-100 p-4 hover:border-gray-300 transition-colors">
                    <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover mb-2">
                    <p class="text-xs text-gray-500">${product.brand}</p>
                    <p class="font-medium text-sm">${product.name}</p>
                    <p class="font-semibold">$${(product.discountPrice || product.price).toLocaleString()}</p>
                </a>
            `).join('')}
        </div>
    `;
    
    if (window.lucide) {
        lucide.createIcons();
    }
}

function updateWishlistIcon(btn, productId) {
    const inWishlist = isInWishlist(productId);
    const icon = btn.querySelector('i');
    if (inWishlist) {
        icon.classList.add('fill-red-500', 'text-red-500');
    } else {
        icon.classList.remove('fill-red-500', 'text-red-500');
    }
    showNotification(inWishlist ? 'Added to wishlist!' : 'Removed from wishlist');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-8 right-8 bg-black text-white px-6 py-4 z-50 animate-pulse';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function initializeAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero animation
        gsap.from('.container > div', {
            duration: 1.2,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: 'power3.out'
        });
        
        // Product cards fade in
        gsap.utils.toArray('.product-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%'
                },
                duration: 0.6,
                y: 20,
                opacity: 0,
                delay: i * 0.1,
                ease: 'power2.out'
            });
        });
        
        // Section animations
        gsap.utils.toArray('section').forEach((section) => {
            gsap.from(section.querySelector('h2'), {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%'
                },
                duration: 0.8,
                y: 20,
                opacity: 0,
                ease: 'power2.out'
            });
        });
    }
}