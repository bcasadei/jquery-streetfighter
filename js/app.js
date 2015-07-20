$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        //play hadouken sound
        playHadouken();
        //show hadouken and animate it
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1040px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '540px');
            }
        );

    })
    .mouseup(function() {
            //ryu goes back to .ryu-ready image
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    $(window).keydown(function(event) {
        if (event.which == 88) {
            //show ryu cool pose
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
            $('.ryu').off( "mouseenter")
            .off( "mouseleave");
            //How do I deal with the mouseenter event when the keydown event is happening?
            /* $('.ryu').mouseenter(function() {
                console.log('x key down while mouse entered');
                event.stopImmediatePropagation();
            })
            .mouseleave(function() {
                console.log('x key down while mouse left');
                event.stopImmediatePropagation();
                }); */
        }
    });
    $(window).keyup(function(event) {
        if (event.which == 88) {
            //ryu goes back to still pose
            $('.ryu-cool').hide();
            $('.ryu-still').show();
            $('.ryu').mouseenter(function() {
                $('.ryu-still').hide();
                $('.ryu-ready').show();
            })
            .mouseleave(function() {
                $('.ryu-ready').hide();
                $('.ryu-still').show();
                });
        }
    });
});
function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
