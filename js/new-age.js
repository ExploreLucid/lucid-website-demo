(function($) {
    "use strict"; // Start of use strict
    
    // Handles scrolling down after clicking on page-down arrow button
    $(".page-scroll").on('click', function(e) {
       // prevent default anchor click behavior
       e.preventDefault();

       // store hash
       var hash = this.hash;

       // animate
       $('body').animate({
           scrollTop: $(hash).offset().top
         }, 1000, function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = hash;
         });

    });

})(jQuery); // End of use strict

