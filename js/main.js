// Handles email button and email

$("#emailSentResult").hide();

$(".email-btn").click(function() {
	$(".email-btn, .email-box").fadeOut(500, function() {
		$("#emailSentResult").fadeIn();
	});
});


//*** Adds scrolling functionality

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

