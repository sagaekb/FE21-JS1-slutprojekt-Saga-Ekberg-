let weather = {
    apiKey:"74c8da8b27e84dba9f281b57e8427644",
    fetchWeather: function (city){
        fetch("https://api.weatherbit.io/v2.0/forecast/daily?city="+ city +",NC&key=74c8da8b27e84dba9f281b57e8427644").then((response)=> response.json ())
        .then((data) => console.log(data))
    },
    displayWeather: function(data){

    }
}