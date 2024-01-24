document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (city !== '') {
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    const apiKey = '16a38d83af836c90ee6837bcc746a9d6';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => updateUI(data));
}


function updateUI(data) {
  console.log(data.weather[0].main);
  if (data.cod == 404)
  {
  document.querySelector(".err").style.display = "block";
  }
  else{    document.querySelector(".err").style.display = "none";
  }
  
    const temperature = Math.round(data.main.temp - 273.15);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const icon = document.querySelector('.weather-icon');

    document.getElementById('temperature').innerText = `${temperature}°C`;
  document.getElementById('city').innerText = data.name;
  document.getElementById('humidity').innerText = `${humidity} %`;
    document.getElementById('windSpeed').innerText = `${windSpeed} m/s`;
    
if(data.weather[0].main == "Clouds"){
  icon.src = "assets/clouds.png";
}
  else if(data.weather[0].main == "Clear"){
    icon.src = "assets/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    icon.src = "assets/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    icon.src = "assets/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    icon.src = "assets/mist.png";
  }
  else if(data.weather[0].main == "Snow"){
    icon.src = "assets/snow.png";
  }

document.querySelector(".weather-card").style.display = "block";
}

container = document.querySelector(".weather-container")
cover = document.querySelector(".cover")
  cover.addEventListener("click", ()=>{
  cover.style.display = "none";
  container.style.width = "340px";
    container.style.padding = "20px";
})
