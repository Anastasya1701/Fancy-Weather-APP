

export class WeatherProvider {
  constructor() {
    this._WEATHER_API_TOKEN = '7015347bcad7f163f9c64e668a49cc6d';
    // this._URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4992e5d3e65eb59ceb1fddfebdeb9e20/53.5359,27.3400?lang=ru&units=si';
  }

  async getWeatherParams(locationCoordinates, lang = 'en') {
    this._URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this._WEATHER_API_TOKEN}/${locationCoordinates}?lang=${lang}&units=si`;
    return (await fetch(this._URL)).json();
  }
}
