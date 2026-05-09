$(document).ready(function() {
    let currentRating = 0;

    // 1. Hover Effect: Highlight stars up to the one being hovered
    $('.star').on('mouseenter', function() {
        let hoverValue = $(this).data('value');
        highlightStars(hoverValue, 'hovered');
    });

    // 2. Remove Hover Effect when mouse leaves the star area
    $('.star').on('mouseleave', function() {
        $('.star').removeClass('hovered');
    });

    // 3. Click Event: Set the permanent rating
    $('.star').on('click', function() {
        currentRating = $(this).data('value');
        highlightStars(currentRating, 'selected');
        $('#rating-message').text("You rated this " + currentRating + " stars!");
    });

    // 4. Reset Button
    $('#reset-btn').on('click', function() {
        currentRating = 0;
        $('.star').removeClass('selected hovered');
        $('#rating-message').text("Click a star to rate!");
    });

    // Helper function to fill stars
    function highlightStars(value, className) {
        $('.star').removeClass(className);
        $('.star').each(function() {
            if ($(this).data('value') <= value) {
                $(this).addClass(className);
            }
        });
    }
});
