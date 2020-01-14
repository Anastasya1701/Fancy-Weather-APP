const AVAILABLE_LANGUAGES = [
  'en',
  'ru',
  'be',
  'de',
  'it',
];

function getLanguageState() {
  return AVAILABLE_LANGUAGES.map((elem) => elem);
}

module.exports = {
  AVAILABLE_LANGUAGES,
  getLanguageState,
};
