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

$('.page-scroll').hover(function() {
    $('a', $(this).closest('.page-scroll')).css('text-decoration', 'underline');
	}, function() {
    $('a', $(this).closest('.page-scroll')).css('text-decoration', 'none');
});

//*** adding hamburger button
$('.hamburger').on('click',function(event){
	showMenu();
});
$('.menu .page-scroll').on('click',function(event){
	showMenu();
});

function showBurger(){
	if ((/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)) {
    	$('.nav .page-scroll').hide();
    	$('.hamburger').show();
	}
    else if (window.innerWidth >= 750){
    	$('.menu').hide();
		$('.hamburger').hide();
		$('.nav .page-scroll').show();
	}
}
function showMenu(){
	$( ".menu" ).animate({
    	height: "toggle"
  	}, 500, function() {
    // Animation complete.
  	});
}
//  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent
window.onresize = function() {
    showBurger();
}
$( window ).preLoad(function() {
  	showBurger();
});


//*** For the job descriptions
/* WROTE A LOT OF MESSY CODE HERE = REFACTOR IF YOU HAVE TIME */

function showCareersText1() {
	var applyWindow = $('#applyWindow'); // the application popup
	var jobDescSection = $('#hideAfterApply'); // the job descriptions
	var careersText1 = $('.careersText1');
	var careersText2 = $('.careersText2');
	var careersText3 = $('.careersText3');
	if (jobDescSection.is($('.hidden'))) {
		closeTempApplyWindow();				//TODO: change back to "closeApplyWindow();" after setting up email
	}

	careersText2.addClass('hidden');
	careersText3.addClass('hidden');
	careersText1.removeClass('hidden');

}


function showCareersText2() {
	var applyWindow = $('#applyWindow'); // the application popup
	var jobDescSection = $('#hideAfterApply'); // the job descriptions
	var careersText1 = $('.careersText1');
	var careersText2 = $('.careersText2');
	var careersText3 = $('.careersText3');
	if (jobDescSection.is($('.hidden'))) {
		closeTempApplyWindow();				//TODO: change back to "closeApplyWindow();" after setting up email
	}
	careersText3.addClass('hidden');
	careersText1.addClass('hidden');
	careersText2.removeClass('hidden');
}

function showCareersText3() {
	var careersText1 = $('.careersText1');
	var careersText2 = $('.careersText2');
	var careersText3 = $('.careersText3');
	var applyWindow = $('#applyWindow'); // the application popup
	var jobDescSection = $('#hideAfterApply'); // the job descriptions
	if (jobDescSection.is($('.hidden'))) {
		closeTempApplyWindow();				//TODO: change back to "closeApplyWindow();" after setting up email
	}

	careersText2.addClass('hidden');
	careersText1.addClass('hidden');
	careersText3.removeClass('hidden');
}

//*** For opening the applyWindow 

function openApplyWindow() {
	var applyWindow = $('#applyWindow'); // the application popup
	var jobDescSection = $('#hideAfterApply'); // the job descriptions
	applyWindow.removeClass('hidden');
	jobDescSection.addClass('hidden');
}

function closeApplyWindow() {
	var applyWindow = $('#applyWindow'); // the application popup
	var jobDescSection = $('#hideAfterApply'); // the job descriptions
	applyWindow.addClass('hidden');
	jobDescSection.removeClass('hidden');
}


//For opening the tempApplyWindow until email settings are set up
//TODO: delete tempApplyWindow after email is set up
function openTempApplyWindow() {
	var tempApplyWindow = $('#tempApplyWindow'); // the application popup
	var jobDescSection = $('#hideAfterApply'); // the job descriptions
	tempApplyWindow.removeClass('hidden');
	jobDescSection.addClass('hidden');
}

function closeTempApplyWindow() {
	var tempApplyWindow = $('#tempApplyWindow'); // the application popup
	var jobDescSection = $('#hideAfterApply'); // the job descriptions
	tempApplyWindow.addClass('hidden');
	jobDescSection.removeClass('hidden');
}
