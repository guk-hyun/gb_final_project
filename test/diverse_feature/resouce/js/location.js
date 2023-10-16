let find_info = document.querySelector(".location");
const API_key = openWeather;

navigator.geolocation.getCurrentPosition(function(e){
    let lon = e.coords.longitude;
    let lat = e.coords.latitude;
    console.log(lat);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    fetch(url).then(data => data.json()).then( data => {
        console.log(data);
        find_info.innerText = `국가:${data.sys.country},위도:${lat},경도:${lon},온도:${data.main.temp}`
        })
    },
function(){
    });