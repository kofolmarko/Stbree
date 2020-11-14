document.addEventListener('DOMContentLoaded', function () {
    var forma = document.getElementById('registrationForm');

    var btn = forma.getElementsById('registriraj')[0];
    btn.addEventListener('click', function () {
        var imeInput = document.getElementById('ime').value;
        var priimekInput = document.getElementById('priimek').value;

        var crkeReg = new RegExp("^[a-zA-ZčćžđšČĆŽĐŠ]*$");

        var imeTest = crkeReg.test(imeInput);
        var priimekTest = crkeReg.test(priimekinput);

        var odgovor = "";

        if (!imeTest || !priimekTest)
            odgovor += "Ime in priimek lahko vsebujeta le črke!";

        if (!imeTest || !priimekTest)
            alert(odgovor);
    });

})