var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

 
var countries = ["New York","Pune","Mumbai","Delhi","Mexico","Washington"]


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=72771106fd122f42db92280fcc095f2b')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = "Temp - "+Math.round((tempValue  - 273.15))+" °C" ;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})


