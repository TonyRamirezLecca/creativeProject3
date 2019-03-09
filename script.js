$(document).ready(function() {


    $(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	if (wScroll <= 600) {
	    $(".dogImage").css({
		"transform" : "translate(0px, -"+ wScroll / 12 + "%)"
	    });
	}
    });



});

