# Spletno programiranje 2020/2021

Lastni projekt pri predmetu **Spletno programiranje** v študijskem letu **2020/2021**.


## 1. LP

Osnutek aplikacije in wireframe model
    Platforma, ki vam omogoča, da pridobite znanje in ga delite z drugimi. Lahko postanete inštruktor in ustvarjate dogodke ali pa ste le udeleženec enega od dogodkov, ki jih inštruktor ustvari. Ti dogodki so pravzaprav inštrukcije na različne teme - na primer programiranje. Seveda ste lahko inštruktor in še vedno sodelujete na inštrukcijah, ki jih imajo drugi inštruktorji! Imate tudi opcijo iskanja ponudb dela na različnih projektih ali pa poiščete pomoč za svoj projekt.


Dodati je potrebno opise zaslonskih mask: 
    Začetna stran: 
        Pove nam ključne informacije o našem projektu.

    Registracija:
        Posameznik se lahko registrira in ustvari račun na naši strani. Tukaj se lahko odloči, če želi biti inštruktor ali zgolj navaden uporabnik (kasneje lahko status tudi spremeni)

    Prijava:
        Posameznik, ki je že registriran, se lahko prijavi.

    Inštruktorji:
        Uporabnik lahko vidi vse inštruktorje in jih poišče glede na svoje zahteve (npr. poišče inštruktorja ki nudi inštrukcije za srednjo šolo, za matematiko)

    Dogodki (Inštrukcije):
        Uporabnik lahko vidi vse dogodke in poišče dogodke, ki so primerni zanj. Na njih se lahko prijavi in skupinsko udeleži inštukcij

    Dela:
        Uporabnik lahko vidi vse ponudbe del in poišče dela, ki so primerna zanj. Na njih se lahko prijavi in sodeluje na projektu

    Pregledna plošča:
        Uporabnik lahko vidi: 
                svoja opravila in jih odpre,
                podatke o trenutnem epidemiološkem stanju, 
                najboljše inštruktorje, 
                prihajajoče dogodke in 
                promoviranje ponudbe.

    Profil:
        Profil uporabnika kjer lahko vidi svoje podatke in jih spremeni

Master/detail vzorec: 
    Navbar -> Inštrukcije -> Instruktorji/Dogodki

Brisanje elementa:
    Izbriši dogodek 
    Izbriši delo

Integracija aplikacije z zunanjim virom:
    Pregledna Plošča 
        Podatki za skupno število okužb v Sloveniji

Razširite funkcionalnosti za inštruktorja ter iskalca zaposlitve, kjer morajo biti določene funkcionalnosti različne.
    Lahko si inštruktor: narediš dogodek, ga posodobiš, ga izbrišeš
    Lahko se udeležiš dogodka: prijaviš se na dogodek in se udeležiš dogodka od drugih inštruktorjev 
    Lahko si inštruktor:  narediš dogodek, ga posodobiš, ga izbrišeš; in se udeležiš dogodka od drugih inštruktorjev
    Lahko narediš ponudbo za delo (ne glede na to ali si inštruktor ali ne)
    Lahko se prijaviš za delo

Nadgraditi je potrebno iskalnik z možnostjo filtrianja po ceni.
    Razvrsti po: Datumu(najnovejši najprej), Datumu(najstarejši najprej), Število prijav (najmanj), Število prijav (največ), Po plačilu(največ), Po plačilu (najmanj), Roku opravila (najprej), Roku opravila (najkasneje)

Potrebno je podpreti funkcionalnost sporočanja, komentiranja in opredeliti ter implementirati zunanji vir
    Omogoča funkcionalnost sporočanja preko same aplikacije, kjer se poveže s podatkovno bazo 
    Zunanji vir omogoča podatke o trenutnem stanju COVID19 okužb v Sloveniji


## 2. LP

Dinamična spletna aplikacija z logiko na strani strežnika

8% Datoteka README.md vsebuje seznam dovoljenih vnosov za vsa uporabniška vnosna polja.
    
    -> Registracija 
        1. Posameznik mora ispolnit vsa polja
        2. Email mora imeti @ 
        3. Geslo mora imeti vsaj 8 znakov
        4. Gesla se morata ujemati

    -> Objavi oglas za delo
        1. Posameznik mora ispolnit vsa polja
        2. Datum -> Mora biti Datum Format

    -> Objavi oglas za inštrukcijski dogodek
        1. Posameznik mora ispolnit vsa polja
        2. Cena dogodka -> Mora biti Število
        3. Datum -> Mora biti Datum Format
        4. Ura dogodka -> AM/PM Fromat

4% Jasno so določene (vsaj 3 različne) naprave na katerih deluje vaša spletna stran.
    -> prenosni računalnik
    -> tablica
    -> telefon

## 3. LP

Dinamična spletna aplikacija s podatkovno bazo

4% Povezava, ki je navedena, kaže na delujočo spletno aplikacijo na Heroku in privzeto se odpre ustrezna spletna stran: 
    -> https://stbree.herokuapp.com
	
12% Datoteka README.md vsebuje pravilna navodila in podatke za namestitev in zagon aplikacije.

docker-compose up


## 4. LP

SPA aplikacija na eni strani


## 5. LP

Varnostno zaščitena progresivna aplikacija