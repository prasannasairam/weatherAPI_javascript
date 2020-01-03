var search = document.getElementById('search');
//events
search.addEventListener('keyup', (e) =>{
    if(e.keyCode === 13) {
     var getCityName = e.target.value;
    }
    getWeather(getCityName);
});

// call back function
function getWeather(getCityName) {
const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=79395a5078fa89e9eecd4de07477958f`;
window.fetch(weatherApi)
.then(data =>  {
    data
    .json()
        .then(weather =>
            {
          var output = "";
         
          // array here
          var weatherData = weather.weather;
          for(let x of weatherData) {
              output +=`
              <div class="col-md-4 offset-4 mt-4 card">
              <div class="card body">
              <h1>${weather.name}</h1>
              <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
              <p><span>temp:</span>
              <span class="temp">${weather.main.temp}&deg;c</span></p>
              <span class="des float-left">${x.description}</span>
              <span class="des float-right">${x.main}</span>
              </div>
              </div>
              `;
          document.getElementById("template").innerHTML = output;
           
            }
            })
             .catch(err => {
                 console.log(err)});
                })
                 .catch(err => {console.log(err)});
}