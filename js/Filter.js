$(document).ready(function() {

    var products = [
        { name: "Party Top", price: 75.00, label: "NEW" },
        { name: "Denim Jumpsuit", price: 69.99, label: "" },
        { name: "Party Dress", price: 79.99, label: "SALE" },
        { name: "Beach top", price: 26.99, label: "HOT" },
        { name: "Skiny Top", price: 15.99, label: "SALE" },
        { name: "Pattern Tshirt", price: 39.99, label: "" }
    ];

    // Function to display products
    function displayProducts(products) {
        var gridLayout = $(".grid-layout");
        gridLayout.empty();
        products.forEach(function(product) {
            var productHTML = `
                <div class="grid-item">
                    <div class="product">
                        <div class="product-image">
                            <a href="#"><img alt="Shop product image!" src="Shopimg/hompage/${product.name}.jpeg"></a>
                            ${product.label ? `<span class="product-${product.label.toLowerCase()}">${product.label}</span>` : ''}
                        </div>
                        <div class="product-description">
                            <div class="product-category">Women</div>
                            <div class="product-title"><h3><a href="#">${product.name}</a></h3></div>
                            <div class="product-price"><ins>$${product.price.toFixed(2)}</ins></div>
                        </div>
                    </div>
                </div>
            `;
            gridLayout.append(productHTML);
        });
    }

    // Sort products by price: low to high
    function sortByPriceLowToHigh() {
        products.sort(function(a, b) {
            return a.price - b.price;
        });
        displayProducts(products);
    }

    // Sort products by price: high to low
    function sortByPriceHighToLow() {
        products.sort(function(a, b) {
            return b.price - a.price;
        });
        displayProducts(products);
    }

    // Sort products by newness
    function sortByNewness() {
        products.sort(function(a, b) {
            if (a.label === "NEW" && b.label !== "NEW") {
                return -1;
            } else if (a.label !== "NEW" && b.label === "NEW") {
                return 1;
            } else {
                return 0;
            }
        });
        displayProducts(products);
    }

    // Filter products by price range
    function filterByPriceRange(minPrice, maxPrice) {
        var filteredProducts = products.filter(function(product) {
            return product.price >= minPrice && product.price <= maxPrice;
        });
        displayProducts(filteredProducts);
    }

    // Event listener for sorting options
    $(".form-select").change(function() {
        var selectedValue = $(this).val();
        if (selectedValue === "date") {
            sortByNewness();
        } else if (selectedValue === "price") {
            sortByPriceLowToHigh();
        } else if (selectedValue === "price-desc") {
            sortByPriceHighToLow();
        }
    });

    // Event listener for price range filter
    $(".form-select-price").change(function() {
        var selectedRange = $(this).val();
        if (selectedRange === "0-50") {
            filterByPriceRange(0, 50);
        } else if (selectedRange === "51-90") {
            filterByPriceRange(51, 90);
        } else if (selectedRange === "91-120") {
            filterByPriceRange(91, 120);
        } else if (selectedRange === "121-200") {
            filterByPriceRange(121, 200);
        }
    });

    // Initial display of products
    displayProducts(products);

});
