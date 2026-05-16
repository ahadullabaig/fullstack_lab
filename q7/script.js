$(document).ready(function() {
    let currentRating = 0;

    $('.star').on('mouseenter', function() {
        highlight($(this).data('value'), 'hovered');
    });

    $('.star').on('mouseleave', function() {
        $('.star').removeClass('hovered');
    });

    $('.star').on('click', function() {
        currentRating = $(this).data('value');
        highlight(currentRating, 'selected');
        $('#rating-message').text('You rated this ' + currentRating + ' stars!');
    });

    $('#reset-btn').on('click', function() {
        currentRating = 0;
        $('.star').removeClass('selected hovered');
        $('#rating-message').text('Click a star to rate!');
    });

    function highlight(value, className) {
        $('.star').removeClass(className);
        $('.star').each(function() {
            if ($(this).data('value') <= value) {
                $(this).addClass(className);
            }
        });
    }
});
