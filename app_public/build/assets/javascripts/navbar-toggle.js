var hbs = require('hbs');

function set_navbar_partial(user_status) {
    var navbar;

    //check if user is logged-in
    if (user_status) {
        navbar = require('../../app_server/views/partials/navbar_user.hbs');
    } else {
        navbar = require('../../app_server/views/partials/navbar_guest.hbs');
    }

    hbs.registerPartial('navbar', navbar);
}



module.exports = set_navbar_partial;