var performSearch;

document.addEventListener("DOMContentLoaded", function() {

    var songTemplateSource = document
        .getElementById("song-template")
        .innerHTML;

    var songTemplate = Handlebars.compile(songTemplateSource);

    performSearch = function(endpoint, searchQuery) {
        var oReq = new XMLHttpRequest();

        oReq.addEventListener("load", function() {
            document
                .getElementById("search-query")
                .value = "";

            var tracks = JSON.parse(this.responseText).tracks.items;

            for (var i = 0; i < tracks.length; i++) {
                document
                    .getElementById("song-container")
                    .innerHTML += songTemplate(tracks[i]);
            }
        });

        oReq.open("GET", endpoint + "?type=track&q=" + searchQuery);

        oReq.send();
    }

});
