$(function () {

    $('.boundary').mouseover(function () {
        if (!$('.boundary1').hasClass('youlose')) {
            $('.boundary').addClass('youlose');
            $('#status').text('You Lose!').css('color', 'red');
        }
    });

    $('#start').click(function () {
        $('.boundary').removeClass('youlose');
        $('#status').text('Game started!').css('color', 'black');
    });

    $('#end').mouseover(function () {
        if (!$('.boundary').hasClass('youlose')) {
            $('#status').text('You Win!').css('color', 'green');
        }
    });

    $('#maze').mouseleave(function () {
        $('.boundary').addClass('youlose');
        $('#status').text('You Lose!').css('color', 'red');
    });






})