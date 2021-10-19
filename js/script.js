const _city = document.getElementById('city');
const _temp = document.getElementById('temp');
const _description = document.getElementById('description');
const _humidity = document.getElementById('humidity');
const _icon = document.getElementById('icon');
const _wind = document.getElementById('wind');
const _Search_btn = document.getElementById('search-btn')
const _Search_box = document.getElementById('search_box');

let weather={
    apikey : '5527112e1657764e14fec9585bb87a3f',
    fetchWeather: function (city){
        fetch
        (
            "http://api.openweathermap.org/data/2.5/weather?q="
            + city
            +"&units=metric&appid="
            + this.apikey

        ).then((response)  => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        
        _city.innerText = "Weather in " + name ;
        _icon.src ="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        _temp.innerText = temp +"°C";
        _description.innerText = description;
        _humidity.innerText  = "Humidity: " + humidity +"%";
        _wind.innerText = "Wind Speed: " +speed + "km/h" ;

    }
}



function search(){
    console.log(_Search_box.value);
    if(_Search_box.value != ""){
        weather.fetchWeather(_Search_box.value)
    }
}

_Search_btn.addEventListener('click',function(e){
    search();
});