/*< li class = "list-group-item" > New < span class = "badge" > 12 < /span></li >*/

// $.getJSON(url, callback)

var url = "./assets/status.json";
$.getJSON(url, function (res) {
    var HTML = '';
    $.each(res, function (index, employee) {
       if(employee.attendance === true) {
           HTML += '<li class="list-group-item"><span class="employee">' + employee.name + '</span><span class="badge badge-in"> IN </span></li>';
           console.log("IN: ", employee.name)
       } else {
           HTML += '<li class="list-group-item"><span class="employee">' + employee.name + '</span><span class="badge badge-out"> OUT </span></li>';
           console.log("OUT: ", employee.name)
       }
    });
    $("#employees").html(HTML);
});