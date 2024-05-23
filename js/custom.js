$(document).ready(function() {
    $('#color-select').change(function() {
        var selectedOption = $(this).children("option:selected").val();
        if (selectedOption === "black") {
            $('.carousel img').eq(0).attr('src', 'Shopimg/hompage/black-pppp.jpeg');
            $('.carousel img').eq(1).attr('src', 'Shopimg/hompage/black-pp.jpeg');
            $('.carousel img').eq(2).attr('src', 'Shopimg/hompage/black.jpeg');
        } else {
            $('.carousel img').eq(0).attr('src', 'Shopimg/hompage/white-p.jpeg');
            $('.carousel img').eq(1).attr('src', 'Shopimg/hompage/white-pp.jpeg');
            $('.carousel img').eq(2).attr('src', 'Shopimg/hompage/white.jpeg');
        }
    });

    $('#color-select-two').change(function() {
        var selectedOption2 = $(this).children("option:selected").val().toLowerCase();
        if (selectedOption2 === "blue") {
            $('.carousel.itemTwo img').eq(0).attr('src', 'Shopimg/hompage/women-blue-ajax1.jpeg');
            $('.carousel.itemTwo img').eq(1).attr('src', 'Shopimg/hompage/women-blue-ajax2.jpeg');
        } else if (selectedOption2 === "green") {
            $('.carousel.itemTwo img').eq(0).attr('src', 'Shopimg/hompage/women-green-ajax1.jpeg');
            $('.carousel.itemTwo img').eq(1).attr('src', 'Shopimg/hompage/women-green-ajax2.jpeg');
        } else {
            $('.carousel.itemTwo img').eq(0).attr('src', 'Shopimg/hompage/women-blue-ajax1.jpeg');
            $('.carousel.itemTwo img').eq(1).attr('src', 'Shopimg/hompage/women-blue-ajax2.jpeg');
        }
    });

    $('#color-select-three').change(function() {
        var selectedOption3 = $(this).children("option:selected").val().toLowerCase();
        if (selectedOption3 === "white") {
            $('.carousel.itemThree img').eq(0).attr('src', 'Shopimg/hompage/women-dress-ajax-white1.jpeg');
            $('.carousel.itemThree img').eq(1).attr('src', 'Shopimg/hompage/women-dress-ajax-white2.jpeg');
            $('.carousel.itemThree img').eq(2).attr('src', 'Shopimg/hompage/women-dress-ajax-white3.jpeg');
        } else if (selectedOption3 === "sand") {
            $('.carousel.itemThree img').eq(0).attr('src', 'Shopimg/hompage/women-dress-ajax-sand-1.jpeg');
            $('.carousel.itemThree img').eq(1).attr('src', 'Shopimg/hompage/women-dress-ajax-sand-2.jpeg');
            $('.carousel.itemThree img').eq(2).attr('src', 'Shopimg/hompage/women-dress-ajax-sand-3.jpeg');
        } else {
            $('.carousel.itemThree img').eq(0).attr('src', 'Shopimg/hompage/women-dress-ajax-white1.jpeg');
            $('.carousel.itemThree img').eq(1).attr('src', 'Shopimg/hompage/women-dress-ajax-white2.jpeg');
            $('.carousel.itemThree img').eq(2).attr('src', 'Shopimg/hompage/women-dress-ajax-white3.jpeg');
        }
    });

    $('#color-select-four').change(function() {
        var selectedOption4 = $(this).children("option:selected").val().toLowerCase();
        if (selectedOption4 === "pink") {
            $('.carousel.itemFour img').eq(0).attr('src', 'Shopimg/hompage/men-cloths-pink-ajax2.jpeg');
            $('.carousel.itemFour img').eq(1).attr('src', 'Shopimg/hompage/men-cloths-pink-ajax1.jpeg');
            $('.carousel.itemFour img').eq(2).attr('src', 'Shopimg/hompage/men-cloths-pink-ajax3.jpeg');
        } else if (selectedOption4 === "blue") {
            $('.carousel.itemFour img').eq(0).attr('src', 'Shopimg/hompage/men-cloths-blue-ajax1.jpeg');
            $('.carousel.itemFour img').eq(1).attr('src', 'Shopimg/hompage/men-cloths-blue-ajax2.jpeg');
            $('.carousel.itemFour img').eq(2).attr('src', 'Shopimg/hompage/men-cloths-blue-ajax3.jpeg');
        } else {
            $('.carousel.itemFour img').eq(0).attr('src', 'Shopimg/hompage/men-cloths-pink-ajax2.jpeg');
            $('.carousel.itemFour img').eq(1).attr('src', 'Shopimg/hompage/men-cloths-pink-ajax1.jpeg');
            $('.carousel.itemFour img').eq(2).attr('src', 'Shopimg/hompage/men-cloths-pink-ajax3.jpeg');
        }
    });

    $('#color-select-five').change(function() {
        var selectedOption5 = $(this).children("option:selected").val().toLowerCase();
        if (selectedOption5 === "black") {
            $('.carousel.itemFive img').eq(0).attr('src', 'Shopimg/hompage/men-cloths-black-ajax1.jpeg');
            $('.carousel.itemFive img').eq(1).attr('src', 'Shopimg/hompage/men-cloths-black-ajax2.jpeg');
            $('.carousel.itemFive img').eq(2).attr('src', 'Shopimg/hompage/men-cloths-black-ajax3.jpeg');
        } else if (selectedOption5 === "brown") {
            $('.carousel.itemFive img').eq(0).attr('src', 'Shopimg/hompage/men-cloths-brown-ajax1.jpeg');
            $('.carousel.itemFive img').eq(1).attr('src', 'Shopimg/hompage/men-cloths-brown-ajax2.jpeg');
            $('.carousel.itemFive img').eq(2).attr('src', 'Shopimg/hompage/men-cloths-brown-ajax3.jpeg');
        } else {
            $('.carousel.itemFive img').eq(0).attr('src', 'Shopimg/hompage/men-cloths-black-ajax1.jpeg');
            $('.carousel.itemFive img').eq(1).attr('src', 'Shopimg/hompage/men-cloths-black-ajax2.jpeg');
            $('.carousel.itemFive img').eq(2).attr('src', 'Shopimg/hompage/men-cloths-black-ajax3.jpeg');
        }
    });
    $('#color-select-six').change(function() {
        var selectedOption6 = $(this).children("option:selected").val().toLowerCase();
        if (selectedOption6 === "brown") {

    
            $('.carousel.itemSix img').eq(0).attr('src', 'Shopimg/hompage/men-cloths-brown2-ajax1.jpeg');
            $('.carousel.itemSix img').eq(1).attr('src', 'Shopimg/hompage/men-cloths-brown2-ajax2.jpeg');
            $('.carousel.itemSix img').eq(2).attr('src', 'Shopimg/hompage/men-cloths-brown2-ajax3.jpeg');
        } else if (selectedOption6 === "white") {

            $('.carousel.itemSix img').eq(0).attr('src', 'Shopimg/hompage/men-cloths-white-ajax1.jpeg');
            $('.carousel.itemSix img').eq(1).attr('src', 'Shopimg/hompage/men-cloths-white-ajax2.jpeg');
            $('.carousel.itemSix img').eq(2).attr('src', 'Shopimg/hompage/men-cloths-white-ajax3.jpeg');
        } else {
            $('.carousel.itemSix img').eq(0).attr('src', 'Shopimg/hompage/men-cloths-brown2-ajax1.jpeg');
            $('.carousel.itemSix img').eq(1).attr('src', 'Shopimg/hompage/men-cloths-brown2-ajax2.jpeg');
            $('.carousel.itemSix img').eq(2).attr('src', 'Shopimg/hompage/men-cloths-brown2-ajax3.jpeg');
        }
    });    
  
    $("#btnAdd").click(function() {
        var $this = $(this);
        // Change button text to "Added"
        $this.text("Item Added");
        // Add a class to the button for styling
        $this.addClass("added");
        // Create the alert message
        var $alert = $('<div class="alert"><h5>Item added to the cart</h5><a href="page-500.html" class="view-card">VIEW CART</a></div>');
        // Append the alert to the alert container
        $(".alert-container").append($alert);
        // Fade out the alert after 3 seconds
        setTimeout(function() {
            $alert.fadeOut("slow", function() {
                $(this).remove();
            });
            // Change button text back to "Add to cart"
            $this.text("Add to cart");
            // Remove the "added" class from the button
            $this.removeClass("added");
        }, 6000);
    });
    
    // View Cart link click event
    $(document).on("click", ".view-card", function(e) {
        e.preventDefault();
        // Redirect to the specified page
        window.location.href = $(this).attr("href");
    });

    // Plus and minus button functionality
    $(".plus").click(function() {
        var $input = $(this).prev('.qty');
        var currentValue = parseInt($input.val());
        $input.val(currentValue + 1);
    });

    $(".minus").click(function() {
        var $input = $(this).next('.qty');
        var currentValue = parseInt($input.val());
        if (currentValue > 1) {
            $input.val(currentValue - 1);
        }
    });
    
});
