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


    // Product Quantity
    R('.quantity button').on('click', function () {
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
    
})(jQuery);

