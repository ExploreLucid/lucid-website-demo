$("#emailSentResult").hide();

$(document).ready( function() {

    // Ensures sizing is proper 
    function fixWidth() {

    }

    function fixHeight() {

    }

    // Handles email button UI animation
    $("#subscribe").submit(function() {
        var email = $("#email").val();
        sendEmailToFirebase(email);
    	$(".email-btn, .email-box").fadeOut(500, function() {
    		$(".call-to-action").css("margin-bottom",".8em");
    		$("#emailSentResult").fadeIn();
    	});
        return false;
    });

    // Adds Coming Soon sign to Navbar links
    $(".coming-soon").click(function(event) {
        var ref = $(this);
        var prevNavLink = $(this).text();
        var oldColor = $(this).css("color");
        var cssChanges = {
            "color" : "#aed4af",
            "margin-top": "1em" 
        };

        var oldCSS = {
            "color": oldColor,
            "margin-right": "1.6em"
        }

        $(this).html("Coming Soon!");
        $(this).css(cssChanges);
        setTimeout(function() {
            ref.html(prevNavLink);
            ref.css(oldCSS);
        }, 1000);
    });

    // Sends email data to Firebase db
    function sendEmailToFirebase(email) {
        var subscribeRef = firebase.database().ref("/subscriberEmails");
        subscribeRef.push(email);
    }

});

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

