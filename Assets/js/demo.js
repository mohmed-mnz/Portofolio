$(document).ready(function() {
    // Listen for the scroll event
    $(window).scroll(function() {
        // Get the current scroll position
        var scrollPosition = $(this).scrollTop();

        // Set the threshold at which the header background should change
        var scrollThreshold = 50; // Adjust as needed

        // Check if the scroll position is below the threshold
        if (scrollPosition > scrollThreshold) {
            // Add a class to the header to change its background color
            $("header").addClass("scrolled");
        } else {
            // Remove the class when the scroll position is back to the top
            $("header").removeClass("scrolled");
        }
    });
});
