
const options = require('./options');
const languages = require('./languages');

describe('test params', () => {
  it('should return list of params of options', () => {
    expect(options.getOptionState()).toBeDefined();
  });

  it('should return list of params of languages', () => {
    expect(languages.getLanguageState()).toBeDefined();
  });
});


// Types

describe('type languages and options params', () => {
let languageRes;
let optionsRes;

beforeEach(() => {
  languageRes = languages.getLanguageState();
  optionsRes = options.getOptionState();
});

  it('should return of type of options', () => {
    expect(optionsRes).toBeInstanceOf(Array);
    expect(optionsRes).toEqual(expect.any(Array));
  });

  it('should return of type of languages', () => {
    expect(languageRes).toBeInstanceOf(Array);
    expect(languageRes).toEqual(expect.any(Array));
  });
});

// Numbers

describe('count languages', () => {
  let languageRes;

  beforeEach(() => {
    languageRes = languages.getLanguageState();
  });

  it('more than 2 languages', () => {
    expect(languageRes.length).toBeGreaterThan(2);
  });
});

// Boolean

describe('awailable languages', () => {
  let languageRes;

  beforeEach(() => {
    languageRes = languages.getLanguageState();
  });

  it('include italian language', () => {
    expect(languageRes[4]).toEqual('it');
  });

  it('include english language', () => {
    expect(languageRes.includes('en')).toBeTruthy();
  });

  it('include russian language', () => {
    expect(languageRes).toContain('ru');
  });

  it('include belarusian language', () => {
    expect(languageRes.includes('be')).toBeTruthy();
  });

  it('include german language', () => {
    expect(languageRes[3]).toEqual('de');
  });
});


// Async

// describe('should return correct async result', () => {
//   // beforeEach(() => {
//   //   translateProviderRes = new TranslateProvider();
//   // });

//   it('should return correct async result', async () => {
//     // const translateProviderRes = new TranslateProvider();
//     // expect.assertions(1);
//     const data = await translateProviderRes.getTranslaterResponceTest('тест');
//     const a = data.text.join('');
//     expect(a).toEqual('test');
//   });
// });
