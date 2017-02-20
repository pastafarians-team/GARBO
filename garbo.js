function myFunction() {
    var x = document.getElementById("nav-menu");
    if (x.className === "nav-menu") {
        x.className += " responsive";
    } else {
        x.className = "nav-menu";
    }
}

// WHY-US toggle

$(document).ready(function(){
    $(".why-us-photo-1").hover(function(){
        $(".why-us-sub-1").slideToggle(1000);
    });
});

$(document).ready(function(){
    $(".why-us-photo-2").hover(function(){
        $(".why-us-sub-2").slideToggle(1000);
    });
});

$(document).ready(function(){
    $(".why-us-photo-3").hover(function(){
        $(".why-us-sub-3").slideToggle(1000);
    });
});

$(document).ready(function(){
    $(".why-us-photo-4").hover(function(){
        $(".why-us-sub-4").slideToggle(1000);
    });
});


(function($) {
    "use strict";

    // scrolling morbido
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    

})(jQuery); 