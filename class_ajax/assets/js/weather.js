$("#weather_info").css("display", "none");

$("#search_weather").submit(evt => {
    evt.preventDefault(); //get rid of default submit form to a different page
    var searchTerm = $("#city_search").val(); //make sure there is not a value attr defined on the input. .val() getting the value of that input
    var url = 'http://api.openweathermap.org/data/2.5/weather';
    var data = {
        q: searchTerm,
        units: 'imperial',
        appid: 'e90b47a22c170361a5375f46846ced66'
    };

    function showWeather(data) {
        $("#weather_info").css("display", "block");
        $("#city").html(data.name + ", " + data.sys.country);
        $("#high").html(data.main.temp_max + "&deg;");
        $("#low").html(data.main.temp_min + "&deg;");
        $("#forecast").html(data.weather[0].main);
        $("#precip").html(data.main.humidity);

    };

    $.getJSON(url, data, showWeather);
});