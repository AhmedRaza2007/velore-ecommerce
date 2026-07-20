// Product Data
const products = [
    {
        id: 1,
        name: "Classic Leather Jacket",
        brand: "VELORÉ",
        category: "Men",
        subcategory: "Jackets",
        price: 499,
        discountPrice: 399,
        rating: 4.8,
        reviewCount: 124,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown", "Navy"],
        stock: 45,
        sku: "VL-MJ-001",
        description: "Premium leather jacket crafted from the finest Italian leather. Timeless design that lasts for generations.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20black%20leather%20jacket%20luxury%20fashion&image_size=square",
        featured: true,
        isNew: false,
        isSale: true
    },
    {
        id: 2,
        name: "Silk Evening Dress",
        brand: "VELORÉ",
        category: "Women",
        subcategory: "Dresses",
        price: 799,
        discountPrice: null,
        rating: 4.9,
        reviewCount: 87,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Red", "Black", "Champagne"],
        stock: 28,
        sku: "VL-WD-002",
        description: "Elegant silk evening dress perfect for special occasions. Features a flattering silhouette and luxurious fabric.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=elegant%20red%20silk%20evening%20dress%20luxury%20fashion&image_size=square",
        featured: true,
        isNew: true,
        isSale: false
    },
    {
        id: 3,
        name: "Designer Sneakers",
        brand: "VELORÉ",
        category: "Sneakers",
        subcategory: "Sneakers",
        price: 299,
        discountPrice: 249,
        rating: 4.7,
        reviewCount: 203,
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["White", "Black", "Grey"],
        stock: 89,
        sku: "VL-SN-003",
        description: "Luxury designer sneakers combining comfort and style. Perfect for everyday wear.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20white%20designer%20sneakers%20premium&image_size=square",
        featured: true,
        isNew: false,
        isSale: true
    },
    {
        id: 4,
        name: "Leather Handbag",
        brand: "VELORÉ",
        category: "Bags",
        subcategory: "Handbags",
        price: 1299,
        discountPrice: null,
        rating: 5.0,
        reviewCount: 156,
        sizes: ["One Size"],
        colors: ["Black", "Tan", "Burgundy"],
        stock: 34,
        sku: "VL-BG-004",
        description: "Timeless leather handbag with gold hardware. Spacious interior with multiple compartments.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20black%20leather%20handbag%20premium&image_size=square",
        featured: true,
        isNew: true,
        isSale: false
    },
    {
        id: 5,
        name: "Swiss Automatic Watch",
        brand: "VELORÉ",
        category: "Watches",
        subcategory: "Watches",
        price: 2499,
        discountPrice: 1999,
        rating: 4.9,
        reviewCount: 98,
        sizes: ["One Size"],
        colors: ["Silver", "Gold", "Rose Gold"],
        stock: 15,
        sku: "VL-WT-005",
        description: "Swiss-made automatic watch with sapphire crystal and leather strap. A true investment piece.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20swiss%20automatic%20watch%20premium&image_size=square",
        featured: true,
        isNew: false,
        isSale: true
    },
    {
        id: 6,
        name: "Cashmere Sweater",
        brand: "VELORÉ",
        category: "Men",
        subcategory: "Sweaters",
        price: 349,
        discountPrice: null,
        rating: 4.8,
        reviewCount: 167,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Cream", "Navy", "Grey", "Black"],
        stock: 76,
        sku: "VL-MS-006",
        description: "100% pure cashmere sweater. Incredibly soft and warm. A wardrobe essential.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20cream%20cashmere%20sweater%20premium&image_size=square",
        featured: false,
        isNew: true,
        isSale: false
    },
    {
        id: 7,
        name: "Designer Sunglasses",
        brand: "VELORÉ",
        category: "Sunglasses",
        subcategory: "Sunglasses",
        price: 399,
        discountPrice: 329,
        rating: 4.6,
        reviewCount: 234,
        sizes: ["One Size"],
        colors: ["Black", "Tortoise", "Gold"],
        stock: 120,
        sku: "VL-SG-007",
        description: "Italian-made designer sunglasses with UV400 protection. Comes with premium case.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20designer%20sunglasses%20premium%20quality&image_size=square",
        featured: false,
        isNew: false,
        isSale: true
    },
    {
        id: 8,
        name: "Pearl Necklace",
        brand: "VELORÉ",
        category: "Jewelry",
        subcategory: "Necklaces",
        price: 899,
        discountPrice: null,
        rating: 4.9,
        reviewCount: 56,
        sizes: ["16\"", "18\"", "20\""],
        colors: ["White", "Pink", "Black"],
        stock: 23,
        sku: "VL-JN-008",
        description: "Freshwater pearl necklace with 14K gold clasp. Timeless elegance for any occasion.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20pearl%20necklace%20premium%20quality&image_size=square",
        featured: true,
        isNew: true,
        isSale: false
    },
    {
        id: 9,
        name: "Signature Perfume",
        brand: "VELORÉ",
        category: "Perfumes",
        subcategory: "Perfumes",
        price: 199,
        discountPrice: 169,
        rating: 4.8,
        reviewCount: 312,
        sizes: ["50ml", "100ml"],
        colors: ["One Color"],
        stock: 198,
        sku: "VL-PF-009",
        description: "Our signature fragrance with notes of bergamot, jasmine, and sandalwood. Long-lasting scent.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20perfume%20bottle%20premium%20quality&image_size=square",
        featured: true,
        isNew: false,
        isSale: true
    },
    {
        id: 10,
        name: "Leather Wallet",
        brand: "VELORÉ",
        category: "Wallets",
        subcategory: "Wallets",
        price: 179,
        discountPrice: null,
        rating: 4.7,
        reviewCount: 445,
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Navy"],
        stock: 156,
        sku: "VL-WL-010",
        description: "Premium leather wallet with RFID protection. Multiple card slots and bill compartments.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20leather%20wallet%20premium%20quality&image_size=square",
        featured: false,
        isNew: false,
        isSale: false
    },
    {
        id: 11,
        name: "Wool Overcoat",
        brand: "VELORÉ",
        category: "Women",
        subcategory: "Coats",
        price: 699,
        discountPrice: 599,
        rating: 4.9,
        reviewCount: 89,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Camel", "Black", "Grey"],
        stock: 34,
        sku: "VL-WC-011",
        description: "Luxurious wool overcoat with tailored fit. Perfect for staying warm and stylish in winter.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20camel%20wool%20overcoat%20premium&image_size=square",
        featured: true,
        isNew: false,
        isSale: true
    },
    {
        id: 12,
        name: "Leather Backpack",
        brand: "VELORÉ",
        category: "Backpacks",
        subcategory: "Backpacks",
        price: 449,
        discountPrice: null,
        rating: 4.6,
        reviewCount: 178,
        sizes: ["One Size"],
        colors: ["Black", "Tan", "Navy"],
        stock: 67,
        sku: "VL-BP-012",
        description: "Premium leather backpack with padded laptop compartment. Perfect for work or travel.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20leather%20backpack%20premium%20quality&image_size=square",
        featured: false,
        isNew: true,
        isSale: false
    },
    {
        id: 13,
        name: "Kids Cashmere Set",
        brand: "VELORÉ",
        category: "Kids",
        subcategory: "Clothing",
        price: 249,
        discountPrice: 199,
        rating: 4.8,
        reviewCount: 67,
        sizes: ["2T", "3T", "4T", "5", "6", "7", "8"],
        colors: ["Pink", "Blue", "Cream", "Grey"],
        stock: 89,
        sku: "VL-KC-013",
        description: "Soft cashmere set for kids. Includes sweater and matching pants. Comfortable and luxurious.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20kids%20cashmere%20clothing%20premium&image_size=square",
        featured: false,
        isNew: true,
        isSale: true
    },
    {
        id: 14,
        name: "Formal Oxford Shoes",
        brand: "VELORÉ",
        category: "Shoes",
        subcategory: "Formal",
        price: 399,
        discountPrice: null,
        rating: 4.7,
        reviewCount: 234,
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        colors: ["Black", "Brown"],
        stock: 145,
        sku: "VL-SF-014",
        description: "Classic Oxford shoes made from premium leather. Perfect for formal occasions.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20black%20oxford%20shoes%20premium&image_size=square",
        featured: false,
        isNew: false,
        isSale: false
    },
    {
        id: 15,
        name: "Skincare Gift Set",
        brand: "VELORÉ",
        category: "Skincare",
        subcategory: "Sets",
        price: 299,
        discountPrice: 249,
        rating: 4.9,
        reviewCount: 189,
        sizes: ["One Size"],
        colors: ["One Color"],
        stock: 78,
        sku: "VL-SS-015",
        description: "Complete skincare set including cleanser, toner, serum, and moisturizer. Perfect gift.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20skincare%20gift%20set%20premium&image_size=square",
        featured: true,
        isNew: true,
        isSale: true
    },
    {
        id: 16,
        name: "Silk Scarf",
        brand: "VELORÉ",
        category: "Accessories",
        subcategory: "Scarves",
        price: 199,
        discountPrice: null,
        rating: 4.8,
        reviewCount: 156,
        sizes: ["One Size"],
        colors: ["Floral", "Geometric", "Solid"],
        stock: 200,
        sku: "VL-AC-016",
        description: "100% silk scarf with hand-rolled edges. Versatile accessory for any outfit.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20silk%20scarf%20premium%20quality&image_size=square",
        featured: false,
        isNew: false,
        isSale: false
    },
    {
        id: 17,
        name: "Yoga Activewear Set",
        brand: "VELORÉ",
        category: "Sportswear",
        subcategory: "Yoga",
        price: 189,
        discountPrice: 159,
        rating: 4.6,
        reviewCount: 278,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Grey", "Pink"],
        stock: 167,
        sku: "VL-SW-017",
        description: "Premium yoga set with moisture-wicking fabric. Comfortable and stylish for workouts.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20yoga%20activewear%20set%20premium&image_size=square",
        featured: false,
        isNew: true,
        isSale: true
    },
    {
        id: 18,
        name: "Wireless Earbuds",
        brand: "VELORÉ",
        category: "Electronics",
        subcategory: "Audio",
        price: 349,
        discountPrice: null,
        rating: 4.7,
        reviewCount: 456,
        sizes: ["One Size"],
        colors: ["White", "Black"],
        stock: 234,
        sku: "VL-EL-018",
        description: "Premium wireless earbuds with noise cancellation. 30-hour battery life.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20wireless%20earbuds%20premium%20quality&image_size=square",
        featured: true,
        isNew: true,
        isSale: false
    },
    {
        id: 19,
        name: "Ceramic Vase Set",
        brand: "VELORÉ",
        category: "Home Decor",
        subcategory: "Vases",
        price: 159,
        discountPrice: 129,
        rating: 4.5,
        reviewCount: 89,
        sizes: ["Set of 3"],
        colors: ["White", "Terracotta", "Blue"],
        stock: 56,
        sku: "VL-HD-019",
        description: "Handcrafted ceramic vases in three sizes. Perfect for displaying flowers or as decor.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20ceramic%20vase%20set%20premium&image_size=square",
        featured: false,
        isNew: false,
        isSale: true
    },
    {
        id: 20,
        name: "Velvet Armchair",
        brand: "VELORÉ",
        category: "Furniture",
        subcategory: "Chairs",
        price: 1499,
        discountPrice: null,
        rating: 4.9,
        reviewCount: 45,
        sizes: ["One Size"],
        colors: ["Emerald", "Navy", "Blush", "Charcoal"],
        stock: 12,
        sku: "VL-FC-020",
        description: "Luxurious velvet armchair with gold legs. Statement piece for any room.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20velvet%20armchair%20premium%20quality&image_size=square",
        featured: true,
        isNew: true,
        isSale: false
    },
    {
        id: 21,
        name: "Cookware Set",
        brand: "VELORÉ",
        category: "Kitchen",
        subcategory: "Cookware",
        price: 399,
        discountPrice: 349,
        rating: 4.8,
        reviewCount: 234,
        sizes: ["10-Piece Set"],
        colors: ["Copper", "Black", "Stainless Steel"],
        stock: 89,
        sku: "VL-KC-021",
        description: "Premium 10-piece cookware set with non-stick coating. Professional quality for home chefs.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20cookware%20set%20premium%20quality&image_size=square",
        featured: false,
        isNew: false,
        isSale: true
    },
    {
        id: 22,
        name: "Leather Luggage Set",
        brand: "VELORÉ",
        category: "Travel",
        subcategory: "Luggage",
        price: 899,
        discountPrice: null,
        rating: 4.7,
        reviewCount: 134,
        sizes: ["3-Piece Set"],
        colors: ["Black", "Brown", "Navy"],
        stock: 34,
        sku: "VL-TL-022",
        description: "Premium leather luggage set in carry-on, medium, and large sizes. Built to last.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20leather%20luggage%20set%20premium&image_size=square",
        featured: true,
        isNew: true,
        isSale: false
    },
    {
        id: 23,
        name: "Gift Box Collection",
        brand: "VELORÉ",
        category: "Gifts",
        subcategory: "Gift Sets",
        price: 299,
        discountPrice: 249,
        rating: 4.9,
        reviewCount: 178,
        sizes: ["One Size"],
        colors: ["One Color"],
        stock: 156,
        sku: "VL-GS-023",
        description: "Curated gift box with selection of our finest products. Perfect for any occasion.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20gift%20box%20collection%20premium&image_size=square",
        featured: true,
        isNew: false,
        isSale: true
    },
    {
        id: 24,
        name: "Lipstick Collection",
        brand: "VELORÉ",
        category: "Beauty",
        subcategory: "Makeup",
        price: 149,
        discountPrice: null,
        rating: 4.8,
        reviewCount: 345,
        sizes: ["Set of 6"],
        colors: ["Red, Nude, Pink, Berry, Coral, Rose"],
        stock: 267,
        sku: "VL-BM-024",
        description: "Long-lasting, moisturizing lipstick collection in six wearable shades.",
        image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20lipstick%20collection%20premium&image_size=square",
        featured: false,
        isNew: true,
        isSale: false
    }
];

// Add 180 more products by duplicating and modifying existing ones
const productNames = [
    "Linen Shirt", "Cotton Blazer", "Denim Jeans", "Wool Trousers", "Silk Blouse",
    "Chiffon Skirt", "Suede Boots", "Loafers", "Sandals", "Wedges",
    "Tote Bag", "Clutch", "Messenger Bag", "Belt", "Tie",
    "Cufflinks", "Bracelet", "Earrings", "Ring", "Brooch",
    "Cologne", "Body Lotion", "Shower Gel", "Face Cream", "Eye Serum",
    "Running Shoes", "Gym Bag", "Tennis Racket", "Yoga Mat", "Water Bottle",
    "Smart Watch", "Wireless Speaker", "Phone Case", "Laptop Sleeve", "Power Bank",
    "Throw Pillow", "Blanket", "Candle Set", "Photo Frame", "Table Lamp",
    "Dining Table", "Coffee Table", "Bed Frame", "Mattress", "Wardrobe",
    "Knife Set", "Mixing Bowls", "Baking Sheet", "Coffee Maker", "Tea Set",
    "Passport Holder", "Travel Pillow", "Eye Mask", "Luggage Tag", "Travel Wallet",
    "Champagne Flutes", "Wine Glasses", "Picture Album", "Journal", "Pen Set"
];

const brands = ["VELORÉ", "Designer Co.", "Luxury Label", "Premium Brand", "Exclusive Line"];
const categories = ["Men", "Women", "Kids", "Shoes", "Sneakers", "Bags", "Backpacks", "Wallets", 
                    "Watches", "Sunglasses", "Jewelry", "Perfumes", "Beauty", "Skincare", 
                    "Accessories", "Sportswear", "Electronics", "Home Decor", "Furniture", 
                    "Kitchen", "Travel", "Gifts"];

let productId = 25;
for (let i = 0; i < 180; i++) {
    const baseProduct = products[i % 24];
    const newProduct = {
        ...baseProduct,
        id: productId++,
        name: productNames[i % productNames.length] + " " + (Math.floor(i / 10) + 1),
        brand: brands[i % brands.length],
        category: categories[i % categories.length],
        price: Math.floor(Math.random() * 1000) + 50,
        discountPrice: Math.random() > 0.5 ? Math.floor((Math.random() * 1000 + 50) * 0.8) : null,
        rating: 4.0 + Math.random() * 1.0,
        reviewCount: Math.floor(Math.random() * 500) + 10,
        stock: Math.floor(Math.random() * 200) + 10,
        sku: "VL-" + String(productId).padStart(5, "0"),
        featured: Math.random() > 0.7,
        isNew: Math.random() > 0.8,
        isSale: Math.random() > 0.7,
        image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20${encodeURIComponent(productNames[i % productNames.length])}%20premium%20quality&image_size=square`
    };
    products.push(newProduct);
}

// Cart and Wishlist
let cart = JSON.parse(localStorage.getItem('veloreCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('veloreWishlist')) || [];

// Save to localStorage
function saveCart() {
    localStorage.setItem('veloreCart', JSON.stringify(cart));
}

function saveWishlist() {
    localStorage.setItem('veloreWishlist', JSON.stringify(wishlist));
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Add to cart
function addToCart(productId, quantity = 1, size = null, color = null) {
    const existingItem = cart.find(item => item.productId === productId && item.size === size && item.color === color);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity, size, color });
    }
    saveCart();
    updateCartCount();
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
}

// Update cart quantity
function updateCartQuantity(index, quantity) {
    if (quantity <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = quantity;
        saveCart();
    }
}

// Toggle wishlist
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }
    saveWishlist();
}

// Check if in wishlist
function isInWishlist(productId) {
    return wishlist.includes(productId);
}

// Update cart count display
function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    if (countEl) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countEl.textContent = totalItems;
    }
}

// Calculate cart total
function getCartTotal() {
    return cart.reduce((total, item) => {
        const product = getProductById(item.productId);
        const price = product.discountPrice || product.price;
        return total + (price * item.quantity);
    }, 0);
}

// Get cart subtotal
function getCartSubtotal() {
    return cart.reduce((total, item) => {
        const product = getProductById(item.productId);
        return total + (product.price * item.quantity);
    }, 0);
}

// Get discount total
function getDiscountTotal() {
    return getCartSubtotal() - getCartTotal();
}

// Filter products
function filterProducts(filters = {}) {
    let filtered = [...products];
    
    if (filters.category) {
        filtered = filtered.filter(p => 
            p.category.toLowerCase() === filters.category.toLowerCase() ||
            p.subcategory?.toLowerCase() === filters.category.toLowerCase()
        );
    }
    
    if (filters.brand) {
        filtered = filtered.filter(p => p.brand.toLowerCase().includes(filters.brand.toLowerCase()));
    }
    
    if (filters.minPrice) {
        filtered = filtered.filter(p => (p.discountPrice || p.price) >= filters.minPrice);
    }
    
    if (filters.maxPrice) {
        filtered = filtered.filter(p => (p.discountPrice || p.price) <= filters.maxPrice);
    }
    
    if (filters.size) {
        filtered = filtered.filter(p => p.sizes.includes(filters.size));
    }
    
    if (filters.color) {
        filtered = filtered.filter(p => p.colors.some(c => c.toLowerCase().includes(filters.color.toLowerCase())));
    }
    
    if (filters.rating) {
        filtered = filtered.filter(p => p.rating >= filters.rating);
    }
    
    if (filters.inStock) {
        filtered = filtered.filter(p => p.stock > 0);
    }
    
    if (filters.onSale) {
        filtered = filtered.filter(p => p.isSale);
    }
    
    if (filters.new) {
        filtered = filtered.filter(p => p.isNew);
    }
    
    if (filters.search) {
        const search = filters.search.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(search) ||
            p.brand.toLowerCase().includes(search) ||
            p.category.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search)
        );
    }
    
    return filtered;
}

// Sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch (sortBy) {
        case 'newest':
            sorted.sort((a, b) => b.id - a.id);
            break;
        case 'price-low':
            sorted.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
            break;
        case 'price-high':
            sorted.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'best-selling':
            sorted.sort((a, b) => b.reviewCount - a.reviewCount);
            break;
        default:
            // featured - keep original order but move featured to front
            sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    return sorted;
}