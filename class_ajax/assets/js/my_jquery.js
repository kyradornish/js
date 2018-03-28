/*********************************************/
/* Simplified AJAX GET request using .load() */
/*********************************************/

// $('#load').click( () => {
//     $('#load').css("display", "none");
//     $('#ajax').load("../../header.html")
// }); 
//we put this inside header.js

/**********************************/
/* READLISTIC AJAX FUNCTIONALITY */
/*********************************/
//$.get(url, data, callback)

var data = {
    "name": "Derek",
    "occupation": "Software Developer"
};

function callback(res) {
    var res = data;
    $("#name").text(res.name);
    $("#occupation").text(res.occupation);
}

$.get("./index.html", data, callback)