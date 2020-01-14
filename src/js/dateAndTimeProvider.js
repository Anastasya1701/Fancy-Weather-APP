

export class DateAndTimeProvider {
  constructor() {
    this._TIMEZONEDB_API_TOKEN = '4ME60SO66ICV';
  }

  async getDataAndTime(latitude, longitude) {
    this._URL = `https://api.timezonedb.com/v2.1/get-time-zone?key=${this._TIMEZONEDB_API_TOKEN}&format=json&by=position&lat=${latitude}&lng=${longitude}`;
    return (await fetch(this._URL)).json();
  }
}
