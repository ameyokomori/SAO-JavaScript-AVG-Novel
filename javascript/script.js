$(document).ready(function () {
	console.log('Hello World!');
	
	// Animation
    $('.main-catch-right').fadeTo(1500, 1);
    setTimeout(function() {$('.main-catch-left').fadeTo(1500, 1);},1000);
    setTimeout(function() {
        $('.navigation').fadeTo(1500, 1);
        $('.reading').fadeTo(1500, 0.7);
        $('.navigation a').fadeTo(1500, 1);
    },2000);
    setTimeout(function() {
        $('.navigation a').fadeTo(1000, 0);
    }, 2500);

	// When mouse stop at the logo, main menu appear
    $('.navigation .header img').mouseenter(function () {
        $('.navigation a').fadeTo(300, 1);

    });
    $('.navigation').mouseleave(function () {
        $('.navigation a').fadeTo(300, 0);

    });

	// Breathing effect of reading button
    for (var i = 0; i < 300; i++) {
        $('.reading').fadeTo(2000, 0.7);
        $('.reading').fadeTo(1000, 0.3);
    }

	// My info
    $('.about').click(function () {
        alert('Weiye Zhao\n44612975\n21-5-2017');
    });
});