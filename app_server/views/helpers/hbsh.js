const hbs = require('hbs');

hbs.registerHelper('naslovi', (stNaslovov) => {
  let naslovi = '';
  for (let i = 1; i <= 5; i++)
    naslovi += '<h1>Haha naslov:) </h1>';
  return naslovi;
});

hbs.registerHelper('krajsanjeBesedila', (besedilo) => {
  var dolzina = besedilo.length;
  if (dolzina > 20) {
    var okrajsano = besedilo.substring(0, 20);
    okrajsano += ' ...';
    return okrajsano;
  }
  return besedilo;
});

hbs.registerHelper('zvezdice', (ocena) => {
  let zvezdice = '';
  for (let i = 1; i <= 5; i++)
    zvezdice += '<i class="fa' + (ocena >= i ? 's' : 'r') + ' fa-star"></i>';
  return zvezdice;
});

hbs.registerHelper('ujemanje', (niz1, niz2) => {
  if(niz1 == niz2) return '<p class="posameznoSporocilo" style="font-size: 1rem; margin-top: 0; margin-bottom: 0.4rem; padding-left: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem; border-radius: 30px; color: white; background-color: #18a2b8; box-shadow: 1px 3px 3px #7b7b7b">sporocilo si dobilod kolega </p>';  //sporocilo si dobilod kolega
 //if(niz1 == niz2) return '<div>test</div>';  //sporocilo si dobilod kolega
 else{
    return '<p class="posameznoSporocilo" style="font-size: 1rem; margin-top: 0; margin-bottom: 0.4rem; padding-left: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem; border-radius: 30px; color: white; background-color: red; box-shadow: 1px 3px 3px #7b7b7b">sporocilo </p>'; //sporocilo je moje
   //return '<div> ' + niz1 + niz2 + ' </div>'; //sporocilo je moje
 }
});


hbs.registerHelper('ujemanjeNiza', (vrednost1, vrednost2, moznosti) => {
  console.log("smo v helper funkcijiiiiiiii");
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



hbs.registerHelper('pretvoriDatum', function (date) {

  return dateFormat(date, "slovenski");
});


hbs.registerHelper('generirajPovezavoZaDogodek', function (dogodek) {
  var povezava = '<a href="http://localhost:3000/instrukcije-dogodki/dogodek/' + dogodek._id + '">' + dogodek.naziv + "</a>";
  return povezava;
});

hbs.registerHelper('generirajPovezavoZaDelo', function (delo) {
  var povezava = '<a href="http://localhost:3000/ponudba-del/' + delo._id + '">' + delo.naziv + "</a>";
  return povezava;
});

hbs.registerHelper("inc", function (value, options) {
  return parseInt(value) + 1;
});
