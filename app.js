$(function() {

    // HEADER
    let header = $("#header");
    let home = $("#home");
    let homeHeight = home.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos , homeHeight)

    $(window).on("scroll resize" , function() {
        homeHeight = home.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos , homeHeight);
    });

    function checkScroll() {
        if( scrollPos > homeHeight ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // SMOOTH SCROLL
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockId = $(this).data("scroll");
        let elementOffset = $(blockId).offset().top;

        nav.removeClass("show");

        $("html,body").animate({
            scrollTop: elementOffset - 30
        }, 600);
    });

    // nav toggle
    let nav = $("#nav");
    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });
    


});