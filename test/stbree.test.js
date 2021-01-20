
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
      this.timeout(50 * 1000);
      before(async function () { await brskalnik.get(aplikacijaUrl); });

      it("Prijava obstoječega uporabnika", async function () {
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Prijava')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });

      context("ustreznost podatkov na prijavni strani", function () {
        it("naslov strani za prijavo", async function () {
          await pocakajStranNalozena(brskalnik, 10, "//h1");
          let naslov = await brskalnik.findElement(By.css("h1"));
          expect(naslov).to.not.be.empty;
          await naslov.getText().then(function (vsebina) {
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
        await brskalnik.get("https://stbree.herokuapp.com/ponudba-del/delo/5ff29616dd707b00178b9eb4");
      });

      it("preveri če je delo objavljeno", async function () {
        await pocakajStranNalozena(brskalnik, 15, "//a");
        let gumb = await brskalnik.findElement(
          By.id("edit-btn"));
        expect(gumb).to.not.be.empty;
      });

      it("izbriši ustvarjeno delo", async function () {
        await pocakajStranNalozena(brskalnik, 15, "//a");
        let gumb = await brskalnik.findElement(
          By.id("delete-btn"));
        expect(gumb).to.not.be.empty;
        await gumb.click();

      });
    });

    describe("Odjava uporabnika", async function () {
      this.timeout(30 * 1000);
      before(function () { brskalnik.get(aplikacijaUrl); });

      it("preveri ali je uporabnik prijavljen", async function () {
        await brskalnik.get("https://stbree.herokuapp.com/my");
        await pocakajStranNalozena(brskalnik, 10, "//h4");
        let uporabnik = await brskalnik.findElement(
          By.id('welcome-sign'));
        expect(uporabnik).to.not.be.empty;
      });

      it("zahtevaj odjavo", async function () {
        let uporabnik = await brskalnik.findElement(
          By.xpath("//button[contains(text(), 'janez kranjsi')]"));
        expect(uporabnik).to.not.be.empty;
        await uporabnik.click();
        let odjava = await brskalnik.findElement(
          By.id("logout-btn"));
        expect(odjava).to.not.be.empty;
        await odjava.click();
      });

      it("preveri ali je uporabnik prijavljen", async function () {
        await brskalnik.get("https://stbree.herokuapp.com/my");
      });
    });

   describe("Registracija novega uporabnika", function () {
      this.timeout(50 * 1000);
      before(async function () { await brskalnik.get(aplikacijaUrl); });


      it("prijava uporabnika", async function () {
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Prijava')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });

      it("izbira registracije", async function () {
        await pocakajStranNalozena(brskalnik, 10,
          "//button[contains(text(), 'Prijava')]");
        let povezava = await brskalnik.findElement(
          By.xpath("//a[contains(text(), 'Registracija')]"));
        expect(povezava).to.not.be.empty;
        await povezava.click();
      });

      it("vnos podatkov uporabnika", async function () {
        await pocakajStranNalozena(brskalnik, 10,
          "//h1[contains(text(), 'Registracija')]");
        let ime = await brskalnik.findElement(By.id("ime"));
        expect(ime).to.not.be.empty;
        ime.sendKeys("Ina");
        expect(await ime.getAttribute("value")).to.be.equal("Ina");

        let priimek = await brskalnik.findElement(By.id("priimek"));
        expect(priimek).to.not.be.empty;
        priimek.sendKeys("Banana");
        expect(await priimek.getAttribute("value")).to.be.equal("Banana");

        let email = await brskalnik.findElement(
          By.id("email"));
        expect(email).to.not.be.empty;
        email.sendKeys("ina@banana.net");
        expect(await email.getAttribute("value")).to.be.equal("ina@banana.net");

        let geslo = await brskalnik.findElement(By.id("geslo"));
        expect(geslo).to.not.be.empty;
        geslo.sendKeys("12345678");
        expect(await geslo.getAttribute("value")).to.be.equal("12345678");

        let gesloPotrdi = await brskalnik.findElement(By.id("gesloPotrdi"));
        expect(gesloPotrdi).to.not.be.empty;
        gesloPotrdi.sendKeys("12345678");
        expect(await gesloPotrdi.getAttribute("value")).to.be.equal("12345678");

        // geslo.sendKeys("5");

        let btn = brskalnik.findElement(
          By.xpath("//button[contains(text(), 'Registriraj')]"));
        expect(btn).to.not.be.empty;

        btn.click();

      });

    });

    after(async () => {
      brskalnik.quit();
    });

  } catch (napaka) {
    console.log("Med testom je prišlo do napake!");
  }
})();