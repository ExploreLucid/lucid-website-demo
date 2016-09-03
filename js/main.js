// Handles email button UI animation

$("#emailSentResult").hide();

$("#subscribe").submit(function() {
    var email = $("#email").val();
    sendEmailToFirebase(email);
	$(".email-btn, .email-box").fadeOut(500, function() {
		$(".call-to-action").css("margin-bottom",".8em");
		$("#emailSentResult").fadeIn();
	});
    return false;
});


// Sends email data to Firebase db
function sendEmailToFirebase(email) {
    var subscribeRef = firebase.database().ref("/subscriberEmails");
    subscribeRef.push(email);
}

// Adds scrolling functionality

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

