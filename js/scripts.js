//    JQUERY TO ACTIVATE THE CAROUSEL BUTTONS TO SET THE TIMER
$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });

    // WHAT HAPPENS WHEN THE BUTTONS IS CLICKED
    $('#carouselButton').on( "click", function() {
        // ADDING CONDITIONAL STATEMENT TO TOGGLE THE BUTTON OFF AND ON 
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } 
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause')
        }
    });
    
    // TOGGLE THE LOGIN AND RESERVE BUTTONS
    $("#loginModalToggle").on('click', function () {
        $("#loginModal").modal('toggle')
    })
    $("#reserveModalToggle").on('click', function() {
        $("#reserve-form").modal('toggle')
    });
});