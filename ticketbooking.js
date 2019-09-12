$(function () {
    $('#submit').click(function () {
        let error = 0;
        const name = $('#name');
        const street = $('#street');
        const state = $('#state');
        const zipcode = $('#zipcode');
        const seats = $('#seats');
        const taxi = $("input[name='taxi']:checked");
        const extras = $("input[name='extras']:checked");
        const instruction = $('#instruction');

       

        if ($('#error').text() !== '') {
            $('#error').text('');
            error = 0;
        }


        if (/[a-z]{1}/.test(name.val()) != true) {
            error++;
            $('#error').append('You must enter the name<br/>');
            name.css('background-color','pink');
        }

        if (street.val() == '') {
            $('#error').append('You must enter the street<br/>');
            error++;
            street.css('background-color','pink');
        }

        if (state.val() == '') {
            $('#error').append('You must enter the state<br/>');
            error++;
        }

        if (/\d{5}/.test(zipcode.val()) != true) {
            $('#error').append('You must enter valid zip code<br/>');
            error++;
            zipcode.css('background-color','pink');
        }

        if (seats.val() == '') {
            $('#error').append('You must enter the seats<br/>');
            error++;
            seats.css('background-color','pink');
        }

        if (parseInt(seats.val()) <= 0 || parseInt(seats.val()) > 200) {
            $('#error').append('You can not book 0 or more than 200<br/>');
            error++;
            seats.css('background-color','pink');
        }


        if (taxi.val() == undefined) {
            $('#error').append('You must select a taxi<br/>');
            error++;
        }

        if (extras.val() == undefined) {
            $('#error').append('You must select one extra<br/>');
            error++;
        }

        if (error>0) {
            $('form').submit(function (e) {
                e.preventDefault();
            });
        }else{
            $('form').unbind().submit();

        }
    




















    })
});