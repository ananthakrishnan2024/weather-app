const apiKey = "e364734e6f03d6f9ac093e2a817240d8";

async function getWeather() {

  const city = document.getElementById("cityInput").value;

  const weatherInfo =
    document.getElementById("weatherInfo");

  const error =
    document.getElementById("error");

  if(city === ""){
    alert("Please enter city name");
    return;
  }

  const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try{

    const response = await fetch(url);

    if(!response.ok){
      throw new Error("City not found");
    }

    const data = await response.json();

    document.getElementById("temperature").innerHTML =
      Math.round(data.main.temp) + "°C";

    document.getElementById("cityName").innerHTML =
      data.name;

    document.getElementById("description").innerHTML =
      data.weather[0].description;

    document.getElementById("humidity").innerHTML =
      data.main.humidity + "%";

    document.getElementById("wind").innerHTML =
      data.wind.speed + " km/h";

    const iconCode = data.weather[0].icon;

    document.getElementById("weatherIcon").src =
`https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherInfo.style.display = "block";

    error.style.display = "none";

  }
  catch(err){

    weatherInfo.style.display = "none";

    error.style.display = "block";
  }
}