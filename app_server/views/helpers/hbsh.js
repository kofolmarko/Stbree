const hbs = require('hbs');

hbs.registerHelper('naslovi', (stNaslovov) => {
  let naslovi = '';
  for (let i = 1; i <= 5; i++)
    naslovi += '<h1>Haha naslov:) </h1>';
  return naslovi;
});