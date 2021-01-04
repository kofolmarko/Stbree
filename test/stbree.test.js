
/**
 * Funkcionalni testi
 */
(async function stbree() {
  // Knjižnice
  const { exec } = require("child_process");
  const { describe, it, after, before } = require("mocha");
  const { Builder, By, until } = require("selenium-webdriver");
  const chrome = require("selenium-webdriver/chrome");
  const expect = require("chai").expect;
  const fs = require('fs')
  // Parametri
  let aplikacijaUrl = "https://stbree.herokuapp.com/";
  let seleniumStreznikUrl = "http://localhost:4445/wd/hub";
  let brskalnik, jwtZeton;

  const axios = require('axios').create({
    baseURL: aplikacijaUrl + "api/",
    timeout: 5000
  });

  // Obvladovanje napak
  process.on("unhandledRejection", (napaka) => {
    console.log(napaka);
  });

  // Počakaj določeno število sekund na zahtevani element na strani
  let pocakajStranNalozena = async (brskalnik, casVS, xpath) => {
    await brskalnik.wait(() => {
      return brskalnik.findElements(By.xpath(xpath)).then(elementi => {
        return elementi[0];
      });
    }, casVS * 1000, `Stran se ni naložila v ${casVS} s.`);
  };

  try {

    before(() => {
      brskalnik = new Builder()
        .forBrowser("chrome")
        .setChromeOptions(new chrome.Options()
          .addArguments("start-maximized")
          .addArguments("disable-infobars")
          .addArguments("allow-insecure-localhost")
          .addArguments("allow-running-insecure-content")
        )
        .usingServer(seleniumStreznikUrl)
        .build();
    });

    describe("Prijava uporabnika", function () {
      this.timeout(30 * 1000);
      before(async function () { await brskalnik.get(aplikacijaUrl); });

      it("Prijava uporabnika", async function () {
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Prijava')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });

      context("ustreznost podatkov na prijavni strani", function() {
        it("naslov strani za prijavo", async function() {
          await pocakajStranNalozena(brskalnik, 1000, "//h1");
          let naslov = await brskalnik.findElement(By.css("h1"));
          expect(naslov).to.not.be.empty;
          await naslov.getText().then(function(vsebina) {
            expect(vsebina).to.be.equal("Pozdravljeni, janez");
          });
        });
      });

      it("vnos prijavnih podatkov", async function () {
        let email = await brskalnik.findElement(By.css("input[name='email']"));
        expect(email).to.not.be.empty;
        email.sendKeys("janez@kranjski.net");

        let geslo = await brskalnik.findElement(By.css("input[name='geslo']"));
        expect(geslo).to.not.be.empty;
        geslo.sendKeys("12345678");

        await brskalnik.findElement(By.xpath("//button[contains(text(), 'Prijava')]")).click();
      });

      it("preveri ali je uporabnik prijavljen", async function () {
        await pocakajStranNalozena(brskalnik, 10, "//h4");
        let uporabnik = await brskalnik.findElement(
          By.id('welcome-sign'));
        expect(uporabnik).to.not.be.empty;
      });

      it("pridobi JWT žeton", async function () {
        jwtZeton = await brskalnik.executeScript(function () {
          return localStorage.getItem("stbree-token");
        });
        expect(jwtZeton).to.not.be.empty;
      });
    });

    describe("Inštruktorji in dogodki", async function () {
      this.timeout(70 * 1000);
      before(() => { brskalnik.get(aplikacijaUrl); });

      it("izberi instruktorje", async function () {
        await pocakajStranNalozena(brskalnik, 15, "//h4");
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Inštrukcije')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });

     
      

      it("izberi inštrukcije", async function () {
        await pocakajStranNalozena(brskalnik, 1000, "//h4");
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Dogodki')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });
    });

    describe("Dogodek", async function () {
      this.timeout(70 * 1000);
      before(() => { brskalnik.get(aplikacijaUrl); });

      it("seznam dogodkov", async function () {
        await pocakajStranNalozena(brskalnik, 1000, "//h4");
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Dogodki')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });

      
      /*it("podrobnosti dogodka", async function () {
        await pocakajStranNalozena(brskalnik, 1000, "//h4");
        
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Podrobnosti')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });*/
    });

    describe("Delo", async function () {
      this.timeout(70 * 1000);
      before(() => { brskalnik.get(aplikacijaUrl); });

      it("ponudba del", async function () {
        await pocakajStranNalozena(brskalnik, 15, "//h4");
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Delo')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });

      context("ustreznost podatkov na strani za dela", function() {
        it("naslov strani za prijavo", async function() {

          brskalnik.takeScreenshot().then(result => fs.writeFile('test/data.png', result.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
            if (err) {
                console.log("Error saving screenshot");
            }
            else {
                console.log("Screenshot saved!");
            }
        }));

          await pocakajStranNalozena(brskalnik, 1000, "//h1");
          let naslov = await brskalnik.findElement(By.css("h1"));
          expect(naslov).to.not.be.empty;
          await naslov.getText().then(function(vsebina) {
            expect(vsebina).to.be.equal("Objavi oglas za delo");
          });
        });
      });

      it("ustvari delo", async function () {
        await pocakajStranNalozena(brskalnik, 15, "//a");
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Ustvari novo ponudbo')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });
    });

    describe("Dodajanje dela", async function () {
      this.timeout(30 * 1000);

      it("klik na gumb za dodajanje dela", async function () {
        await brskalnik.findElement(By.id("naziv")).sendKeys("Projekt pri spletnem programiranju");
        await brskalnik.findElement(By.css("textarea[name='opis']")).sendKeys("Priložnost za učenje izdelave spletne strani");
        await brskalnik.findElement(By.id("cena")).sendKeys("3");
        await brskalnik.findElement(By.id("datum")).sendKeys("02-03-2021");
        let gumb = await brskalnik.findElement(By.xpath("//button[contains(text(), 'Objavi')]"));
        expect(gumb).to.not.be.empty;
        await gumb.click();
      });

      it("preveri če je delo objavljeno", async function () {
        await pocakajStranNalozena(brskalnik, 15, "//a");
        brskalnik.takeScreenshot().then(result => fs.writeFile('test/data.png', result.replace(/^data:image\/png;base64,/, ''), 'base64', function (err) {
          if (err) {
            console.log("Error saving screenshot");
          }
          else {
            console.log("Screenshot saved!");
          }
        }));
      });
    });

    after(async () => {
      brskalnik.quit();
    });

  } catch (napaka) {
    console.log("Med testom je prišlo do napake!");
  }
})();