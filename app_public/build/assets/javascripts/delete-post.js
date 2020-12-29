document.addEventListener('DOMContentLoaded', function () {
    console.log("Stran je odprta");

    var deleteBtn = document.getElementById('delete-btn');
    deleteBtn.addEventListener('click', () => {

        var asinhronaZahteva = new XMLHttpRequest();

        asinhronaZahteva.open(
            "DELETE",
            window.location.href, //current url
            true
        );

        asinhronaZahteva.addEventListener("load", function () {
            var jsonRezultati = JSON.parse(asinhronaZahteva.responseText);
            console.log(jsonRezultati);
        });

        asinhronaZahteva.send(null);

    });
});