let weather = {
  apikey: "835ddef15ff23fa156425639a7592e15",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => {
        this.displayWeather(data);
        console.log("🚀 ~ file: app.js:13 ~ .then ~ data:", data);
      });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather; // Weather data is an array
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(
      `City: ${name}\nWeather: ${description}\nTemperature: ${temp}°C\nHumidity: ${humidity}%\nWind Speed: ${speed} m/s`
    );

    document.querySelector(".city").innerText = `Weather in the ${name}`;
    document.querySelector(".icon").innerText =
      "https://openweather.org/img/wn/" + icon + ".png";

    document.querySelector(".description").text = description;
    document.querySelector(".temp").innerText = temp + "C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "" + "%";

    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
  },
};
weather.fetchWeather("athens");
