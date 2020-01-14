

class TranslateProvider {
  constructor() {
    this._TRANSLATER_API_TOKEN = 'trnsl.1.1.20191213T214508Z.10b66b77880c515e.e713ce397fc11147bf42b237648066b22c821e8e';
  }

  async getTranslaterResponce(text, lang = 'en') {
    this._URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this._TRANSLATER_API_TOKEN}&text=${text}&lang=${lang}`;
    return (await fetch(this._URL)).json();
  }

  async getTranslaterResponceTest(text) {
    this._URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this._TRANSLATER_API_TOKEN}&text=${text}&lang=en`;
    return (await fetch(this._URL)).json();
  }
}



module.exports = {
  TranslateProvider,
};
