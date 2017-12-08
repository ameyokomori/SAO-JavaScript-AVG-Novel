$(document).ready(function () {
    console.log('Hello World!');

	// Animation
    $('.navigation').fadeTo(1000, 1);
    setTimeout(function() {$('.character-heads').fadeTo(1000, 1);},500);
    setTimeout(function() {$('.character-wrapper').fadeTo(1000, 1);},1000);

	// When mouse stop at the logo, main menu appear
    $('.navigation .header img').mouseenter(function () {
        $('.navigation a').css('visibility', 'visible');
        $('.character .character-heads').fadeTo(300, 0.1);
        $('.character .character-heads').css('z-index', '0');
        $('.navigation a').fadeIn();

    });
    $('.navigation').mouseleave(function () {
        $('.navigation a').fadeOut();
        $('.character .character-heads').fadeTo(300, 1);
        $('.character .character-heads').css('z-index', '100');

    });

    // When mouse stop at the someone's icon, its info appears
    $('.character-head').mouseenter(function () {
        var headIndex = $(this).index() + 1;
        $(this).addClass('character-head-active');
        $('.character-plot').removeClass('character-info-active');
        $('.character-info:nth-child('+headIndex+')').addClass('character-info-active');
    });

    $('.character-head').mouseleave(function () {
        var headIndex = $(this).index() + 1;
        $(this).removeClass('character-head-active');
        $('.character-info:nth-child('+headIndex+')').removeClass('character-info-active');
        $('.character-plot').addClass('character-info-active');
    });

    $('.about').click(function () {
        alert('Weiye Zhao\n44612975\n21-5-2017');
    });
});