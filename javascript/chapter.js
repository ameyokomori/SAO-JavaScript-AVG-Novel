$(document).ready(function () {
    console.log('Hello World!');

	// Animation
    $('.navigation').css('opacity', '1');
    $('.navigation a').css('opacity', '1');
    $('.dropdown-content a').css('opacity', '1');
    $('.navigation').fadeTo(2000, 0);
    $('.navigation a').fadeTo(2000, 0);

	// Assign id to every paragraphs with its index
    console.log(paragraphs);
    for(var i = 0; i < paragraphs.length; i++) {
        console.log(paragraphs[i]);
        $(paragraphs[i]).attr('id', 'p'+i);
    }

	// When mouse stop at the logo, main menu appear
    $('.navigation').mouseenter(function () {
        $('.navigation').fadeTo(300, 0.5);
        $('.navigation a').fadeTo(300, 1);

    });
    $('.navigation').mouseleave(function () {
        $('.navigation a').fadeTo(300, 0);
        $('.navigation').fadeTo(300, 0);

    });

	// Slide up paragraphs in order
    var pno = 0; // Current paragraph id
    $('.main-bg, .article').click(function () {
        if (pno < 0) {
            pno = 0;
        }
        if (pno <= paragraphs.length) {
            $('.article #p'+pno).slideUp();
            pno++;
        }
    });

	// Auto slide up paragraphs
    var control;
    $('.autoscroll').click(function () {
        if (click === 0) {
            click = 1;
            $('.autoscroll').css('background-color', 'rgba(255, 255, 0, 0.6)');

            if (speed === 5000) {
                $('.scrollspeed').css('background-color', 'rgba(255, 255, 0, 0.4)');
            }
            else if (speed === 3000) {
                $('.scrollspeed').css('background-color', 'rgba(255, 255, 0, 0.6)');
            }else if (speed === 1000) {
                $('.scrollspeed').css('background-color', 'rgba(255, 255, 0, 0.8)');
            }

            control = setInterval(function () {
                autoScroll(pno);
                pno++;
                if (pno > paragraphs.length) {
                    click = 0;
                    $('.dropdown-content a').css('background-color', 'rgba(1, 1, 1, 0.7)');
                    clearInterval(control);
                    alert('No more paragraph!')
                }
            }, speed);
        }
        else {
            click = 0;
            $('.dropdown-content a').css('background-color', 'rgba(1,1,1,0.7)');
            clearInterval(control);
        }
    });

	// Change the slide up time interval
    $('.scrollspeed').click(function () {
        scrollSpeed();
    });

	// Manually slide up paragraphs by click background 
	$('.previous').click(function () {
        click = 1;
        $('.autoscroll').click();
        if (pno <= paragraphs.length && pno >= 0) {
            $('.article #p'+(--pno)).slideDown();
        } else if (pno > paragraphs.length) {
            pno = paragraphs.length;
            $('.article #p'+(pno--)).slideDown();
        } else if (pno < 0) {
            alert('No previous paragraph!');
        }
    });

	// Show the full context
    $('.full').click(function () {
        click = 1;
        $('.autoscroll').click();
        if (fullClick === 0) {
            $('.article').fadeTo(300, 0);
            $('.full-article').fadeTo(300, 1);
            $('.full').css('background-color', 'rgba(1, 1, 1, 0.9)');
            fullClick++;
        }
        else {
            $('.article').fadeTo(300, 1);
            $('.full-article').fadeTo(300, 0);
            $('.full-article').css('display', 'none');
            $('.full').css('background-color', 'rgba(1, 1, 1, 0)');
            fullClick--;
        }
    });
});

var paragraphs = $('.article p');
var click = 0; // Control click times
var fullClick = 0;
var speed = 3000; // Slide up speed
var speedClick = 1

// Auto slide up function
// Element: pno (int): Current line number
function autoScroll(pno) {
    if (pno < 0) {
        pno = 0;
    }
    if (pno <= paragraphs.length) {
        $('.article #p'+pno).slideUp();
    }
}

// Change slide up speed function
function scrollSpeed() {
    if (speedClick === 1) {
        speed = 1000;
        speedClick++;
        $('.autoscroll').click();
        $('.scrollspeed').css('background-color', 'rgba(255, 255, 0, 0.6)');
        $('.autoscroll').click();

    }
    else if (speedClick === 2) {
        speed = 5000;
        speedClick++;
        $('.autoscroll').click();
        $('.scrollspeed').css('background-color', 'rgba(255, 255, 0, 0.8)');
        $('.autoscroll').click();
    }
    else if (speedClick === 3) {
        speed = 3000;
        speedClick = 1;
        $('.autoscroll').click();
        $('.scrollspeed').css('background-color', 'rgba(255, 255, 0, 0.4)');
        $('.autoscroll').click();
    }
}
