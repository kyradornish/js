// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest();

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://api.flickr.com/services/rest/', true);

// request.onload = function () {
//     // Begin accessing JSON data here
//     var data = JSON.parse(this.responseText);

//     data.forEach(photo => {
//         // Log each movie's title
//         console.log(photo.page);
//     });
// }

// // Send request
// request.send();


$('#photo_search').submit(evt => {
    evt.preventDefault();
    var searchTag = $('#photo_tag').val();
    var url = 'https://api.flickr.com/services/rest/';
    var data = {
        method: 'flickr.photos.search',
        api_key: '090d96fe7eab36a8c545e17efee8de1b', 
        text: searchTag,
        format: 'json',
        nojsoncallback: '1',
    };

    function showResults(data) {
        var HTML = ''
        for (i=0; i<data.photos.photo.length; i++) {
            HTML += "<img src='https://farm" + data.photos.photo[i].farm + ".staticflickr.com/" + data.photos.photo[i].server + "/" + data.photos.photo[i].id + "_" + data.photos.photo[i].secret + ".jpg' class='photos'>" 
        };
        $("#photo_results").html(HTML);
    };
    $.get(url, data, showResults);
});