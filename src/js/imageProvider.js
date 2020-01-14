

export class ImageProvider {
  async getImage(town) {
    this._URL = `https://api.unsplash.com/photos/random?query=town,${town}&client_id=452e1d6726d9dd2b1499d12d82c753e7e19c14ef73368aa62ea52e5294956001`;
    // серг this._URL = `https://api.unsplash.com/photos/random?query=town,${town}&client_id=7118d7bac5b26d79c5fc5d735c9e2a52f0d2a4d7897bd6e61f25a9b29eaf1c6c`;
    const res = await fetch(this._URL);
    if (res.headers.get('x-ratelimit-remaining') === '5') {
      alert('Осталость 5 обновлений');
    }
    return res.json();
  }
}
