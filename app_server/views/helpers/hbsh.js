const hbs = require('hbs');

hbs.registerHelper('naslovi', (stNaslovov) => {
  let naslovi = '';
  for (let i = 1; i <= 5; i++)
    naslovi += '<h1>Haha naslov:) </h1>';
  return naslovi;
});

hbs.registerHelper('zvezdice', (ocena) => {
  let zvezdice = '';
  for (let i = 1; i <= 5; i++)
    zvezdice += '<i class="fa' + (ocena >= i ? 's' : 'r') + ' fa-star"></i>';
  return zvezdice;
});

hbs.registerHelper('ujemanjeNiza', (vrednost1, vrednost2, moznosti) => {
  return (vrednost1 == vrednost2) ? moznosti.fn(this) : moznosti.inverse(this);
});

hbs.registerHelper('zapolnjeno', (steviloProstihMest, options) => {
  if (steviloProstihMest <= 0)
    return options.fn(this);
  else
    return options.inverse(this);
});

var dateFormat = require('dateformat');

dateFormat.masks.slovenski = 'dd. mm. yyyy';



hbs.registerHelper('pretvoriDatum', function(date) {
  
  return dateFormat(date, "slovenski");
});
