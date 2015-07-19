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
        playHadouken();
        //play hadouken sound
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
        //show hadouken and animate it
    })
    .mouseup(function() {
        console.log('mouse up');
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        //ryu goes back to .ryu-ready image
    });
});
function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}