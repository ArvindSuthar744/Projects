var cityName = document.querySelector('#cityname');
var btn = document.querySelector('#btn');
var cityOutput = document.querySelector('.cityOutput');
var description = document.querySelector('.description');
var temp = document.querySelector('.temp');
var tmin = document.querySelector('.t-min');
var tmax = document.querySelector('.t-max');
var humi = document.querySelector('.humi');
var wind = document.querySelector('.wind');

function convertion (val)
{
    return (val - 273).toFixed(0)
}
btn.addEventListener('click', function(){
        weather();    
})
document.body.addEventListener('keyup', function(event){
    event.preventDefault();
    if(event.keyCode==13){
        weather();    
    }
})

function weather(){

    var apikey = "ba0d799158bb3a220c56ddc827d31012";
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid='+apikey)
    .then(res => res.json())

    .then(data => {
        var cityName2 = data['name'];
        var description2 = data['weather']['0']['description']
        var temp2 = data['main']['temp']
        var humi2 = data['main']['humidity']
        var wind2 = data['wind']['speed']
        var tmin2 = data['main']['temp_min']
        var tmax2 = data['main']['temp_max']


        cityOutput.innerHTML = `<span>${cityName2}<span>`
        description.innerHTML = `Sky Conditions :  <span>${description2}<span>`
        temp.innerHTML = `<span>${convertion(temp2)}&deg;C<span>`
        humi.innerHTML = `Humidity :  <span> ${(humi2)}%<span>`
        wind.innerHTML = `Wind Speed :  <span>${(wind2)} km/h <span>`
        tmin.innerHTML = `Min : <span>${convertion(tmin2)}&deg;C<span>`
        tmax.innerHTML = `Max : <span>${convertion(tmax2)}&deg;C<span>`

       })

    .catch(err => alert('You Entered Wrong City Name !!'))

}

