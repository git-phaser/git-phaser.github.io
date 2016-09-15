/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // Email invitation
    var form = $('#ajax-invite');
    var email = $('#email-input');
    var button = $('#ajax-button');
    var invite = $('#invite-text');
    var success = $('#success-icon');
    var failure = $('#failure-icon');
    var successPlaceholder = "Thanks! We'll send you an invitation soon.";
    var failurePlaceholder = "There was a problem. Try again?";

    // Resets the input when someone types in it.
    $(email).keydown(function(event){
        button.removeClass('btn-success');
        button.removeClass('btn-danger');
        success.hide();
        failure.hide();
        button.addClass('bg-blue');
        invite.show();
        email.attr('placeholder', 'Email');
    })

    // Submits the email address. Handles success and failure.
    $(form).submit(function(event) {
        event.preventDefault();

        // Post
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: $(form).serialize()
        })

        // Success
        .done(function(res){
            button.removeClass('bg-blue');
            button.addClass('btn-success');
            button.blur();
            invite.hide();
            success.show();
            email.val('');
            email.attr('placeholder', successPlaceholder);
        })

        // Failure
        .fail(function(res){
            button.removeClass('bg-blue');
            button.addClass('btn-danger');
            button.blur();
            invite.hide();
            failure.show();
            email.val('');
            email.attr('placeholder', failurePlaceholder);
        });
    });



    // Slick Slider init
    $(document).ready(function(){

        $('.screenshots').slick({
            dots: true,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

})(jQuery); // End of use strict
