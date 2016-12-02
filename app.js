// Make sure HTML is loaded
$(document).ready(function() {

    // Give us an alert to ensure that everything is set up
    // alert("HTML loaded!");

    $("#search-button").on("click", function() {
        // alert("Button clicked!");
        // Call the performSearch function with the BASE url endpoint
        //Get the form value via the .val() jQuery function (look up the documentation on jquery.com)

        var userSearch = $("#search-query").val();

        performSearch("https://api.spotify.com/v1/search", userSearch);

        // BONUS: Clear the user input after the search is complete
        $("#search-query").val("");
    });

});
