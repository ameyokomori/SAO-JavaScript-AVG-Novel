$(document).ready(function () {
    console.log('Hello World!');

	// Animation
    $('.navigation').fadeTo(1000, 1);
    $('.navigation a').fadeTo(1000, 1);

    setTimeout(function() {$('.chapter-chapter1').fadeTo(1000, 1);},500);
    setTimeout(function() {$('.chapter-chapter2').fadeTo(1000, 1);},700);
    setTimeout(function() {$('.chapter-chapter3').fadeTo(1000, 1);},900);
    setTimeout(function() {$('.chapter-chapter4').fadeTo(1000, 1);},1100);

    setTimeout(function() {$('.navigation a').fadeTo(1000, 0);},2000);

	// When mouse stop at the logo, main menu appear
    $('.navigation .header img').mouseenter(function () {
        //$('.navigation a').css('visibility', 'visible');
        $('.navigation a').fadeTo(500, 1);

    });
    $('.navigation').mouseleave(function () {
        $('.navigation a').fadeTo(500, 0);
    });

    $('.about').click(function () {
        alert('Weiye Zhao\n44612975\n21-5-2017');
    });
});