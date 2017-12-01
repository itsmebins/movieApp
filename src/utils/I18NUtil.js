const translationValues = {
	en: require('../Translations/en.json'),
	my: require('../Translations/my.json'),
};

export const getLocaleValue = (locale, key) => {
  let localeValue = key;
  try {
    localeValue = getLocaleValues(locale)[key];
    console.log(localeValue);
  } catch (e) {
    console.warn('error while fetching locale value....');
    localeValue = getLocaleValues('en')[key];
  }
  if (!localeValue) {
    localeValue =  key;
  }
  return localeValue;
};

export const getLocaleValues = locale  => {
  try {
    return translationValues[locale];
  } catch (e) {
    console.warn('error while fetching locale values....');
    return {};
  }
};
