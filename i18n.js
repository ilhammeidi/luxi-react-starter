const NextI18Next = require('next-i18next/dist/commonjs');

module.exports = new NextI18Next({
  ignoreRoutes: ['/_next', '/static', '/public'],
  browserLanguageDetection: true,
  defaultLanguage: 'en',
  otherLanguages: ['de', 'ar', 'id', 'zh', 'pt'],
  fallbackLng: 'en',
  lng: 'en',
  keySeparator: false,
  shallowRouteChange: true,
}, (err, t) => {
  console.info('i18next.language', i18next.language)
});
