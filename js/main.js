(function (R) {
    "use strict";
    
    // Dropdown on mouse hover
    R(document).ready(function () {
        function toggleNavbarMethod() {
            if (R(window).width() > 992) {
                R('.navbar .dropdown').on('mouseover', function () {
                    R('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    R('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                R('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        R(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    R(window).scroll(function () {
        if (R(this).scrollTop() > 100) {
            R('.back-to-top').fadeIn('slow');
        } else {
            R('.back-to-top').fadeOut('slow');
        }
    });
    R('.back-to-top').click(function () {
        R('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    R('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    R('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity (delegated so dynamically injected controls work)
    R(document).on('click', '.quantity button', function () {
        var button = R(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
    /* ---------- E-commerce store plumbing (cart / wishlist) ---------- */

    function safeParse(key, fallback) {
        try {
            return JSON.parse(localStorage.getItem(key)) || fallback;
        } catch (e) {
            return fallback;
        }
    }

    function getCart() { return safeParse('cart', []); }
    function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); }

    function getWishlist() { return safeParse('wishlist', []); }
    function saveWishlist(wl) { localStorage.setItem('wishlist', JSON.stringify(wl)); }

    function formatPrice(str) {
        return ('' + str).trim();
    }

    function showToast(message, type) {
        if (!R('.toast-container').length) {
            R('body').append('<div class="toast-container"></div>');
        }
        var toast = R('<div class="toast ' + (type || 'success') + '"><i class="fas ' + 
            (type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle') + '"></i>' + message + '</div>');
        R('.toast-container').append(toast);
        setTimeout(function() {
            toast.fadeOut(400, function() { 
                toast.remove();
            });
        }, 4500);
    }

    function updateCounters() {
        var cart = getCart();
        var wishlist = getWishlist();
        var cartCount = 0;
        cart.forEach(function (it) { cartCount += (parseInt(it.quantity, 10) || 1); });
        var wishCount = wishlist.length || 0;

        R('.fa-heart').each(function () {
            var badge = R(this).closest('a').find('.badge');
            if (badge.length) badge.text(wishCount);
        });

        R('.fa-shopping-cart').each(function () {
            var badge = R(this).closest('a').find('.badge');
            if (badge.length) badge.text(cartCount);
        });
    }

    function addToWishlistItem(product) {
        var wl = getWishlist();
        var exists = wl.some(function (it) { return it.name === product.name && it.image === product.image; });
        if (!exists) {
            wl.push(product);
            saveWishlist(wl);
            updateCounters();
        }
    }

    function addToCartItem(product) {
        var cart = getCart();
        var found = cart.find(function (it) {
            return it.name === product.name && it.size === product.size && it.color === product.color && it.image === product.image;
        });
        if (found) {
            found.quantity = (parseInt(found.quantity, 10) || 1) + (parseInt(product.quantity, 10) || 1);
        } else {
            cart.push(product);
        }
        saveCart(cart);
        updateCounters();
    }

    // When clicking product-card action buttons
    R(document).on('click', '.product-action a', function (e) {
        e.preventDefault();
        var btn = R(this);
        var icon = btn.find('i');
        var item = btn.closest('.product-item');
        var product = {
            id: Date.now() + Math.floor(Math.random() * 1000),
            image: (item.find('.product-img img').attr('src') || '').trim(),
            name: (item.find('.text-center a.h6').text() || item.find('.text-center a').text() || 'Product').trim(),
            price: formatPrice(item.find('h5').first().text() || ''),
            description: 'Demo description for this product. Replace with actual product copy.',
            size: null,
            color: null,
            quantity: 1
        };

        if (icon.hasClass('fa-shopping-cart')) {
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            e.stopPropagation();
            window.location.href = 'detail.html';
            return;
        }

        if (icon.hasClass('fa-heart') || icon.hasClass('far')) {
            addToWishlistItem(product);
            updateCounters();
            e.stopPropagation();
            return;
        }

        if (icon.hasClass('fa-search')) {
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            e.stopPropagation();
            window.location.href = 'detail.html';
            return;
        }
    });

    // Initialize the mini cart container
    function initMiniCart() {
        if (!R('.mini-cart').length) {
            R('body').append(`
                <div class="mini-cart">
                    <div class="mini-cart-header">
                        <h6 class="mb-0">Shopping Cart</h6>
                        <button class="close-mini-cart"><i class="fa fa-times"></i></button>
                    </div>
                    <div class="mini-cart-body"></div>
                    <div class="mini-cart-footer">
                        <a href="cart.html" class="btn btn-primary btn-block">View Cart</a>
                    </div>
                </div>
                <div class="mini-cart-overlay"></div>
            `);
        }
    }

    // Update mini cart content
    function updateMiniCart() {
        var cart = getCart();
        var cartBody = R('.mini-cart-body');
        cartBody.empty();
        
        if (cart.length === 0) {
            cartBody.html('<p class="text-center my-4">Your cart is empty</p>');
            return;
        }

        cart.forEach(function(item) {
            cartBody.append(`
                <div class="mini-cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="mini-cart-item-details">
                        <h6 class="mb-1">${item.name}</h6>
                        <p class="mb-0">${item.price} × ${item.quantity}</p>
                    </div>
                </div>
            `);
        });
    }

    // Handle navigation icons
    R(document).on('click', 'a', function (e) {
        var anchor = R(this);
        // Handle heart icon
        if (anchor.find('.fa-heart').length && anchor.find('.badge').length) {
            e.preventDefault();
            window.location.href = 'wishlist.html';
        }
        // Handle cart icon
        if (anchor.find('.fa-shopping-cart').length && anchor.find('.badge').length) {
            e.preventDefault();
            initMiniCart();
            updateMiniCart();
            R('.mini-cart, .mini-cart-overlay').addClass('active');
        }
    });

    // Close mini cart
    R(document).on('click', '.close-mini-cart, .mini-cart-overlay', function() {
        R('.mini-cart, .mini-cart-overlay').removeClass('active');
    });

    // Render selected product on detail page
    if (window.location.pathname.indexOf('detail.html') !== -1 || window.location.pathname.indexOf('/detail.html') !== -1) {
        R(function () {
            var raw = localStorage.getItem('selectedProduct');
            if (!raw) return;
            try { var prod = JSON.parse(raw); } catch (e) { return; }

                        var detailHtml = `
<div class="container-fluid">
    <div class="row px-xl-5">
        <div class="col-lg-7">
            <div class="product-gallery">
                <div class="main-img mb-3 text-center">
                    <img src="${prod.image}" alt="${prod.name}" class="img-fluid" style="max-height:420px; object-fit:contain;">
                </div>
                <div class="thumbnail-gallery d-flex justify-content-center">
                    <div class="thumb-item mx-2 active" data-img="${prod.image}">
                        <img src="${prod.image}" alt="Thumbnail 1" class="img-fluid">
                    </div>
                    <div class="thumb-item mx-2" data-img="${prod.image}">
                        <img src="${prod.image}" alt="Thumbnail 2" class="img-fluid">
                    </div>
                    <div class="thumb-item mx-2" data-img="${prod.image}">
                        <img src="${prod.image}" alt="Thumbnail 3" class="img-fluid">
                    </div>
                    <div class="thumb-item mx-2" data-img="${prod.image}">
                        <img src="${prod.image}" alt="Thumbnail 4" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-5">
            <h3 class="mb-1">${prod.name}</h3>
            <div class="mb-2 text-muted small">SKU: TL001</div>
            <h4 class="text-primary mb-3">${prod.price}</h4>
            <p class="mb-3">${prod.description}</p>

            <div class="mb-3">
                <strong class="d-block mb-1">Production time</strong>
                <div class="text-muted small">Production time (excluding courier delivery): 7 working days</div>
            </div>

            <form class="product-customize" enctype="multipart/form-data">
                <div class="mb-3">
                    <label class="d-block mb-2">Color</label>
                    <div class="color-swatches d-flex flex-wrap">
                        <button type="button" class="swatch" data-color="Navy" style="background:#001f3f" title="Navy"></button>
                        <button type="button" class="swatch" data-color="Grey" style="background:#6c757d" title="Grey"></button>
                        <button type="button" class="swatch" data-color="White" style="background:#ffffff; border:1px solid #ddd" title="White"></button>
                        <button type="button" class="swatch" data-color="Maroon" style="background:#800000" title="Maroon"></button>
                        <button type="button" class="swatch" data-color="Black" style="background:#000000" title="Black"></button>
                        <button type="button" class="swatch" data-color="Royal Blue" style="background:#4169e1" title="Royal Blue"></button>
                        <button type="button" class="swatch" data-color="Green" style="background:#28a745" title="Green"></button>
                        <button type="button" class="swatch" data-color="Red" style="background:#dc3545" title="Red"></button>
                        <button type="button" class="swatch" data-color="Yellow" style="background:#ffc107" title="Yellow"></button>
                        <button type="button" class="swatch" data-color="Pink" style="background:#ff69b4" title="Pink"></button>
                    </div>
                    <input type="hidden" class="prod-color" value="">
                </div>

                <div class="mb-3">
                    <label>Size</label>
                    <select class="form-control mb-2 prod-size">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label>Enter Name for Embroidery (optional)</label>
                    <input type="text" class="form-control mb-2 prod-embroidery-name" placeholder="e.g. John Doe">
                </div>

                <div class="mb-3">
                    <label>Upload Logo for Embroidery (optional)</label>
                    <input type="file" class="form-control-file prod-logo-upload" accept="image/*">
                    <div class="small text-muted mt-1 prod-logo-filename"></div>
                </div>

                <div class="mb-3">
                    <label>Quantity</label>
                    <div class="input-group quantity" style="width:120px">
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-primary btn-minus" type="button"><i class="fa fa-minus"></i></button>
                        </div>
                        <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center prod-qty" value="1">
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-primary btn-plus" type="button"><i class="fa fa-plus"></i></button>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <button class="btn btn-primary btn-add-to-cart mr-2" type="button">Add to Cart</button>
                    <button class="btn btn-outline-dark btn-add-to-wishlist" type="button">Add to Wishlist</button>
                </div>
            </form>
        </div>
    </div>
</div>
`;

            var navbarBlock = R('.container-fluid.bg-dark.mb-30').first();
            if (navbarBlock.length) { navbarBlock.after(detailHtml); }
            else { R('body').prepend(detailHtml); }

            R(document).on('click', '.btn-add-to-wishlist', function (e) {
                e.preventDefault();
                // collect customization values if present
                var color = R('.prod-color').val() || (R('.swatch.active').data('color') || null);
                var size = R('.prod-size').val() || null;
                var embroidery = (R('.prod-embroidery-name').val() || '').trim();
                var logoInput = R('.prod-logo-upload')[0];
                var logoName = null;
                if (logoInput && logoInput.files && logoInput.files[0]) { logoName = logoInput.files[0].name; }
                var product = { id: prod.id || Date.now(), image: prod.image, name: prod.name, price: prod.price, description: prod.description, size: size, color: color, embroideryName: embroidery, logoName: logoName };
                addToWishlistItem(product);
                showToast('Product added to wishlist ❤️', 'success');
            });

            R(document).on('click', '.btn-add-to-cart', function (e) {
                e.preventDefault();
                var qty = parseInt(R('.prod-qty').val(), 10) || 1;
                var size = R('.prod-size').val() || null;
                // color may be stored in hidden input or as value on selected swatch
                var color = R('.prod-color').val() || (R('.swatch.active').data('color') || null);
                var embroidery = (R('.prod-embroidery-name').val() || '').trim();
                var logoInput = R('.prod-logo-upload')[0];
                var logoName = null;
                if (logoInput && logoInput.files && logoInput.files[0]) {
                    logoName = logoInput.files[0].name;
                }
                var product = { id: prod.id || Date.now(), image: prod.image, name: prod.name, price: prod.price, description: prod.description, size: size, color: color, quantity: qty, embroideryName: embroidery, logoName: logoName };
                addToCartItem(product);
                showToast('Added to cart', 'success');
                setTimeout(function () { window.location.href = 'cart.html'; }, 1000);
            });

            // Gallery thumbnail click handler
            R(document).on('click', '.thumb-item', function() {
                var thumb = R(this);
                var imgUrl = thumb.data('img');
                // Update active state
                thumb.siblings().removeClass('active');
                thumb.addClass('active');
                // Fade out main image, switch source, fade back in
                var mainImg = thumb.closest('.product-gallery').find('.main-img img');
                mainImg.fadeOut(200, function() {
                    mainImg.attr('src', imgUrl).fadeIn(200);
                });
            });

            // swatch click -> select color
            R(document).on('click', '.swatch', function () {
                var s = R(this);
                s.closest('.color-swatches').find('.swatch').removeClass('active');
                s.addClass('active');
                var color = s.data('color') || '';
                s.closest('form').find('.prod-color').val(color);
            });

            // show selected logo filename
            R(document).on('change', '.prod-logo-upload', function () {
                var input = R(this)[0];
                var holder = R(this).closest('form').find('.prod-logo-filename');
                if (input.files && input.files[0]) {
                    holder.text(input.files[0].name);
                } else {
                    holder.text('');
                }
            });
        });
    }

    // Render cart page dynamically
    if (window.location.pathname.indexOf('cart.html') !== -1 || window.location.pathname.indexOf('/cart.html') !== -1) {
        R(function () {
            var cart = getCart();
            var tbody = R('tbody.align-middle');
            if (!tbody.length) return;
            tbody.empty();
            if (cart.length === 0) { tbody.append('<tr><td colspan="5">Your cart is empty.</td></tr>'); return; }
            cart.forEach(function (it, idx) {
                // build customization details if present
                var details = [];
                if (it.size) details.push('Size: ' + it.size);
                if (it.color) details.push('Color: ' + it.color);
                if (it.embroideryName) details.push('Name: ' + it.embroideryName);
                if (it.logoName) details.push('Logo: ' + it.logoName);
                var detailsHtml = details.length ? '<div class="small text-muted mt-1">' + details.join(' | ') + '</div>' : '';

                var row = '<tr data-idx="' + idx + '">'
                    + '<td class="align-middle"><img src="' + it.image + '" alt="" style="width: 50px;"> ' + it.name + (it.size ? ' <small>(' + it.size + ')</small>' : '') + detailsHtml + '</td>'
                    + '<td class="align-middle">' + (it.price || '') + '</td>'
                    + '<td class="align-middle">'
                    + '<div class="input-group quantity mx-auto" style="width: 100px;">'
                    + '<div class="input-group-btn">'
                    + '<button class="btn btn-sm btn-primary btn-minus">'
                    + '<i class="fa fa-minus"></i>'
                    + '</button>'
                    + '</div>'
                    + '<input type="text" class="form-control form-control-sm bg-secondary border-0 text-center cart-qty" value="' + (it.quantity || 1) + '">'
                    + '<div class="input-group-btn">'
                    + '<button class="btn btn-sm btn-primary btn-plus">'
                    + '<i class="fa fa-plus"></i>'
                    + '</button>'
                    + '</div>'
                    + '</div>'
                    + '</td>'
                    + '<td class="align-middle">' + (it.price || '') + '</td>'
                    + '<td class="align-middle"><button class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></button></td>'
                    + '</tr>';
                tbody.append(row);
            });

            R(document).on('click', 'button.btn-remove', function () {
                var tr = R(this).closest('tr');
                var idx = parseInt(tr.data('idx'), 10);
                var cart = getCart();
                if (isFinite(idx)) {
                    cart.splice(idx, 1);
                    saveCart(cart);
                    updateCounters();
                    tr.remove();
                    setTimeout(function () { window.location.reload(); }, 200);
                }
            });
        });
    }

    // Render wishlist page dynamically
    if (window.location.pathname.indexOf('wishlist.html') !== -1 || window.location.pathname.indexOf('/wishlist.html') !== -1) {
        R(function () {
            var wl = getWishlist();
            var container = R('.wishlist-grid').first();
            
            if (!container.length) return;
            
            container.empty();
            
            if (wl.length === 0) {
                container.html('<div class="col-12 text-center py-5"><h4 class="text-muted">Your wishlist is empty</h4></div>');
                return;
            }

            wl.forEach(function (item, idx) {
                var card = R(`
                    <div class="wishlist-item" data-idx="${idx}">
                        <div class="product-img">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="product-info">
                            <h5 class="product-title">${item.name}</h5>
                            <div class="product-price">${item.price || ''}</div>
                            <div class="actions">
                                <button class="btn btn-cart btn-wl-add-to-cart">
                                    <i class="fa fa-shopping-cart mr-1"></i>Add to Cart
                                </button>
                                <button class="btn btn-remove btn-wl-remove">
                                    <i class="fa fa-trash mr-1"></i>Remove
                                </button>
                            </div>
                        </div>
                    </div>
                `);
                
                container.append(card);
            });

            // handlers
            R(document).on('click', '.btn-wl-remove', function () {
                var btn = R(this);
                var item = btn.closest('.wishlist-item');
                var idx = item.data('idx');
                var wl = getWishlist();
                
                // Animate item removal
                item.css('transition', 'all 0.3s ease')
                    .css('transform', 'translateX(100%)')
                    .css('opacity', '0');
                
                setTimeout(function() {
                    // Remove from storage and UI
                    wl.splice(idx, 1);
                    saveWishlist(wl);
                    updateCounters();
                    
                    item.remove();
                    
                    // Show empty message if no items left
                    if (wl.length === 0) {
                        R('.wishlist-grid').html('<div class="col-12 text-center py-5"><h4 class="text-muted">Your wishlist is empty</h4></div>');
                    }
                    
                    showToast('Item removed from wishlist', 'success');
                }, 300);
            });

            R(document).on('click', '.btn-wl-add-to-cart', function () {
                var btn = R(this);
                var item = btn.closest('.wishlist-item');
                var idx = item.data('idx');
                var wl = getWishlist();
                var it = wl[idx];
                
                if (it) {
                    // Add to cart
                    addToCartItem({ 
                        id: it.id || Date.now(), 
                        image: it.image, 
                        name: it.name, 
                        price: it.price, 
                        description: it.description, 
                        quantity: 1,
                        size: it.size || null,
                        color: it.color || null,
                        embroideryName: it.embroideryName || null,
                        logoName: it.logoName || null
                    });
                    
                    // Remove from wishlist with animation
                    item.css('transition', 'all 0.3s ease')
                        .css('transform', 'translateX(-100%)')
                        .css('opacity', '0');
                    
                    setTimeout(function() {
                        wl.splice(idx, 1);
                        saveWishlist(wl);
                        updateCounters();
                        item.remove();
                        
                        if (wl.length === 0) {
                            R('.wishlist-grid').html('<div class="col-12 text-center py-5"><h4 class="text-muted">Your wishlist is empty</h4></div>');
                        }
                        
                        showToast('Item added to cart', 'success');
                        setTimeout(function() {
                            window.location.href = 'cart.html';
                        }, 1000);
                    }, 300);
                }
            });
        });
    }

    // Init counters on load
    R(function () { updateCounters(); });

    // Helper: format currency as South African Rands
    function formatCurrency(num) {
        var n = parseFloat(num) || 0;
        return 'R ' + n.toFixed(2);
    }

    function parsePrice(str) {
        if (!str) return 0;
        try { return parseFloat(('' + str).replace(/[^0-9.]/g, '')) || 0; } catch (e) { return 0; }
    }

    // Render checkout summary from cart
    function renderCheckoutSummary() {
        var cart = getCart() || [];
        var container = R('#checkout-products');
        var totals = R('#checkout-totals');
        container.empty();
        totals.empty();

        if (!cart.length) {
            container.html('<p class="text-center text-muted">Your cart is empty.</p>');
            totals.html('<div class="d-flex justify-content-between"><strong>Total</strong><span>' + formatCurrency(0) + '</span></div>');
            R('.btn-yoco-pay').addClass('disabled').attr('aria-disabled', 'true');
            return;
        }

        var subtotal = 0;
        cart.forEach(function(it, idx) {
            var price = parsePrice(it.price);
            var qty = parseInt(it.quantity, 10) || 1;
            var lineTotal = price * qty;
            subtotal += lineTotal;

            var details = [];
            if (it.size) details.push(it.size);
            if (it.color) details.push(it.color);
            if (it.embroideryName) details.push('Embroidery: ' + it.embroideryName);

            var line = '<div class="d-flex justify-content-between mb-2"><div><strong>' + (it.name || 'Product') + '</strong><div class="small text-muted">' + (details.join(' | ') || '') + '</div></div><div>' + formatCurrency(lineTotal) + '</div></div>';
            container.append(line);
        });

        // delivery fee (flat rate)
        var deliveryFee = 50.00;
        var total = subtotal + deliveryFee;

        totals.append('<div class="d-flex justify-content-between"><h6>Subtotal</h6><h6>' + formatCurrency(subtotal) + '</h6></div>');
        totals.append('<div class="d-flex justify-content-between"><h6 class="font-weight-medium">Delivery Fee</h6><h6 class="font-weight-medium">' + formatCurrency(deliveryFee) + '</h6></div>');
        totals.append('<hr>');
        totals.append('<div class="d-flex justify-content-between mt-2"><h5>Total</h5><h5 id="checkout-total">' + formatCurrency(total) + '</h5></div>');

        // enable payment button
        R('.btn-yoco-pay').removeClass('disabled').removeAttr('aria-disabled');
    }

    // Show confirm modal with preloaded details
    R(document).on('click', '.btn-yoco-pay', function (e) {
        e.preventDefault();
        var cart = getCart() || [];
        if (!cart.length) { showToast('Your cart is empty', 'error'); return; }

        // collect billing fields (using classes added)
        var billing = {
            firstName: R('.billing-first').val() || '',
            lastName: R('.billing-last').val() || '',
            email: R('.billing-email').val() || '',
            phone: R('.billing-phone').val() || '',
            address1: R('.billing-address1').val() || '',
            address2: R('.billing-address2').val() || '',
            country: R('.billing-country').val() || 'South Africa',
            city: R('.billing-city').val() || '',
            province: R('.billing-province').val() || '',
            postal: R('.billing-postal').val() || ''
        };

        // compute totals same as render
        var subtotal = 0;
        cart.forEach(function(it){ subtotal += parsePrice(it.price) * (parseInt(it.quantity,10)||1); });
        var deliveryFee = 50.00;
        var total = subtotal + deliveryFee;

        // populate modal details
        var md = R('#yoco-confirm-details');
        md.empty();
        md.append('<p><strong>Customer:</strong> ' + (billing.firstName + ' ' + billing.lastName).trim() + '</p>');
        md.append('<p><strong>Email:</strong> ' + billing.email + '</p>');
        md.append('<p><strong>Phone:</strong> ' + billing.phone + '</p>');
        md.append('<p><strong>Address:</strong> ' + billing.address1 + ' ' + billing.address2 + ', ' + billing.city + ', ' + billing.province + ' - ' + billing.postal + '</p>');
        md.append('<p><strong>Total:</strong> ' + formatCurrency(total) + '</p>');

        // show modal
        R('#yoco-confirm-modal').modal('show');
    });

    // When user confirms in modal: store checkoutInfo, open Yoco in new tab with reference and simulate payment
    R(document).on('click', '.btn-confirm-yoco', function () {
        try {
            var cart = getCart() || [];
            var billing = {
                firstName: R('.billing-first').val() || '',
                lastName: R('.billing-last').val() || '',
                email: R('.billing-email').val() || '',
                phone: R('.billing-phone').val() || '',
                address1: R('.billing-address1').val() || '',
                address2: R('.billing-address2').val() || '',
                country: R('.billing-country').val() || 'South Africa',
                city: R('.billing-city').val() || '',
                province: R('.billing-province').val() || '',
                postal: R('.billing-postal').val() || ''
            };

            var subtotal = 0;
            cart.forEach(function(it){ subtotal += parsePrice(it.price) * (parseInt(it.quantity,10)||1); });
            var deliveryFee = 50.00;
            var total = subtotal + deliveryFee;

            var timestamp = Date.now();
            var reference = 'Order-' + timestamp;

            var checkoutInfo = {
                billing: billing,
                shipping: (R('#shipto').is(':checked') ? {
                    firstName: R('.shipping-first').val() || '',
                    lastName: R('.shipping-last').val() || '',
                    email: R('.shipping-email').val() || '',
                    phone: R('.shipping-phone').val() || '',
                    address1: R('.shipping-address1').val() || '',
                    address2: R('.shipping-address2').val() || '',
                    country: R('.shipping-country').val() || 'South Africa',
                    city: R('.shipping-city').val() || '',
                    province: R('.shipping-province').val() || '',
                    postal: R('.shipping-postal').val() || ''
                } : billing),
                cart: cart,
                subtotal: subtotal,
                deliveryFee: deliveryFee,
                total: total,
                paymentMethod: 'Yoco Online Payment',
                reference: reference,
                timestamp: timestamp
            };

            // save to localStorage for later backend pickup
            localStorage.setItem('checkoutInfo', JSON.stringify(checkoutInfo));

            // Close modal and open Yoco in new tab with reference param for simulation
            R('#yoco-confirm-modal').modal('hide');
            var yocoUrl = 'https://pay.yoco.com/UniformMidrand?reference=' + encodeURIComponent(reference);
            window.open(yocoUrl, '_blank', 'noopener');

            showToast('Opening Yoco in new tab...', 'success');

            // simulate payment success after 3 seconds
            setTimeout(function() {
                paymentSuccess(checkoutInfo);
            }, 3000);

        } catch (err) {
            console.error('Error during confirm & proceed', err);
            showToast('Unable to proceed to payment', 'error');
        }
    });

    // payment success handler (mock) - modular so backend can hook in later
    function paymentSuccess(checkoutInfo) {
        try {
            // prepare messages
            var orderTime = new Date(checkoutInfo.timestamp || Date.now());
            var productLines = [];
            (checkoutInfo.cart || []).forEach(function(it){
                var parts = [it.name || 'Product'];
                if (it.size) parts.push('Size: ' + it.size);
                if (it.color) parts.push('Color: ' + it.color);
                if (it.embroideryName) parts.push('Embroidery: ' + it.embroideryName);
                if (it.logoName) parts.push('Logo: ' + it.logoName);
                parts.push('Qty: ' + (it.quantity || 1));
                productLines.push(parts.join(' | '));
            });

            var emailBody = '';
            emailBody += 'Customer Name: ' + (checkoutInfo.billing.firstName || '') + ' ' + (checkoutInfo.billing.lastName || '') + '\n';
            emailBody += 'Email: ' + (checkoutInfo.billing.email || '') + '\n';
            emailBody += 'Phone: ' + (checkoutInfo.billing.phone || '') + '\n\n';
            emailBody += 'Billing Address:\n' + (checkoutInfo.billing.address1 || '') + ' ' + (checkoutInfo.billing.address2 || '') + ', ' + (checkoutInfo.billing.city || '') + ', ' + (checkoutInfo.billing.province || '') + ' - ' + (checkoutInfo.billing.postal || '') + '\n\n';
            emailBody += 'Products:\n' + (productLines.join('\n') || 'No items') + '\n\n';
            emailBody += 'Subtotal: ' + formatCurrency(checkoutInfo.subtotal) + '\n';
            emailBody += 'Delivery Fee: ' + formatCurrency(checkoutInfo.deliveryFee) + '\n';
            emailBody += 'Total Amount: ' + formatCurrency(checkoutInfo.total) + '\n';
            emailBody += 'Payment Method: ' + (checkoutInfo.paymentMethod || 'Yoco Online Payment') + '\n';
            emailBody += 'Reference: ' + (checkoutInfo.reference || '') + '\n';
            emailBody += 'Time: ' + orderTime.toString() + '\n';

            var whatsappMsg = 'New order received via Thabang Leruo Website.\n';
            whatsappMsg += 'Customer: ' + (checkoutInfo.billing.firstName || '') + ' ' + (checkoutInfo.billing.lastName || '') + '\n';
            whatsappMsg += 'Product(s): ' + (productLines.join('; ') || 'No items') + '\n';
            whatsappMsg += 'Total: ' + formatCurrency(checkoutInfo.total) + '\n';
            whatsappMsg += 'Payment Method: ' + (checkoutInfo.paymentMethod || 'Yoco Online Payment') + '\n';
            whatsappMsg += 'Reference: ' + (checkoutInfo.reference || '') + '\n';

            // Mock send
            console.log('--- MOCK EMAIL SEND (post-payment) ---');
            console.log('To: Sales@ThabangLeruo.co.za');
            console.log('Subject: New Order – Thabang Leruo Clothing');
            console.log('Body:\n' + emailBody);
            console.log('--- END MOCK EMAIL ---');

            console.log('--- MOCK WHATSAPP SEND (post-payment) ---');
            console.log('To: +27 61 411 5412');
            console.log('Message:\n' + whatsappMsg);
            console.log('--- END MOCK WHATSAPP ---');

            showToast('Payment confirmed — order sent to Sales@ThabangLeruo.co.za', 'success');
        } catch (e) {
            console.error('paymentSuccess error', e);
            showToast('Payment processed but notification failed', 'error');
        }
    }

    // If on checkout page, render summary on load
    if (window.location.pathname.indexOf('checkout.html') !== -1 || window.location.pathname.indexOf('/checkout.html') !== -1) {
        R(function () { renderCheckoutSummary(); });
    }

})(jQuery);

