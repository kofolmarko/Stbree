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


hbs.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});


/*
hbs.registerHelper('posodobiProfil', (data) => {
  editProfile(data)
})

hbs.registerHelper('dateFormat', function (date, options) {
  const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
  return moment(date).format(formatToUse);
});*/