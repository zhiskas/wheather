let weather = {
  apikey: "835ddef15ff23fa156425639a7592e15",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid" +
        this.apikey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found");
          throw new Error("No weather found!");
        }
        return response.json();
      })
      .catch((err) => {
        console.error("Test", err);
      });
  },
};

weather.fetchWeather("athens");
