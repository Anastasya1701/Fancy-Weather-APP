export class LocationProvider {
  constructor() {
    this._URL = 'https://ipinfo.io/json?token=5ab7de8894e54f';
  }

  async getLocationParams() {
    return (await fetch(this._URL)).json();
  }
}
