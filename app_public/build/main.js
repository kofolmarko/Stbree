(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+djZ":
/*!**************************************************!*\
  !*** ./src/app/common/services/covid.service.ts ***!
  \**************************************************/
/*! exports provided: CovidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidService", function() { return CovidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CovidService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://api.covid19api.com/total/country/slovenia/status/confirmed";
    }
    getCovidInfo() {
        const url = this.apiUrl;
        return this.http
            .get(url)
            .toPromise()
            .then(response => {
            //console.log(response);
            return response;
        })
            .catch(this.handleError);
    }
    handleError(error) {
        //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error.message || error);
        //return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error.message || error);
        return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error);
        // console.error("Error in the service");
        // console.log(error);
        // return Promise.reject(error.error);
    }
}
CovidService.ɵfac = function CovidService_Factory(t) { return new (t || CovidService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CovidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CovidService, factory: CovidService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "/yQE":
/*!******************************************!*\
  !*** ./src/app/common/pipes/cas.pipe.ts ***!
  \******************************************/
/*! exports provided: CasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasPipe", function() { return CasPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CasPipe {
    transform(cas) {
        var date = new Date(cas);
        var formatiranDatum = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        return formatiranDatum;
    }
}
CasPipe.ɵfac = function CasPipe_Factory(t) { return new (t || CasPipe)(); };
CasPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cas", type: CasPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CasPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'cas'
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mako3\Documents\Letnik 2\Spletno Programiranje\LP-27 new\LP-27\app_public\src\main.ts */"zUnb");


/***/ }),

/***/ "0Rcm":
/*!**********************************************!*\
  !*** ./src/app/common/pipes/letters.pipe.ts ***!
  \**********************************************/
/*! exports provided: LettersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersPipe", function() { return LettersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LettersPipe {
    transform(vhod) {
        return vhod.charAt(0);
    }
}
LettersPipe.ɵfac = function LettersPipe_Factory(t) { return new (t || LettersPipe)(); };
LettersPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "letters", type: LettersPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LettersPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'letters'
            }]
    }], null, null); })();


/***/ }),

/***/ "1Ix/":
/*!****************************************************************!*\
  !*** ./src/app/common/components/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_profil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/profil.service */ "lylF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/jobs.service */ "XPrz");
/* harmony import */ var _services_instructions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/instructions.service */ "sm0C");
/* harmony import */ var src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/services/authentication.service */ "xpqA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


 //za pridobitev vrednosti iz URL parametrov ter uporabi pri API klicu










function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.sporocilo);
} }
function ProfileComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return ctx_r11.assure(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Izbri\u0161i profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_ng_template_5_Template_button_click_3_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Ali ste prepri\u010Dani, da \u017Eelite izbrisati svoj profil?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_ng_template_5_Template_button_click_11_listener() { const modal_r13 = ctx.$implicit; return modal_r13.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Potrdi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.saveUserInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.editUserInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_10_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Da");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_10_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Opis:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Podatki:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email naslov:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Telefonska \u0161tevilka:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Status in\u0161truktorja:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProfileComponent_div_10_td_31_Template, 2, 0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProfileComponent_div_10_td_32_Template, 2, 0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.uporabnik.opis);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.uporabnik.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.uporabnik.telefonskaStevilka);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.uporabnik.statusInstruktorja);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.uporabnik.statusInstruktorja);
} }
function ProfileComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Opis:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_ng_template_11_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.uporabnik.opis = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Podatki:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email naslov:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Telefonska \u0161tevilka:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_ng_template_11_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.uporabnik.telefonskaStevilka = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Status in\u0161truktorja:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_ng_template_11_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.uporabnik.statusInstruktorja = $event; })("change", function ProfileComponent_ng_template_11_Template_input_change_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.becomeAnInstructor(ctx_r26.uporabnik.statusInstruktorja ? true : false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.uporabnik.opis);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.uporabnik.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.uporabnik.telefonskaStevilka);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.uporabnik.statusInstruktorja);
} }
function ProfileComponent_div_14_div_5_table_1_tbody_12_tr_1_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/instrukcije-dogodki/dogodek/", event_r33._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r33.naziv);
} }
function ProfileComponent_div_14_div_5_table_1_tbody_12_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileComponent_div_14_div_5_table_1_tbody_12_tr_1_a_7_Template, 2, 2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, event_r33.datum, "d. M. yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r33.ura);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r33._id);
} }
function ProfileComponent_div_14_div_5_table_1_tbody_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_14_div_5_table_1_tbody_12_tr_1_Template, 8, 6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r33.emailInstruktorja == ctx_r32.uporabnik.email);
} }
function ProfileComponent_div_14_div_5_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Moji objavljeni dogodki");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Ura");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Opravilo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_14_div_5_table_1_tbody_12_Template, 2, 1, "tbody", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r28.featuredEvents);
} }
function ProfileComponent_div_14_div_5_table_2_tbody_10_tr_1_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/ponudba-del/delo/", offer_r39._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r39.naziv);
} }
function ProfileComponent_div_14_div_5_table_2_tbody_10_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_div_14_div_5_table_2_tbody_10_tr_1_a_5_Template, 2, 2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, offer_r39.datum, "d. M. yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", offer_r39._id);
} }
function ProfileComponent_div_14_div_5_table_2_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_14_div_5_table_2_tbody_10_tr_1_Template, 6, 5, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", offer_r39.emailPonudnika === ctx_r38.uporabnik.email);
} }
function ProfileComponent_div_14_div_5_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Moja objavljena dela");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Opravilo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_div_14_div_5_table_2_tbody_10_Template, 2, 1, "tbody", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r29.featuredOffers);
} }
function ProfileComponent_div_14_div_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nimate \u0161e obveznosti.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_14_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_14_div_5_table_1_Template, 13, 1, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_14_div_5_table_2_Template, 11, 1, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_14_div_5_ng_template_3_Template, 2, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.featuredEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.featuredOffers);
} }
function ProfileComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_14_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.openCity(ctx_r44.event, "kronologija"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Seznam objav");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_div_14_div_5_Template, 5, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.featuredEvents || ctx_r9.featuredOffers)("ngIfElse", ctx_r9.niObveznosti);
} }
function ProfileComponent_div_15_div_5_table_1_tbody_12_tr_1_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/instrukcije-dogodki/dogodek/", event_r52._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r52.naziv);
} }
function ProfileComponent_div_15_div_5_table_1_tbody_12_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileComponent_div_15_div_5_table_1_tbody_12_tr_1_a_7_Template, 2, 2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, event_r52.datum, "d. M. yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r52.ura);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r52._id);
} }
function ProfileComponent_div_15_div_5_table_1_tbody_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_15_div_5_table_1_tbody_12_tr_1_Template, 8, 6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r52 = ctx.$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r52.emailInstruktorja == ctx_r51.uporabnik.email);
} }
function ProfileComponent_div_15_div_5_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Ura");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Opravilo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_15_div_5_table_1_tbody_12_Template, 2, 1, "tbody", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r47.uporabnik.ime, " objavljeni dogodki");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r47.featuredEvents);
} }
function ProfileComponent_div_15_div_5_table_2_tbody_10_tr_1_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/ponudba-del/delo/", offer_r58._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r58.naziv);
} }
function ProfileComponent_div_15_div_5_table_2_tbody_10_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_div_15_div_5_table_2_tbody_10_tr_1_a_5_Template, 2, 2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, offer_r58.datum, "d. M. yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", offer_r58._id);
} }
function ProfileComponent_div_15_div_5_table_2_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_15_div_5_table_2_tbody_10_tr_1_Template, 6, 5, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r58 = ctx.$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", offer_r58.emailPonudnika === ctx_r57.uporabnik.email);
} }
function ProfileComponent_div_15_div_5_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Opravilo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_div_15_div_5_table_2_tbody_10_Template, 2, 1, "tbody", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r48.uporabnik.ime, " objavljeni dela");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r48.featuredOffers);
} }
function ProfileComponent_div_15_div_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nimajo \u0161e obveznosti.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_15_div_5_table_1_Template, 13, 2, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_15_div_5_table_2_Template, 11, 2, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_15_div_5_ng_template_3_Template, 2, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.featuredEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.featuredOffers);
} }
function ProfileComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_15_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r63.openCity(ctx_r63.event, "moje-instrukcije"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Seznam objav");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_div_15_div_5_Template, 5, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.featuredEvents || ctx_r10.featuredOffers)("ngIfElse", ctx_r10.niObveznosti);
} }
class ProfileComponent {
    constructor(profileService, route, router, jobsService, instructionsService, authenticationService, modalService) {
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.jobsService = jobsService;
        this.instructionsService = instructionsService;
        this.authenticationService = authenticationService;
        this.modalService = modalService;
        this.closeResult = '';
        this.sporocilo = "";
        this.isLoggedIn = this.authenticationService.isLoggedIn();
        this.editState = false;
        this.viewResponsibilities = false;
        this.isAdmin = false;
        this.signedStatus = false;
        this.featuredEvents = this.getFeatured("events");
        this.featuredOffers = this.getFeatured("offers");
    }
    getUserInfo() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            let emailUporabnika = params.get('emailUporabnika');
            return this.authenticationService.getUser(emailUporabnika);
        }))
            .subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.uporabnik = user;
            if (this.authenticationService.isLoggedIn()) {
                if (this.uporabnik.email === this.authenticationService.getCurrentUser().email) {
                    this.isAdmin = true;
                }
            }
            this.sporocilo = user ? "" : "Uporabnik ne obstaja :(";
        }));
    }
    getFeatured(type) {
        let featured = [];
        switch (type) {
            case 'events': {
                this.instructionsService.getEvents()
                    .then(events => {
                    for (let i = 1; i < 50; i++) {
                        if (events[events.length - i]) {
                            featured.push(events[events.length - i]);
                        }
                    }
                })
                    .catch(error => console.error(error));
                break;
            }
            case 'offers': {
                this.jobsService.getJobs()
                    .then(offers => {
                    for (let i = 1; i < 50; i++) {
                        if (offers[offers.length - i]) {
                            featured.push(offers[offers.length - i]);
                        }
                    }
                })
                    .catch(error => console.error(error));
                break;
            }
        }
        // console.log(featured);
        return featured;
    }
    //DOSREDI
    openCity(evt, cityName) {
        this.viewResponsibilities = true;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        if (evt)
            evt.currentTarget.className += " active";
    }
    editUserInfo() {
        this.editCSS(true);
        this.editState = true;
    }
    saveUserInfo() {
        this.editCSS(false);
        this.editState = false;
        if (this.isInstructor() && !this.uporabnik.statusInstruktorja) {
            alert("Če še vedno imate prihajajoče dogodke, jih prosimo dokončajte ali ustrezno izbrišite. Odjavite se in se znova prijavite, da izgubite pravico do ustvarjanja dogodkov");
        }
        else if (!this.isInstructor() && this.uporabnik.statusInstruktorja) {
            alert("Če želite začeti ustvarjati dogodke, se prosimo odjavite in znova prijavite!");
        }
        this.profileService.editUserInfo(this.uporabnik)
            .then(user => {
            user ? this.uporabnik = user : this.sporocilo = "Napaka pri posdabljanju uporabnika.";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri posodabljanju uporabnika.";
            //console.error(error);
        });
    }
    editCSS(isEdit) {
        if (isEdit) {
            document.getElementById("edit-btn").classList.remove("d-ilblock");
            document.getElementById("edit-btn").classList.add("d-none");
            document.getElementById("save-btn").classList.remove("d-none");
            document.getElementById("save-btn").classList.add("d-ilblock");
        }
        else {
            document.getElementById("edit-btn").classList.remove("d-none");
            document.getElementById("edit-btn").classList.add("d-ilblock");
            document.getElementById("save-btn").classList.remove("d-ilblock");
            document.getElementById("save-btn").classList.add("d-none");
        }
    }
    deleteUser() {
        let userEmail = this.route.snapshot.paramMap.get('emailUporabnika');
        this.profileService.deleteUser(userEmail)
            .subscribe(() => {
            this.signedStatus = false;
            this.uporabnik = null;
            this.authenticationService.logout();
            this.router.navigateByUrl('/');
            //this.sporocilo = "Uporabnik uspešno izbrisan."
            alert("Uporabnik uspešno izbrisan.");
        }, (error) => this.sporocilo = "Napaka API-ja pri brisanju dogodka."
        //console.error(error)
        );
    }
    isSignedUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isLoggedIn) {
                let currentUserEmail = this.authenticationService.getCurrentUser().email;
                yield this.authenticationService.getUser(currentUserEmail)
                    .then(user => this.signedStatus = true)
                    .catch(error => console.log(error));
            }
        });
    }
    isInstructor() {
        if (this.getCurrentUser().statusInstruktorja) {
            return true;
        }
        else {
            return false;
        }
    }
    getCurrentUser() {
        return (this.authenticationService.getCurrentUser());
    }
    ngOnInit() {
        this.getUserInfo();
        this.isSignedUp();
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    assure(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.deleteUser();
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_profil_service__WEBPACK_IMPORTED_MODULE_4__["ProfilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_instructions_service__WEBPACK_IMPORTED_MODULE_7__["InstructionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 16, vars: 10, consts: [["class", "alert alert-warning container", "style", "margin-top: 2rem", 4, "ngIf"], [1, "container"], ["id", "profile-naslov"], ["class", "btn btn-danger d-inline", "id", "delete-btn", 3, "click", 4, "ngIf"], ["delete", ""], ["id", "save-btn", "value", "save", "class", "btn btn-success d-none", 3, "click", 4, "ngIf"], ["class", "btn btn-warning d-ilblock", "id", "edit-btn", 3, "click", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["editMode", ""], [4, "ngIf"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], ["id", "delete-btn", 1, "btn", "btn-danger", "d-inline", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["id", "save-btn", "value", "save", 1, "btn", "btn-success", "d-none", 3, "click"], [1, "fas", "fa-check"], ["id", "edit-btn", 1, "btn", "btn-warning", "d-ilblock", 3, "click"], [1, "fas", "fa-edit"], [1, "row"], [1, "col-12", "col-xl-6", "col-lg-6", "col-md-6", "d-flex", "justify-content-center", "flex-column"], [1, "form-group"], ["for", "opisProfila"], ["id", "opis", 1, "card-text"], [1, "col-12", "col-xl-6", "col-lg-6", "col-md-6", "d-flex", "justify-content-center"], ["src", "/assets/media/pics/profile_picture.png", "alt", "ProfilnaSlika", 1, "img-responsive", 2, "width", "200px", "height", "200px"], [1, "table-responsive"], ["id", "tabela-podatkov", 1, "table", "table-borderless"], ["id", "profile-podnaslov"], ["scope", "row", 1, "thPodatki"], ["id", "email"], ["id", "phone"], ["id", "status", 4, "ngIf"], ["id", "status"], ["id", "opis", "name", "opis", "type", "text", 1, "card-text", "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], ["id", "phone", "name", "telefonskaStevilka", "type", "number", 1, "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "statusInstruktorja", "name", "statusInstruktorja", "checked", "true", "value", "true", 3, "ngModel", "ngModelChange", "change"], [1, "tab", "pb-5"], [1, "tablinks", 3, "click"], ["id", "kronologija", 1, "tabcontent"], ["class", "justify-content-center", 4, "ngIf", "ngIfElse"], [1, "justify-content-center"], ["class", "table table-hover container-fluid", "id", "todo-list", 4, "ngIf"], ["niObveznosti", ""], ["id", "todo-list", 1, "table", "table-hover", "container-fluid"], ["id", "featuredEvents", 1, "thead-dark"], ["colspan", "3"], [1, "container-fluid", "text-light", "bg-dark"], ["scope", "col"], ["scope", "col", 1, "hour-column"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["scope", "row", 1, "hour-column"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], ["id", "featuredJobs", 1, "thead-dark"], ["scope", "row", "colspan", "3"], ["id", "moje-instrukcije", 1, "tabcontent"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_ng_template_5_Template, 13, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileComponent_button_8_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileComponent_div_10_Template, 33, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProfileComponent_ng_template_11_Template, 28, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfileComponent_div_14_Template, 6, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProfileComponent_div_15_Template, 6, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sporocilo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.uporabnik.ime, " ", ctx.uporabnik.priimek, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uporabnik && ctx.isAdmin && ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uporabnik && ctx.isAdmin && ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uporabnik && ctx.isAdmin && ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editState)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uporabnik && ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uporabnik && !ctx.isAdmin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["#profile-naslov[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n    font-size: 40px;\r\n  }\r\n  \r\n  #profile-podnaslov[_ngcontent-%COMP%] {\r\n    padding-left: 12px;\r\n  }\r\n  \r\n  .form-control[_ngcontent-%COMP%] {\r\n    resize: none;\r\n    width: 100%;\r\n  }\r\n  \r\n  #moznostiKontakta[_ngcontent-%COMP%] {\r\n    font-size: 20px\r\n  }\r\n  \r\n  \r\n  \r\n  .tab[_ngcontent-%COMP%] {\r\n    justify-content: space-between;\r\n    display: flex;\r\n  }\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .tab[_ngcontent-%COMP%] {\r\n      justify-content: space-between;\r\n      display: flex;\r\n    }\r\n    \r\n    .tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      padding: 10px 10px;\r\n      transition: 0.3s;\r\n      font-size: 17px;\r\n      background-color: white;\r\n      border: none;\r\n    }\r\n    #resetPassword[_ngcontent-%COMP%] {\r\n      margin-bottom: 1rem;\r\n    }\r\n    \r\n    .tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n      border-bottom: solid black;\r\n    }\r\n    \r\n    .tab[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\r\n      border-bottom: solid black;\r\n    }\r\n    \r\n    .tabcontent[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n    \r\n    .znacka[_ngcontent-%COMP%] {\r\n      font-size: 12px;\r\n      margin-left: 5px;\r\n      position: relative;\r\n      padding: 1px 6px;\r\n      border-radius: 50%;\r\n      background: red;\r\n      color: white;\r\n    }\r\n    \r\n    footer[_ngcontent-%COMP%] {\r\n      background-color: #292b2c;\r\n      position: absolute;\r\n      margin-top: 100px;\r\n      width: 100%;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      margin-bottom: 0;\r\n    }\r\n    #footer-icons[_ngcontent-%COMP%] {\r\n      margin-top: 20px;\r\n    }\r\n    #footer-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      margin: 10px;\r\n    }\r\n    \r\n    .d-inline[_ngcontent-%COMP%] {\r\n      margin: 10px;\r\n    }\r\n    .pb-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\r\n      padding-bottom: 1rem!important;\r\n    }\r\n    .text-uppercase[_ngcontent-%COMP%] {\r\n      margin-bottom: 25px;\r\n    }\r\n    .checked[_ngcontent-%COMP%] {\r\n      color: orange;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  .tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 10px 10px;\r\n    transition: 0.3s;\r\n    font-size: 17px;\r\n    background-color: white;\r\n    border: none;\r\n  }\r\n  \r\n  \r\n  \r\n  .tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    border-bottom: solid black;\r\n  }\r\n  \r\n  \r\n  \r\n  .tab[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\r\n    border-bottom: solid black;\r\n  }\r\n  \r\n  \r\n  \r\n  .tabcontent[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  \r\n  \r\n  .znacka[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin-left: 5px;\r\n    position: relative;\r\n    padding: 1px 6px;\r\n    border-radius: 50%;\r\n    background: red;\r\n    color: white;\r\n  }\r\n  \r\n  \r\n  \r\n  footer[_ngcontent-%COMP%] {\r\n    background-color: #292b2c;\r\n    position: absolute;\r\n    margin-top: 100px;\r\n    width: 100%;\r\n  }\r\n  \r\n  footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  #footer-icons[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  #footer-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n  }\r\n  \r\n  \r\n  \r\n  .d-inline[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n  }\r\n  \r\n  .pb-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\r\n    padding-bottom: 1rem!important;\r\n  }\r\n  \r\n  .text-uppercase[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  .checked[_ngcontent-%COMP%] {\r\n    color: orange;\r\n  }\r\n  \r\n  h5[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFO0VBQ0Y7O0VBR0Esa0JBQWtCOztFQUVsQjtJQUNFLDhCQUE4QjtJQUM5QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRTtNQUNFLDhCQUE4QjtNQUM5QixhQUFhO0lBQ2Y7SUFDQSxxQ0FBcUM7SUFDckM7TUFDRSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIsWUFBWTtJQUNkO0lBQ0E7TUFDRSxtQkFBbUI7SUFDckI7SUFDQSxnREFBZ0Q7SUFDaEQ7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQSwyQ0FBMkM7SUFDM0M7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQSwwQkFBMEI7SUFDMUI7TUFDRSxhQUFhO0lBQ2Y7SUFDQSxXQUFXO0lBQ1g7TUFDRSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixZQUFZO0lBQ2Q7SUFDQSxnQkFBZ0I7SUFDaEI7TUFDRSx5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixXQUFXO0lBQ2I7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQSx1QkFBdUI7SUFDdkI7TUFDRSxZQUFZO0lBQ2Q7SUFDQTs7TUFFRSw4QkFBOEI7SUFDaEM7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsYUFBYTtNQUNiLGNBQWM7SUFDaEI7RUFDRjs7RUFHQSxxQ0FBcUM7O0VBRXJDO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFHQSxnREFBZ0Q7O0VBRWhEO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUdBLDJDQUEyQzs7RUFFM0M7SUFDRSwwQkFBMEI7RUFDNUI7O0VBR0EsMEJBQTBCOztFQUUxQjtJQUNFLGFBQWE7RUFDZjs7RUFHQSxXQUFXOztFQUVYO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUdBLGdCQUFnQjs7RUFFaEI7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBR0EsdUJBQXVCOztFQUV2QjtJQUNFLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlLW5hc2xvdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgI3Byb2ZpbGUtcG9kbmFzbG92IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI21vem5vc3RpS29udGFrdGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSB0YWIgKi9cclxuICBcclxuICAudGFiIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudGFiIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cclxuICAgIC50YWIgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjcmVzZXRQYXNzd29yZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAvKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXHJcbiAgICAudGFiIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuICAgIC50YWIgYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXHJcbiAgICAudGFiY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAvKiBabmHEjWthICovXHJcbiAgICAuem5hY2thIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDFweCA2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAvKiBGb290ZXIgc3R5bGUqL1xyXG4gICAgZm9vdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmIyYztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBmb290ZXIgcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAjZm9vdGVyLWljb25zIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgICNmb290ZXItaWNvbnMgbGkge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICAvKiBNT0RJRklFRCBCT09UU1RSQVAgKi9cclxuICAgIC5kLWlubGluZSB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICAgIC5wYi01LFxyXG4gICAgLnB5LTUge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudGV4dC11cHBlcmNhc2Uge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmNoZWNrZWQge1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cclxuICBcclxuICAudGFiIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cclxuICBcclxuICAudGFiIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuICBcclxuICAudGFiIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xyXG4gIFxyXG4gIC50YWJjb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIFpuYcSNa2EgKi9cclxuICBcclxuICAuem5hY2thIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxcHggNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBGb290ZXIgc3R5bGUqL1xyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYjJjO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgZm9vdGVyIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3Rlci1pY29ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyLWljb25zIGxpIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogTU9ESUZJRUQgQk9PVFNUUkFQICovXHJcbiAgXHJcbiAgLmQtaW5saW5lIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBiLTUsXHJcbiAgLnB5LTUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0haW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGV4dC11cHBlcmNhc2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrZWQge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile',
                //or we can select as class ec '.app-profile' and in html say <div class='app-profile'></div>, but you cant select by id sadly, not supported in Angular
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css'] //but in that case we have to use just template, not templateUrl (pointing to somewhere else) and you can use `` to write it with new lines etc, just like you would in .html
            }]
    }], function () { return [{ type: _services_profil_service__WEBPACK_IMPORTED_MODULE_4__["ProfilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"] }, { type: _services_instructions_service__WEBPACK_IMPORTED_MODULE_7__["InstructionsService"] }, { type: src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "4KXK":
/*!*****************************************!*\
  !*** ./src/app/common/classes/cache.ts ***!
  \*****************************************/
/*! exports provided: BROWSER_CACHE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_CACHE", function() { return BROWSER_CACHE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const BROWSER_CACHE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Browser cache', {
    providedIn: 'root',
    factory: () => localStorage
});


/***/ }),

/***/ "4jLl":
/*!*******************************************************************!*\
  !*** ./src/app/common/components/jobs/offers/offers.component.ts ***!
  \*******************************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/jobs.service */ "XPrz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../get-started/get-started.component */ "ryiy");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "JMRq");









function OffersComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
} }
function OffersComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 24);
} }
function OffersComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.sporocilo);
} }
function OffersComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Podrobnosti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const delo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](delo_r5.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", delo_r5.opis, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/ponudba-del/delo/", delo_r5._id, "");
} }
const _c0 = function (a2) { return { id: "pagination", itemsPerPage: 10, currentPage: a2 }; };
function OffersComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OffersComponent_div_31_div_1_Template, 9, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "orderBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 4, ctx_r3.dela, ctx_r3.key, ctx_r3.reverse), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r3.page)));
} }
class OffersComponent {
    constructor(jobsService) {
        this.jobsService = jobsService;
        this.sporocilo = "";
        this.page = 1;
        this.key = 'id';
        this.reverse = false;
    }
    ngOnInit() {
        this.getJobs();
    }
    isci() {
        var filter, list, a, txtValue, search;
        search = document.getElementById("search");
        list = document.getElementsByClassName("card");
        filter = search.value.toUpperCase();
        let i;
        for (i = 0; i < list.length; i++) {
            a = list[i].getElementsByClassName("card-title")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                list[i].style.display = "";
            }
            else {
                list[i].style.display = "none";
            }
        }
    }
    getJobs() {
        this.jobsService.getJobs()
            .then(jobs => {
            this.dela = jobs.reverse();
            this.sporocilo = jobs.length > 0 ? "" : "Ne najdem nobenega dela :(";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri iskanju del.";
            // console.error(error);
        });
    }
    sort() {
        this.key = this.getSelectValue();
    }
    reverseSet() {
        this.reverse = !this.reverse;
    }
    getSelectValue() {
        return document.getElementById('razvrsti').value;
    }
}
OffersComponent.ɵfac = function OffersComponent_Factory(t) { return new (t || OffersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_jobs_service__WEBPACK_IMPORTED_MODULE_1__["JobsService"])); };
OffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OffersComponent, selectors: [["app-offers"]], decls: 36, vars: 4, consts: [["id", "job-header", 1, "container"], [1, "bg-info"], ["id", "filter-bar", 1, "container"], [1, "filter-item"], ["for", "razvrsti"], ["name", "razvrsti", "id", "razvrsti", 1, "form-control"], ["value", ""], ["value", "datum"], ["value", "naziv"], ["value", "cena"], ["id", "filter-btn", "value", "Filtriraj", "click", "sort()", 1, "btn", "btn-light"], [1, "btn", "btn-light", "btn-order", 2, "cursor", "pointer", 3, "click"], ["class", "fas fa-long-arrow-alt-up", 4, "ngIf"], ["class", "fas fa-long-arrow-alt-down", 4, "ngIf"], [1, "input-group", "mb-3", "container"], ["id", "search", "type", "text", "placeholder", "Vpi\u0161i \u017Eeleno iskanje", "aria-label", "Iskanje", "aria-describedby", "search-button", 1, "form-control", 3, "keyup"], [1, "input-group-append"], ["type", "button", "id", "search-button", 1, "btn", "btn-outline-secondary", "btn-info"], [1, "new-job", "container"], ["routerLink", "dodaj", 1, "btn", "btn-success"], ["class", "alert alert-warning container", "style", "margin-top: 2rem", 4, "ngIf"], ["id", "instructors", "class", "container", 4, "ngIf"], ["id", "pagination", "maxSize", "5", "directionLinks", "true", 1, "pagination", 3, "pageChange"], [1, "fas", "fa-long-arrow-alt-up"], [1, "fas", "fa-long-arrow-alt-down"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], ["id", "instructors", 1, "container"], ["class", "card instructor", "style", "width: 18rem;", 4, "ngFor", "ngForOf"], [1, "card", "instructor", 2, "width", "18rem"], ["src", "../../../assets/media/thumbnails/red.png", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text", 2, "height", "2rem", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function OffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seznam ponudbe del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Razvrsti po:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Izberi filter...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Datumu)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Imenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ceni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Filtriraj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OffersComponent_Template_button_click_19_listener() { return ctx.reverseSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OffersComponent_i_20_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OffersComponent_i_21_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function OffersComponent_Template_input_keyup_23_listener() { return ctx.isci(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "I\u0161\u010Di");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ustvari novo ponudbo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OffersComponent_div_30_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OffersComponent_div_31_Template, 4, 10, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pagination-controls", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function OffersComponent_Template_pagination_controls_pageChange_33_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "get-started");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sporocilo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dela);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__["GetStartedComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderPipe"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n.myCol[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    cursor: pointer;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.img-responsive[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 15vw;\r\n    object-fit: cover;\r\n    transition: 0.2s ease-in-out;\r\n    transform: scale(1.00);\r\n  }\r\n\r\n.predmetText[_ngcontent-%COMP%]{\r\n    display: inline-block; \r\n    position: absolute; \r\n    top: 50%; \r\n    left: 50%; \r\n    transform: translate(-50%,-50%);\r\n    padding: 0px 5px;\r\n    background-color: rgba(255,255,255,0.5);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    border-radius: 8px;\r\n    font-size: 27px;\r\n    color: black;\r\n    font-family: 'Work Sans', sans-serif;\r\n    }\r\n\r\na[_ngcontent-%COMP%]:hover   .list-thumbnail[_ngcontent-%COMP%] {\r\n    transition: 0.2s ease-in-out;\r\n    transform: scale(1.05);\r\n  }\r\n\r\n.predmetText[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(255,255,255,0.2);\r\n    transition: 0.2s ease-in-out;\r\n  }\r\n\r\n#check-event-list[_ngcontent-%COMP%] {\r\n    margin-left: 50%;\r\n    transform: translate(-50%);\r\n  }\r\n\r\n#filter-bar[_ngcontent-%COMP%] {\r\n    background-color: rgb(212, 212, 212);\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n.filter-item[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 33%;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 7px;\r\n  }\r\n\r\n#search-bar[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n\r\n.instructor[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 30% !important;\r\n    margin: 0.8rem;\r\n  }\r\n\r\n.instructor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 5rem;\r\n    object-fit: cover;\r\n  }\r\n\r\n#instructors[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    padding: 0;\r\n  }\r\n\r\n#tab[_ngcontent-%COMP%] {\r\n  background-color: aliceblue;\r\n  text-align: center;\r\n  height: 3rem;\r\n  width: 100%;\r\n  padding: 0;\r\n}\r\n\r\n#tab[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 49%;\r\n  background-color: antiquewhite;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  padding-right: 0;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  padding: 1rem;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-left-border[_ngcontent-%COMP%] {\r\n  border-radius: 0.5rem 0 0 0.5rem;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-right-border[_ngcontent-%COMP%] {\r\n  border-radius: 0 0.5rem 0.5rem 0;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-inactive-bg[_ngcontent-%COMP%] {\r\n  background-color: rgb(226, 226, 226);\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  font-size: x-large;\r\n  color: white;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-inactive-bg[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(102, 102, 102);\r\n}\r\n\r\n#job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #job-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin: 1rem;\r\n}\r\n\r\n#job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  color: white;\r\n  margin: 0;\r\n  margin-top: 2rem;\r\n  width: 100%;\r\n}\r\n\r\n#job-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin-bottom: 2rem;\r\n  padding: 0;\r\n}\r\n\r\n.load-more[_ngcontent-%COMP%] {\r\n  display: table;\r\n  margin-left: 50%;\r\n  transform: translate(-50%);\r\n  margin-top: 2rem;\r\n}\r\n\r\n.load-more[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  color: black;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n#filter-bar[_ngcontent-%COMP%] {\r\n  background-color: rgb(158, 214, 255);\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n#razvrsti[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  height: 3rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n#filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 0.5rem;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n#filter-btn[_ngcontent-%COMP%] {\r\n  height: 3rem;\r\n  margin-left: 1rem !important;\r\n}\r\n\r\n.btn-order[_ngcontent-%COMP%] {\r\n  width: 3rem;\r\n  height: 3rem;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .filter-item[_ngcontent-%COMP%] {\r\n      width: 49%;\r\n  }\r\n  \r\n  .instructor[_ngcontent-%COMP%] {\r\n    width: 46% !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .instructor[_ngcontent-%COMP%] {\r\n    width: 95% !important;\r\n    margin: 0;\r\n    margin-bottom: 0.8rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n  #ins-nav[_ngcontent-%COMP%]   .nav-item-right-border[_ngcontent-%COMP%], #ins-nav[_ngcontent-%COMP%]   .nav-item-left-border[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 0 0;\r\n  }\r\n\r\n  #ins-nav[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  #filter-bar[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n  }\r\n\r\n  #job-header[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    border-radius: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEM7O0FBRUY7SUFDRSw0QkFBNEI7SUFDNUIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtFQUM5Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQiwwQkFBMEI7RUFDNUI7O0FBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7O0FBRUY7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtNQUNJLFVBQVU7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsU0FBUztJQUNULHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoib2ZmZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4ubXlDb2x7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuICBcclxuICAuaW1nLXJlc3BvbnNpdmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTV2dztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVkbWV0VGV4dHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgdG9wOiA1MCU7IFxyXG4gICAgbGVmdDogNTAlOyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgYTpob3ZlciAubGlzdC10aHVtYm5haWwge1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVkbWV0VGV4dDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAjY2hlY2stZXZlbnQtbGlzdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgfVxyXG5cclxuICAjZmlsdGVyLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcblxyXG4gICNzZWFyY2gtYmFyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuaW5zdHJ1Y3RvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAuOHJlbTtcclxuICB9XHJcblxyXG4gIC5pbnN0cnVjdG9yIGltZyB7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gICNpbnN0cnVjdG9ycyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4jdGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jdGFiIGg0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbn1cclxuXHJcbiNpbnMtbmF2IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuI2lucy1uYXYgLm5hdi1pdGVtIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiNpbnMtbmF2IC5uYXYtaXRlbS1sZWZ0LWJvcmRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAgMCAwLjVyZW07XHJcbn1cclxuXHJcbiNpbnMtbmF2IC5uYXYtaXRlbS1yaWdodC1ib3JkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMC41cmVtIDAuNXJlbSAwO1xyXG59XHJcblxyXG4jaW5zLW5hdiAubmF2LWl0ZW0taW5hY3RpdmUtYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxufVxyXG5cclxuI2lucy1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2lucy1uYXYgLm5hdi1pdGVtLWluYWN0aXZlLWJnOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbiNqb2ItaGVhZGVyIGgyLCAjam9iLWhlYWRlciBhIHtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbiNqb2ItaGVhZGVyIGgyIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNqb2ItaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubG9hZC1tb3JlIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5sb2FkLW1vcmUgaDM6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2ZpbHRlci1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDIxNCwgMjU1KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbiNyYXp2cnN0aSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuI2ZpbHRlci1iYXIgYnV0dG9uIHtcclxuICBtYXJnaW46IDAuNXJlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbiNmaWx0ZXItYnRuIHtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1vcmRlciB7XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmZpbHRlci1pdGVtIHtcclxuICAgICAgd2lkdGg6IDQ5JTtcclxuICB9XHJcbiAgXHJcbiAgLmluc3RydWN0b3Ige1xyXG4gICAgd2lkdGg6IDQ2JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5pbnN0cnVjdG9yIHtcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAjaW5zLW5hdiAubmF2LWl0ZW0tcmlnaHQtYm9yZGVyLCAjaW5zLW5hdiAubmF2LWl0ZW0tbGVmdC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcclxuICB9XHJcblxyXG4gICNpbnMtbmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgI2ZpbHRlci1iYXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gICNqb2ItaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNqb2ItaGVhZGVyIGgyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-offers',
                templateUrl: './offers.component.html',
                styleUrls: ['./offers.component.css']
            }]
    }], function () { return [{ type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_1__["JobsService"] }]; }, null); })();


/***/ }),

/***/ "7eRl":
/*!*********************************************************!*\
  !*** ./src/app/common/pipes/sortiraj-sporocila.pipe.ts ***!
  \*********************************************************/
/*! exports provided: SortirajSporocilaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortirajSporocilaPipe", function() { return SortirajSporocilaPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SortirajSporocilaPipe {
    transform(pridobljeniPodatki, idPrejemnika) {
        // u s t v a r i   a r r a y   s p o r o c i l //
        var matchingSporocila = new Array();
        var stevec = 0;
        for (var i = 0; i < pridobljeniPodatki.prviUser.poslanaSporocila.length; i++) {
            if (pridobljeniPodatki.prviUser.poslanaSporocila[i].prejemnikSporocila == pridobljeniPodatki.drugiUser._id) {
                matchingSporocila[stevec] = pridobljeniPodatki.prviUser.poslanaSporocila[i];
                stevec++;
            }
        }
        for (var i = 0; i < pridobljeniPodatki.drugiUser.poslanaSporocila.length; i++) {
            if (pridobljeniPodatki.drugiUser.poslanaSporocila[i].prejemnikSporocila == pridobljeniPodatki.prviUser._id) {
                matchingSporocila[stevec] = pridobljeniPodatki.drugiUser.poslanaSporocila[i];
                stevec++;
            }
        }
        if (matchingSporocila.length == 0) {
            matchingSporocila[0] = "Z osebo še nimate pogovora. Pošli novo sporočilo.";
            return matchingSporocila;
        }
        var sortedSporocila = matchingSporocila.sort(function (a, b) {
            var dateA = new Date(a.cas), dateB = new Date(b.cas);
            return dateA.getTime() - dateB.getTime();
        });
        return sortedSporocila;
    }
}
SortirajSporocilaPipe.ɵfac = function SortirajSporocilaPipe_Factory(t) { return new (t || SortirajSporocilaPipe)(); };
SortirajSporocilaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sortirajSporocila", type: SortirajSporocilaPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortirajSporocilaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sortirajSporocila'
            }]
    }], null, null); })();


/***/ }),

/***/ "8FOs":
/*!*************************************************************************!*\
  !*** ./src/app/common/components/chat/sporocila/sporocila.component.ts ***!
  \*************************************************************************/
/*! exports provided: SporocilaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SporocilaComponent", function() { return SporocilaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pipes_sortiraj_sporocila_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/sortiraj-sporocila.pipe */ "7eRl");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "inT+");
/* harmony import */ var src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/authentication.service */ "xpqA");
/* harmony import */ var _kontakti_kontakti_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kontakti/kontakti.component */ "bHB8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_cas_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/cas.pipe */ "/yQE");










function SporocilaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.obrazecNapaka, " ");
} }
function SporocilaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Z osebo \u0161e nimate pogovora. Po\u0161lji sporo\u010Dilo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SporocilaComponent_div_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "cas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sporocilo_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sporocilo_r4.besedilo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, sporocilo_r4.cas));
} }
function SporocilaComponent_div_4_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "cas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sporocilo_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sporocilo_r4.besedilo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, sporocilo_r4.cas));
} }
function SporocilaComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SporocilaComponent_div_4_div_1_div_1_Template, 9, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SporocilaComponent_div_4_div_1_div_2_Template, 9, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sporocilo_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sporocilo_r4.prejemnikSporocila === ctx_r3.idPrejemnika);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sporocilo_r4.prejemnikSporocila != ctx_r3.idPrejemnika);
} }
function SporocilaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SporocilaComponent_div_4_div_1_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sporocila);
} }
class SporocilaComponent {
    constructor(sortirajPipe, chatStoritev, authenticationService, kontaktiComponent) {
        this.sortirajPipe = sortirajPipe;
        this.chatStoritev = chatStoritev;
        this.authenticationService = authenticationService;
        this.kontaktiComponent = kontaktiComponent;
        this.nimasSporocil = false;
        this.novoSporocilo = {
            besedilo: '',
            prejemnikSporocila: ''
        };
    }
    dodajNovoSporocilo() {
        this.obrazecNapaka = "";
        if (this.soPodatkiUstrezni()) {
            this.chatStoritev
                .posljiSporocilo(this.authenticationService.getCurrentUser().email, this.novoSporocilo)
                .then(sporocilo => {
                // console.log("Sporocilo shranjeno", sporocilo);
                if (this.sporocila === 'Z osebo še nimate pogovora. Pošli novo sporočilo.')
                    this.sporocila = null;
                //this.sporocila.push(this.novoSporocilo.besedilo);
                this.novoSporocilo.besedilo = '';
                this.kontaktiComponent.kliciPridobiSporocila(this.idPrejemnika);
            })
                .catch(napaka => this.obrazecNapaka = napaka);
        }
        else {
            this.obrazecNapaka = "Prosim vnesite sporočilo";
        }
    }
    soPodatkiUstrezni() {
        if (this.novoSporocilo.besedilo && this.novoSporocilo.prejemnikSporocila) {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnChanges() {
        this.idPrejemnika = this.sporocila.drugiUser._id;
        this.sporocila = this.sortirajPipe.transform(this.sporocila, this.sporocila.drugiUser._id);
        this.novoSporocilo.prejemnikSporocila = this.idPrejemnika;
        if ((this.sporocila[0]) == 'Z osebo še nimate pogovora. Pošli novo sporočilo.') {
            this.nimasSporocil = true;
        }
        else {
            this.nimasSporocil = false;
        }
    }
}
SporocilaComponent.ɵfac = function SporocilaComponent_Factory(t) { return new (t || SporocilaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pipes_sortiraj_sporocila_pipe__WEBPACK_IMPORTED_MODULE_1__["SortirajSporocilaPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_kontakti_kontakti_component__WEBPACK_IMPORTED_MODULE_4__["KontaktiComponent"])); };
SporocilaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SporocilaComponent, selectors: [["app-sporocila"]], inputs: { sporocila: "sporocila" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pipes_sortiraj_sporocila_pipe__WEBPACK_IMPORTED_MODULE_1__["SortirajSporocilaPipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 4, consts: [["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["id", "messages", 1, "container-fluid", 2, "height", "60vh"], [1, "message-recieved"], ["class", "alert alert-secondary", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["method", "post", 1, "formClass", 2, "position", "fixed", "bottom", "0", 3, "ngSubmit"], ["id", "input-bar", 1, "container-fluid"], [1, "input-group"], ["type", "text", "placeholder", "Napi\u0161ite sporo\u010Dilo...", "autocomplete", "off", "aria-label", "", "aria-describedby", "basic-addon1", "name", "besedilo", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-info", 2, "border-radius", "0", "background-color", "white", "width", "3rem", "border-color", "#ced4da"], [1, "fas", "fa-paperclip", 2, "color", "#6d757d"], ["type", "submit", 1, "btn", "btn-info", 2, "border-radius", "0"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-secondary"], [4, "ngFor", "ngForOf"], ["id", "fotrSporocil"], [1, "msg_moj_zunanji"], [1, "msg_moj"], [1, "msg_time_moj"], [1, "msg_dobljen_zunanji"], [1, "msg_dobljen"], [1, "msg_time_dobljen"]], template: function SporocilaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SporocilaComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SporocilaComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SporocilaComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SporocilaComponent_Template_form_ngSubmit_5_listener() { return ctx.dodajNovoSporocilo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SporocilaComponent_Template_input_ngModelChange_8_listener($event) { return ctx.novoSporocilo.besedilo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Po\u0161lji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.obrazecNapaka);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nimasSporocil);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nimasSporocil);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.novoSporocilo.besedilo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_pipes_cas_pipe__WEBPACK_IMPORTED_MODULE_7__["CasPipe"]], styles: ["#chatbox[_ngcontent-%COMP%] {\r\n    border: 1px transparent solid;\r\n    border-radius: 0 0 0.5rem 0.5rem;\r\n    position: relative;\r\n}\r\n\r\n.message-wrap[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: 0;\r\n    background-color: aliceblue;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n#messages[_ngcontent-%COMP%] {\r\n    height: 20rem;\r\n    overflow-y: auto;\r\n    border-radius: 0.5rem 0.5rem 0 0;\r\n    padding: 0;\r\n    background-color: #f0f8ff;\r\n    position: relative;\r\n}\r\n\r\n.msg_moj[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-right: 10px;\r\n    border-radius: 25px;\r\n    background-color: #82ccdd;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: black;\r\n    text-align: end;\r\n}\r\n\r\n.msg_dobljen[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-right: 10px;\r\n    border-radius: 25px;\r\n    background-color: #78e08f;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: black;\r\n}\r\n\r\n.msg_time_moj[_ngcontent-%COMP%]{\r\n    font-size: 10px;\r\n    color: rgb(192, 192, 192);\r\n    margin-right: 10px;\r\n}\r\n\r\n.msg_time_dobljen[_ngcontent-%COMP%]{\r\n    font-size: 10px;\r\n    color: rgb(192, 192, 192);\r\n    margin-left: 10px;\r\n}\r\n\r\n.msg_moj_zunanji[_ngcontent-%COMP%]{\r\n    text-align: end; \r\n    margin-right: 5px;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.msg_dobljen_zunanji[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.formClass[_ngcontent-%COMP%] {\r\n    width: 100%; \r\n}\r\n\r\n#input-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3JvY2lsYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3Bvcm9jaWxhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhdGJveCB7XHJcbiAgICBib3JkZXI6IDFweCB0cmFuc3BhcmVudCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjVyZW0gMC41cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbWVzc2FnZXMge1xyXG4gICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubXNnX21vantcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MmNjZGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4ubXNnX2RvYmxqZW57XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhlMDhmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1zZ190aW1lX21vantcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tc2dfdGltZV9kb2JsamVue1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubXNnX21val96dW5hbmppe1xyXG4gICAgdGV4dC1hbGlnbjogZW5kOyBcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4ubXNnX2RvYmxqZW5fenVuYW5qaXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtQ2xhc3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG59XHJcblxyXG4jaW5wdXQtYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SporocilaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sporocila',
                templateUrl: './sporocila.component.html',
                styleUrls: ['./sporocila.component.css'],
                providers: [_pipes_sortiraj_sporocila_pipe__WEBPACK_IMPORTED_MODULE_1__["SortirajSporocilaPipe"]]
            }]
    }], function () { return [{ type: _pipes_sortiraj_sporocila_pipe__WEBPACK_IMPORTED_MODULE_1__["SortirajSporocilaPipe"] }, { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _kontakti_kontakti_component__WEBPACK_IMPORTED_MODULE_4__["KontaktiComponent"] }]; }, { sporocila: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AF3o":
/*!*************************************************************************************!*\
  !*** ./src/app/common/components/instructions/instructors/instructors.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InstructorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorsComponent", function() { return InstructorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_instructions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/instructions.service */ "sm0C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../get-started/get-started.component */ "ryiy");







function InstructorsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.sporocilo, "\n");
} }
function InstructorsComponent_span_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Preveri profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instruktor_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", instruktor_r2.ime, " ", instruktor_r2.priimek, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", instruktor_r2.opis, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profil/", instruktor_r2.email, "");
} }
function InstructorsComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstructorsComponent_span_14_div_1_Template, 9, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instruktor_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", instruktor_r2.statusInstruktorja);
} }
const _c0 = function (a2) { return { id: "pagination", itemsPerPage: 10, currentPage: a2 }; };
class InstructorsComponent {
    constructor(instructionsService) {
        this.instructionsService = instructionsService;
        this.sporocilo = "";
        this.page = 1;
    }
    ngOnInit() {
        this.getInstructors();
    }
    isci() {
        var filter, list, a, txtValue, search;
        search = document.getElementById("search");
        list = document.getElementsByClassName("card");
        filter = search.value.toUpperCase();
        let i;
        for (i = 0; i < list.length; i++) {
            a = list[i].getElementsByClassName("card-title")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                list[i].style.display = "";
            }
            else {
                list[i].style.display = "none";
            }
        }
    }
    getInstructors() {
        this.instructionsService.getInstructors()
            .then(users => {
            this.instruktorji = users.reverse();
            this.sporocilo = users.length > 0 ? "" : "Ne najdem nobenega inštruktorja :(";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri iskanju inštruktorjev.";
            // console.error(error);
        });
    }
}
InstructorsComponent.ɵfac = function InstructorsComponent_Factory(t) { return new (t || InstructorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_instructions_service__WEBPACK_IMPORTED_MODULE_1__["InstructionsService"])); };
InstructorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructorsComponent, selectors: [["app-instructors"]], decls: 20, vars: 7, consts: [["id", "ins-nav", 1, "nav", "container"], [1, "nav-item", "nav-item-left-border", "bg-info"], ["routerLink", "/instruktorji", 1, "nav-link", "active"], [1, "nav-item", "nav-item-inactive-bg", "nav-item-right-border"], ["routerLink", "/instrukcije-dogodki", 1, "nav-link"], [1, "input-group", "mb-3", "container"], ["id", "search", "type", "text", "placeholder", "Poi\u0161\u010Di in\u0161truktorja...", "aria-label", "Iskanje", "aria-describedby", "search-button", 1, "form-control", 3, "keyup"], [1, "input-group-append"], ["type", "button", "id", "search-button", 1, "btn", "btn-outline-secondary", "btn-info"], ["class", "alert alert-warning container", "style", "margin-top: 2rem;", 4, "ngIf"], ["id", "instructors", 1, "container"], [4, "ngFor", "ngForOf"], ["id", "pagination", "maxSize", "5", "directionLinks", "true", 1, "pagination", 3, "pageChange"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], ["class", "card instructor", "style", "width: 18rem;", 4, "ngIf"], [1, "card", "instructor", 2, "width", "18rem"], ["src", "../../../../../assets/media/thumbnails/blue.png", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title", 2, "overflow", "hidden", "text-overflow", "ellipsis"], [1, "card-text"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function InstructorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "In\u0161truktorji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dogodki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InstructorsComponent_Template_input_keyup_8_listener() { return ctx.isci(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I\u0161\u010Di");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InstructorsComponent_div_12_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InstructorsComponent_span_14_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pagination-controls", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function InstructorsComponent_Template_pagination_controls_pageChange_17_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "get-started");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sporocilo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 2, ctx.instruktorji, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.page)));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_5__["GetStartedComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n.myCol[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    cursor: pointer;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%], .card-text[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.img-responsive[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 15vw;\r\n    object-fit: cover;\r\n    transition: 0.2s ease-in-out;\r\n    transform: scale(1.00);\r\n  }\r\n\r\n.predmetText[_ngcontent-%COMP%]{\r\n    display: inline-block; \r\n    position: absolute; \r\n    top: 50%; \r\n    left: 50%; \r\n    transform: translate(-50%,-50%);\r\n    padding: 0px 5px;\r\n    background-color: rgba(255,255,255,0.5);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    border-radius: 8px;\r\n    font-size: 27px;\r\n    color: black;\r\n    font-family: 'Work Sans', sans-serif;\r\n    }\r\n\r\na[_ngcontent-%COMP%]:hover   .list-thumbnail[_ngcontent-%COMP%] {\r\n    transition: 0.2s ease-in-out;\r\n    transform: scale(1.05);\r\n  }\r\n\r\n.predmetText[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(255,255,255,0.2);\r\n    transition: 0.2s ease-in-out;\r\n  }\r\n\r\n#check-event-list[_ngcontent-%COMP%] {\r\n    margin-left: 50%;\r\n    transform: translate(-50%);\r\n  }\r\n\r\n#filter-bar[_ngcontent-%COMP%] {\r\n    background-color: rgb(212, 212, 212);\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n.filter-item[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 33%;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 7px;\r\n  }\r\n\r\n#search-bar[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n\r\n.instructor[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 30% !important;\r\n    margin: 0.8rem;\r\n  }\r\n\r\n.instructor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 5rem;\r\n    object-fit: cover;\r\n  }\r\n\r\n#instructors[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    padding: 0;\r\n  }\r\n\r\n#tab[_ngcontent-%COMP%] {\r\n  background-color: aliceblue;\r\n  text-align: center;\r\n  height: 3rem;\r\n  width: 100%;\r\n  padding: 0;\r\n}\r\n\r\n#tab[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 49%;\r\n  background-color: antiquewhite;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  padding-right: 0;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  padding: 1rem;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-left-border[_ngcontent-%COMP%] {\r\n  border-radius: 0.5rem 0 0 0.5rem;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-right-border[_ngcontent-%COMP%] {\r\n  border-radius: 0 0.5rem 0.5rem 0;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-inactive-bg[_ngcontent-%COMP%] {\r\n  background-color: rgb(226, 226, 226);\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  font-size: x-large;\r\n  color: white;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-inactive-bg[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(102, 102, 102);\r\n}\r\n\r\n#job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #job-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin: 1rem;\r\n}\r\n\r\n#job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  color: white;\r\n  margin: 0;\r\n  margin-top: 2rem;\r\n  width: 100%;\r\n}\r\n\r\n#job-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin-bottom: 2rem;\r\n  padding: 0;\r\n}\r\n\r\n.load-more[_ngcontent-%COMP%] {\r\n  display: table;\r\n  margin-left: 50%;\r\n  transform: translate(-50%);\r\n  margin-top: 2rem;\r\n}\r\n\r\n.load-more[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  color: black;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .filter-item[_ngcontent-%COMP%] {\r\n      width: 49%;\r\n  }\r\n  \r\n  .instructor[_ngcontent-%COMP%] {\r\n    width: 46% !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .instructor[_ngcontent-%COMP%] {\r\n    width: 95% !important;\r\n    margin: 0;\r\n    margin-bottom: 0.8rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n  #ins-nav[_ngcontent-%COMP%]   .nav-item-right-border[_ngcontent-%COMP%], #ins-nav[_ngcontent-%COMP%]   .nav-item-left-border[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 0 0;\r\n  }\r\n\r\n  #ins-nav[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  #filter-bar[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n  }\r\n\r\n  #job-header[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    border-radius: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0b3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDOztBQUVGO0lBQ0UsNEJBQTRCO0lBQzVCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLHVDQUF1QztJQUN2Qyw0QkFBNEI7RUFDOUI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0VBQzVCOztBQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztBQUVGO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7TUFDSSxVQUFVO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6Imluc3RydWN0b3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4ubXlDb2x7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlLCAuY2FyZC10ZXh0IHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuICBcclxuICAuaW1nLXJlc3BvbnNpdmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTV2dztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVkbWV0VGV4dHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgdG9wOiA1MCU7IFxyXG4gICAgbGVmdDogNTAlOyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgYTpob3ZlciAubGlzdC10aHVtYm5haWwge1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVkbWV0VGV4dDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAjY2hlY2stZXZlbnQtbGlzdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgfVxyXG5cclxuICAjZmlsdGVyLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcblxyXG4gICNzZWFyY2gtYmFyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuaW5zdHJ1Y3RvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAuOHJlbTtcclxuICB9XHJcblxyXG4gIC5pbnN0cnVjdG9yIGltZyB7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gICNpbnN0cnVjdG9ycyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4jdGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jdGFiIGg0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbn1cclxuXHJcbiNpbnMtbmF2IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuI2lucy1uYXYgLm5hdi1pdGVtIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiNpbnMtbmF2IC5uYXYtaXRlbS1sZWZ0LWJvcmRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAgMCAwLjVyZW07XHJcbn1cclxuXHJcbiNpbnMtbmF2IC5uYXYtaXRlbS1yaWdodC1ib3JkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMC41cmVtIDAuNXJlbSAwO1xyXG59XHJcblxyXG4jaW5zLW5hdiAubmF2LWl0ZW0taW5hY3RpdmUtYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxufVxyXG5cclxuI2lucy1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2lucy1uYXYgLm5hdi1pdGVtLWluYWN0aXZlLWJnOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbiNqb2ItaGVhZGVyIGgyLCAjam9iLWhlYWRlciBhIHtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbiNqb2ItaGVhZGVyIGgyIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNqb2ItaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubG9hZC1tb3JlIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5sb2FkLW1vcmUgaDM6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5maWx0ZXItaXRlbSB7XHJcbiAgICAgIHdpZHRoOiA0OSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnN0cnVjdG9yIHtcclxuICAgIHdpZHRoOiA0NiUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuaW5zdHJ1Y3RvciB7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgI2lucy1uYXYgLm5hdi1pdGVtLXJpZ2h0LWJvcmRlciwgI2lucy1uYXYgLm5hdi1pdGVtLWxlZnQtYm9yZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XHJcbiAgfVxyXG5cclxuICAjaW5zLW5hdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICNmaWx0ZXItYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAjam9iLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjam9iLWhlYWRlciBoMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instructors',
                templateUrl: './instructors.component.html',
                styleUrls: ['./instructors.component.css']
            }]
    }], function () { return [{ type: _services_instructions_service__WEBPACK_IMPORTED_MODULE_1__["InstructionsService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cb+/":
/*!****************************************************************!*\
  !*** ./src/app/common/components/landing/landing.component.ts ***!
  \****************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 93, vars: 0, consts: [["id", "hero"], ["loop", "", "muted", "", "autoplay", "", "poster", "../../../assets/media/backgrounds/welcome_poster.png"], ["src", "../../../assets/media/backgrounds/welcome_video.mp4", "type", "video/mp4"], [1, "welcome-content", "d-flex", "align-items-center"], ["id", "motto", 1, "container", "text-light", "text-center"], [1, "container-fluid", "text-light", "text-center", "middle-content"], [1, "row", "container-fluid", "linkBox"], [1, "col"], ["routerLink", "instruktorji", 1, "container-fluid", "bg-info", "link"], [1, "label"], [1, "container-fluid", "form-container", "middle-content", 2, "padding-bottom", "20px"], [1, "row"], [1, "col-md-6", "mx-auto"], [1, "formSign", "form"], [1, "logo", "mb-3"], [1, "col-md-12", "text-center"], ["src", "../../../assets/media/pics/instruktor.png", 1, "mx-auto", "d-block", 2, "width", "50%", "padding-bottom", "15px"], ["routerLink", "registracija", "id", "signup"], ["src", "../../../assets/media/pics/ucenec.png", 1, "mx-auto", "d-block", 2, "width", "50%", "padding-bottom", "15px"], ["routerLink", "ponudba-del", 1, "container-fluid", "bg-info", "link"], [1, "container-fluid", "form-container", "middle-content", 2, "padding-bottom", "40px"], ["src", "../../../assets/media/pics/delo.png", 1, "mx-auto", "d-block", 2, "width", "50%", "padding-bottom", "15px"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pove\u017Eimo znanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Svet stoji na mladih, ampak tudi ti potrebujejo podporo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ne dovoli trenutnemu epidemiolo\u0161kem stanju, da te spravi na kolena. Pove\u017Ei se s kolegi in raz\u0161iri obseg znanja. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Pridi do zaslu\u017Eka na podro\u010Dju tvojega \u0161tudija in pomagaj sovrstnikom dose\u010Di svoje cilje. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "In\u0161trukcije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Potrebuje\u0161 pomo\u010D pri u\u010Denju te\u017Ejega predmeta? Preveri seznam dosegljivih in\u0161truktorjev in se dogovori za pomo\u010D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Postani in\u0161truktor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Obvlada\u0161 katerega izmed \u0161olskih predmetov, si pripravljen deliti svoje znanje ter pomagati drugim?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Vse kar mora\u0161 narediti je, da se registrira\u0161 (ozna\u010Di\u0161 da \u017Eeli\u0161 biti in\u0161truktor) in si uredi\u0161 svoj profil, da bodo ostali lahko videli katere predmete obvlada\u0161. Nato objavi\u0161 ponudbo, v katero doda\u0161 link do svoje Zoom konference in po\u010Daka\u0161 u\u010Dence, da se prijavijo na tvoje in\u0161trukcije. Na svoji ponudbi lahko nastavi\u0161 ceno, seveda pa lahko pomaga\u0161 brezpla\u010Dno. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bi se rad preizkusil v vlogi in\u0161truktorja oziroma si \u017Ee stari znanec in\u0161tuiranja? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Pridru\u017Ei se zdaj!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Postani u\u010Denec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Ima\u0161 te\u017Eave v \u0161oli in bi rad dobil dodatno razlago snovi, ali \u017Eeli\u0161 izvedeti \u0161e ve\u010D o tem podro\u010Dju?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Si zaradi aktualnega virusa zaostal za snovjo v \u0161oli? So ti Arnesove te\u017Eave s serverji zme\u0161ale \u0161trene? Ustvarili smo portal, da te te\u017Eave odpravimo. Bi rad poiskal pomo\u010D pri in\u0161truktorjih, pa zaradi najnovej\u0161ih ukrepov ne sme\u0161 zapustiti lastne hi\u0161e? Pri nas vse poteka brezsti\u010Dno in na daljavo. Registriraj se in preveri ponudbo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Se najde\u0161 v zgornjem poklicu in \u017Eeli\u0161 raz\u0161iri znanje? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Pridru\u017Ei se zdaj!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Ponudba del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "I\u0161\u010De\u0161 zaslu\u017Eek ali \u017Eeli\u0161 pomagati s svojim znanjem? Preglej si ponudbo del in dogovori se s ponudnikom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sodeluj v projektih");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "I\u0161\u010De\u0161 dodaten zaslu\u017Eek ali nove izzive?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Podjetja in posamezniki v Sloveniji i\u0161\u010Dejo ljudi, ki bi jim pomagail izpeljati razne projekte oziroma opravila, za ketere jim zmanjka \u010Dasa. \u010Ce ima\u0161 ti svojega \u010Dasa preve\u010D, se hitro registriraj in preveri ponudbe za delo, saj lahko z delom raz\u0161iri\u0161 svoje znanje in zraven tega tudi nekaj zaslu\u017Ei\u0161. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Preveri seznam del in projektov. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Pridru\u017Ei se zdaj!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n\r\n\r\n#hero[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n\r\n#hero[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-position: absolute;\r\n    z-index: 1;\r\n    object-fit: cover;\r\n}\r\n\r\n\r\n\r\n#motto[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\n.welcome-content[_ngcontent-%COMP%] {\r\n    background: linear-gradient(45deg, rgba(56, 10, 10, 0.5) 0%,rgba(35, 138, 163, 0.5) 100%);\r\n    height: 100vh;\r\n    width: 100%;\r\n    z-index: 2;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.middle-content[_ngcontent-%COMP%] {\r\n    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(43,17,33,1) 50%, rgba(18,70,83,1) 100%);\r\n}\r\n\r\n\r\n\r\n.d-inline[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    margin: 0px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\n.text-uppercase[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.formSign[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    position: relative;\r\n    display: flex;\r\n    padding: 1rem;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    pointer-events: auto;\r\n    background-color: rgba(255, 255, 255, 0.898);\r\n    background-clip: padding-box;\r\n    box-shadow: 0 0 0.5rem rgb(255, 255, 255);\r\n    border-radius: 0.5rem;\r\n    outline: 0;\r\n    max-width: 500px;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n    height: 7rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    transform: translateY(70%);\r\n}\r\n\r\n.linkBox[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    \r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n    margin: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBLFNBQVM7O0FBRVQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUEsWUFBWTs7QUFDWjtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5RkFBeUY7SUFDekYsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrR0FBa0c7QUFDdEc7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFFbEIsYUFBYTtJQUNiLGFBQWE7SUFFYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTs7QUFFZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLyogSEVSTyAqL1xyXG5cclxuI2hlcm8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI2hlcm8gdmlkZW8ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi8qIENPTlRFTlQgKi9cclxuI21vdHRvIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLndlbGNvbWUtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNTYsIDEwLCAxMCwgMC41KSAwJSxyZ2JhKDM1LCAxMzgsIDE2MywgMC41KSAxMDAlKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWlkZGxlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSg0MywxNywzMywxKSA1MCUsIHJnYmEoMTgsNzAsODMsMSkgMTAwJSk7XHJcbn1cclxuXHJcbi8qIE1PRElGSUVEIEJPT1RTVFJBUCAqL1xyXG5cclxuLmQtaW5saW5lIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5yb3cgcCwgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnRleHQtdXBwZXJjYXNlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5mb3JtU2lnbntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5OCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICAgIGhlaWdodDogN3JlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpbmsgaDF7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcclxufVxyXG5cclxuLmxpbmtCb3gge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Dcw/":
/*!********************************************************************!*\
  !*** ./src/app/common/components/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_covid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/covid.service */ "+djZ");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "xpqA");
/* harmony import */ var _services_instructions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/instructions.service */ "sm0C");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/jobs.service */ "XPrz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../get-started/get-started.component */ "ryiy");











function DashboardComponent_table_6_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dogodek_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, dogodek_r13.datum, "d. M. yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dogodek_r13.ura);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/instrukcije-dogodki/dogodek/", dogodek_r13._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dogodek_r13.naziv);
} }
function DashboardComponent_table_6_tbody_9_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const delo_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, delo_r14.datum, "d. M. yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/ponudba-del/delo/", delo_r14._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](delo_r14.naziv);
} }
function DashboardComponent_table_6_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_table_6_tbody_9_tr_1_Template, 9, 7, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_table_6_tbody_9_tr_2_Template, 9, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.uporabnik.dogodki);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.uporabnik.dela);
} }
function DashboardComponent_table_6_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nimate \u0161e obveznosti. Prijavite se na dogodek ali delo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Ura");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Opravilo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DashboardComponent_table_6_tbody_9_Template, 3, 2, "tbody", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_table_6_ng_template_10_Template, 3, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.uporabnik.dogodki.length || ctx_r0.uporabnik.dela.length)("ngIfElse", _r9);
} }
function DashboardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Skupno \u0161tevilo oku\u017Eb z Covid-19 v Sloveniji: ", ctx_r1.getCasesToday(), "");
} }
function DashboardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "canvas", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.chart, " ");
} }
function DashboardComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.sporocilo, " ");
} }
function DashboardComponent_div_13_div_4_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instructor_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profil/", instructor_r16.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", instructor_r16.ime, " ", instructor_r16.priimek, "");
} }
function DashboardComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_div_13_div_4_a_5_Template, 2, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instructor_r16 = ctx.$implicit;
    const isFirst_r17 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", isFirst_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", instructor_r16.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](instructor_r16.opis);
} }
function DashboardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Novi in\u0161truktorji");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_13_div_4_Template, 8, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.featuredInstructors);
} }
function DashboardComponent_div_14_div_4_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/instrukcije-dogodki/dogodek/", event_r21._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r21.naziv);
} }
function DashboardComponent_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_div_14_div_4_a_5_Template, 2, 2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r21 = ctx.$implicit;
    const isFirst_r22 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", isFirst_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r21._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r21.opis);
} }
function DashboardComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Prihajajo\u010Di dogodki");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_14_div_4_Template, 8, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.featuredEvents);
} }
function DashboardComponent_div_15_div_4_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/ponudba-del/delo/", offer_r26._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r26.naziv);
} }
function DashboardComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_div_15_div_4_a_5_Template, 2, 2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r26 = ctx.$implicit;
    const isFirst_r27 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", isFirst_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", offer_r26._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r26.opis);
} }
function DashboardComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Promovirane ponudbe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_15_div_4_Template, 8, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.featuredOffers);
} }
class DashboardComponent {
    constructor(covidService, authenticationService, instructionsService, jobsService, router
    //private chart: Chart
    ) {
        this.covidService = covidService;
        this.authenticationService = authenticationService;
        this.instructionsService = instructionsService;
        this.jobsService = jobsService;
        this.router = router;
        this.sporocilo = "";
        this.chart = [];
        this.uporabnik = null;
        this.featuredInstructors = this.getFeatured("instructors");
        this.featuredEvents = this.getFeatured("events");
        this.featuredOffers = this.getFeatured("offers");
    }
    ngOnInit() {
        if (!this.authenticationService.isLoggedIn()) {
            this.router.navigateByUrl('/prijava');
        }
        else {
            this.getCovidInfo();
            this.getCurrentUser();
        }
    }
    getCovidInfo() {
        this.covidService.getCovidInfo()
            .then(covidInfo => {
            this.covidInfo = covidInfo;
            this.sporocilo = covidInfo.length > 0 ? "" : "Trenutno ne najdem informacij, poskusite znova kasneje.";
            // New aray of all Cases elements
            let cases = covidInfo.map(covidInfo => covidInfo.Cases);
            let dates = covidInfo.map(covidInfo => covidInfo.Date);
            cases = cases.slice(cases.length - 10, cases.length);
            dates = dates.slice(dates.length - 10, dates.length);
            let formatedDates = [];
            //console.log(cases, dates);
            dates.forEach(element => {
                formatedDates.push(Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(element, 'dd/MM', 'en'));
            });
            chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].defaults.global.defaultFontSize = 13;
            this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('canvas', {
                type: 'line',
                data: {
                    labels: formatedDates,
                    datasets: [{
                            label: 'Trend naraščanja celotnega števila okužb s Covid-19 v Sloveniji v zadnjih 10 dneh',
                            backgroundColor: "rgb(160, 49, 58)",
                            borderColor: "black",
                            borderWidth: 1,
                            data: cases,
                            fill: true,
                        }]
                },
                options: {
                    responsive: true,
                    title: {},
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Datum'
                                }
                            }],
                        yAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Število okužb'
                                }
                            }]
                    }
                }
            });
        })
            .catch(error => {
            this.sporocilo = "Trenutno ne najdem informacij, poskusite znova kasneje.";
            // console.error(error);
        });
    }
    getUsername() {
        return this.authenticationService.getCurrentUser().ime;
    }
    getCurrentUser() {
        let currentUserEmail = this.authenticationService.getCurrentUser().email;
        this.authenticationService.getUser(currentUserEmail)
            .then(user => { this.uporabnik = user; })
            .catch(error => { });
    }
    getCasesToday() {
        let cases = this.covidInfo.map(covidInfo => covidInfo.Cases);
        return (cases[cases.length - 1]);
    }
    getFeatured(type) {
        let featured = [];
        switch (type) {
            case 'instructors': {
                this.instructionsService.getInstructors()
                    .then(instructors => {
                    for (let i = 1; i < 4; i++) {
                        if (instructors[instructors.length - i]) {
                            featured.push(instructors[instructors.length - i]);
                        }
                    }
                })
                    .catch(error => { });
                break;
            }
            case 'events': {
                this.instructionsService.getEvents()
                    .then(events => {
                    for (let i = 1; i < 4; i++) {
                        if (events[events.length - i]) {
                            featured.push(events[events.length - i]);
                        }
                    }
                })
                    .catch(error => { });
                break;
            }
            case 'offers': {
                this.jobsService.getJobs()
                    .then(offers => {
                    for (let i = 1; i < 4; i++) {
                        if (offers[offers.length - i]) {
                            featured.push(offers[offers.length - i]);
                        }
                    }
                })
                    .catch(error => { });
                break;
            }
        }
        return featured;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_covid_service__WEBPACK_IMPORTED_MODULE_3__["CovidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_instructions_service__WEBPACK_IMPORTED_MODULE_5__["InstructionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 16, vars: 8, consts: [["id", "welcome-sign", 1, "container"], ["id", "moja-opravila", 1, "container", 2, "padding", "0"], [1, "container-fluid", "text-light", "bg-dark"], ["class", "table table-primary table-hover container-fluid", "id", "todo-list", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "container", 4, "ngIf"], ["obvestilo", ""], ["id", "dashboard-featured"], ["id", "featuredInstructors", "class", "carousel slide featured-carousel", "data-ride", "carousel", 4, "ngIf"], ["id", "featuredEvents", "class", "carousel slide featured-carousel", "data-ride", "carousel", 4, "ngIf"], ["id", "featuredJobs", "class", "carousel slide featured-carousel", "data-ride", "carousel", 4, "ngIf"], ["id", "todo-list", 1, "table", "table-primary", "table-hover", "container-fluid"], [1, "thead-dark"], ["scope", "col"], ["scope", "col", 1, "hour-column"], ["niObveznosti", ""], [4, "ngFor", "ngForOf"], ["scope", "row"], ["scope", "row", 1, "hour-column"], [1, "text-primary", 3, "routerLink"], ["scope", "row", "colspan", "3"], ["id", "covid", 1, "container"], ["id", "covid-info"], [1, "container"], ["id", "canvas"], ["role", "alert", 1, "alert", "alert-info", "container", 2, "margin-top", "2rem"], ["id", "featuredInstructors", "data-ride", "carousel", 1, "carousel", "slide", "featured-carousel"], [1, "carousel-inner", "featured-carousel-inner", "bg-dark"], [1, "text-light"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], ["href", "#featuredInstructors", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", "featured-controls", "featured-controls-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon", "featured-controls-icons"], [1, "sr-only"], ["href", "#featuredInstructors", "role", "button", "data-slide", "next", 1, "carousel-control-next", "featured-controls", "featured-controls-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon", "featured-controls-icons"], [1, "carousel-item"], [1, "card", "featured-instructor"], ["src", "../../../../assets/media/thumbnails/blue.png", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body", "featured-card-body"], [1, "card-title"], [3, "routerLink", 4, "ngIf"], [1, "card-text"], [3, "routerLink"], ["id", "featuredEvents", "data-ride", "carousel", 1, "carousel", "slide", "featured-carousel"], ["href", "#featuredEvents", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", "featured-controls", "featured-controls-prev"], ["href", "#featuredEvents", "role", "button", "data-slide", "next", 1, "carousel-control-next", "featured-controls", "featured-controls-next"], ["src", "../../../../assets/media/thumbnails/green.png", "alt", "Card image cap", 1, "card-img-top"], ["id", "featuredJobs", "data-ride", "carousel", 1, "carousel", "slide", "featured-carousel"], ["href", "#featuredJobs", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", "featured-controls", "featured-controls-prev"], ["href", "#featuredJobs", "role", "button", "data-slide", "next", 1, "carousel-control-next", "featured-controls", "featured-controls-next"], ["src", "../../../../assets/media/thumbnails/red.png", "alt", "Card image cap", 1, "card-img-top"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Moja opravila");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DashboardComponent_table_6_Template, 12, 2, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DashboardComponent_div_7_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_8_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DashboardComponent_ng_template_9_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "get-started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DashboardComponent_div_13_Template, 13, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DashboardComponent_div_14_Template, 13, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DashboardComponent_div_15_Template, 13, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Pozdravljeni, ", ctx.getUsername(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uporabnik);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.covidInfo)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.featuredInstructors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.featuredEvents.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.featuredOffers.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_8__["GetStartedComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]], styles: [".carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%] {\r\n  background-size: 100%, 100%;\r\n  color: black;\r\n}\r\n\r\n.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%] {\r\n  z-index: 50;\r\n}\r\n\r\n\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.432);\r\n  height: 100%;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  display: flex !important;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n#car[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n  width: 95%;\r\n  margin-left: 2.5%;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  height: 200px;\r\n}\r\n\r\n#dashboard-featured[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.featured-carousel[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.featured-controls[_ngcontent-%COMP%] {\r\n  height: 15%;\r\n  width: 15%;\r\n  top: 58%;\r\n  z-index: 50;\r\n}\r\n\r\n.featured-controls-icons[_ngcontent-%COMP%] {\r\n  filter: invert(1);\r\n}\r\n\r\n.featured-carousel-inner[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 0.5rem black;\r\n  border-radius: 0.5rem;\r\n  width: 20rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.featured-instructor[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 20rem;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  border: none;\r\n}\r\n\r\n.featured-instructor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  height: 8rem;\r\n  object-fit: cover;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.featured-card-body[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  border: 0;\r\n}\r\n\r\n\r\n\r\n#moja-opravila[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n\r\n#moja-opravila[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem 0.5rem 0 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n#api-container[_ngcontent-%COMP%] {\r\n    background-color: antiquewhite;\r\n    width: 20%;\r\n    height: 100%;\r\n    top: 0;\r\n}\r\n\r\n#welcome-sign[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: auto; \r\n    margin-top: 1rem;\r\n    margin-bottom: 0.5rem;\r\n    padding: 2rem; \r\n    border-radius: 0.5rem; \r\n    background-image: url('white.png');\r\n}\r\n\r\n#covid[_ngcontent-%COMP%] {\r\n    background-image: url('red.png');\r\n    border-radius: 0.5rem;\r\n    \r\n    text-align: center;\r\n}\r\n\r\n#covid-info[_ngcontent-%COMP%] {\r\n    padding: 3rem;\r\n    color: white;\r\n}\r\n\r\n#todo-list[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n#todo-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n#dashboard-featured[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  height: 17rem;\r\n}\r\n\r\n#dashboard-featured[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #dashboard-featured[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 80%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsaURBQWlEOztBQUNqRDtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztFQUNQLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjs7QUFFdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBLGNBQWM7O0FBQ2Q7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsWUFBWTtJQUNaLE1BQU07QUFDVjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtDQUFzRTtBQUMxRTs7QUFFQTtJQUNJLGdDQUFvRTtJQUNwRSxxQkFBcUI7O0lBRXJCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlLCAxMDAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgei1pbmRleDogNTA7XHJcbn1cclxuXHJcbi8qIHphIGRhdCBwdcWhxI1pY2UgdiDEjXJubzogZmlsdGVyOiBpbnZlcnQoMTAwJSk7ICovXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI2NhciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbiNkYXNoYm9hcmQtZmVhdHVyZWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbn1cclxuXHJcbi5mZWF0dXJlZC1jb250cm9scyB7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbiAgd2lkdGg6IDE1JTtcclxuICB0b3A6IDU4JTtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWNvbnRyb2xzLWljb25zIHtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxufVxyXG5cclxuLmZlYXR1cmVkLWNhcm91c2VsLWlubmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMC41cmVtIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB3aWR0aDogMjByZW07XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtaW5zdHJ1Y3RvciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtaW5zdHJ1Y3RvciBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwgaDQge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmZlYXR1cmVkLWNhcmQtYm9keSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi8qIGRhc2hib2FyZCAqL1xyXG4jbW9qYS1vcHJhdmlsYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBcclxufVxyXG5cclxuI21vamEtb3ByYXZpbGEgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4jYXBpLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4jd2VsY29tZS1zaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bzsgXHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMnJlbTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvbWVkaWEvdGh1bWJuYWlscy93aGl0ZS5wbmcnKTtcclxufVxyXG5cclxuI2NvdmlkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL21lZGlhL3RodW1ibmFpbHMvcmVkLnBuZycpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb3ZpZC1pbmZvIHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0b2RvLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN0b2RvLWxpc3QgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkYXNoYm9hcmQtZmVhdHVyZWQgLmNhcmQge1xyXG4gIGhlaWdodDogMTdyZW07XHJcbn1cclxuXHJcbiNkYXNoYm9hcmQtZmVhdHVyZWQgaDUsICNkYXNoYm9hcmQtZmVhdHVyZWQgcCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _services_covid_service__WEBPACK_IMPORTED_MODULE_3__["CovidService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _services_instructions_service__WEBPACK_IMPORTED_MODULE_5__["InstructionsService"] }, { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "Fvdj":
/*!******************************************************!*\
  !*** ./src/app/common/components/db/db.component.ts ***!
  \******************************************************/
/*! exports provided: DbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbComponent", function() { return DbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _test_users_testni_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/users-testni.json */ "Y4kF");
var _test_users_testni_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./test/users-testni.json */ "Y4kF", 1);
/* harmony import */ var _test_instrukcije_testni_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test/instrukcije-testni.json */ "lQDp");
var _test_instrukcije_testni_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./test/instrukcije-testni.json */ "lQDp", 1);
/* harmony import */ var _test_dela_testni_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test/dela-testni.json */ "JQ+a");
var _test_dela_testni_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./test/dela-testni.json */ "JQ+a", 1);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "xpqA");
/* harmony import */ var _services_instructions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/instructions.service */ "sm0C");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/jobs.service */ "XPrz");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/comments.service */ "cMyE");
/* harmony import */ var _services_comments_jobs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/comments-jobs.service */ "wiwB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function DbComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.sporocilo, " ");
} }
class DbComponent {
    constructor(authenticationService, instructionsService, jobsService, commentsService, commentsJobsService) {
        this.authenticationService = authenticationService;
        this.instructionsService = instructionsService;
        this.jobsService = jobsService;
        this.commentsService = commentsService;
        this.commentsJobsService = commentsJobsService;
        this.users = _test_users_testni_json__WEBPACK_IMPORTED_MODULE_2__;
        this.events = _test_instrukcije_testni_json__WEBPACK_IMPORTED_MODULE_3__;
        this.offers = _test_dela_testni_json__WEBPACK_IMPORTED_MODULE_4__;
        this.sporocilo = "";
        this.fillDB = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.users);
            // console.log(this.events);
            // console.log(this.offers);
            for (let i = 0; i < this.users.length; i++) {
                // console.log("Registering...");
                let doesUserExist = null;
                yield this.authenticationService.getUser(this.users[i].email)
                    .then((user) => { doesUserExist = user; })
                    .catch((err) => { doesUserExist = null; });
                if (doesUserExist != null) {
                    continue;
                }
                else {
                    yield this.authenticationService.register(this.users[i]);
                    let currentUserEmail = this.users[i].email;
                    // console.log(currentUserEmail);
                    // console.log("registered!");
                    for (let j = 0; j < this.events.length; j++) {
                        // console.log(events[j].emailInstruktorja);
                        if (currentUserEmail == this.events[j].emailInstruktorja) {
                            // console.log("Posting event...");
                            let date = new Date(this.events[j].datestring);
                            this.events[j].datum = date;
                            yield this.instructionsService.postNewEvent(this.events[j])
                                .then((res) => {
                                if (this.events[j].komentarji) {
                                    for (let g = 0; g < this.events[j].komentarji.length; g++) {
                                        this.commentsService.postNewComment(res, this.events[j].komentarji[g]);
                                    }
                                }
                            });
                            // console.log("Posted!");
                        }
                    }
                    for (let k = 0; k < this.offers.length; k++) {
                        if (currentUserEmail == this.offers[k].emailPonudnika) {
                            // console.log("Posting job...");
                            let date = new Date(this.offers[k].datestring);
                            this.offers[k].datum = date;
                            yield this.jobsService.postNewJob(this.offers[k])
                                .then((res) => {
                                if (this.offers[k].komentarji) {
                                    for (let g = 0; g < this.offers[k].komentarji.length; g++) {
                                        this.commentsJobsService.postNewComment(res, this.offers[k].komentarji[g]);
                                    }
                                }
                            });
                            // console.log("Posted!");
                        }
                    }
                    // console.log("Logging out...");
                    yield this.authenticationService.logout();
                    // console.log("Logged out!");
                }
            }
            location.reload();
            alert("Vsi testni podatki so bili uspešno vneseni!");
        });
        this.dropDB = () => {
            // console.log("Dropping DB...");
            this.authenticationService.dropDB()
                .then((response) => this.sporocilo = response.sporočilo)
                .catch((error) => { this.sporocilo = "Napaka v API-ju."; });
        };
        this.dropUsers = () => {
            // console.log("Dropping DB...");
            this.authenticationService.dropUsers()
                .then((response) => this.sporocilo = response.sporočilo)
                .catch((error) => { this.sporocilo = "Napaka v API-ju."; });
        };
    }
    ngOnInit() {
    }
    refreshPage() {
        location.reload();
        window.stop();
        location.reload();
    }
}
DbComponent.ɵfac = function DbComponent_Factory(t) { return new (t || DbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_instructions_service__WEBPACK_IMPORTED_MODULE_6__["InstructionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_jobs_service__WEBPACK_IMPORTED_MODULE_7__["JobsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comments_service__WEBPACK_IMPORTED_MODULE_8__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comments_jobs_service__WEBPACK_IMPORTED_MODULE_9__["CommentsJobsService"])); };
DbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DbComponent, selectors: [["app-db"]], decls: 13, vars: 1, consts: [["id", "db"], [1, "buttons"], [1, "db-btn", "btn", "btn-outline-dark", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], ["role", "alert", 1, "alert", "alert-primary"], ["class", "alert alert-success", 4, "ngIf"], [1, "alert", "alert-success"]], template: function DbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DbComponent_Template_a_click_2_listener() { return ctx.fillDB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Uvozi podatke");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DbComponent_Template_button_click_4_listener() { return ctx.refreshPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Osve\u017Ei stran");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Po vsakem kliku na gumb za uvoz podatkov, prosimo osve\u017Eite stran in kliknite \u0161e enkrat, dokler se vam ne prika\u017Ee obvestilo, da ste uspe\u0161no vnesli vse podatke. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DbComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DbComponent_Template_a_click_9_listener() { return ctx.dropDB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Izbri\u0161i podatke");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DbComponent_Template_a_click_11_listener() { return ctx.dropUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Izbri\u0161i uporabnike");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sporocilo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYi5jb21wb25lbnQuY3NzIn0= */", "body[_ngcontent-%COMP%] {\n            background: azure !important;\n        }\n\n        .buttons[_ngcontent-%COMP%] {\n            width: 50%;\n            margin: auto;\n        }\n\n        .db-btn[_ngcontent-%COMP%] {\n            width: 100%;\n            margin-top: 5rem;\n            padding: 3rem;\n        }\n\n        button[_ngcontent-%COMP%] {\n            margin: 0.5rem;\n            margin-left: 0;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-db',
                templateUrl: './db.component.html',
                styleUrls: ['./db.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: _services_instructions_service__WEBPACK_IMPORTED_MODULE_6__["InstructionsService"] }, { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_7__["JobsService"] }, { type: _services_comments_service__WEBPACK_IMPORTED_MODULE_8__["CommentsService"] }, { type: _services_comments_jobs_service__WEBPACK_IMPORTED_MODULE_9__["CommentsJobsService"] }]; }, null); })();


/***/ }),

/***/ "GXNF":
/*!**************************************************************!*\
  !*** ./src/app/common/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: ["footer[_ngcontent-%COMP%] {\r\n    background-color: #292b2c;\r\n    margin-top: 0 !important;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYjJjO1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5mb290ZXIgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JJ6x":
/*!*********************************************************************************!*\
  !*** ./src/app/common/components/instructions/event-new/event-new.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EventNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventNewComponent", function() { return EventNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_instructions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/instructions.service */ "sm0C");
/* harmony import */ var src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/authentication.service */ "xpqA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function EventNewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Za objavo dogodka se prosim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "prijavite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventNewComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Za objavo dogodka morate imeti status in\u0161truktorja. Za pridobitev le-tega, pojdite na va\u0161 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profil/", ctx_r5.getCurrentUser().email, "");
} }
function EventNewComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventNewComponent_ng_template_1_div_0_Template, 5, 1, "div", 0);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isInstructor())("ngIfElse", _r3);
} }
function EventNewComponent_ng_template_3_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vrni se na seznam dogodkov.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.sporocilo, " ");
} }
function EventNewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Objavi oglas za in\u0161trukcijski dogodek");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Izpolnite spodnje podatke in objavite oglas za in\u0161trukcije, s katerimi lahko \u0161irite svoje znanje.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ime dogodka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventNewComponent_ng_template_3_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.novDogodek.naziv = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Opis dogodka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventNewComponent_ng_template_3_Template_textarea_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.novDogodek.opis = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cena dogodka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventNewComponent_ng_template_3_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.novDogodek.cena = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pla\u010Dljivi dogodki oziroma in\u0161trukcije se pla\u010Dajo po dogovoru. V primeru zlorabe bomo proti kr\u0161itelju ustrezno ukrepali.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Datum dogodka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventNewComponent_ng_template_3_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.novDogodek.datum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ura dogodka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventNewComponent_ng_template_3_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.novDogodek.ura = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Maksimalno \u0161tevilo udele\u017Eencev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventNewComponent_ng_template_3_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.novDogodek.steviloProstihMest = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, EventNewComponent_ng_template_3_div_40_Template, 4, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventNewComponent_ng_template_3_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.postNewEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Objavi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.novDogodek.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.novDogodek.opis);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.novDogodek.cena);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.novDogodek.datum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.novDogodek.ura);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.novDogodek.steviloProstihMest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.sporocilo);
} }
class EventNewComponent {
    constructor(instructionsService, authenticationService, router) {
        this.instructionsService = instructionsService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.sporocilo = "";
        this.novDogodek = {
            _id: "",
            naziv: "",
            opis: "",
            cena: null,
            datum: null,
            ura: "",
            steviloProstihMest: null,
            emailInstruktorja: "",
            komentarji: null
        };
    }
    ngOnInit() {
    }
    postNewEvent() {
        this.novDogodek.emailInstruktorja = this.authenticationService.getCurrentUser().email;
        if (!this.novDogodek.naziv ||
            !this.novDogodek.opis ||
            !this.novDogodek.cena ||
            !this.novDogodek.datum ||
            !this.novDogodek.ura ||
            !this.novDogodek.steviloProstihMest) {
            this.sporocilo = "Prosimo izpolnite vsa polja!";
        }
        else {
            this.instructionsService.postNewEvent(this.novDogodek)
                .then(event => {
                this.novDogodek = event;
                this.sporocilo = event ? "Dogodek uspešno objavljen :)" : "Napaka pri objavi dogodka :(";
                this.router.navigateByUrl('/instrukcije-dogodki/dogodek/' + this.novDogodek._id);
                alert("Dogodek uspešno objavljen!");
            })
                .catch(error => {
                this.sporocilo = "Napaka API-ja pri objavi dogodka.";
                //console.error(error);
            });
        }
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
    isInstructor() {
        if (this.getCurrentUser().statusInstruktorja) {
            return true;
        }
        else {
            return false;
        }
    }
    getCurrentUser() {
        return (this.authenticationService.getCurrentUser());
    }
}
EventNewComponent.ɵfac = function EventNewComponent_Factory(t) { return new (t || EventNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_instructions_service__WEBPACK_IMPORTED_MODULE_1__["InstructionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
EventNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventNewComponent, selectors: [["app-event-new"]], decls: 5, vars: 2, consts: [["style", "margin-top: 2rem;", "class", "alert alert-info container", "role", "alert", 4, "ngIf", "ngIfElse"], ["jeInstruktor", ""], ["obrazec", ""], ["role", "alert", 1, "alert", "alert-info", "container", 2, "margin-top", "2rem"], ["routerLink", "/prijava"], [3, "routerLink"], [1, "container"], [1, "row", 2, "padding-top", "30px"], [1, "col"], ["id", "instructionsEventNewPost", "action", "", "role", "form"], [1, "form-group"], ["for", "naziv"], ["id", "naziv", "name", "naziv", "type", "text", "placeholder", "Poimenujte va\u0161 dogodek...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "opis"], ["id", "opis", "name", "opis", "rows", "5", "placeholder", "Vnesite dodatne informacije o dogodku...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "cena"], [1, "form-group", "input-group"], ["id", "cena", "name", "cena", "type", "number", "value", "0", "step", "0.1", "min", "0", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], ["for", "datum"], ["type", "date", "id", "datum", "name", "datum", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ura"], ["type", "time", "id", "ura", "name", "ura", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "steviloProstihMest"], ["id", "steviloProstihMest", "name", "steviloProstihMest", "type", "number", "placeholder", "Vnesite celo \u0161tevilo", "step", "1", "min", "1", "value", "1", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-warning container", "style", "margin-top: 2rem", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], ["routerLink", "/instrukcije-dogodki"]], template: function EventNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventNewComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventNewComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventNewComponent_ng_template_3_Template, 44, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn())("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1uZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-new',
                templateUrl: './event-new.component.html',
                styleUrls: ['./event-new.component.css']
            }]
    }], function () { return [{ type: _services_instructions_service__WEBPACK_IMPORTED_MODULE_1__["InstructionsService"] }, { type: src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "JQ+a":
/*!************************************************************!*\
  !*** ./src/app/common/components/db/test/dela-testni.json ***!
  \************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"\",\"naziv\":\"Program v Javi\",\"opis\":\"Nujno potrebujem program v javi do navedenega roka. Pišite na chat prosim.\",\"cena\":15,\"datestring\":\"2021-05-14\",\"datum\":null,\"emailPonudnika\":\"janja@ferfic.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":3,\"besediloKomentarja\":\"Prijavil sem se za tvoje delo! Lahko do jutri naredim.\",\"datestring\":\"2021-05-13\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":1,\"besediloKomentarja\":\"Zahteval bi kaj več kot 15e...\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Prevod iz angleščine v nemščino\",\"opis\":\"V priponki puščam tekst. Hvala za pomoč\",\"cena\":10,\"datestring\":\"2021-04-13\",\"datum\":null,\"emailPonudnika\":\"luka@kranjec.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsič.com\",\"ocena\":3,\"besediloKomentarja\":\"Prijavljen\",\"datestring\":\"2021-04-10\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":2,\"besediloKomentarja\":\"Žal ne morem do takrat, se moram odjaviti..\",\"datestring\":\"2021-04-08\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Prevod iz slovenščine v francoščino\",\"opis\":\"Tekst v priponki, hvala.\",\"cena\":12,\"datestring\":\"2021-05-22\",\"datum\":null,\"emailPonudnika\":\"simon@antonic.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":2,\"besediloKomentarja\":\"Prezgoden rok..\",\"datestring\":\"2021-05-20\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfič.com\",\"ocena\":3,\"besediloKomentarja\":\"Poskusila bom do takrat..\",\"datestring\":\"2021-05-19\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Popravljanje pisma\",\"opis\":\"A mi kdo popravi to besedilo? Sem tuji študent in moram to pismo poslati na nek urad.\",\"cena\":15,\"datestring\":\"2021-02-14\",\"datum\":null,\"emailPonudnika\":\"peter@soban.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":4,\"besediloKomentarja\":\"Takoj naredim, ni problema. Prijavljen!\",\"datestring\":\"2021-02-14\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Logo za malo podjetje\",\"opis\":\"Iščem zanimive ideje za logo za moje podjetje!\",\"cena\":50,\"datestring\":\"2021-03-10\",\"datum\":null,\"emailPonudnika\":\"rudi@bobnic.com\",\"zasedeno\":false,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"luka@kranjec.com\",\"ocena\":1,\"besediloKomentarja\":\"Premalo za tako delo..\",\"datestring\":\"2021-03-03\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":2,\"besediloKomentarja\":\"Imaš še kake posebne zahteve pri tem?\",\"datestring\":\"2021-03-04\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Poezija o jeseni\",\"opis\":\"Rabim za šolo, pa se mi ne da.. :)\",\"cena\":4,\"datestring\":\"2021-05-10\",\"datum\":null,\"emailPonudnika\":\"simon@antonic.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":1,\"besediloKomentarja\":\"Do jutri? Zdi se mi premalo časa..\",\"datestring\":\"2021-05-09\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfic.com\",\"ocena\":4,\"besediloKomentarja\":\"Poskusila bom, kot mi uspe! Prijavljena :)\",\"datestring\":\"2021-05-09\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Prevod španščina-slovenščina\",\"opis\":\"Tekst tukaj spodaj, hvala.\",\"cena\":10,\"datestring\":\"2021-04-29\",\"datum\":null,\"emailPonudnika\":\"meta@hribar.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":3,\"besediloKomentarja\":\"Je to nujno do roka ali lahko še kaj dni več?\",\"datestring\":\"2021-04-28\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":3,\"besediloKomentarja\":\"Lahko tudi do 1.5., hvala.\",\"datestring\":\"2021-04-28\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":3,\"besediloKomentarja\":\"Super.\",\"datestring\":\"2021-04-28\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Program v Javi\",\"opis\":\"Nujno potrebujem program v javi do navedenega roka. Pišite na chat prosim.\",\"cena\":15,\"datestring\":\"2021-05-14\",\"datum\":null,\"emailPonudnika\":\"janja@ferfic.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":3,\"besediloKomentarja\":\"Prijavil sem se za tvoje delo! Lahko do jutri naredim.\",\"datestring\":\"2021-05-13\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":1,\"besediloKomentarja\":\"Zahteval bi kaj več kot 15e...\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Prevod iz angleščine v nemščino\",\"opis\":\"V priponki puščam tekst. Hvala za pomoč\",\"cena\":10,\"datestring\":\"2021-04-13\",\"datum\":null,\"emailPonudnika\":\"luka@kranjec.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsič.com\",\"ocena\":3,\"besediloKomentarja\":\"Prijavljen\",\"datestring\":\"2021-04-10\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":2,\"besediloKomentarja\":\"Žal ne morem do takrat, se moram odjaviti..\",\"datestring\":\"2021-04-08\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Prevod iz slovenščine v francoščino\",\"opis\":\"Tekst v priponki, hvala.\",\"cena\":12,\"datestring\":\"2021-05-22\",\"datum\":null,\"emailPonudnika\":\"simon@antonic.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":2,\"besediloKomentarja\":\"Prezgoden rok..\",\"datestring\":\"2021-05-20\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfič.com\",\"ocena\":3,\"besediloKomentarja\":\"Poskusila bom do takrat..\",\"datestring\":\"2021-05-19\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Popravljanje pisma\",\"opis\":\"A mi kdo popravi to besedilo? Sem tuji študent in moram to pismo poslati na nek urad.\",\"cena\":15,\"datestring\":\"2021-02-14\",\"datum\":null,\"emailPonudnika\":\"peter@soban.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":4,\"besediloKomentarja\":\"Takoj naredim, ni problema. Prijavljen!\",\"datestring\":\"2021-02-14\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Logo za malo podjetje\",\"opis\":\"Iščem zanimive ideje za logo za moje podjetje!\",\"cena\":50,\"datestring\":\"2021-03-10\",\"datum\":null,\"emailPonudnika\":\"rudi@bobnic.com\",\"zasedeno\":false,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"luka@kranjec.com\",\"ocena\":1,\"besediloKomentarja\":\"Premalo za tako delo..\",\"datestring\":\"2021-03-03\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":2,\"besediloKomentarja\":\"Imaš še kake posebne zahteve pri tem?\",\"datestring\":\"2021-03-04\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Poezija o jeseni\",\"opis\":\"Rabim za šolo, pa se mi ne da.. :)\",\"cena\":4,\"datestring\":\"2021-05-10\",\"datum\":null,\"emailPonudnika\":\"simon@antonic.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":1,\"besediloKomentarja\":\"Do jutri? Zdi se mi premalo časa..\",\"datestring\":\"2021-05-09\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfic.com\",\"ocena\":4,\"besediloKomentarja\":\"Poskusila bom, kot mi uspe! Prijavljena :)\",\"datestring\":\"2021-05-09\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Prevod španščina-slovenščina\",\"opis\":\"Tekst tukaj spodaj, hvala.\",\"cena\":10,\"datestring\":\"2021-04-29\",\"datum\":null,\"emailPonudnika\":\"meta@hribar.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":3,\"besediloKomentarja\":\"Je to nujno do roka ali lahko še kaj dni več?\",\"datestring\":\"2021-04-28\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":3,\"besediloKomentarja\":\"Lahko tudi do 1.5., hvala.\",\"datestring\":\"2021-04-28\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":3,\"besediloKomentarja\":\"Super.\",\"datestring\":\"2021-04-28\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Program v Javi\",\"opis\":\"Nujno potrebujem program v javi do navedenega roka. Pišite na chat prosim.\",\"cena\":15,\"datestring\":\"2021-05-14\",\"datum\":null,\"emailPonudnika\":\"janja@ferfic.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":3,\"besediloKomentarja\":\"Prijavil sem se za tvoje delo! Lahko do jutri naredim.\",\"datestring\":\"2021-05-13\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":1,\"besediloKomentarja\":\"Zahteval bi kaj več kot 15e...\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Prevod iz angleščine v nemščino\",\"opis\":\"V priponki puščam tekst. Hvala za pomoč\",\"cena\":10,\"datestring\":\"2021-04-13\",\"datum\":null,\"emailPonudnika\":\"luka@kranjec.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsič.com\",\"ocena\":3,\"besediloKomentarja\":\"Prijavljen\",\"datestring\":\"2021-04-10\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":2,\"besediloKomentarja\":\"Žal ne morem do takrat, se moram odjaviti..\",\"datestring\":\"2021-04-08\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Prevod iz slovenščine v francoščino\",\"opis\":\"Tekst v priponki, hvala.\",\"cena\":12,\"datestring\":\"2021-05-22\",\"datum\":null,\"emailPonudnika\":\"simon@antonic.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":2,\"besediloKomentarja\":\"Prezgoden rok..\",\"datestring\":\"2021-05-20\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfič.com\",\"ocena\":3,\"besediloKomentarja\":\"Poskusila bom do takrat..\",\"datestring\":\"2021-05-19\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Popravljanje pisma\",\"opis\":\"A mi kdo popravi to besedilo? Sem tuji študent in moram to pismo poslati na nek urad.\",\"cena\":15,\"datestring\":\"2021-02-14\",\"datum\":null,\"emailPonudnika\":\"peter@soban.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":4,\"besediloKomentarja\":\"Takoj naredim, ni problema. Prijavljen!\",\"datestring\":\"2021-02-14\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Logo za malo podjetje\",\"opis\":\"Iščem zanimive ideje za logo za moje podjetje!\",\"cena\":50,\"datestring\":\"2021-03-10\",\"datum\":null,\"emailPonudnika\":\"rudi@bobnic.com\",\"zasedeno\":false,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"luka@kranjec.com\",\"ocena\":1,\"besediloKomentarja\":\"Premalo za tako delo..\",\"datestring\":\"2021-03-03\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":2,\"besediloKomentarja\":\"Imaš še kake posebne zahteve pri tem?\",\"datestring\":\"2021-03-04\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Poezija o jeseni\",\"opis\":\"Rabim za šolo, pa se mi ne da.. :)\",\"cena\":4,\"datestring\":\"2021-05-10\",\"datum\":null,\"emailPonudnika\":\"simon@antonic.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":1,\"besediloKomentarja\":\"Do jutri? Zdi se mi premalo časa..\",\"datestring\":\"2021-05-09\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfic.com\",\"ocena\":4,\"besediloKomentarja\":\"Poskusila bom, kot mi uspe! Prijavljena :)\",\"datestring\":\"2021-05-09\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Prevod španščina-slovenščina\",\"opis\":\"Tekst tukaj spodaj, hvala.\",\"cena\":10,\"datestring\":\"2021-04-29\",\"datum\":null,\"emailPonudnika\":\"meta@hribar.com\",\"zasedeno\":true,\"komentarji\":[{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":3,\"besediloKomentarja\":\"Je to nujno do roka ali lahko še kaj dni več?\",\"datestring\":\"2021-04-28\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":3,\"besediloKomentarja\":\"Lahko tudi do 1.5., hvala.\",\"datestring\":\"2021-04-28\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":3,\"besediloKomentarja\":\"Super.\",\"datestring\":\"2021-04-28\",\"datum\":null}]}]");

/***/ }),

/***/ "K2KH":
/*!*************************************************************************!*\
  !*** ./src/app/common/components/jobs/offer-new/offer-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: OfferNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferNewComponent", function() { return OfferNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/jobs.service */ "XPrz");
/* harmony import */ var src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/authentication.service */ "xpqA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function OfferNewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Za objavo dogodka se prosim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "prijavite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OfferNewComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vrni se na seznam dogodkov.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sporocilo, " ");
} }
class OfferNewComponent {
    constructor(jobsService, authenticationService, router) {
        this.jobsService = jobsService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.sporocilo = "";
        this.novoDelo = {
            _id: "",
            naziv: "",
            opis: "",
            cena: null,
            datum: null,
            emailPonudnika: "",
            zasedeno: false,
            komentarji: null
        };
    }
    ngOnInit() {
    }
    postNewJob() {
        this.novoDelo.emailPonudnika = this.authenticationService.getCurrentUser().email;
        if (!this.novoDelo.naziv ||
            !this.novoDelo.opis ||
            !this.novoDelo.cena ||
            !this.novoDelo.datum) {
            this.sporocilo = "Prosimo izpolnite vsa polja!";
        }
        else {
            this.jobsService.postNewJob(this.novoDelo)
                .then(job => {
                this.novoDelo = job;
                this.sporocilo = job ? "Delo uspešno objavljeno!" : "Napaka pri objavi dela :(";
                this.router.navigateByUrl('/ponudba-del/delo/' + this.novoDelo._id);
                alert("Dogodek uspešno objavljen!");
            })
                .catch(error => {
                this.sporocilo = "Napaka API-ja pri objavi dela.";
            });
        }
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
    getCurrentUser() {
        return (this.authenticationService.getCurrentUser());
    }
}
OfferNewComponent.ɵfac = function OfferNewComponent_Factory(t) { return new (t || OfferNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_jobs_service__WEBPACK_IMPORTED_MODULE_1__["JobsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
OfferNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfferNewComponent, selectors: [["app-offer-new"]], decls: 37, vars: 6, consts: [["style", "margin-top: 2rem;", "class", "alert alert-info container", "role", "alert", 4, "ngIf"], [1, "container"], [1, "row", 2, "padding-top", "30px"], [1, "col"], ["id", "jobNewPost", "method", "post", "action", "", "role", "form"], [1, "form-group"], ["for", "naziv"], ["id", "naziv", "name", "naziv", "type", "text", "placeholder", "Kak\u0161no delo ponuja\u0161?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "opis"], ["id", "opis", "name", "opis", "rows", "5", "placeholder", "Napi\u0161i informacije o delu", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "cena"], [1, "form-group", "input-group"], ["id", "cena", "name", "cena", "type", "number", "value", "0", "step", "0.1", "min", "0", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], ["for", "datum"], ["id", "datum", "name", "datum", "type", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-warning container", "style", "margin-top: 2rem", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-info", "container", 2, "margin-top", "2rem"], ["routerLink", "/prijava"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], ["routerLink", "/ponudba-del"]], template: function OfferNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OfferNewComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Objavi oglas za delo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Izpolni spodnje podatke in objavi oglas za delo, na katerega se bodo lahko prijavili ustrezni kandidati. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Naziv dela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OfferNewComponent_Template_input_ngModelChange_14_listener($event) { return ctx.novoDelo.naziv = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Opis dela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OfferNewComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.novoDelo.opis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pla\u010Dilo, ki ga ponujam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OfferNewComponent_Template_input_ngModelChange_22_listener($event) { return ctx.novoDelo.cena = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pla\u010Dljiva dela se pla\u010Dajo po dogovoru. V primeru zlorabe bomo proti kr\u0161itelju ustrezno ukrepali.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Datum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OfferNewComponent_Template_input_ngModelChange_32_listener($event) { return ctx.novoDelo.datum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OfferNewComponent_div_33_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OfferNewComponent_Template_button_click_34_listener() { return ctx.postNewJob(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Objavi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.novoDelo.naziv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.novoDelo.opis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.novoDelo.cena);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.novoDelo.datum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sporocilo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlci1uZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfferNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-offer-new',
                templateUrl: './offer-new.component.html',
                styleUrls: ['./offer-new.component.css']
            }]
    }], function () { return [{ type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_1__["JobsService"] }, { type: src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "L6z8":
/*!************************************************************!*\
  !*** ./src/app/common/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "xpqA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sporocilo);
} }
function LoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Prijava poteka... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.sporocilo = "";
        this.loginData = {
            _id: null,
            ime: "",
            priimek: "",
            email: "",
            geslo: "",
            statusInstruktorja: false,
            opis: "",
            telefonskaStevilka: null,
            dogodki: null,
            dela: null,
            ocena: null,
            poslanaSporocila: null,
            kontakti: null
            //datumVpisa: null
        };
        this.loading = false;
        this.passwordResetEmail = "";
    }
    ngOnInit() {
    }
    submitLoginData() {
        if (!this.loginData.email ||
            !this.loginData.geslo) {
            this.sporocilo = "Zahtevani so vsi podatki, prosim poskusite znova!";
        }
        else {
            this.loading = true;
            this.executeLogin();
        }
    }
    executeLogin() {
        this.authenticationService
            .login(this.loginData)
            .then(() => {
            this.router.navigateByUrl("/my");
        })
            .catch(error => {
            this.sporocilo = error;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 50, vars: 4, consts: [["id", "hero"], ["loop", "", "muted", "", "autoplay", "", "poster", "../../../../assets/media/backgrounds/welcome_poster.png", "id", "bg-video"], ["src", "../../../../assets/media/backgrounds/welcome_video.mp4", "type", "video/mp4"], ["id", "overlay"], ["id", "signing-form-container", 1, "container", "form-container"], [1, "row"], [1, "col-md-6", "mx-auto"], ["data-aos", "zoom-in", 1, "formSign", "form"], [1, "logo", "mb-3"], [1, "col-md-12", "text-center"], ["id", "loginUser", 3, "submit"], [1, "form-group"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "geslo"], ["type", "password", "name", "geslo", "id", "geslo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-warning container", "style", "margin-top: 2rem", 4, "ngIf"], ["type", "submit", "id", "login-button", 1, "btn", "btn-block", "mybtn", "btn-primary"], ["class", "alert alert-info", 4, "ngIf"], [1, "col-md-12"], [1, "text-center"], ["routerLink", "/registracija", "id", "signup"], ["id", "resetPass", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modalnoOkno", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["name", "passReset"], ["type", "email", "name", "help-email", "placeholder", "Email", "id", "help-email", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "submit", 1, "btn", "mybtn", "btn-secondary"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], [1, "alert", "alert-info"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Prijava");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_12_listener() { return ctx.submitLoginData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.loginData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Geslo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.loginData.geslo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Prijava");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0160e nisi registriran? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Pridru\u017Ei se zdaj!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pozabljeno geslo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Vnesite email s katerim ste se registrirali. Navodila za spremembo gesla vam bodo poslana na email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Po\u0161lji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginData.geslo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sporocilo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".checkbox[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n.mybtn[_ngcontent-%COMP%]{\r\n    border-radius:50px;\r\n    color: black;\r\n    background-color: #EBEBEB;\r\n    margin: auto;\r\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-position: absolute;\r\n    z-index: 1;\r\n    object-fit: cover;\r\n}\r\n\r\n\r\n#signing-form-container[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n    width: 100%;\r\n    z-index: 50;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n#overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(45deg, rgba(56, 10, 10, 0.7) 0%,rgba(35, 138, 163, 0.7) 100%);\r\n    z-index: 10; \r\n}\r\n\r\n\r\n#bg-video[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.formSign[_ngcontent-%COMP%] {\r\n    background-color: rgba(230, 230, 230, 0.8);\r\n    padding: 2rem;\r\n    margin: 2rem;\r\n    border-radius: 0.5rem;\r\n    width: 100%;\r\n    margin: auto;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n\r\n#statusInstruktorja[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHlGQUF5RjtJQUN6RixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94e1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ubXlidG57XHJcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jaGVybyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4jaGVybyB2aWRlbyB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuI3NpZ25pbmctZm9ybS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4jb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg1NiwgMTAsIDEwLCAwLjcpIDAlLHJnYmEoMzUsIDEzOCwgMTYzLCAwLjcpIDEwMCUpO1xyXG4gICAgei1pbmRleDogMTA7IFxyXG59XHJcblxyXG4jYmctdmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtU2lnbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4jc3RhdHVzSW5zdHJ1a3RvcmphIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "T2P9":
/*!********************************************************************!*\
  !*** ./src/app/common/components/messaging/messaging.component.ts ***!
  \********************************************************************/
/*! exports provided: MessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingComponent", function() { return MessagingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessagingComponent {
    constructor() { }
    ngOnInit() {
    }
}
MessagingComponent.ɵfac = function MessagingComponent_Factory(t) { return new (t || MessagingComponent)(); };
MessagingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagingComponent, selectors: [["app-messaging"]], decls: 2, vars: 0, template: function MessagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "messaging works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdpbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messaging',
                templateUrl: './messaging.component.html',
                styleUrls: ['./messaging.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VVTZ":
/*!***********************************************************!*\
  !*** ./src/app/modules/app-routing/app-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/landing/landing.component */ "Cb+/");
/* harmony import */ var src_app_common_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/login/login.component */ "L6z8");
/* harmony import */ var src_app_common_components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/components/register/register.component */ "khJ1");
/* harmony import */ var src_app_common_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/components/dashboard/dashboard.component */ "Dcw/");
/* harmony import */ var src_app_common_components_instructions_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/components/instructions/instructors/instructors.component */ "AF3o");
/* harmony import */ var src_app_common_components_instructions_events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/components/instructions/events/events.component */ "haLc");
/* harmony import */ var src_app_common_components_instructions_event_info_event_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/components/instructions/event-info/event-info.component */ "sKO1");
/* harmony import */ var src_app_common_components_jobs_offers_offers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/components/jobs/offers/offers.component */ "4jLl");
/* harmony import */ var src_app_common_components_jobs_offer_info_offer_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/components/jobs/offer-info/offer-info.component */ "lqD5");
/* harmony import */ var src_app_common_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/components/profile/profile.component */ "1Ix/");
/* harmony import */ var src_app_common_components_instructions_event_new_event_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/components/instructions/event-new/event-new.component */ "JJ6x");
/* harmony import */ var src_app_common_components_jobs_offer_new_offer_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common/components/jobs/offer-new/offer-new.component */ "K2KH");
/* harmony import */ var src_app_common_components_chat_kontakti_kontakti_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common/components/chat/kontakti/kontakti.component */ "bHB8");
/* harmony import */ var src_app_common_components_db_db_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/common/components/db/db.component */ "Fvdj");



















const poti = [
    {
        path: '',
        component: _common_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    },
    {
        path: 'prijava',
        component: src_app_common_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'registracija',
        component: src_app_common_components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'my',
        component: src_app_common_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
    },
    {
        path: 'instruktorji',
        component: src_app_common_components_instructions_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_7__["InstructorsComponent"]
    },
    {
        path: 'instrukcije-dogodki',
        component: src_app_common_components_instructions_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"]
    },
    {
        path: 'instrukcije-dogodki/dogodek/:idDogodka',
        component: src_app_common_components_instructions_event_info_event_info_component__WEBPACK_IMPORTED_MODULE_9__["EventInfoComponent"]
    },
    {
        path: 'instrukcije-dogodki/dodaj',
        component: src_app_common_components_instructions_event_new_event_new_component__WEBPACK_IMPORTED_MODULE_13__["EventNewComponent"]
    },
    {
        path: 'ponudba-del',
        component: src_app_common_components_jobs_offers_offers_component__WEBPACK_IMPORTED_MODULE_10__["OffersComponent"]
    },
    {
        path: 'ponudba-del/delo/:idDela',
        component: src_app_common_components_jobs_offer_info_offer_info_component__WEBPACK_IMPORTED_MODULE_11__["OfferInfoComponent"]
    },
    {
        path: 'ponudba-del/dodaj',
        component: src_app_common_components_jobs_offer_new_offer_new_component__WEBPACK_IMPORTED_MODULE_14__["OfferNewComponent"]
    },
    {
        path: 'profil/:emailUporabnika',
        component: src_app_common_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]
    },
    {
        path: 'sporocanje',
        component: src_app_common_components_chat_kontakti_kontakti_component__WEBPACK_IMPORTED_MODULE_15__["KontaktiComponent"]
    },
    {
        path: 'db',
        component: src_app_common_components_db_db_component__WEBPACK_IMPORTED_MODULE_16__["DbComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(poti)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(poti)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "XPrz":
/*!*************************************************!*\
  !*** ./src/app/common/services/jobs.service.ts ***!
  \*************************************************/
/*! exports provided: JobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsService", function() { return JobsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _classes_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/cache */ "4KXK");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "xpqA");








class JobsService {
    constructor(http, authenticationService, cache) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.cache = cache;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getJobs() {
        const url = `${this.apiUrl}/ponudba-del`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    getJobInfo(jobID) {
        const url = `${this.apiUrl}/ponudba-del/delo/${jobID}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    postNewJob(job) {
        const url = `${this.apiUrl}/ponudba-del`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .post(url, job, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    editJobInfo(job) {
        const url = `${this.apiUrl}/ponudba-del/delo/${job._id}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .put(url, job, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    deleteJob(jobID) {
        const url = `${this.apiUrl}/ponudba-del/delo/${jobID}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .delete(url, httpProperties)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    signUp(jobID) {
        const currentUserEmail = this.authenticationService.getCurrentUser().email;
        const url = `${this.apiUrl}/ponudba-del/delo/${jobID}/prijava`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .post(url, { currentUserEmail }, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    getJobHost(userID) {
        const url = `${this.apiUrl}/uporabnik/${userID}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    handleError(napaka) {
        console.error('Prišlo je do napake', napaka);
        return Promise.reject(napaka.message || napaka);
    }
}
JobsService.ɵfac = function JobsService_Factory(t) { return new (t || JobsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_classes_cache__WEBPACK_IMPORTED_MODULE_4__["BROWSER_CACHE"])); };
JobsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobsService, factory: JobsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_classes_cache__WEBPACK_IMPORTED_MODULE_4__["BROWSER_CACHE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Y4kF":
/*!*************************************************************!*\
  !*** ./src/app/common/components/db/test/users-testni.json ***!
  \*************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"\",\"ime\":\"Simon\",\"priimek\":\"Antonič\",\"email\":\"simon@antonic.com\",\"geslo\":\"simonsimon33\",\"statusInstruktorja\":true,\"opis\":\"Zanimajo me filozofija in književnost. Rade volje predavam.\",\"telefonskaStevilka\":\"030714349\",\"dogodki\":null,\"dela\":null,\"ocena\":4,\"poslanaSporocila\":null,\"kontakti\":null},{\"_id\":\"\",\"ime\":\"Andrej\",\"priimek\":\"Rustja\",\"email\":\"andrej@rustja.com\",\"geslo\":\"andrej33\",\"statusInstruktorja\":true,\"opis\":\"Zelo mi je všeč učenje preko spleta!\",\"telefonskaStevilka\":\"070734359\",\"dogodki\":null,\"dela\":null,\"ocena\":3,\"poslanaSporocila\":null,\"kontakti\":null},{\"_id\":\"\",\"ime\":\"Peter\",\"priimek\":\"Soban\",\"email\":\"peter@soban.com\",\"geslo\":\"peterpeter33\",\"statusInstruktorja\":true,\"opis\":\"V veselje mi je predavati in pomagati drugim, pa tudi se kaj novega naučiti\",\"telefonskaStevilka\":\"030814234\",\"dogodki\":null,\"dela\":null,\"ocena\":5,\"poslanaSporocila\":null,\"kontakti\":null},{\"_id\":\"\",\"ime\":\"Rudi\",\"priimek\":\"Bobnič\",\"email\":\"rudi@bobnic.com\",\"geslo\":\"rudirudi33\",\"statusInstruktorja\":true,\"opis\":\"Matematika in fizika sta moji specialiteti! Vsi povabljeni na moja predavanja!\",\"telefonskaStevilka\":\"070725389\",\"dogodki\":null,\"dela\":null,\"ocena\":4,\"poslanaSporocila\":null,\"kontakti\":null},{\"_id\":\"\",\"ime\":\"Jernej\",\"priimek\":\"Tomsič\",\"email\":\"jernej@tomsic.com\",\"geslo\":\"jernej33\",\"statusInstruktorja\":false,\"opis\":\"Slabo mi gre matematika, hvaležen bom vsakemu poskusu pomoči\",\"telefonskaStevilka\":\"030313469\",\"dogodki\":null,\"dela\":null,\"ocena\":2,\"poslanaSporocila\":null,\"kontakti\":null},{\"_id\":\"\",\"ime\":\"Miha\",\"priimek\":\"Kovic\",\"email\":\"miha@kovic.com\",\"geslo\":\"mihamiha33\",\"statusInstruktorja\":true,\"opis\":\"Učim matematiko v gimnaziji, ampak rad tudi poslušam predavanja drugih.\",\"telefonskaStevilka\":\"030554294\",\"dogodki\":null,\"dela\":null,\"ocena\":3,\"poslanaSporocila\":null,\"kontakti\":null},{\"_id\":\"\",\"ime\":\"Janja\",\"priimek\":\"Ferfič\",\"email\":\"janja@ferfic.com\",\"geslo\":\"janjasem22\",\"statusInstruktorja\":true,\"opis\":\"Rad pomagam in enako rada se učim :).\",\"telefonskaStevilka\":\"070468346\",\"dogodki\":null,\"dela\":null,\"ocena\":3,\"poslanaSporocila\":null,\"kontakti\":null},{\"_id\":\"\",\"ime\":\"Luka\",\"priimek\":\"Kranjec\",\"email\":\"luka@kranjec.com\",\"geslo\":\"student21\",\"statusInstruktorja\":true,\"opis\":\"Študent na univerzi v Ljubljani. Pripravljen pomagat, sprejemam pa tudi kritike ;).\",\"telefonskaStevilka\":\"070365316\",\"dogodki\":null,\"dela\":null,\"ocena\":4,\"poslanaSporocila\":null,\"kontakti\":null},{\"_id\":\"\",\"ime\":\"Meta\",\"priimek\":\"Hribar\",\"email\":\"meta@hribar.com\",\"geslo\":\"metasem33\",\"statusInstruktorja\":true,\"opis\":\"Rad se naučim česa novega.\",\"telefonskaStevilka\":\"030241356\",\"dogodki\":null,\"dela\":null,\"ocena\":4,\"poslanaSporocila\":null,\"kontakti\":null}]");

/***/ }),

/***/ "YUB6":
/*!**********************************************************!*\
  !*** ./src/app/common/components/main/main.component.ts ***!
  \**********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "zzzF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "GXNF");





class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "JMRq");
/* harmony import */ var _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/app-routing/app-routing.module */ "VVTZ");
/* harmony import */ var _common_components_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/components/main/main.component */ "YUB6");
/* harmony import */ var _common_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/components/landing/landing.component */ "Cb+/");
/* harmony import */ var _common_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/components/navbar/navbar.component */ "zzzF");
/* harmony import */ var _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/components/footer/footer.component */ "GXNF");
/* harmony import */ var _common_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/components/login/login.component */ "L6z8");
/* harmony import */ var _common_components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/components/register/register.component */ "khJ1");
/* harmony import */ var _common_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/components/dashboard/dashboard.component */ "Dcw/");
/* harmony import */ var _common_components_messaging_messaging_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/components/messaging/messaging.component */ "T2P9");
/* harmony import */ var _common_components_instructions_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/components/instructions/instructors/instructors.component */ "AF3o");
/* harmony import */ var _common_components_instructions_events_events_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/components/instructions/events/events.component */ "haLc");
/* harmony import */ var _common_components_instructions_event_info_event_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/components/instructions/event-info/event-info.component */ "sKO1");
/* harmony import */ var _common_components_instructions_event_new_event_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/components/instructions/event-new/event-new.component */ "JJ6x");
/* harmony import */ var _common_components_jobs_offers_offers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/components/jobs/offers/offers.component */ "4jLl");
/* harmony import */ var _common_components_jobs_offer_info_offer_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/components/jobs/offer-info/offer-info.component */ "lqD5");
/* harmony import */ var _common_components_jobs_offer_new_offer_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/components/jobs/offer-new/offer-new.component */ "K2KH");
/* harmony import */ var _common_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/components/profile/profile.component */ "1Ix/");
/* harmony import */ var _common_components_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./common/components/get-started/get-started.component */ "ryiy");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _common_components_chat_kontakti_kontakti_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./common/components/chat/kontakti/kontakti.component */ "bHB8");
/* harmony import */ var _common_components_chat_sporocila_sporocila_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./common/components/chat/sporocila/sporocila.component */ "8FOs");
/* harmony import */ var _common_pipes_sortiraj_sporocila_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./common/pipes/sortiraj-sporocila.pipe */ "7eRl");
/* harmony import */ var _common_pipes_cas_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./common/pipes/cas.pipe */ "/yQE");
/* harmony import */ var _common_pipes_letters_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./common/pipes/letters.pipe */ "0Rcm");
/* harmony import */ var _common_components_komentarji_komentarji_seznam_komentarji_seznam_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./common/components/komentarji/komentarji-seznam/komentarji-seznam.component */ "wLqX");
/* harmony import */ var _common_components_komentarji_komentarji_seznam_dela_komentarji_seznam_dela_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./common/components/komentarji/komentarji-seznam-dela/komentarji-seznam-dela.component */ "yDWR");
/* harmony import */ var _common_components_db_db_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/components/db/db.component */ "Fvdj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "ofXK");




































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_common_components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_common_components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
        _common_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
        _common_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _common_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _common_components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
        _common_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
        _common_components_messaging_messaging_component__WEBPACK_IMPORTED_MODULE_14__["MessagingComponent"],
        _common_components_instructions_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_15__["InstructorsComponent"],
        _common_components_instructions_events_events_component__WEBPACK_IMPORTED_MODULE_16__["EventsComponent"],
        _common_components_instructions_event_info_event_info_component__WEBPACK_IMPORTED_MODULE_17__["EventInfoComponent"],
        _common_components_instructions_event_new_event_new_component__WEBPACK_IMPORTED_MODULE_18__["EventNewComponent"],
        _common_components_jobs_offers_offers_component__WEBPACK_IMPORTED_MODULE_19__["OffersComponent"],
        _common_components_jobs_offer_info_offer_info_component__WEBPACK_IMPORTED_MODULE_20__["OfferInfoComponent"],
        _common_components_jobs_offer_new_offer_new_component__WEBPACK_IMPORTED_MODULE_21__["OfferNewComponent"],
        _common_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
        _common_components_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_23__["GetStartedComponent"],
        _common_components_chat_kontakti_kontakti_component__WEBPACK_IMPORTED_MODULE_25__["KontaktiComponent"],
        _common_components_chat_sporocila_sporocila_component__WEBPACK_IMPORTED_MODULE_26__["SporocilaComponent"],
        _common_pipes_sortiraj_sporocila_pipe__WEBPACK_IMPORTED_MODULE_27__["SortirajSporocilaPipe"],
        _common_pipes_cas_pipe__WEBPACK_IMPORTED_MODULE_28__["CasPipe"],
        _common_pipes_letters_pipe__WEBPACK_IMPORTED_MODULE_29__["LettersPipe"],
        _common_components_komentarji_komentarji_seznam_komentarji_seznam_component__WEBPACK_IMPORTED_MODULE_30__["KomentarjiSeznamComponent"],
        _common_components_komentarji_komentarji_seznam_dela_komentarji_seznam_dela_component__WEBPACK_IMPORTED_MODULE_31__["KomentarjiSeznamDelaComponent"],
        _common_components_db_db_component__WEBPACK_IMPORTED_MODULE_32__["DbComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
        ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _common_components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                    _common_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                    _common_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _common_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _common_components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                    _common_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                    _common_components_messaging_messaging_component__WEBPACK_IMPORTED_MODULE_14__["MessagingComponent"],
                    _common_components_instructions_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_15__["InstructorsComponent"],
                    _common_components_instructions_events_events_component__WEBPACK_IMPORTED_MODULE_16__["EventsComponent"],
                    _common_components_instructions_event_info_event_info_component__WEBPACK_IMPORTED_MODULE_17__["EventInfoComponent"],
                    _common_components_instructions_event_new_event_new_component__WEBPACK_IMPORTED_MODULE_18__["EventNewComponent"],
                    _common_components_jobs_offers_offers_component__WEBPACK_IMPORTED_MODULE_19__["OffersComponent"],
                    _common_components_jobs_offer_info_offer_info_component__WEBPACK_IMPORTED_MODULE_20__["OfferInfoComponent"],
                    _common_components_jobs_offer_new_offer_new_component__WEBPACK_IMPORTED_MODULE_21__["OfferNewComponent"],
                    _common_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
                    _common_components_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_23__["GetStartedComponent"],
                    _common_components_chat_kontakti_kontakti_component__WEBPACK_IMPORTED_MODULE_25__["KontaktiComponent"],
                    _common_components_chat_sporocila_sporocila_component__WEBPACK_IMPORTED_MODULE_26__["SporocilaComponent"],
                    _common_pipes_sortiraj_sporocila_pipe__WEBPACK_IMPORTED_MODULE_27__["SortirajSporocilaPipe"],
                    _common_pipes_cas_pipe__WEBPACK_IMPORTED_MODULE_28__["CasPipe"],
                    _common_pipes_letters_pipe__WEBPACK_IMPORTED_MODULE_29__["LettersPipe"],
                    _common_components_komentarji_komentarji_seznam_komentarji_seznam_component__WEBPACK_IMPORTED_MODULE_30__["KomentarjiSeznamComponent"],
                    _common_components_komentarji_komentarji_seznam_dela_komentarji_seznam_dela_component__WEBPACK_IMPORTED_MODULE_31__["KomentarjiSeznamDelaComponent"],
                    _common_components_db_db_component__WEBPACK_IMPORTED_MODULE_32__["DbComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                    ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"]
                ],
                providers: [],
                bootstrap: [_common_components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_common_components_chat_kontakti_kontakti_component__WEBPACK_IMPORTED_MODULE_25__["KontaktiComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_33__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["NgForOf"], _common_components_chat_sporocila_sporocila_component__WEBPACK_IMPORTED_MODULE_26__["SporocilaComponent"]], [_common_pipes_letters_pipe__WEBPACK_IMPORTED_MODULE_29__["LettersPipe"]]);


/***/ }),

/***/ "bHB8":
/*!***********************************************************************!*\
  !*** ./src/app/common/components/chat/kontakti/kontakti.component.ts ***!
  \***********************************************************************/
/*! exports provided: KontaktiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktiComponent", function() { return KontaktiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/chat.service */ "inT+");
/* harmony import */ var src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/authentication.service */ "xpqA");




function KontaktiComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function KontaktiComponent_form_6_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.dodajNovKontakt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dodaj kontakt z elektronsko po\u0161to: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KontaktiComponent_form_6_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.novKontakt.emailKontakta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dodaj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.novKontakt.emailKontakta);
} }
function KontaktiComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nima\u0161 nobenih kontaktov. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KontaktiComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KontaktiComponent_div_8_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const kontakt_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.kliciPridobiSporocila(kontakt_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "letters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kontakt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, kontakt_r7.ime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", kontakt_r7.ime, " ", kontakt_r7.priimek, " ");
} }
function KontaktiComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sporocila", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sporocila", ctx_r3.podatkiSporocila);
} }
const _c0 = function (a0) { return { "radiusToggle": a0 }; };
class KontaktiComponent {
    constructor(chatStoritev, authenticationService) {
        this.chatStoritev = chatStoritev;
        this.authenticationService = authenticationService;
        this.showForm = false;
        this.novKontakt = {
            emailKontakta: ''
        };
    }
    onClickForm() {
        this.showForm = true;
    }
    dodajNovKontakt() {
        this.obrazecNapaka = "";
        if (this.soPodatkiUstrezni()) {
            // console.log("this.novKontakt.emailKontakta" + this.novKontakt.emailKontakta);
            this.chatStoritev
                .posljiKontakt(this.authenticationService.getCurrentUser().email, this.novKontakt)
                .then(kontakt => {
                // console.log("Kontakt shranjen", kontakt);
                this.novKontakt.emailKontakta = '';
                this.kliciPridobiKontakte();
                this.showForm = false;
            })
                .catch(napaka => this.obrazecNapaka = napaka);
        }
        else {
            this.obrazecNapaka = "Prosim vnesite sporočilo";
        }
    }
    soPodatkiUstrezni() {
        if (this.novKontakt.emailKontakta) {
            return true;
        }
        else {
            return false;
        }
    }
    kliciPridobiKontakte() {
        this.chatStoritev
            .pridobiKontakte(this.authenticationService.getCurrentUser().email)
            .then(servicePodatki => {
            this.podatkiKontakti = servicePodatki;
            // for(var i = 0; i < this.podatkiKontakti.pridobljeniKontakti.length; i++){
            //   console.log("kontakt " + i + " " + this.podatkiKontakti.pridobljeniKontakti[i].ime)
            // }
        });
    }
    kliciPridobiSporocila(idPrejmenika) {
        this.chatStoritev
            .pridobiSporocila(this.authenticationService.getCurrentUser().email, idPrejmenika)
            .then(servicePodatki => this.podatkiSporocila = servicePodatki);
    }
    ngOnInit() {
        this.kliciPridobiKontakte();
    }
}
KontaktiComponent.ɵfac = function KontaktiComponent_Factory(t) { return new (t || KontaktiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
KontaktiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KontaktiComponent, selectors: [["app-kontakti"]], decls: 11, vars: 7, consts: [["id", "contacts", 1, "row", 2, "height", "100vh", "margin-right", "0", "margin-left", "0"], [1, "col-sm-3", 2, "padding", "0"], [1, "bg-dark", "list-group"], [2, "border", "3px", "border-color", "#343a40", "border-style", "solid"], [1, "list-group-item", "list-group-item-action", 2, "border-radius", "17px", "border-style", "none", "text-align", "center", "font-size", "medium", 3, "ngClass", "click"], ["style", "background: white;\n                border-radius: 0px 0px 17px 17px;", "method", "post", "class", "formZaKontakte", 3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "chatbox", 1, "col-sm-9", "bg-dark", 2, "padding", "0", "height", "100vh"], ["method", "post", 1, "formZaKontakte", 2, "background", "white", "border-radius", "0px 0px 17px 17px", 3, "ngSubmit"], ["type", "text", "name", "emailKontakta", "placeholder", " Vnesi email", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-info", 2, "margin-left", "0.5rem"], [1, "list-group-item", "list-group-item-action", 2, "border-style", "none", "background", "#ffdd78"], [1, "list-group-item", "list-group-item-action", 2, "border-style", "none", 3, "click"], [1, "krogec"], [3, "sporocila"]], template: function KontaktiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KontaktiComponent_Template_li_click_4_listener() { return ctx.onClickForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KontaktiComponent_form_6_Template, 5, 1, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, KontaktiComponent_div_7_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, KontaktiComponent_div_8_Template, 6, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, KontaktiComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showForm == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.podatkiKontakti.pridobljeniKontakti.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.podatkiKontakti.pridobljeniKontakti);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.podatkiSporocila);
    } }, styles: ["#contacts[_ngcontent-%COMP%] {\r\n    \r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.posamezniKontakt[_ngcontent-%COMP%] {\r\n    border: 1px solid #272727;\r\n    cursor: pointer;\r\n}\r\n\r\n.radiusToggle[_ngcontent-%COMP%] {\r\n    border-radius: 17px 17px 0px 0px !important;\r\n}\r\n\r\n.formZaKontakte[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.krogec[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    height: 2rem;\r\n    line-height: 2rem;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    font-size: 0.7rem;\r\n    background: #e4c0ff;\r\n    display: inline-block;\r\n    margin-right: 0.4rem;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover {\r\n    background-color: #c3c3c3;\r\n    cursor: pointer;\r\n}\r\n\r\n#contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    background-color: aliceblue;\r\n    display: inline-block;\r\n    border-radius: 0.2rem;\r\n    margin: 0.5rem;\r\n    overflow: hidden;\r\n    margin-top: 1rem;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n#contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(92, 92, 92) !important;\r\n    cursor: pointer;\r\n}\r\n\r\n#contact-list[_ngcontent-%COMP%] {\r\n    \r\n    white-space: nowrap;\r\n    border-radius: 0.5rem;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.msg_moj_zunanji2[_ngcontent-%COMP%]{\r\n    text-align: end; \r\n    margin-right: 5px;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.msg_moj2[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-right: 10px;\r\n    border-radius: 25px;\r\n    background-color: #82ccdd;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: black;\r\n    text-align: end;\r\n}\r\n\r\n.msg_time_moj2[_ngcontent-%COMP%]{\r\n    font-size: 10px;\r\n    color: rgb(192, 192, 192);\r\n    margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvbnRha3RpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTt1QkFDbUI7QUFDdkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUdBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoia29udGFrdGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0cyB7XHJcbiAgICAvKiBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTsgKi9cclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnBvc2FtZXpuaUtvbnRha3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI3MjcyNztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5yYWRpdXNUb2dnbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweCAxN3B4IDBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm1aYUtvbnRha3RlIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmtyb2dlYyB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRjMGZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2MzYzM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNjb250YWN0LWxpc3QgbGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhY3QtbGlzdCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDkyLCA5MikgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2NvbnRhY3QtbGlzdCB7XHJcbiAgICAvKiBvdmVyZmxvdy14OiBhdXRvOyAqL1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5tc2dfbW9qX3p1bmFuamkye1xyXG4gICAgdGV4dC1hbGlnbjogZW5kOyBcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4ubXNnX21vajJ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJjY2RkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLm1zZ190aW1lX21vajJ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KontaktiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kontakti',
                templateUrl: './kontakti.component.html',
                styleUrls: ['./kontakti.component.css']
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "cMyE":
/*!*****************************************************!*\
  !*** ./src/app/common/services/comments.service.ts ***!
  \*****************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _classes_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/cache */ "4KXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "xpqA");








class CommentsService {
    constructor(http, authenticationService, cache) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.cache = cache;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    /* Nov komentar */
    postNewComment(event, comment) {
        // console.log("Podatki so prišli v service, in sicer so naslednji:");
        // console.log(event);
        // console.log(comment);
        const url = `${this.apiUrl}/instrukcije-dogodki/dogodek/${event._id}/komentarji`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .post(url, comment, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    editComment(comment, event) {
        const url = `${this.apiUrl}/instrukcije-dogodki/dogodek/${event._id}/komentarji/${comment._id}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .put(url, comment, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    deleteComment(eventID, commentID) {
        const url = `${this.apiUrl}/instrukcije-dogodki/dogodek/${eventID}/komentarji/${commentID}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .delete(url, httpProperties)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    /* P O P R A V I ! ! ! */
    handleError(error) {
        //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error);
        return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error);
        // console.error("Error in the service");
        // return;
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_classes_cache__WEBPACK_IMPORTED_MODULE_3__["BROWSER_CACHE"])); };
CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_classes_cache__WEBPACK_IMPORTED_MODULE_3__["BROWSER_CACHE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "haLc":
/*!***************************************************************************!*\
  !*** ./src/app/common/components/instructions/events/events.component.ts ***!
  \***************************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_instructions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/instructions.service */ "sm0C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../get-started/get-started.component */ "ryiy");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "JMRq");









function EventsComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
} }
function EventsComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 29);
} }
function EventsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.sporocilo);
} }
function EventsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Podrobnosti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dogodek_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dogodek_r4.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dogodek_r4.opis, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/instrukcije-dogodki/dogodek/", dogodek_r4._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a2) { return { id: "pagination", itemsPerPage: 10, currentPage: a2 }; };
class EventsComponent {
    constructor(instructionsService) {
        this.instructionsService = instructionsService;
        this.sporocilo = "";
        this.page = 1;
        this.key = 'id';
        this.reverse = false;
    }
    ngOnInit() {
        this.getEvents();
    }
    isci() {
        var filter, list, a, txtValue, search;
        search = document.getElementById("search");
        list = document.getElementsByClassName("card");
        filter = search.value.toUpperCase();
        let i;
        for (i = 0; i < list.length; i++) {
            a = list[i].getElementsByClassName("card-title")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                list[i].style.display = "";
            }
            else {
                list[i].style.display = "none";
            }
        }
    }
    getEvents() {
        this.instructionsService.getEvents()
            .then(events => {
            this.dogodki = events.reverse();
            this.sporocilo = events.length > 0 ? "" : "Ne najdem nobenega dogodka :(";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri iskanju dogodkov.";
            // console.error(error);
        });
    }
    sort() {
        this.key = this.getSelectValue();
    }
    reverseSet() {
        this.reverse = !this.reverse;
    }
    getSelectValue() {
        return document.getElementById('razvrsti').value;
    }
}
EventsComponent.ɵfac = function EventsComponent_Factory(t) { return new (t || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_instructions_service__WEBPACK_IMPORTED_MODULE_1__["InstructionsService"])); };
EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsComponent, selectors: [["app-events"]], decls: 45, vars: 13, consts: [["id", "ins-nav", 1, "nav", "container"], [1, "nav-item", "nav-item-left-border", "nav-item-inactive-bg"], ["routerLink", "/instruktorji", 1, "nav-link", "active"], [1, "nav-item", "bg-info", "nav-item-right-border"], ["routerLink", "/instrukcije-dogodki", 1, "nav-link"], ["id", "filter-bar", 1, "container"], [1, "filter-item"], ["for", "razvrsti"], ["name", "razvrsti", "id", "razvrsti", 1, "form-control"], ["value", ""], ["value", "datum"], ["value", "steviloProstihMest"], ["value", "naziv"], ["value", "cena"], ["id", "filter-btn", "value", "Filtriraj", 1, "btn", "btn-light", 3, "click"], [1, "btn", "btn-light", "btn-order", 2, "cursor", "pointer", 3, "click"], ["class", "fas fa-long-arrow-alt-up", 4, "ngIf"], ["class", "fas fa-long-arrow-alt-down", 4, "ngIf"], [1, "input-group", "mb-3", "container"], ["id", "search", "type", "text", "placeholder", "Vpi\u0161i \u017Eeleno iskanje", "aria-label", "Iskanje", "aria-describedby", "search-button", 1, "form-control", 3, "keyup"], [1, "input-group-append"], ["type", "button", "id", "search-button", 1, "btn", "btn-outline-secondary", "btn-info", 3, "click"], [1, "new-job", "container"], ["routerLink", "dodaj", 1, "btn", "btn-success"], ["class", "alert alert-warning container", "style", "margin-top: 2rem", 4, "ngIf"], ["id", "instructors", 1, "container"], ["class", "card instructor", "style", "width: 18rem;", 4, "ngFor", "ngForOf"], ["id", "pagination", "maxSize", "5", "directionLinks", "true", 1, "pagination", 3, "pageChange"], [1, "fas", "fa-long-arrow-alt-up"], [1, "fas", "fa-long-arrow-alt-down"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], [1, "card", "instructor", 2, "width", "18rem"], ["src", "../../../assets/media/thumbnails/green.png", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text", 2, "height", "2rem", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "btn", "btn-primary", 3, "href"]], template: function EventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "In\u0161truktorji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dogodki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Razvrsti po:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Izberi filter...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Datumu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0160tevilu prostih mest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Imenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ceni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_Template_button_click_23_listener() { return ctx.sort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Filtriraj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_Template_button_click_25_listener() { return ctx.reverseSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EventsComponent_i_26_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EventsComponent_i_27_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EventsComponent_Template_input_keyup_29_listener() { return ctx.isci(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_Template_button_click_31_listener() { return ctx.isci(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "I\u0161\u010Di");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ustvari nov dogodek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EventsComponent_div_36_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EventsComponent_div_38_Template, 9, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "orderBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "pagination-controls", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function EventsComponent_Template_pagination_controls_pageChange_42_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "get-started");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sporocilo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](40, 7, ctx.dogodki, ctx.key, ctx.reverse), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.page)));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__["GetStartedComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderPipe"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n.myCol[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    cursor: pointer;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.img-responsive[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 15vw;\r\n    object-fit: cover;\r\n    transition: 0.2s ease-in-out;\r\n    transform: scale(1.00);\r\n  }\r\n\r\n.card-title[_ngcontent-%COMP%], .card-text[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n\r\n.predmetText[_ngcontent-%COMP%]{\r\n    display: inline-block; \r\n    position: absolute; \r\n    top: 50%; \r\n    left: 50%; \r\n    transform: translate(-50%,-50%);\r\n    padding: 0px 5px;\r\n    background-color: rgba(255,255,255,0.5);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    border-radius: 8px;\r\n    font-size: 27px;\r\n    color: black;\r\n    font-family: 'Work Sans', sans-serif;\r\n    }\r\n\r\na[_ngcontent-%COMP%]:hover   .list-thumbnail[_ngcontent-%COMP%] {\r\n    transition: 0.2s ease-in-out;\r\n    transform: scale(1.05);\r\n  }\r\n\r\n.predmetText[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(255,255,255,0.2);\r\n    transition: 0.2s ease-in-out;\r\n  }\r\n\r\n#check-event-list[_ngcontent-%COMP%] {\r\n    margin-left: 50%;\r\n    transform: translate(-50%);\r\n  }\r\n\r\n#filter-bar[_ngcontent-%COMP%] {\r\n    background-color: rgb(158, 214, 255);\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n#razvrsti[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    height: 3rem;\r\n    margin-right: 0.5rem;\r\n  }\r\n\r\n#filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 0.5rem;\r\n    transform: translateY(-1px);\r\n  }\r\n\r\n#filter-btn[_ngcontent-%COMP%] {\r\n    height: 3rem;\r\n    margin-left: 1rem !important;\r\n  }\r\n\r\n.btn-order[_ngcontent-%COMP%] {\r\n    width: 3rem;\r\n    height: 3rem;\r\n  }\r\n\r\n.filter-item[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 33%;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 7px;\r\n  }\r\n\r\n#search-bar[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n\r\n.instructor[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 30% !important;\r\n    margin: 0.8rem;\r\n  }\r\n\r\n.instructor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 5rem;\r\n    object-fit: cover;\r\n  }\r\n\r\n#instructors[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    padding: 0;\r\n  }\r\n\r\n#tab[_ngcontent-%COMP%] {\r\n  background-color: aliceblue;\r\n  text-align: center;\r\n  height: 3rem;\r\n  width: 100%;\r\n  padding: 0;\r\n}\r\n\r\n#tab[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 49%;\r\n  background-color: antiquewhite;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  padding-right: 0;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  padding: 1rem;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-left-border[_ngcontent-%COMP%] {\r\n  border-radius: 0.5rem 0 0 0.5rem;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-right-border[_ngcontent-%COMP%] {\r\n  border-radius: 0 0.5rem 0.5rem 0;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-inactive-bg[_ngcontent-%COMP%] {\r\n  background-color: rgb(226, 226, 226);\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  font-size: x-large;\r\n  color: white;\r\n}\r\n\r\n#ins-nav[_ngcontent-%COMP%]   .nav-item-inactive-bg[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(102, 102, 102);\r\n}\r\n\r\n#job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #job-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin: 1rem;\r\n}\r\n\r\n#job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  color: white;\r\n  margin: 0;\r\n  margin-top: 2rem;\r\n  width: 100%;\r\n}\r\n\r\n#job-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin-bottom: 2rem;\r\n  padding: 0;\r\n}\r\n\r\n.load-more[_ngcontent-%COMP%] {\r\n  display: table;\r\n  margin-left: 50%;\r\n  transform: translate(-50%);\r\n  margin-top: 2rem;\r\n}\r\n\r\n.load-more[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  color: black;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .filter-item[_ngcontent-%COMP%] {\r\n      width: 49%;\r\n  }\r\n  \r\n  .instructor[_ngcontent-%COMP%] {\r\n    width: 46% !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .instructor[_ngcontent-%COMP%] {\r\n    width: 95% !important;\r\n    margin: 0;\r\n    margin-bottom: 0.8rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n  #ins-nav[_ngcontent-%COMP%]   .nav-item-right-border[_ngcontent-%COMP%], #ins-nav[_ngcontent-%COMP%]   .nav-item-left-border[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 0 0;\r\n  }\r\n\r\n  #ins-nav[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  #filter-bar[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n  }\r\n\r\n  #job-header[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #job-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    border-radius: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQzs7QUFFRjtJQUNFLDRCQUE0QjtJQUM1QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsNEJBQTRCO0VBQzlCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtFQUM1Qjs7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxTQUFTO0lBQ1QsWUFBWTtJQUNaLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLGNBQWM7SUFDZCwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSxZQUFZO0lBQ1osNEJBQTRCO0VBQzlCOztBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztBQUVGO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7TUFDSSxVQUFVO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImV2ZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuLm15Q29se1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbiAgXHJcbiAgLmltZy1yZXNwb25zaXZle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDApO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGl0bGUsIC5jYXJkLXRleHQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgXHJcbiAgLnByZWRtZXRUZXh0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IDUwJTsgXHJcbiAgICBsZWZ0OiA1MCU7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBcclxuICBhOmhvdmVyIC5saXN0LXRodW1ibmFpbCB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB9XHJcbiAgXHJcbiAgLnByZWRtZXRUZXh0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gICNjaGVjay1ldmVudC1saXN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICB9XHJcblxyXG4gICNmaWx0ZXItYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDIxNCwgMjU1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICNyYXp2cnN0aSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICNmaWx0ZXItYmFyIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcblxyXG4gICNmaWx0ZXItYnRuIHtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tb3JkZXIge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcblxyXG4gICNzZWFyY2gtYmFyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuaW5zdHJ1Y3RvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAuOHJlbTtcclxuICB9XHJcblxyXG4gIC5pbnN0cnVjdG9yIGltZyB7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gICNpbnN0cnVjdG9ycyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4jdGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jdGFiIGg0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbn1cclxuXHJcbiNpbnMtbmF2IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuI2lucy1uYXYgLm5hdi1pdGVtIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiNpbnMtbmF2IC5uYXYtaXRlbS1sZWZ0LWJvcmRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAgMCAwLjVyZW07XHJcbn1cclxuXHJcbiNpbnMtbmF2IC5uYXYtaXRlbS1yaWdodC1ib3JkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMC41cmVtIDAuNXJlbSAwO1xyXG59XHJcblxyXG4jaW5zLW5hdiAubmF2LWl0ZW0taW5hY3RpdmUtYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxufVxyXG5cclxuI2lucy1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2lucy1uYXYgLm5hdi1pdGVtLWluYWN0aXZlLWJnOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbiNqb2ItaGVhZGVyIGgyLCAjam9iLWhlYWRlciBhIHtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbiNqb2ItaGVhZGVyIGgyIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNqb2ItaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubG9hZC1tb3JlIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5sb2FkLW1vcmUgaDM6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5maWx0ZXItaXRlbSB7XHJcbiAgICAgIHdpZHRoOiA0OSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnN0cnVjdG9yIHtcclxuICAgIHdpZHRoOiA0NiUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuaW5zdHJ1Y3RvciB7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgI2lucy1uYXYgLm5hdi1pdGVtLXJpZ2h0LWJvcmRlciwgI2lucy1uYXYgLm5hdi1pdGVtLWxlZnQtYm9yZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XHJcbiAgfVxyXG5cclxuICAjaW5zLW5hdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICNmaWx0ZXItYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAjam9iLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjam9iLWhlYWRlciBoMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-events',
                templateUrl: './events.component.html',
                styleUrls: ['./events.component.css']
            }]
    }], function () { return [{ type: _services_instructions_service__WEBPACK_IMPORTED_MODULE_1__["InstructionsService"] }]; }, null); })();


/***/ }),

/***/ "inT+":
/*!*************************************************!*\
  !*** ./src/app/common/services/chat.service.ts ***!
  \*************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _classes_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/cache */ "4KXK");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "xpqA");







class ChatService {
    constructor(http, authenticationService, cache) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.cache = cache;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    pridobiKontakte(email) {
        const url = `${this.apiUrl}/chat/${email}`;
        return this.http
            .get(url)
            .toPromise()
            .then(odgovor => odgovor)
            .catch(this.obdelajNapako);
    }
    pridobiSporocila(email, idPrejemnika) {
        const url = `${this.apiUrl}/chat/${email}/${idPrejemnika}`;
        return this.http
            .get(url)
            .toPromise()
            .then(odgovor => odgovor)
            .catch(this.obdelajNapako);
    }
    posljiSporocilo(email, podatkiObrazca) {
        const url = `${this.apiUrl}/chat/${email}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .post(url, podatkiObrazca, httpProperties)
            .toPromise()
            .then(odgovor => odgovor)
            .catch(this.obdelajNapako);
    }
    posljiKontakt(emailUporabnika, podatkiObrazca) {
        const url = `${this.apiUrl}/chat/${emailUporabnika}/${podatkiObrazca.emailKontakta}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .post(url, podatkiObrazca, httpProperties)
            .toPromise()
            .then(odgovor => odgovor)
            .catch(this.obdelajNapako);
    }
    obdelajNapako(napaka) {
        console.error('Prišlo je do napake', napaka);
        return Promise.reject(napaka.message || napaka);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_classes_cache__WEBPACK_IMPORTED_MODULE_3__["BROWSER_CACHE"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_classes_cache__WEBPACK_IMPORTED_MODULE_3__["BROWSER_CACHE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "khJ1":
/*!******************************************************************!*\
  !*** ./src/app/common/components/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "xpqA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.sporocilo);
} }
function RegisterComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Registracija poteka... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.sporocilo = "";
        this.newUserData = {
            _id: null,
            ime: "",
            priimek: "",
            email: "",
            geslo: "",
            //gesloPotrdi: "",
            statusInstruktorja: false,
            opis: "Novo pečeni uporabnik.",
            telefonskaStevilka: null,
            dogodki: null,
            dela: null,
            ocena: null,
            //datumVpisa: null,
            poslanaSporocila: null,
            kontakti: null
        };
        this.loading = false;
        this.gesloPotrdi = "";
        this.crkeReg = new RegExp("^[a-zA-ZčžćšđČŽĆŠĐ\s]+$");
        this.gesloReg = new RegExp("^.{8,20}$");
    }
    ngOnInit() {
    }
    becomeAnInstructor(statusInstruktorja) {
        this.newUserData.statusInstruktorja = statusInstruktorja;
    }
    submitRegisterData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.newUserData.ime ||
                !this.newUserData.priimek ||
                !this.newUserData.email ||
                !this.newUserData.geslo ||
                !this.gesloPotrdi) {
                this.sporocilo = "Zahtevani so vsi podatki, prosim poskusite znova!";
            }
            else if (this.newUserData.geslo !== this.gesloPotrdi) {
                this.sporocilo = "Vneseni gesli se ne ujemata!";
            }
            else if (!this.crkeReg.test(this.newUserData.ime) || !this.crkeReg.test(this.newUserData.priimek)) {
                this.sporocilo = "Ime in priimek lahko vsebujeta le črke!";
            }
            else if (!this.gesloReg.test(this.newUserData.geslo)) {
                this.sporocilo = "Geslo mora vsebovati 8 do 20 znakov!";
            }
            else {
                let doesUserExist = null;
                yield this.authenticationService.getUser(this.newUserData.email)
                    .then((user) => { doesUserExist = user; })
                    .catch((err) => { doesUserExist = null; });
                if (doesUserExist != null) {
                    this.sporocilo = "Uporabnik s tem e-naslovom že obstaja.";
                }
                else {
                    this.loading = true;
                    this.executeRegister();
                }
            }
        });
    }
    executeRegister() {
        this.authenticationService
            .register(this.newUserData)
            .then(() => {
            this.router.navigateByUrl("/my");
        })
            .catch(error => {
            this.sporocilo = error;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 55, vars: 8, consts: [["id", "hero"], ["loop", "", "muted", "", "autoplay", "", "poster", "../../../../assets/media/backgrounds/welcome_poster.png", "id", "bg-video"], ["src", "../../../../assets/media/backgrounds/welcome_video.mp4", "type", "video/mp4"], ["id", "overlay"], ["id", "signing-form-container", 1, "container", "form-container"], [1, "row"], [1, "col-md-6", "mx-auto"], ["data-aos", "zoom-in", 1, "formSign", "form"], [1, "logo", "mb-3"], [1, "col-md-12", "text-center"], ["id", "registerNewUser", "autocomplete", "off", 3, "submit"], ["class", "alert alert-warning container", "style", "margin-top: 2rem", 4, "ngIf"], [1, "row", "container-fluid"], [1, "col"], ["for", "ime"], ["id", "ime", "name", "ime", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "priimek"], ["id", "priimek", "name", "priimek", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "aria-describedby", "emailHelp", "placeholder", "uporabnik@domena.si", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "geslo"], ["type", "password", "name", "geslo", "id", "geslo", "placeholder", "Geslo mora biti dolgo vsaj 8 znakov", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "gesloPotrdi"], ["type", "password", "name", "gesloPotrdi", "id", "gesloPotrdi", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "control", "control-checkbox"], ["type", "checkbox", "id", "statusInstruktorja", "name", "statusInstruktorja", "checked", "true", "value", "true", 3, "ngModel", "ngModelChange", "change"], [2, "font-size", "1rem"], [1, "control_indicator"], ["type", "submit", 1, "btn", "btn-block", "mybtn", "btn-primary"], ["class", "alert alert-info", 4, "ngIf"], [1, "col-md-12"], [1, "text-center"], ["routerLink", "/prijava", "id", "signin"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], [1, "alert", "alert-info"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Registracija");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_12_listener() { return ctx.submitRegisterData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ime");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.newUserData.ime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Priimek");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) { return ctx.newUserData.priimek = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) { return ctx.newUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Geslo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_32_listener($event) { return ctx.newUserData.geslo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Potrdi geslo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_36_listener($event) { return ctx.gesloPotrdi = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_39_listener($event) { return ctx.newUserData.statusInstruktorja = $event; })("change", function RegisterComponent_Template_input_change_39_listener() { return ctx.becomeAnInstructor(ctx.newUserData.statusInstruktorja ? true : false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " \u017Delim postati in\u0161truktor (to lahko storite kasneje)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Registriraj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, RegisterComponent_div_47_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u017De registriran? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Prijavi se tukaj.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sporocilo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newUserData.ime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newUserData.priimek);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newUserData.geslo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gesloPotrdi);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newUserData.statusInstruktorja);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".checkbox[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n.mybtn[_ngcontent-%COMP%]{\r\n    border-radius:50px;\r\n    color: black;\r\n    background-color: #EBEBEB;\r\n    margin: auto;\r\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-position: absolute;\r\n    z-index: 1;\r\n    object-fit: cover;\r\n}\r\n\r\n\r\n#signing-form-container[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n    width: 100%;\r\n    z-index: 50;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n#overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(45deg, rgba(56, 10, 10, 0.7) 0%,rgba(35, 138, 163, 0.7) 100%);\r\n    z-index: 10; \r\n}\r\n\r\n\r\n#bg-video[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100vh !important;\r\n}\r\n\r\n\r\n.formSign[_ngcontent-%COMP%] {\r\n    background-color: rgba(230, 230, 230, 0.8);\r\n    padding: 2rem;\r\n    margin: 2rem;\r\n    border-radius: 0.5rem;\r\n    width: 100%;\r\n    margin: auto;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n\r\n#statusInstruktorja[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHlGQUF5RjtJQUN6RixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7OztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmOzs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLm15YnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2hlcm8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI2hlcm8gdmlkZW8ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcblxyXG4jc2lnbmluZy1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNvdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDU2LCAxMCwgMTAsIDAuNykgMCUscmdiYSgzNSwgMTM4LCAxNjMsIDAuNykgMTAwJSk7XHJcbiAgICB6LWluZGV4OiAxMDsgXHJcbn1cclxuXHJcbiNiZy12aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm1TaWduIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC44KTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbiNzdGF0dXNJbnN0cnVrdG9yamEge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "lQDp":
/*!*******************************************************************!*\
  !*** ./src/app/common/components/db/test/instrukcije-testni.json ***!
  \*******************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"\",\"naziv\":\"Predavanje filozofije\",\"opis\":\"Filozofija 19. stoletja v eni uri\",\"cena\":6,\"datestring\":\"2021-03-03\",\"datum\":null,\"ura\":\"12:00\",\"steviloProstihMest\":15,\"emailInstruktorja\":\"simon@antonic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo zanimiva razlaga.\",\"datestring\":\"2021-04-12\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":2,\"besediloKomentarja\":\"Dobra, a ponekod pomanjkljiva razlaga.\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Učenje matematike\",\"opis\":\"Linearna algebra, kot jo nisi nikoli prej spoznal.\",\"cena\":5,\"datestring\":\"2021-11-20\",\"datum\":null,\"ura\":\"10:00\",\"steviloProstihMest\":10,\"emailInstruktorja\":\"rudi@bobnic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsic.com\",\"ocena\":2,\"besediloKomentarja\":\"Nič mi ni bilo jasno\",\"datestring\":\"2021-12-01\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":1,\"besediloKomentarja\":\"Še sam je bil zmeden...\",\"datestring\":\"2021-11-23\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Kitajska književnost\",\"opis\":\"Kitajska književnost od začetkov do danes\",\"cena\":3,\"datestring\":\"2021-03-03\",\"datum\":null,\"ura\":\"12:00\",\"steviloProstihMest\":15,\"emailInstruktorja\":\"simon@antonic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsic.com\",\"ocena\":4,\"besediloKomentarja\":\"Všeč mi je bilo!\",\"datestring\":\"2021-04-12\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":1,\"besediloKomentarja\":\"Nekako površno..\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Osnove SQLa\",\"opis\":\"Naučili se bomo kar je potrebno za delo na podatkovnih bazah.\",\"cena\":6,\"datestring\":\"2021-04-24\",\"datum\":null,\"ura\":\"15:00\",\"steviloProstihMest\":15,\"emailInstruktorja\":\"andrej@rustja.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"rudi@bobnic.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo zanimivo!\",\"datestring\":\"2021-05-03\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfic.com\",\"ocena\":5,\"besediloKomentarja\":\"Težka snov, ampak preprosto razložena!\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Tečaj informatike\",\"opis\":\"V eni uri bom posredoval, kar potrebujete kot osnovno znanje:)\",\"cena\":10,\"datestring\":\"2021-03-11\",\"datum\":null,\"ura\":\"14:00\",\"steviloProstihMest\":10,\"emailInstruktorja\":\"luka@kranjec.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"simon@antonic.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo uporabno!\",\"datestring\":\"2021-03-15\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":1,\"besediloKomentarja\":\"Težko razumljivo, ni začel iz osnov; potrebno predznanje..\",\"datestring\":\"2021-03-20\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Zgodovina umetnosti\",\"opis\":\"18. stoletje svetovne zgodovine umetnosti\",\"cena\":4,\"datestring\":\"2021-04-11\",\"datum\":null,\"ura\":\"14:00\",\"steviloProstihMest\":4,\"emailInstruktorja\":\"meta@hribar.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":3,\"besediloKomentarja\":\"Ponekod pomanjkljivo ampak v celoti dobro.\",\"datestring\":\"2021-04-15\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfic.com\",\"ocena\":2,\"besediloKomentarja\":\"Ni bilo zanimivo. Izpustila je veliko pomembnih podatkov.\",\"datestring\":\"2021-04-19\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Programiranje v Javi\",\"opis\":\"Kaj bolj potrebujemo kot programiranje dandanes? V dveh urah bom razložil osnove programiranja v Javi\",\"cena\":14,\"datestring\":\"2021-02-08\",\"datum\":null,\"ura\":\"11:00\",\"steviloProstihMest\":8,\"emailInstruktorja\":\"miha@kovic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"luka@kranjec.com\",\"ocena\":5,\"besediloKomentarja\":\"Kratko in učinkovito!\",\"datestring\":\"2021-02-10\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"simon@antonic.com\",\"ocena\":5,\"besediloKomentarja\":\"Zelo dobra razlaga!\",\"datestring\":\"2021-02-13\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Tečaj angleščine, stopnja B2\",\"opis\":\"Analiza literarnega besedila, poudarek na tekoče govorjenem jeziku\",\"cena\":10,\"datestring\":\"2021-04-01\",\"datum\":null,\"ura\":\"16:00\",\"steviloProstihMest\":7,\"emailInstruktorja\":\"rudi@bobnic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsic.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo mi je pomagalo!\",\"datestring\":\"2021-04-12\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":2,\"besediloKomentarja\":\"Težko razumljivo, ni bilo v veliko pomoč..\",\"datestring\":\"2021-04-07\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"5 zanimivih trikov v geometriji\",\"opis\":\"Geometrijske formule na pamet? Ne hvala!\",\"cena\":10,\"datestring\":\"2021-05-27\",\"datum\":null,\"ura\":\"14:00\",\"steviloProstihMest\":11,\"emailInstruktorja\":\"rudi@bobnic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo uporabno!\",\"datestring\":\"2021-05-31\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":5,\"besediloKomentarja\":\"To, kar sem skozi celo osnovno šolo hotel poznati!\",\"datestring\":\"2021-06-02\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Osnove Microsoft paketa\",\"opis\":\"Word, Excel, Powerpoint za začetnike\",\"cena\":13,\"datestring\":\"2021-03-04\",\"datum\":null,\"ura\":\"17:00\",\"steviloProstihMest\":3,\"emailInstruktorja\":\"janja@ferfic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":3,\"besediloKomentarja\":\"Pričakovala sem kaj več snovi\",\"datestring\":\"2021-03-15\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"simon@antonic.com\",\"ocena\":2,\"besediloKomentarja\":\"Sem začetnik, vseeno pa se mi zdi, da je bilo obravnavano relativno malo snovi.\",\"datestring\":\"2021-03-17\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Predavanje filozofije\",\"opis\":\"Filozofija 19. stoletja v eni uri\",\"cena\":6,\"datestring\":\"2021-03-03\",\"datum\":null,\"ura\":\"12:00\",\"steviloProstihMest\":15,\"emailInstruktorja\":\"simon@antonic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo zanimiva razlaga.\",\"datestring\":\"2021-04-12\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":2,\"besediloKomentarja\":\"Dobra, a ponekod pomanjkljiva razlaga.\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Učenje matematike\",\"opis\":\"Linearna algebra, kot jo nisi nikoli prej spoznal.\",\"cena\":5,\"datestring\":\"2021-11-20\",\"datum\":null,\"ura\":\"10:00\",\"steviloProstihMest\":10,\"emailInstruktorja\":\"rudi@bobnic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsic.com\",\"ocena\":2,\"besediloKomentarja\":\"Nič mi ni bilo jasno\",\"datestring\":\"2021-12-01\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":1,\"besediloKomentarja\":\"Še sam je bil zmeden...\",\"datestring\":\"2021-11-23\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Kitajska književnost\",\"opis\":\"Kitajska književnost od začetkov do danes\",\"cena\":3,\"datestring\":\"2021-03-03\",\"datum\":null,\"ura\":\"12:00\",\"steviloProstihMest\":15,\"emailInstruktorja\":\"simon@antonic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsic.com\",\"ocena\":4,\"besediloKomentarja\":\"Všeč mi je bilo!\",\"datestring\":\"2021-04-12\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":1,\"besediloKomentarja\":\"Nekako površno..\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Osnove SQLa\",\"opis\":\"Naučili se bomo kar je potrebno za delo na podatkovnih bazah.\",\"cena\":6,\"datestring\":\"2021-04-24\",\"datum\":null,\"ura\":\"15:00\",\"steviloProstihMest\":15,\"emailInstruktorja\":\"andrej@rustja.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"rudi@bobnic.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo zanimivo!\",\"datestring\":\"2021-05-03\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfic.com\",\"ocena\":5,\"besediloKomentarja\":\"Težka snov, ampak preprosto razložena!\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Tečaj informatike\",\"opis\":\"V eni uri bom posredoval, kar potrebujete kot osnovno znanje:)\",\"cena\":10,\"datestring\":\"2021-03-11\",\"datum\":null,\"ura\":\"14:00\",\"steviloProstihMest\":10,\"emailInstruktorja\":\"luka@kranjec.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"simon@antonic.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo uporabno!\",\"datestring\":\"2021-03-15\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":1,\"besediloKomentarja\":\"Težko razumljivo, ni začel iz osnov; potrebno predznanje..\",\"datestring\":\"2021-03-20\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Zgodovina umetnosti\",\"opis\":\"18. stoletje svetovne zgodovine umetnosti\",\"cena\":4,\"datestring\":\"2021-04-11\",\"datum\":null,\"ura\":\"14:00\",\"steviloProstihMest\":4,\"emailInstruktorja\":\"meta@hribar.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":3,\"besediloKomentarja\":\"Ponekod pomanjkljivo ampak v celoti dobro.\",\"datestring\":\"2021-04-15\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfic.com\",\"ocena\":2,\"besediloKomentarja\":\"Ni bilo zanimivo. Izpustila je veliko pomembnih podatkov.\",\"datestring\":\"2021-04-19\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Programiranje v Javi\",\"opis\":\"Kaj bolj potrebujemo kot programiranje dandanes? V dveh urah bom razložil osnove programiranja v Javi\",\"cena\":14,\"datestring\":\"2021-02-08\",\"datum\":null,\"ura\":\"11:00\",\"steviloProstihMest\":8,\"emailInstruktorja\":\"miha@kovic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"luka@kranjec.com\",\"ocena\":5,\"besediloKomentarja\":\"Kratko in učinkovito!\",\"datestring\":\"2021-02-10\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"simon@antonic.com\",\"ocena\":5,\"besediloKomentarja\":\"Zelo dobra razlaga!\",\"datestring\":\"2021-02-13\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Tečaj angleščine, stopnja B2\",\"opis\":\"Analiza literarnega besedila, poudarek na tekoče govorjenem jeziku\",\"cena\":10,\"datestring\":\"2021-04-01\",\"datum\":null,\"ura\":\"16:00\",\"steviloProstihMest\":7,\"emailInstruktorja\":\"rudi@bobnic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsic.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo mi je pomagalo!\",\"datestring\":\"2021-04-12\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":2,\"besediloKomentarja\":\"Težko razumljivo, ni bilo v veliko pomoč..\",\"datestring\":\"2021-04-07\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"5 zanimivih trikov v geometriji\",\"opis\":\"Geometrijske formule na pamet? Ne hvala!\",\"cena\":10,\"datestring\":\"2021-05-27\",\"datum\":null,\"ura\":\"14:00\",\"steviloProstihMest\":11,\"emailInstruktorja\":\"rudi@bobnic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo uporabno!\",\"datestring\":\"2021-05-31\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":5,\"besediloKomentarja\":\"To, kar sem skozi celo osnovno šolo hotel poznati!\",\"datestring\":\"2021-06-02\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Osnove Microsoft paketa\",\"opis\":\"Word, Excel, Powerpoint za začetnike\",\"cena\":13,\"datestring\":\"2021-03-04\",\"datum\":null,\"ura\":\"17:00\",\"steviloProstihMest\":3,\"emailInstruktorja\":\"janja@ferfic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":3,\"besediloKomentarja\":\"Pričakovala sem kaj več snovi\",\"datestring\":\"2021-03-15\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"simon@antonic.com\",\"ocena\":2,\"besediloKomentarja\":\"Sem začetnik, vseeno pa se mi zdi, da je bilo obravnavano relativno malo snovi.\",\"datestring\":\"2021-03-17\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Predavanje filozofije\",\"opis\":\"Filozofija 19. stoletja v eni uri\",\"cena\":6,\"datestring\":\"2021-03-03\",\"datum\":null,\"ura\":\"12:00\",\"steviloProstihMest\":15,\"emailInstruktorja\":\"simon@antonic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo zanimiva razlaga.\",\"datestring\":\"2021-04-12\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":2,\"besediloKomentarja\":\"Dobra, a ponekod pomanjkljiva razlaga.\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Učenje matematike\",\"opis\":\"Linearna algebra, kot jo nisi nikoli prej spoznal.\",\"cena\":5,\"datestring\":\"2021-11-20\",\"datum\":null,\"ura\":\"10:00\",\"steviloProstihMest\":10,\"emailInstruktorja\":\"rudi@bobnic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsic.com\",\"ocena\":2,\"besediloKomentarja\":\"Nič mi ni bilo jasno\",\"datestring\":\"2021-12-01\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":1,\"besediloKomentarja\":\"Še sam je bil zmeden...\",\"datestring\":\"2021-11-23\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Kitajska književnost\",\"opis\":\"Kitajska književnost od začetkov do danes\",\"cena\":3,\"datestring\":\"2021-03-03\",\"datum\":null,\"ura\":\"12:00\",\"steviloProstihMest\":15,\"emailInstruktorja\":\"simon@antonic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsic.com\",\"ocena\":4,\"besediloKomentarja\":\"Všeč mi je bilo!\",\"datestring\":\"2021-04-12\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":1,\"besediloKomentarja\":\"Nekako površno..\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Osnove SQLa\",\"opis\":\"Naučili se bomo kar je potrebno za delo na podatkovnih bazah.\",\"cena\":6,\"datestring\":\"2021-04-24\",\"datum\":null,\"ura\":\"15:00\",\"steviloProstihMest\":15,\"emailInstruktorja\":\"andrej@rustja.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"rudi@bobnic.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo zanimivo!\",\"datestring\":\"2021-05-03\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfic.com\",\"ocena\":5,\"besediloKomentarja\":\"Težka snov, ampak preprosto razložena!\",\"datestring\":\"2021-05-12\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Tečaj informatike\",\"opis\":\"V eni uri bom posredoval, kar potrebujete kot osnovno znanje:)\",\"cena\":10,\"datestring\":\"2021-03-11\",\"datum\":null,\"ura\":\"14:00\",\"steviloProstihMest\":10,\"emailInstruktorja\":\"luka@kranjec.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"simon@antonic.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo uporabno!\",\"datestring\":\"2021-03-15\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":1,\"besediloKomentarja\":\"Težko razumljivo, ni začel iz osnov; potrebno predznanje..\",\"datestring\":\"2021-03-20\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Zgodovina umetnosti\",\"opis\":\"18. stoletje svetovne zgodovine umetnosti\",\"cena\":4,\"datestring\":\"2021-04-11\",\"datum\":null,\"ura\":\"14:00\",\"steviloProstihMest\":4,\"emailInstruktorja\":\"meta@hribar.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"andrej@rustja.com\",\"ocena\":3,\"besediloKomentarja\":\"Ponekod pomanjkljivo ampak v celoti dobro.\",\"datestring\":\"2021-04-15\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"janja@ferfic.com\",\"ocena\":2,\"besediloKomentarja\":\"Ni bilo zanimivo. Izpustila je veliko pomembnih podatkov.\",\"datestring\":\"2021-04-19\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Programiranje v Javi\",\"opis\":\"Kaj bolj potrebujemo kot programiranje dandanes? V dveh urah bom razložil osnove programiranja v Javi\",\"cena\":14,\"datestring\":\"2021-02-08\",\"datum\":null,\"ura\":\"11:00\",\"steviloProstihMest\":8,\"emailInstruktorja\":\"miha@kovic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"luka@kranjec.com\",\"ocena\":5,\"besediloKomentarja\":\"Kratko in učinkovito!\",\"datestring\":\"2021-02-10\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"simon@antonic.com\",\"ocena\":5,\"besediloKomentarja\":\"Zelo dobra razlaga!\",\"datestring\":\"2021-02-13\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Tečaj angleščine, stopnja B2\",\"opis\":\"Analiza literarnega besedila, poudarek na tekoče govorjenem jeziku\",\"cena\":10,\"datestring\":\"2021-04-01\",\"datum\":null,\"ura\":\"16:00\",\"steviloProstihMest\":7,\"emailInstruktorja\":\"rudi@bobnic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"jernej@tomsic.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo mi je pomagalo!\",\"datestring\":\"2021-04-12\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":2,\"besediloKomentarja\":\"Težko razumljivo, ni bilo v veliko pomoč..\",\"datestring\":\"2021-04-07\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"5 zanimivih trikov v geometriji\",\"opis\":\"Geometrijske formule na pamet? Ne hvala!\",\"cena\":10,\"datestring\":\"2021-05-27\",\"datum\":null,\"ura\":\"14:00\",\"steviloProstihMest\":11,\"emailInstruktorja\":\"rudi@bobnic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"peter@soban.com\",\"ocena\":4,\"besediloKomentarja\":\"Zelo uporabno!\",\"datestring\":\"2021-05-31\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"miha@kovic.com\",\"ocena\":5,\"besediloKomentarja\":\"To, kar sem skozi celo osnovno šolo hotel poznati!\",\"datestring\":\"2021-06-02\",\"datum\":null}]},{\"_id\":\"\",\"naziv\":\"Osnove Microsoft paketa\",\"opis\":\"Word, Excel, Powerpoint za začetnike\",\"cena\":13,\"datestring\":\"2021-03-04\",\"datum\":null,\"ura\":\"17:00\",\"steviloProstihMest\":3,\"emailInstruktorja\":\"janja@ferfic.com\",\"komentarji\":[{\"_id\":\"\",\"avtor\":\"meta@hribar.com\",\"ocena\":3,\"besediloKomentarja\":\"Pričakovala sem kaj več snovi\",\"datestring\":\"2021-03-15\",\"datum\":null},{\"_id\":\"\",\"avtor\":\"simon@antonic.com\",\"ocena\":2,\"besediloKomentarja\":\"Sem začetnik, vseeno pa se mi zdi, da je bilo obravnavano relativno malo snovi.\",\"datestring\":\"2021-03-17\",\"datum\":null}]}]");

/***/ }),

/***/ "lqD5":
/*!***************************************************************************!*\
  !*** ./src/app/common/components/jobs/offer-info/offer-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: OfferInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferInfoComponent", function() { return OfferInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/jobs.service */ "XPrz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/authentication.service */ "xpqA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _komentarji_komentarji_seznam_dela_komentarji_seznam_dela_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../komentarji/komentarji-seznam-dela/komentarji-seznam-dela.component */ "yDWR");
/* harmony import */ var _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../get-started/get-started.component */ "ryiy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function OfferInfoComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferInfoComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.editJobInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OfferInfoComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferInfoComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.saveJobInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OfferInfoComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferInfoComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.deleteJob(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OfferInfoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.sporocilo);
} }
function OfferInfoComponent_div_7_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferInfoComponent_div_7_div_23_div_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r19.signUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Prijava");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OfferInfoComponent_div_7_div_23_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Na delo ste prijavljeni");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OfferInfoComponent_div_7_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Prijavi se na delo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OfferInfoComponent_div_7_div_23_div_3_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OfferInfoComponent_div_7_div_23_ng_template_4_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.signedStatus)("ngIfElse", _r17);
} }
function OfferInfoComponent_div_7_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Na delo ste prijavljeni");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OfferInfoComponent_div_7_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OfferInfoComponent_div_7_div_24_div_1_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u017Dal je delo \u017Ee zasedeno :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.signedStatus);
} }
function OfferInfoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Pla\u010Dilo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "scope", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "scope", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, OfferInfoComponent_div_7_div_23_Template, 6, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OfferInfoComponent_div_7_div_24_Template, 4, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.delo.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.delo.opis);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.delo.cena);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 6, ctx_r4.delo.datum, "d. M. yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isAdmin && ctx_r4.delo.zasedeno == false && ctx_r4.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.delo.zasedeno == true);
} }
function OfferInfoComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.delo.naziv = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.delo.opis = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cena");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.delo.cena = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.delo.datum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.delo.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.delo.opis);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.delo.cena);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.delo.datum);
} }
function OfferInfoComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OfferInfoComponent_ng_template_8_div_0_Template, 19, 4, "div", 29);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.editState);
} }
function OfferInfoComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ponudnik");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Opis uporabnika");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r28.ponudnik.ime, " ", ctx_r28.ponudnik.priimek, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.ponudnik.opis);
} }
function OfferInfoComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OfferInfoComponent_div_10_div_1_Template, 11, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.delo);
} }
class OfferInfoComponent {
    constructor(JobsService, route, authenticationService) {
        this.JobsService = JobsService;
        this.route = route;
        this.authenticationService = authenticationService;
        this.sporocilo = "";
        this.editState = false;
        this.isLoggedIn = this.authenticationService.isLoggedIn();
        this.isAdmin = false;
        this.signedStatus = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getJobInfo();
            this.isSignedUp();
        });
    }
    getJobInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
                let jobID = params.get('idDela');
                return this.JobsService.getJobInfo(jobID);
            }))
                .subscribe((job) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.delo = job;
                if (this.authenticationService.isLoggedIn()) {
                    if (this.delo.emailPonudnika === this.authenticationService.getCurrentUser().email) {
                        this.isAdmin = true;
                    }
                }
                this.sporocilo = job ? "" : "Delo ne obstaja :(";
                job ? this.getJobHost() : null;
            }));
        });
    }
    getJobHost() {
        this.JobsService.getJobHost(this.delo.emailPonudnika)
            .then(host => {
            this.ponudnik = host;
            this.sporocilo = host ? "" : "Ne najdem gostitelja dela :(";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri iskanju gostitelja dela.";
            // console.error(error);
        });
    }
    editJobInfo() {
        this.editCSS(true);
        this.editState = true;
    }
    saveJobInfo() {
        this.editCSS(false);
        this.editState = false;
        this.JobsService.editJobInfo(this.delo)
            .then(job => {
            job ? this.delo = job : this.sporocilo = "Napaka pri posodabljanju dela.";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri posodabljanju dela.";
        });
    }
    editCSS(isEdit) {
        if (isEdit) {
            document.getElementById("edit-btn").classList.remove("d-ilblock");
            document.getElementById("edit-btn").classList.add("d-none");
            document.getElementById("save-btn").classList.remove("d-none");
            document.getElementById("save-btn").classList.add("d-ilblock");
            document.getElementById("eur").style.display = "none";
        }
        else {
            document.getElementById("edit-btn").classList.remove("d-none");
            document.getElementById("edit-btn").classList.add("d-ilblock");
            document.getElementById("save-btn").classList.remove("d-ilblock");
            document.getElementById("save-btn").classList.add("d-none");
            document.getElementById("eur").style.display = "inline";
        }
    }
    deleteJob() {
        let jobID = this.route.snapshot.paramMap.get('idDela');
        this.JobsService.deleteJob(jobID)
            .subscribe(() => {
            this.delo = null;
            this.sporocilo = "Delo uspešno izbrisano.";
        }, (error) => this.sporocilo = "Napaka API-ja pri brisanju dela.");
    }
    signUp() {
        if (this.delo.zasedeno == false) {
            let jobID = this.route.snapshot.paramMap.get('idDela');
            this.JobsService.signUp(jobID)
                .then(response => {
                alert("Uspešno ste se prijavili na delo!");
                this.signedStatus = true;
            })
                .catch(error => this.sporocilo = error);
        }
        else {
            window.scroll(0, 0);
            this.sporocilo = "Prišlo je do napake, delo je že zasedeno. Prosimo osvežite stran.";
        }
    }
    isSignedUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isLoggedIn) {
                let currentUserEmail = this.authenticationService.getCurrentUser().email;
                yield this.authenticationService.getUser(currentUserEmail)
                    .then(user => {
                    if (user) {
                        user.dela.forEach(delo => {
                            if (this.delo._id == delo._id) {
                                this.signedStatus = true;
                            }
                        });
                    }
                })
                    .catch(error => { });
            }
        });
    }
}
OfferInfoComponent.ɵfac = function OfferInfoComponent_Factory(t) { return new (t || OfferInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"])); };
OfferInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OfferInfoComponent, selectors: [["app-offer-info"]], decls: 13, vars: 7, consts: [[1, "return", "container-fluid", 2, "margin-top", "1rem"], ["routerLink", "/ponudba-del", 1, "btn", "btn-info", 2, "margin-right", "10px"], ["class", "btn btn-warning d-ilblock", "id", "edit-btn", "style", "margin-right: 10px", 3, "click", 4, "ngIf"], ["id", "save-btn", "value", "save", "class", "btn btn-success d-none", "style", "margin-right: 10px", 3, "click", 4, "ngIf"], ["class", "btn btn-danger d-inline", "id", "delete-btn", 3, "click", 4, "ngIf"], ["class", "alert alert-warning container", "style", "margin-top: 2rem", 4, "ngIf"], ["class", "card event", 4, "ngIf", "ngIfElse"], ["editMode", ""], ["class", "card profile", 4, "ngIf"], ["id", "edit-btn", 1, "btn", "btn-warning", "d-ilblock", 2, "margin-right", "10px", 3, "click"], [1, "fas", "fa-edit"], ["id", "save-btn", "value", "save", 1, "btn", "btn-success", "d-none", 2, "margin-right", "10px", 3, "click"], [1, "fas", "fa-check"], ["id", "delete-btn", 1, "btn", "btn-danger", "d-inline", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], [1, "card", "event"], ["src", "../../../../../assets/media/thumbnails/red.png", "alt", "Card image cap", 1, "card-img-top", "event-header"], [1, "card-body", "event-body"], ["id", "naziv", 1, "card-title"], ["id", "opis", 1, "card-text"], ["id", "cena"], ["id", "eur"], ["id", "datum"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["prijavljen", ""], [1, "btn", "btn-success", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-success"], ["class", "card event", 4, "ngIf"], ["src", "../../../../../assets/media/thumbnails/yellow.png", "alt", "Card image cap", 1, "card-img-top", "event-header"], ["id", "naziv", "name", "naziv", "required", "required", "type", "text", 1, "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], ["id", "opis", "name", "opis", "required", "required", "type", "text", 1, "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], [1, "input-group", "mb-3"], ["aria-label", "Recipient's username", "aria-describedby", "basic-addon2", "type", "number", "step", "0.10", "min", "0", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["id", "eur", 1, "input-group-text"], ["id", "datum", "name", "datum", "required", "required", "type", "date", 1, "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], [1, "card", "profile"], ["class", "card-body profile-body", 4, "ngIf"], [1, "card-body", "profile-body"], ["routerLink", "/profil/ogled"], [1, "profile-body-item"]], template: function OfferInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nazaj na ponudbo del");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OfferInfoComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OfferInfoComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OfferInfoComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OfferInfoComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OfferInfoComponent_div_7_Template, 25, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OfferInfoComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OfferInfoComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-komentarji-seznam-dela");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "get-started");
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.delo && ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.delo && ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.delo && ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sporocilo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.delo && !ctx.editState)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ponudnik);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _komentarji_komentarji_seznam_dela_komentarji_seznam_dela_component__WEBPACK_IMPORTED_MODULE_7__["KomentarjiSeznamDelaComponent"], _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_8__["GetStartedComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlci1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfferInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-offer-info',
                templateUrl: './offer-info.component.html',
                styleUrls: ['./offer-info.component.css']
            }]
    }], function () { return [{ type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "lylF":
/*!***************************************************!*\
  !*** ./src/app/common/services/profil.service.ts ***!
  \***************************************************/
/*! exports provided: ProfilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilService", function() { return ProfilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _classes_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/cache */ "4KXK");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "xpqA");

 //podobno kot axios





class ProfilService {
    constructor(http, authenticationService, cache) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.cache = cache;
        this.apiUrl = 'http://localhost:3000/api';
    }
    // public editUserInfo(user: User): Promise<User> {
    //   const url: string = `${this.apiUrl}/uporabnik/${user._id}`;
    //   return this.http
    //     .put(url, user)
    //     .toPromise()
    //     .then(response => response as User)
    //     .catch(this.handleError);
    // }
    editUserInfo(user) {
        const url = `${this.apiUrl}/uporabnik/${user.email}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .put(url, user, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    // public gradeUser(userEmail: string): Promise<any> {
    //   const currentUserEmail = this.authenticationService.getCurrentUser().email;
    //   const url: string = `${this.apiUrl}/uporabnik/ocena/${userEmail}`;
    //   const httpProperties = {
    //     headers: new HttpHeaders({
    //       'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
    //     })
    //   };
    //   return this.http
    //   .post(url, {currentUserEmail}, httpProperties)
    //   .toPromise()
    //   .then(response => response as any)
    //   .catch(this.handleError);
    // }
    // public editUserPassword(user: User): Promise<User> {
    //   const url: string = `${this.apiUrl}/uporabnik/${user.email}`;
    //   const httpProperties = {
    //     headers: new HttpHeaders({
    //       'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
    //     })
    //   };
    //   return this.http
    //     .put(url, user, httpProperties)
    //     .toPromise()
    //     .then(response => response as User)
    //     .catch(this.handleError);
    // }
    deleteUser(userEmail) {
        const url = `${this.apiUrl}/uporabnik/${userEmail}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .delete(url, httpProperties)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error("Error in the service", error);
        return Promise.reject(error.message || error);
    }
}
ProfilService.ɵfac = function ProfilService_Factory(t) { return new (t || ProfilService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_classes_cache__WEBPACK_IMPORTED_MODULE_3__["BROWSER_CACHE"])); };
ProfilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfilService, factory: ProfilService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_classes_cache__WEBPACK_IMPORTED_MODULE_3__["BROWSER_CACHE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ryiy":
/*!************************************************************************!*\
  !*** ./src/app/common/components/get-started/get-started.component.ts ***!
  \************************************************************************/
/*! exports provided: GetStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedComponent", function() { return GetStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class GetStartedComponent {
    constructor() { }
    ngOnInit() {
    }
}
GetStartedComponent.ɵfac = function GetStartedComponent_Factory(t) { return new (t || GetStartedComponent)(); };
GetStartedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetStartedComponent, selectors: [["get-started"]], decls: 39, vars: 0, consts: [["id", "relevant-jobs", 1, "container"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["id", "car", 1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../../assets/media/thumbnails/yellow.png", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-block"], ["routerLink", "/instruktorji"], [1, "carousel-item"], ["src", "../../../../assets/media/thumbnails/white.png", "alt", "Second slide", 1, "d-block", "w-100"], ["routerLink", "/ponudba-del"], ["src", "../../../../assets/media/thumbnails/orange.png", "alt", "Third slide", 1, "d-block", "w-100"], ["routerLink", "/instrukcije-dogodki"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function GetStartedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0160e nisi in\u0161truktor?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Postani in\u0161truktor zdaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Si \u017Eeli\u0161 zaslu\u017Eka?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Preglej si ponudbo del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pove\u017Ei se s kolegi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sodeluj na dogodkih");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%] {\r\n  background-size: 100%, 100%;\r\n  color: black;\r\n}\r\n\r\n.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%] {\r\n  z-index: 50;\r\n}\r\n\r\n\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.432);\r\n  height: 100%;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  display: flex !important;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n#car[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n  width: 95%;\r\n  margin-left: 2.5%;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  height: 200px;\r\n}\r\n\r\n#dashboard-featured[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.featured-carousel[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.featured-controls[_ngcontent-%COMP%] {\r\n  height: 15%;\r\n  width: 15%;\r\n  top: 58%;\r\n  z-index: 50;\r\n}\r\n\r\n.featured-controls-icons[_ngcontent-%COMP%] {\r\n  filter: invert(1);\r\n}\r\n\r\n.featured-carousel-inner[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 0.5rem black;\r\n  border-radius: 0.5rem;\r\n  width: 20rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.featured-instructor[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 20rem;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  border: none;\r\n}\r\n\r\n.featured-instructor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  height: 8rem;\r\n  object-fit: cover;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.featured-card-body[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  border: 0;\r\n}\r\n\r\n.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%] {\r\n  background-size: 100%, 100%;\r\n  color: black;\r\n}\r\n\r\n.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%] {\r\n  z-index: 50;\r\n}\r\n\r\n\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.432);\r\n  height: 100%;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  display: flex !important;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n#car[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n  width: 95%;\r\n  margin-left: 2.5%;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  height: 200px;\r\n}\r\n\r\n#dashboard-featured[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.featured-carousel[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.featured-controls[_ngcontent-%COMP%] {\r\n  height: 15%;\r\n  width: 15%;\r\n  top: 58%;\r\n  z-index: 50;\r\n}\r\n\r\n.featured-controls-icons[_ngcontent-%COMP%] {\r\n  filter: invert(1);\r\n}\r\n\r\n.featured-carousel-inner[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 0.5rem black;\r\n  border-radius: 0.5rem;\r\n  width: 20rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.featured-instructor[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 20rem;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  border: none;\r\n}\r\n\r\n.featured-instructor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  height: 8rem;\r\n  object-fit: cover;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.featured-card-body[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  border: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1zdGFydGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxPQUFPO0VBQ1Asd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCOztBQUV2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBQUM7O0VBRUMsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxPQUFPO0VBQ1Asd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCOztBQUV2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1giLCJmaWxlIjoiZ2V0LXN0YXJ0ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUsIDEwMCU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG5cclxuLyogemEgZGF0IHB1xaHEjWljZSB2IMSNcm5vOiBmaWx0ZXI6IGludmVydCgxMDAlKTsgKi9cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jY2FyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW4tbGVmdDogMi41JTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuI2Rhc2hib2FyZC1mZWF0dXJlZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1jYXJvdXNlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG5cclxuLmZlYXR1cmVkLWNvbnRyb2xzIHtcclxuICBoZWlnaHQ6IDE1JTtcclxuICB3aWR0aDogMTUlO1xyXG4gIHRvcDogNTglO1xyXG4gIHotaW5kZXg6IDUwO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtY29udHJvbHMtaWNvbnMge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtY2Fyb3VzZWwtaW5uZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1pbnN0cnVjdG9yIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwcmVtO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1pbnN0cnVjdG9yIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBoZWlnaHQ6IDhyZW07XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCBoNCB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtY2FyZC1ib2R5IHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogMDtcclxufS5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUsIDEwMCU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG5cclxuLyogemEgZGF0IHB1xaHEjWljZSB2IMSNcm5vOiBmaWx0ZXI6IGludmVydCgxMDAlKTsgKi9cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jY2FyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW4tbGVmdDogMi41JTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuI2Rhc2hib2FyZC1mZWF0dXJlZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1jYXJvdXNlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG5cclxuLmZlYXR1cmVkLWNvbnRyb2xzIHtcclxuICBoZWlnaHQ6IDE1JTtcclxuICB3aWR0aDogMTUlO1xyXG4gIHRvcDogNTglO1xyXG4gIHotaW5kZXg6IDUwO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtY29udHJvbHMtaWNvbnMge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtY2Fyb3VzZWwtaW5uZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1pbnN0cnVjdG9yIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwcmVtO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1pbnN0cnVjdG9yIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBoZWlnaHQ6IDhyZW07XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCBoNCB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtY2FyZC1ib2R5IHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetStartedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'get-started',
                templateUrl: './get-started.component.html',
                styleUrls: ['./get-started.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sKO1":
/*!***********************************************************************************!*\
  !*** ./src/app/common/components/instructions/event-info/event-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EventInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventInfoComponent", function() { return EventInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_instructions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/instructions.service */ "sm0C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/authentication.service */ "xpqA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _komentarji_komentarji_seznam_komentarji_seznam_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../komentarji/komentarji-seznam/komentarji-seznam.component */ "wLqX");
/* harmony import */ var _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../get-started/get-started.component */ "ryiy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function EventInfoComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventInfoComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.editEventInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EventInfoComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventInfoComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.saveEventInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EventInfoComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventInfoComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.deleteEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EventInfoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.sporocilo);
} }
function EventInfoComponent_div_7_div_33_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventInfoComponent_div_7_div_33_div_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r19.signUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Prijava");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EventInfoComponent_div_7_div_33_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Na dogodek ste prijavljeni");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EventInfoComponent_div_7_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Prijavi se na dogodek");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EventInfoComponent_div_7_div_33_div_3_Template, 3, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EventInfoComponent_div_7_div_33_ng_template_4_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.signedStatus)("ngIfElse", _r17);
} }
function EventInfoComponent_div_7_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Na dogodek ste prijavljeni");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EventInfoComponent_div_7_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EventInfoComponent_div_7_div_34_div_1_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u017Dal ni ve\u010D razpolo\u017Eljivih mest :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.signedStatus);
} }
function EventInfoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Ura");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0160tevilo prostih mest");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Cena");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "scope", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "scope", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, EventInfoComponent_div_7_div_33_Template, 6, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, EventInfoComponent_div_7_div_34_Template, 4, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.dogodek.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.dogodek.opis);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 8, ctx_r4.dogodek.datum, "d. M. yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.dogodek.ura);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.dogodek.steviloProstihMest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.dogodek.cena);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isAdmin && ctx_r4.dogodek.steviloProstihMest > 0 && ctx_r4.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.dogodek.steviloProstihMest <= 0);
} }
function EventInfoComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.dogodek.naziv = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.dogodek.opis = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.dogodek.datum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Ura");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.dogodek.ura = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0160tevilo prostih mest");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.dogodek.steviloProstihMest = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cena");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventInfoComponent_ng_template_8_div_0_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.dogodek.cena = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.dogodek.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.dogodek.opis);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.dogodek.datum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.dogodek.ura);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.dogodek.steviloProstihMest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r22.dogodek.cena);
} }
function EventInfoComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EventInfoComponent_ng_template_8_div_0_Template, 26, 6, "div", 31);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.editState);
} }
function EventInfoComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "In\u0161truktor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Opis uporabnika");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r7.gostitelj.ime, " ", ctx_r7.gostitelj.priimek, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.gostitelj.opis);
} }
class EventInfoComponent {
    constructor(instructionsService, route, authenticationService) {
        this.instructionsService = instructionsService;
        this.route = route;
        this.authenticationService = authenticationService;
        this.sporocilo = "";
        this.editState = false;
        this.isLoggedIn = this.authenticationService.isLoggedIn();
        this.isAdmin = false;
        this.signedStatus = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getEventInfo();
            this.isSignedUp();
        });
    }
    getEventInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
                let eventID = params.get('idDogodka');
                return this.instructionsService.getEventInfo(eventID);
            }))
                .subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.dogodek = event;
                if (this.authenticationService.isLoggedIn()) {
                    if (this.dogodek.emailInstruktorja === this.authenticationService.getCurrentUser().email) {
                        this.isAdmin = true;
                    }
                }
                this.sporocilo = event ? "" : "Dogodek ne obstaja :(";
                event ? this.getEventHost() : null;
            }));
        });
    }
    getEventHost() {
        this.instructionsService.getEventHost(this.dogodek.emailInstruktorja)
            .then(host => {
            this.gostitelj = host;
            this.sporocilo = host ? "" : "Ne najdem gostitelja dogodka :(";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri iskanju gostitelja dogodka.";
            // console.error(error);
        });
    }
    editEventInfo() {
        this.editCSS(true);
        this.editState = true;
    }
    saveEventInfo() {
        this.editCSS(false);
        this.editState = false;
        this.instructionsService.editEventInfo(this.dogodek)
            .then(event => {
            event ? this.dogodek = event : this.sporocilo = "Napaka pri posdabljanju dogodka.";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri posodabljanju dogodka.";
            //console.error(error);
        });
    }
    editCSS(isEdit) {
        if (isEdit) {
            document.getElementById("edit-btn").classList.remove("d-ilblock");
            document.getElementById("edit-btn").classList.add("d-none");
            document.getElementById("save-btn").classList.remove("d-none");
            document.getElementById("save-btn").classList.add("d-ilblock");
            document.getElementById("eur").style.display = "none";
        }
        else {
            document.getElementById("edit-btn").classList.remove("d-none");
            document.getElementById("edit-btn").classList.add("d-ilblock");
            document.getElementById("save-btn").classList.remove("d-ilblock");
            document.getElementById("save-btn").classList.add("d-none");
            document.getElementById("eur").style.display = "inline";
        }
    }
    deleteEvent() {
        let eventID = this.route.snapshot.paramMap.get('idDogodka');
        this.instructionsService.deleteEvent(eventID)
            .subscribe(() => {
            this.dogodek = null;
            this.sporocilo = "Dogodek uspešno izbrisan.";
        }, (error) => this.sporocilo = "Napaka API-ja pri brisanju dogodka."
        //console.error(error)
        );
    }
    signUp() {
        if (this.dogodek.steviloProstihMest > 0) {
            let eventID = this.route.snapshot.paramMap.get('idDogodka');
            this.instructionsService.signUp(eventID)
                .then(response => {
                alert("Uspešno ste se prijavili na dogodek!");
                this.signedStatus = true;
            })
                .catch(error => this.sporocilo = error);
        }
        else {
            window.scroll(0, 0);
            this.sporocilo = "Prišlo je do napake, dogodek je že zapolnjen. Prosimo osvežite stran.";
        }
    }
    isSignedUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isLoggedIn) {
                let currentUserEmail = this.authenticationService.getCurrentUser().email;
                yield this.authenticationService.getUser(currentUserEmail)
                    .then(user => {
                    if (user) {
                        user.dogodki.forEach(dogodek => {
                            if (this.dogodek._id == dogodek._id) {
                                this.signedStatus = true;
                            }
                        });
                    }
                })
                    .catch(error => { });
            }
        });
    }
}
EventInfoComponent.ɵfac = function EventInfoComponent_Factory(t) { return new (t || EventInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_instructions_service__WEBPACK_IMPORTED_MODULE_3__["InstructionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"])); };
EventInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EventInfoComponent, selectors: [["app-event-info"]], decls: 13, vars: 7, consts: [[1, "return", "container-fluid", 2, "margin-top", "1rem"], ["routerLink", "/instrukcije-dogodki", 1, "btn", "btn-info", "d-inline", 2, "margin-right", "10px"], ["class", "btn btn-warning d-ilblock", "id", "edit-btn", "style", "margin-right: 10px", 3, "click", 4, "ngIf"], ["id", "save-btn", "value", "save", "class", "btn btn-success d-none", "style", "margin-right: 10px", 3, "click", 4, "ngIf"], ["class", "btn btn-danger d-inline", "id", "delete-btn", "style", "margin-right: 10px", 3, "click", 4, "ngIf"], ["class", "alert alert-warning container", "style", "margin-top: 2rem", 4, "ngIf"], ["class", "card event", 4, "ngIf", "ngIfElse"], ["editMode", ""], ["class", "card profile", 4, "ngIf"], ["id", "edit-btn", 1, "btn", "btn-warning", "d-ilblock", 2, "margin-right", "10px", 3, "click"], [1, "fas", "fa-edit"], ["id", "save-btn", "value", "save", 1, "btn", "btn-success", "d-none", 2, "margin-right", "10px", 3, "click"], [1, "fas", "fa-check"], ["id", "delete-btn", 1, "btn", "btn-danger", "d-inline", 2, "margin-right", "10px", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "alert", "alert-warning", "container", 2, "margin-top", "2rem"], [1, "card", "event"], ["src", "../../../../../assets/media/thumbnails/green.png", "alt", "Card image cap", 1, "card-img-top", "event-header"], [1, "card-body", "event-body"], ["id", "naziv", 1, "card-title"], ["id", "opis", 1, "card-text"], ["id", "datum"], ["id", "ura"], ["id", "steviloProstihMest"], ["id", "cena"], ["id", "eur"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["prijavljen", ""], [1, "btn", "btn-success", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-success"], ["class", "card event", 4, "ngIf"], ["id", "naziv", "name", "naziv", "required", "required", "type", "text", 1, "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], ["id", "opis", "name", "opis", "required", "required", "type", "text", 1, "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], ["id", "datum", "name", "datum", "required", "required", "type", "date", 1, "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], ["id", "ura", "name", "ura", "required", "required", "type", "time", 1, "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], ["id", "steviloProstihMest", "name", "steviloProstihMest", "required", "required", "type", "number", "step", "1", "min", "1", "value", "1", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", 1, "form-control", "form-control-md", 3, "ngModel", "ngModelChange"], [1, "input-group", "mb-3"], ["aria-label", "Recipient's username", "aria-describedby", "basic-addon2", "type", "number", "step", "0.10", "min", "0", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["id", "eur", 1, "input-group-text"], [1, "card", "profile"], [1, "card-body", "profile-body"], ["routerLink", "/profil/ogled"], [1, "profile-body-item"]], template: function EventInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nazaj na seznam dogodkov");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EventInfoComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EventInfoComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EventInfoComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EventInfoComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EventInfoComponent_div_7_Template, 35, 11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EventInfoComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EventInfoComponent_div_10_Template, 12, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-komentarji-seznam");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "get-started");
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dogodek && ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dogodek && ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dogodek && ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sporocilo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dogodek && !ctx.editState)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gostitelj);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _komentarji_komentarji_seznam_komentarji_seznam_component__WEBPACK_IMPORTED_MODULE_7__["KomentarjiSeznamComponent"], _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_8__["GetStartedComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-event-info',
                templateUrl: './event-info.component.html',
                styleUrls: ['./event-info.component.css']
            }]
    }], function () { return [{ type: _services_instructions_service__WEBPACK_IMPORTED_MODULE_3__["InstructionsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "sm0C":
/*!*********************************************************!*\
  !*** ./src/app/common/services/instructions.service.ts ***!
  \*********************************************************/
/*! exports provided: InstructionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsService", function() { return InstructionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _classes_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/cache */ "4KXK");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "xpqA");








class InstructionsService {
    constructor(http, authenticationService, cache) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.cache = cache;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getInstructors() {
        const url = `${this.apiUrl}/uporabniki`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => {
            response = this.filterInstructors(response);
            return response;
        })
            .catch(this.handleError);
    }
    filterInstructors(users) {
        for (let i = users.length - 1; i >= 0; i--) {
            if (!users[i].statusInstruktorja) {
                users.splice(i, 1);
            }
        }
        return users;
    }
    getEvents() {
        const url = `${this.apiUrl}/instrukcije-dogodki`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    getEventInfo(eventID) {
        const url = `${this.apiUrl}/instrukcije-dogodki/dogodek/${eventID}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    postNewEvent(event) {
        const url = `${this.apiUrl}/instrukcije-dogodki`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .post(url, event, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    editEventInfo(event) {
        const url = `${this.apiUrl}/instrukcije-dogodki/dogodek/${event._id}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .put(url, event, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    deleteEvent(eventID) {
        const url = `${this.apiUrl}/instrukcije-dogodki/dogodek/${eventID}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .delete(url, httpProperties)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    signUp(eventID) {
        const currentUserEmail = this.authenticationService.getCurrentUser().email;
        const url = `${this.apiUrl}/instrukcije-dogodki/dogodek/${eventID}/prijava`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .post(url, { currentUserEmail }, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    getEventHost(userEmail) {
        const url = `${this.apiUrl}/uporabnik/${userEmail}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    /* P O P R A V I ! ! ! */
    handleError(error) {
        //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error);
        return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error);
        // console.error("Error in the service");
        // return;
    }
}
InstructionsService.ɵfac = function InstructionsService_Factory(t) { return new (t || InstructionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_classes_cache__WEBPACK_IMPORTED_MODULE_4__["BROWSER_CACHE"])); };
InstructionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstructionsService, factory: InstructionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_classes_cache__WEBPACK_IMPORTED_MODULE_4__["BROWSER_CACHE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "wLqX":
/*!***********************************************************************************************!*\
  !*** ./src/app/common/components/komentarji/komentarji-seznam/komentarji-seznam.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: KomentarjiSeznamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomentarjiSeznamComponent", function() { return KomentarjiSeznamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_services_comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/comments.service */ "cMyE");
/* harmony import */ var _services_instructions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/instructions.service */ "sm0C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/authentication.service */ "xpqA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function KomentarjiSeznamComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function KomentarjiSeznamComponent_div_7_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.postNewComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ocena");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function KomentarjiSeznamComponent_div_7_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.newComment.ocena = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Komentar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function KomentarjiSeznamComponent_div_7_Template_textarea_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.newComment.besediloKomentarja = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamComponent_div_7_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.obrazecPrikazan = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Prekli\u010Di");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Dodaj moj komentar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.newComment.ocena);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.newComment.besediloKomentarja);
} }
function KomentarjiSeznamComponent_div_8_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamComponent_div_8_div_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.editComment(komentar_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "edit-btn-", komentar_r8._id, "");
} }
function KomentarjiSeznamComponent_div_8_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamComponent_div_8_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.saveComment(komentar_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "save-btn-", komentar_r8._id, "");
} }
function KomentarjiSeznamComponent_div_8_div_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamComponent_div_8_div_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.deleteComment(komentar_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KomentarjiSeznamComponent_div_8_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "ocena-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", komentar_r8.ocena, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "besedilo-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](komentar_r8.besediloKomentarja);
} }
function KomentarjiSeznamComponent_div_8_div_1_ng_template_12_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function KomentarjiSeznamComponent_div_8_div_1_ng_template_12_div_0_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r30.editInfo.ocena = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function KomentarjiSeznamComponent_div_8_div_1_ng_template_12_div_0_Template_textarea_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r32.editInfo.besediloKomentarja = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r29.editInfo.ocena);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "besedilo-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", komentar_r8.besediloKomentarja);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r29.editInfo.besediloKomentarja);
} }
function KomentarjiSeznamComponent_div_8_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, KomentarjiSeznamComponent_div_8_div_1_ng_template_12_div_0_Template, 13, 9, "div", 25);
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", komentar_r8._id === ctx_r14.editID)("ngIfElse", _r15);
} }
function KomentarjiSeznamComponent_div_8_div_1_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "ocena-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", komentar_r8.ocena, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "besedilo-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](komentar_r8.besediloKomentarja);
} }
function KomentarjiSeznamComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, KomentarjiSeznamComponent_div_8_div_1_button_5_Template, 2, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, KomentarjiSeznamComponent_div_8_div_1_button_6_Template, 2, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, KomentarjiSeznamComponent_div_8_div_1_button_7_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, KomentarjiSeznamComponent_div_8_div_1_div_11_Template, 5, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, KomentarjiSeznamComponent_div_8_div_1_ng_template_12_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, KomentarjiSeznamComponent_div_8_div_1_ng_template_14_Template, 4, 4, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, komentar_r8.datum, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.dogodek && komentar_r8.avtor === ctx_r7.currentUserEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.dogodek && komentar_r8.avtor === ctx_r7.currentUserEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.dogodek && komentar_r8.avtor === ctx_r7.currentUserEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profil/", komentar_r8.avtor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](komentar_r8.avtor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.editState && ctx_r7.editID !== komentar_r8._id)("ngIfElse", _r13);
} }
function KomentarjiSeznamComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KomentarjiSeznamComponent_div_8_div_1_Template, 16, 11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.dogodek.komentarji);
} }
class KomentarjiSeznamComponent {
    constructor(commentsService, instructionsService, route, authenticationService, router) {
        this.commentsService = commentsService;
        this.instructionsService = instructionsService;
        this.route = route;
        this.authenticationService = authenticationService;
        this.router = router;
        this.newComment = {
            _id: '',
            avtor: '',
            ocena: null,
            datum: null,
            besediloKomentarja: ''
        };
        this.obrazecPrikazan = false;
        this.sporocilo = "";
        this.currentUserEmail = "";
        this.editState = false;
        this.editID = "";
        this.editInfo = {
            besediloKomentarja: "",
            ocena: 5
        };
        this.mojiKomentarji = [];
    }
    ngOnInit() {
        this.getEventInfo();
    }
    postNewComment() {
        this.newComment.avtor = this.authenticationService.getCurrentUser().email;
        if (!this.newComment.avtor ||
            !this.newComment.ocena ||
            !this.newComment.besediloKomentarja) {
            this.sporocilo = "Prosimo izpolnite vsa polja!";
        }
        else {
            // console.log("Pošiljam podatke v service...");
            this.commentsService.postNewComment(this.dogodek, this.newComment)
                .then(comment => {
                // console.log("Uspešno prejeti podatki iz servica!");
                this.newComment = comment;
                this.sporocilo = comment ? "Komentar uspešno objavljen :)" : "Napaka pri objavi komentarja :(";
                location.reload();
                //this.router.navigateByUrl('/instrukcije-dogodki/dogodek/${event._id}');
                alert("Komentar uspešno objavljen!");
            })
                .catch(error => {
                this.sporocilo = "Napaka API-ja pri objavi dogodka.";
                // console.error(error);
            });
        }
    }
    editComment(comment) {
        this.editCSS(true, comment._id);
        this.editID = comment._id;
        // console.log(this.editID);
    }
    deleteComment(commentID) {
        let eventID = this.route.snapshot.paramMap.get('idDogodka');
        // console.log(commentID);
        this.commentsService.deleteComment(eventID, commentID)
            .subscribe(() => {
            this.komentar = null;
            this.sporocilo = "Komentar uspešno izbrisan.";
            location.reload();
            alert("Komentar uspešno zbrisan!");
        }, (error) => this.sporocilo = "Napaka API-ja pri brisanju komentarja."
        // console.error(error)
        );
    }
    saveComment(comment) {
        if (!this.editInfo.besediloKomentarja || !this.editInfo.ocena) {
            alert("Prosim izpolnite vsa polja, preden shranite komentar!");
        }
        else {
            this.editCSS(false, comment._id);
            this.editID = "";
            this.editState = false;
            comment.besediloKomentarja = this.editInfo.besediloKomentarja;
            comment.ocena = this.editInfo.ocena;
            this.commentsService.editComment(comment, this.dogodek)
                .then(comment => {
                comment ? alert("Uspešno posodobljen komentar!") : alert("Napaka pri posdabljanju komentarja.");
            })
                .catch(error => {
                alert("Napaka API-ja pri posodabljanju komentarja. Poskusite znova kasneje.");
                // console.error(error);
            });
        }
    }
    editCSS(isEdit, comment) {
        if (isEdit) {
            document.getElementById("edit-btn-" + comment).classList.remove("d-ilblock");
            document.getElementById("edit-btn-" + comment).classList.add("d-none");
            document.getElementById("save-btn-" + comment).classList.remove("d-none");
            document.getElementById("save-btn-" + comment).classList.add("d-ilblock");
        }
        else {
            document.getElementById("edit-btn-" + comment).classList.remove("d-none");
            document.getElementById("edit-btn-" + comment).classList.add("d-ilblock");
            document.getElementById("save-btn-" + comment).classList.remove("d-ilblock");
            document.getElementById("save-btn-" + comment).classList.add("d-none");
        }
    }
    getEventInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
                let eventID = params.get('idDogodka');
                return this.instructionsService.getEventInfo(eventID);
            }))
                .subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.dogodek = event;
                // console.log(this.dogodek);
                if (this.authenticationService.isLoggedIn()) {
                    this.currentUserEmail = this.authenticationService.getCurrentUser().email;
                }
                this.sporocilo = event ? "" : "Dogodek ne obstaja :(";
                event ? this.getEventHost() : null;
            }));
        });
    }
    getEventHost() {
        this.instructionsService.getEventHost(this.dogodek.emailInstruktorja)
            .then(host => {
            this.gostitelj = host;
            this.sporocilo = host ? "" : "Ne najdem gostitelja dogodka :(";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri iskanju gostitelja dogodka.";
            // console.error(error);
        });
    }
}
KomentarjiSeznamComponent.ɵfac = function KomentarjiSeznamComponent_Factory(t) { return new (t || KomentarjiSeznamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_instructions_service__WEBPACK_IMPORTED_MODULE_4__["InstructionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
KomentarjiSeznamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KomentarjiSeznamComponent, selectors: [["app-komentarji-seznam"]], decls: 9, vars: 2, consts: [[1, "komentarji-seznam", "m-3"], [1, "btn", "btn-primary", "btn-sm", "float-right", 3, "click"], [1, "komentarji-nov", "m-3"], [4, "ngIf"], [3, "ngSubmit"], [1, "form-group", "row"], ["for", "ocena", 1, "col-10", "col-sm-2", "col-form-label", "col-form-label-sm"], [1, "col-12", "col-sm-2"], ["id", "ocena", "name", "ocena", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["for", "komentar", 1, "col-sm-2", "col-form-label", "col-form-label-sm"], [1, "col-sm-10"], ["id", "besediloKomentarja", "name", "besediloKomentarja", "rows", "5", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "col-12"], [1, "btn", "btn-primary", "btn-sm", "float-right", "ml-3", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "float-right"], ["class", "row komentar", 4, "ngFor", "ngForOf"], [1, "row", "komentar"], [1, "col-12", "rounded"], [1, "komentar-datum", "float-right"], ["class", "btn btn-warning btn-sm float-right d-ilblock", "style", "margin-right: 10px", 3, "id", "click", 4, "ngIf"], ["value", "save", "class", "btn btn-success btn-sm float-right d-none", "style", "margin-right: 10px", 3, "id", "click", 4, "ngIf"], ["class", "btn btn-danger btn-sm float-right d-inline", "id", "delete-btn", "style", "margin-right: 10px", 3, "click", 4, "ngIf"], [1, "komentar-avtor"], [3, "routerLink"], [4, "ngIf", "ngIfElse"], ["edit", ""], ["notEdit", ""], [1, "btn", "btn-warning", "btn-sm", "float-right", "d-ilblock", 2, "margin-right", "10px", 3, "id", "click"], [1, "fas", "fa-edit"], ["value", "save", 1, "btn", "btn-success", "btn-sm", "float-right", "d-none", 2, "margin-right", "10px", 3, "id", "click"], [1, "fas", "fa-check"], ["id", "delete-btn", 1, "btn", "btn-danger", "btn-sm", "float-right", "d-inline", 2, "margin-right", "10px", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "komentar-ocena", 3, "id"], [1, "komentar-besedilo", 3, "id"], ["name", "besediloKomentarja", "rows", "5", 1, "form-control", "form-control-sm", 3, "ngModel", "id", "placeholder", "ngModelChange"]], template: function KomentarjiSeznamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamComponent_Template_button_click_1_listener() { return ctx.obrazecPrikazan = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dodaj komentar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Komentarji Uporabnikov");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, KomentarjiSeznamComponent_div_7_Template, 28, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, KomentarjiSeznamComponent_div_8_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.obrazecPrikazan);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dogodek);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".komentarji-seznam[_ngcontent-%COMP%] {\r\n    border: 2px solid #ababab;\r\n    border-radius: 4px;\r\n    padding: 20px;\r\n}\r\n\r\n.komentar[_ngcontent-%COMP%] {\r\n    margin-right: 0px; \r\n    margin-left: 0px;\r\n    margin-bottom: 0.5em;\r\n  }\r\n\r\n.komentar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    padding:0.5em;\r\n  }\r\n\r\n.komentar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n    margin-top:1em;\r\n    background-color: #98e2f5;\r\n  }\r\n\r\n.komentar-avtor[_ngcontent-%COMP%] {\r\n    \r\n  }\r\n\r\n.komentar-datum[_ngcontent-%COMP%] {\r\n    margin-left:1em;\r\n  }\r\n\r\n.komentar-ocena[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    border: 2px solid #ababab;\r\n    border-radius: 4px;\r\n    width: 40px;    \r\n    text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvbWVudGFyamktc2V6bmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFDQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7O0FBQ0E7O0VBRUE7O0FBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJrb21lbnRhcmppLXNlem5hbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtvbWVudGFyamktc2V6bmFtIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhYmFiYWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ua29tZW50YXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIH1cclxuICAua29tZW50YXIgPiBkaXYge1xyXG4gICAgcGFkZGluZzowLjVlbTtcclxuICB9XHJcbiAgLmtvbWVudGFyID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6MWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4ZTJmNTtcclxuICB9XHJcbiAgLmtvbWVudGFyLWF2dG9yIHtcclxuICAgIFxyXG4gIH1cclxuICAua29tZW50YXItZGF0dW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6MWVtO1xyXG4gIH1cclxuXHJcbiAgLmtvbWVudGFyLW9jZW5hIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhYmFiYWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogNDBweDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KomentarjiSeznamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-komentarji-seznam',
                templateUrl: './komentarji-seznam.component.html',
                styleUrls: ['./komentarji-seznam.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"] }, { type: _services_instructions_service__WEBPACK_IMPORTED_MODULE_4__["InstructionsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "wiwB":
/*!**********************************************************!*\
  !*** ./src/app/common/services/comments-jobs.service.ts ***!
  \**********************************************************/
/*! exports provided: CommentsJobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsJobsService", function() { return CommentsJobsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _classes_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/cache */ "4KXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "xpqA");








class CommentsJobsService {
    constructor(http, authenticationService, cache) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.cache = cache;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    /* Nov komentar */
    postNewComment(job, comment) {
        // console.log("Podatki so prišli v service, in sicer so naslednji:");
        // console.log(job);
        // console.log(comment);
        const url = `${this.apiUrl}/ponudba-del/delo/${job._id}/komentarji`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .post(url, comment, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    editComment(comment, job) {
        const url = `${this.apiUrl}/ponudba-del/delo/${job._id}/komentarji/${comment._id}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .put(url, comment, httpProperties)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    deleteComment(jobID, commentID) {
        const url = `${this.apiUrl}/ponudba-del/delo/${jobID}/komentarji/${commentID}`;
        const httpProperties = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
            })
        };
        return this.http
            .delete(url, httpProperties)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    /* P O P R A V I ! ! ! */
    handleError(error) {
        //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error);
        return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error);
        // console.error("Error in the service");
        // return;
    }
}
CommentsJobsService.ɵfac = function CommentsJobsService_Factory(t) { return new (t || CommentsJobsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_classes_cache__WEBPACK_IMPORTED_MODULE_3__["BROWSER_CACHE"])); };
CommentsJobsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsJobsService, factory: CommentsJobsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsJobsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_classes_cache__WEBPACK_IMPORTED_MODULE_3__["BROWSER_CACHE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "xpqA":
/*!***********************************************************!*\
  !*** ./src/app/common/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/cache */ "4KXK");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AuthenticationService {
    constructor(storage, http) {
        this.storage = storage;
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    login(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this
                .authenticateLogin(user)
                .then((AuthenticationResult) => {
                this.setToken(AuthenticationResult["token"]);
            });
        });
    }
    register(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let existingEmail;
            this.getUser(user.email)
                .then((user) => existingEmail = user.email)
                .catch((err) => existingEmail = null);
            if (existingEmail != null) {
                return null;
            }
            else {
                return this
                    .authenticateRegister(user)
                    .then((AuthenticationResult) => {
                    this.setToken(AuthenticationResult["token"]);
                });
            }
        });
    }
    logout() {
        this.storage.removeItem('stbree-token');
    }
    authenticateLogin(user) {
        return this.authentication('prijava', user);
    }
    authenticateRegister(user) {
        return this.authentication('registracija', user);
    }
    authentication(subUrl, user) {
        const url = `${this.apiUrl}/${subUrl}`;
        return this.http
            .post(url, user)
            .toPromise()
            .then(rezultat => rezultat)
            .catch(this.handleError);
    }
    getToken() {
        return this.storage.getItem('stbree-token');
    }
    setToken(token) {
        this.storage.setItem('stbree-token', token);
    }
    isLoggedIn() {
        const token = this.getToken();
        if (token) {
            const usefulContents = JSON.parse(this.b64Utf8(token.split('.')[1]));
            return usefulContents.exp > (Date.now() / 1000);
        }
        else {
            return false;
        }
    }
    //dodaj isAdmin
    getCurrentUser() {
        if (this.isLoggedIn()) {
            const token = this.getToken();
            const { email, ime, priimek, statusInstruktorja } = JSON.parse(this.b64Utf8(token.split('.')[1]));
            //console.log(JSON.parse(this.b64Utf8(token.split('.')[1])))
            return { email, ime, priimek, statusInstruktorja };
        }
    }
    b64Utf8(string) {
        return decodeURIComponent(Array.prototype.map
            .call(atob(string), (character) => {
            return '%' + ('00' + character.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    }
    ;
    getUser(email) {
        const url = `${this.apiUrl}/uporabnik/${email}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => {
            let { email, ime, priimek, opis, statusInstruktorja, telefonskaStevilka, dogodki, dela } = response;
            return { email, ime, priimek, opis, statusInstruktorja, telefonskaStevilka, dogodki, dela };
        })
            .catch(this.handleError);
    }
    dropDB() {
        // console.log("Reached the service...");
        const url = `${this.apiUrl}/db/dropDB`;
        // console.log(url);
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    dropUsers() {
        // console.log("Reached the service...");
        const url = `${this.apiUrl}/db/dropUsers`;
        // console.log(url);
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    /* P O P R A V I ! ! ! */
    handleError(error) {
        //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error);
        return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error);
        // console.error("Error in the service");
        // return;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_classes_cache__WEBPACK_IMPORTED_MODULE_2__["BROWSER_CACHE"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_classes_cache__WEBPACK_IMPORTED_MODULE_2__["BROWSER_CACHE"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "yDWR":
/*!*********************************************************************************************************!*\
  !*** ./src/app/common/components/komentarji/komentarji-seznam-dela/komentarji-seznam-dela.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: KomentarjiSeznamDelaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomentarjiSeznamDelaComponent", function() { return KomentarjiSeznamDelaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_services_comments_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/comments-jobs.service */ "wiwB");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/jobs.service */ "XPrz");
/* harmony import */ var src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/authentication.service */ "xpqA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function KomentarjiSeznamDelaComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function KomentarjiSeznamDelaComponent_div_7_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.postNewComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ocena");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function KomentarjiSeznamDelaComponent_div_7_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.newComment.ocena = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Komentar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function KomentarjiSeznamDelaComponent_div_7_Template_textarea_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.newComment.besediloKomentarja = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamDelaComponent_div_7_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.obrazecPrikazan = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Prekli\u010Di");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Dodaj moj komentar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.newComment.ocena);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.newComment.besediloKomentarja);
} }
function KomentarjiSeznamDelaComponent_div_8_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamDelaComponent_div_8_div_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.editComment(komentar_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "edit-btn-", komentar_r8._id, "");
} }
function KomentarjiSeznamDelaComponent_div_8_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamDelaComponent_div_8_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.saveComment(komentar_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "save-btn-", komentar_r8._id, "");
} }
function KomentarjiSeznamDelaComponent_div_8_div_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamDelaComponent_div_8_div_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.deleteComment(komentar_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KomentarjiSeznamDelaComponent_div_8_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "ocena-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", komentar_r8.ocena, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "besedilo-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](komentar_r8.besediloKomentarja);
} }
function KomentarjiSeznamDelaComponent_div_8_div_1_ng_template_12_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function KomentarjiSeznamDelaComponent_div_8_div_1_ng_template_12_div_0_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r30.editInfo.ocena = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function KomentarjiSeznamDelaComponent_div_8_div_1_ng_template_12_div_0_Template_textarea_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r32.editInfo.besediloKomentarja = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r29.editInfo.ocena);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "besedilo-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", komentar_r8.besediloKomentarja);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r29.editInfo.besediloKomentarja);
} }
function KomentarjiSeznamDelaComponent_div_8_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, KomentarjiSeznamDelaComponent_div_8_div_1_ng_template_12_div_0_Template, 13, 9, "div", 25);
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", komentar_r8._id === ctx_r14.editID)("ngIfElse", _r15);
} }
function KomentarjiSeznamDelaComponent_div_8_div_1_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "ocena-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", komentar_r8.ocena, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "besedilo-", komentar_r8._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](komentar_r8.besediloKomentarja);
} }
function KomentarjiSeznamDelaComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, KomentarjiSeznamDelaComponent_div_8_div_1_button_5_Template, 3, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, KomentarjiSeznamDelaComponent_div_8_div_1_button_6_Template, 3, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, KomentarjiSeznamDelaComponent_div_8_div_1_button_7_Template, 3, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, KomentarjiSeznamDelaComponent_div_8_div_1_div_11_Template, 5, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, KomentarjiSeznamDelaComponent_div_8_div_1_ng_template_12_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, KomentarjiSeznamDelaComponent_div_8_div_1_ng_template_14_Template, 4, 4, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const komentar_r8 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, komentar_r8.datum, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.delo && komentar_r8.avtor === ctx_r7.currentUserEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.delo && komentar_r8.avtor === ctx_r7.currentUserEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.delo && komentar_r8.avtor === ctx_r7.currentUserEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/profil/", komentar_r8.avtor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](komentar_r8.avtor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.editState && ctx_r7.editID !== komentar_r8._id)("ngIfElse", _r13);
} }
function KomentarjiSeznamDelaComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KomentarjiSeznamDelaComponent_div_8_div_1_Template, 16, 11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.delo.komentarji);
} }
class KomentarjiSeznamDelaComponent {
    constructor(commentsJobsService, JobsService, authenticationService, route, router) {
        this.commentsJobsService = commentsJobsService;
        this.JobsService = JobsService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.newComment = {
            _id: '',
            avtor: '',
            ocena: null,
            datum: null,
            besediloKomentarja: ''
        };
        this.isAdmin = false;
        this.sporocilo = "";
        this.obrazecPrikazan = false;
        this.currentUserEmail = "";
        this.editState = false;
        this.editID = "";
        this.editInfo = {
            besediloKomentarja: "",
            ocena: 5
        };
    }
    ngOnInit() {
        this.getJobInfo();
    }
    postNewComment() {
        this.newComment.avtor = this.authenticationService.getCurrentUser().email;
        if (!this.newComment.avtor ||
            !this.newComment.ocena ||
            !this.newComment.besediloKomentarja) {
            this.sporocilo = "Prosimo izpolnite vsa polja!";
        }
        else {
            // console.log("Pošiljam podatke v service...");
            this.commentsJobsService.postNewComment(this.delo, this.newComment)
                .then(comment => {
                // console.log("Uspešno prejeti podatki iz servica!");
                this.newComment = comment;
                this.sporocilo = comment ? "Komentar uspešno objavljen :)" : "Napaka pri objavi komentarja :(";
                location.reload();
                //this.router.navigateByUrl('/instrukcije-dogodki/dogodek/${event._id}');
                alert("Komentar uspešno objavljen!");
            })
                .catch(error => {
                this.sporocilo = "Napaka API-ja pri objavi dogodka.";
                //console.error(error);
            });
        }
    }
    editComment(comment) {
        this.editCSS(true, comment._id);
        this.editID = comment._id;
        // console.log(this.editID);
    }
    deleteComment(commentID) {
        let jobID = this.route.snapshot.paramMap.get('idDela');
        // console.log(commentID);
        this.commentsJobsService.deleteComment(jobID, commentID)
            .subscribe(() => {
            this.komentar = null;
            this.sporocilo = "Komentar uspešno izbrisan.";
            location.reload();
            alert("Komentar uspešno zbrisan!");
        }, (error) => this.sporocilo = "Napaka API-ja pri brisanju komentarja."
        //console.error(error)
        );
    }
    saveComment(comment) {
        if (!this.editInfo.besediloKomentarja || !this.editInfo.ocena) {
            alert("Prosim izpolnite vsa polja, preden shranite komentar!");
        }
        else {
            this.editCSS(false, comment._id);
            this.editID = "";
            this.editState = false;
            comment.besediloKomentarja = this.editInfo.besediloKomentarja;
            comment.ocena = this.editInfo.ocena;
            this.commentsJobsService.editComment(comment, this.delo)
                .then(comment => {
                comment ? alert("Uspešno posodobljen komentar!") : alert("Napaka pri posdabljanju komentarja.");
            })
                .catch(error => {
                alert("Napaka API-ja pri posodabljanju komentarja. Poskusite znova kasneje.");
                //console.error(error);
            });
        }
    }
    editCSS(isEdit, comment) {
        if (isEdit) {
            document.getElementById("edit-btn-" + comment).classList.remove("d-ilblock");
            document.getElementById("edit-btn-" + comment).classList.add("d-none");
            document.getElementById("save-btn-" + comment).classList.remove("d-none");
            document.getElementById("save-btn-" + comment).classList.add("d-ilblock");
        }
        else {
            document.getElementById("edit-btn-" + comment).classList.remove("d-none");
            document.getElementById("edit-btn-" + comment).classList.add("d-ilblock");
            document.getElementById("save-btn-" + comment).classList.remove("d-ilblock");
            document.getElementById("save-btn-" + comment).classList.add("d-none");
        }
    }
    getJobInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
                let jobID = params.get('idDela');
                return this.JobsService.getJobInfo(jobID);
            }))
                .subscribe((job) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.delo = job;
                if (this.authenticationService.isLoggedIn()) {
                    this.currentUserEmail = this.authenticationService.getCurrentUser().email;
                }
                this.sporocilo = job ? "" : "Delo ne obstaja :(";
                job ? this.getJobHost() : null;
            }));
        });
    }
    getJobHost() {
        this.JobsService.getJobHost(this.delo.emailPonudnika)
            .then(host => {
            this.ponudnik = host;
            this.sporocilo = host ? "" : "Ne najdem gostitelja dela :(";
        })
            .catch(error => {
            this.sporocilo = "Napaka API-ja pri iskanju gostitelja dela.";
            // console.error(error);
        });
    }
}
KomentarjiSeznamDelaComponent.ɵfac = function KomentarjiSeznamDelaComponent_Factory(t) { return new (t || KomentarjiSeznamDelaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_comments_jobs_service__WEBPACK_IMPORTED_MODULE_3__["CommentsJobsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
KomentarjiSeznamDelaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KomentarjiSeznamDelaComponent, selectors: [["app-komentarji-seznam-dela"]], decls: 9, vars: 2, consts: [[1, "komentarji-seznam", "m-3"], [1, "btn", "btn-primary", "btn-sm", "float-right", 3, "click"], [1, "komentarji-nov", "m-3"], [4, "ngIf"], [3, "ngSubmit"], [1, "form-group", "row"], ["for", "ocena", 1, "col-10", "col-sm-2", "col-form-label", "col-form-label-sm"], [1, "col-12", "col-sm-2"], ["id", "ocena", "name", "ocena", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["for", "komentar", 1, "col-sm-2", "col-form-label", "col-form-label-sm"], [1, "col-sm-10"], ["id", "besediloKomentarja", "name", "besediloKomentarja", "rows", "5", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "col-12"], [1, "btn", "btn-primary", "btn-sm", "float-right", "ml-3", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "float-right"], ["class", "row komentar", 4, "ngFor", "ngForOf"], [1, "row", "komentar"], [1, "col-12", "rounded"], [1, "komentar-datum", "float-right"], ["class", "btn btn-warning btn-sm d-ilblock float-right", "style", "margin-right: 10px", 3, "id", "click", 4, "ngIf"], ["value", "save", "class", "btn btn-success btn-sm d-none float-right", "style", "margin-right: 10px", 3, "id", "click", 4, "ngIf"], ["class", "btn btn-danger btn-sm d-inline float-right", "id", "delete-btn", "style", "margin-right: 10px", 3, "click", 4, "ngIf"], [1, "komentar-avtor"], [3, "routerLink"], [4, "ngIf", "ngIfElse"], ["edit", ""], ["notEdit", ""], [1, "btn", "btn-warning", "btn-sm", "d-ilblock", "float-right", 2, "margin-right", "10px", 3, "id", "click"], [1, "fas", "fa-edit"], ["value", "save", 1, "btn", "btn-success", "btn-sm", "d-none", "float-right", 2, "margin-right", "10px", 3, "id", "click"], [1, "fas", "fa-check"], ["id", "delete-btn", 1, "btn", "btn-danger", "btn-sm", "d-inline", "float-right", 2, "margin-right", "10px", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "komentar-ocena", 3, "id"], [1, "komentar-besedilo", 3, "id"], ["name", "besediloKomentarja", "rows", "5", 1, "form-control", "form-control-sm", 3, "ngModel", "id", "placeholder", "ngModelChange"]], template: function KomentarjiSeznamDelaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KomentarjiSeznamDelaComponent_Template_button_click_1_listener() { return ctx.obrazecPrikazan = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dodaj komentar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Komentarji Uporabnikov");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, KomentarjiSeznamDelaComponent_div_7_Template, 28, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, KomentarjiSeznamDelaComponent_div_8_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.obrazecPrikazan);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.delo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".komentarji-seznam[_ngcontent-%COMP%] {\r\n    border: 2px solid #ababab;\r\n    border-radius: 4px;\r\n    padding: 20px;\r\n}\r\n\r\n.komentar[_ngcontent-%COMP%] {\r\n    margin-right: 0px; \r\n    margin-left: 0px;\r\n    margin-bottom: 0.5em;\r\n  }\r\n\r\n.komentar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    padding:0.5em;\r\n  }\r\n\r\n.komentar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n    margin-top:1em;\r\n    background-color: #98e2f5;\r\n  }\r\n\r\n.komentar-avtor[_ngcontent-%COMP%] {\r\n\r\n  }\r\n\r\n.komentar-datum[_ngcontent-%COMP%] {\r\n    margin-left:1em;\r\n  }\r\n\r\n.komentar-ocena[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    border: 2px solid #ababab;\r\n    border-radius: 4px;\r\n    width: 40px;    \r\n    text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvbWVudGFyamktc2V6bmFtLWRlbGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztBQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7QUFDQTs7RUFFQTs7QUFDQTtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6ImtvbWVudGFyamktc2V6bmFtLWRlbGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rb21lbnRhcmppLXNlem5hbSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYWJhYmFiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmtvbWVudGFyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICB9XHJcbiAgLmtvbWVudGFyID4gZGl2IHtcclxuICAgIHBhZGRpbmc6MC41ZW07XHJcbiAgfVxyXG4gIC5rb21lbnRhciA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOjFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OGUyZjU7XHJcbiAgfVxyXG4gIC5rb21lbnRhci1hdnRvciB7XHJcblxyXG4gIH1cclxuICAua29tZW50YXItZGF0dW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6MWVtO1xyXG4gIH1cclxuXHJcbiAgLmtvbWVudGFyLW9jZW5hIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhYmFiYWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogNDBweDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KomentarjiSeznamDelaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-komentarji-seznam-dela',
                templateUrl: './komentarji-seznam-dela.component.html',
                styleUrls: ['./komentarji-seznam-dela.component.css']
            }]
    }], function () { return [{ type: src_app_common_services_comments_jobs_service__WEBPACK_IMPORTED_MODULE_3__["CommentsJobsService"] }, { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"] }, { type: src_app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zzzF":
/*!**************************************************************!*\
  !*** ./src/app/common/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "xpqA");







function NavbarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pregledna plo\u0161\u010Da");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sporo\u010Danje");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "In\u0161trukcije");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dogodki");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Delo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_nav_0_Template_a_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Odjava");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getUser(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profil/", ctx_r0.getCurrentUserEmail(), "");
} }
function NavbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Prijava");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registracija");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(authenticationService, router, document) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.document = document;
        this.currentRoute = "";
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
                const currentRoute = (eventUrl || []).join('');
                this.currentRoute = currentRoute;
                if (!this.isLoggedIn()) {
                    try {
                        this.fixNavbar(currentRoute);
                    }
                    catch (_a) {
                    }
                }
            }
        });
    }
    ngOnInit() {
    }
    getCurrentUserEmail() {
        return this.authenticationService.getCurrentUser().email;
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigateByUrl('/');
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
    getUser() {
        const uporabnik = this.authenticationService.getCurrentUser();
        return uporabnik ? uporabnik.ime + " " + uporabnik.priimek : 'Gost';
    }
    getProfileUrl() {
        const uporabnik = this.authenticationService.getCurrentUser();
        return uporabnik ? uporabnik.email : 'gost';
    }
    onWindowScroll() {
        if (!this.authenticationService.isLoggedIn() && !this.checkRoute(this.currentRoute)) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById('fixing-navbar').classList.add('scrolled');
            }
            else {
                document.getElementById('fixing-navbar').classList.remove('scrolled');
            }
        }
    }
    fixNavbar(currentRoute) {
        if (this.checkRoute(currentRoute)) {
            document.getElementById('fixing-navbar').classList.remove('fixed-top');
            document.getElementById('fixing-navbar').classList.add('scrolled');
        }
        else {
            document.getElementById('fixing-navbar').classList.add('fixed-top');
            document.getElementById('fixing-navbar').classList.remove('scrolled');
        }
    }
    checkRoute(currentRoute) {
        if (currentRoute != "prijava" && currentRoute != "registracija" && currentRoute != "") {
            return true;
        }
        else {
            return false;
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 2, consts: [["class", "navbar navbar-expand-md navbar-dark bg-custom", 4, "ngIf", "ngIfElse"], ["guest", ""], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-custom"], ["routerLink", "/my", 1, "navbar-brand", "mr-auto"], ["src", "../../../../assets/media/icons/stbree_logo_white.png", "height", "53px", "width", "94px", "alt", "stbree_logo"], ["type", "button", "data-toggle", "collapse", "data-target", ".menu-collapse", 1, "navbar-toggler", "ml-auto"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "w-100", "menu-collapse", "order-0"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "mx-auto"], ["routerLink", "/my", 1, "nav-link", "text-light"], ["routerLink", "/sporocanje", 1, "nav-link", "text-light"], ["routerLink", "/instruktorji", 1, "nav-link", "text-light"], ["routerLink", "/instrukcije-dogodki", 1, "nav-link", "text-light"], ["routerLink", "/ponudba-del", 1, "nav-link", "text-light"], [1, "dropdown", "show"], ["role", "button", "id", "navbarDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "nav-link", "btn", "mx-auto", "bg-transparent"], ["width", "30px", "height", "30px", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-person-circle"], ["d", "M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"], ["fill-rule", "evenodd", "d", "M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], ["fill-rule", "evenodd", "d", "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"], ["id", "dropdown-menu", "aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["id", "profileBtn", 1, "dropdown-item", 2, "cursor", "pointer", 3, "routerLink"], [1, "dropdown-divider"], ["id", "logout-btn", 1, "dropdown-item", "text-danger", 2, "cursor", "pointer", 3, "click"], ["id", "fixing-navbar", 1, "navbar", "navbar-expand", "bg-transparent", "fixed-top"], ["routerLink", "/"], ["src", "../../../../assets/media/icons/stbree_logo_white.png", "height", "53px", "width", "94px", 1, "mr-auto"], [1, "nav-item"], ["routerLink", "/prijava", 1, "nav-link", "text-light"], [1, "nav-item", "nav-item-signup"], ["routerLink", "/registracija", 1, "nav-link", "text-light"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_nav_0_Template, 37, 2, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ng_template_1_Template, 10, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn())("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  margin-left: 15px;\r\n  padding: 5px, 0px;\r\n  align-items: center;\r\n}\r\n\r\n#dropdown-menu[_ngcontent-%COMP%] {\r\n  left: auto;\r\n  right: 5px;\r\n}\r\n\r\n#navbarDropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.bg-custom[_ngcontent-%COMP%] {\r\n  background: #272727;\r\n}\r\n\r\n.user_icon[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 50px;\r\n  filter: invert(1);\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .user_icon[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n  }\r\n}\r\n\r\n.mx-auto[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #f7f7f7;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  right: 5px !important;\r\n  left: auto;\r\n  background-color: #292b2c;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  padding: 0.5rem;\r\n  transition: 750ms ease;\r\n  z-index: 100;\r\n}\r\n\r\n.navbar-collapse[_ngcontent-%COMP%] {\r\n  width: 50% !important;\r\n}\r\n\r\n.navbar.scrolled[_ngcontent-%COMP%] {\r\n  background: #292b2c !important;\r\n}\r\n\r\n.nav-item-signup[_ngcontent-%COMP%] {\r\n  border: 1.5px rgba(255, 255, 255, 0.6) solid;\r\n  border-radius: 5px;\r\n  background: rgba(0, 0, 0, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyBwLFxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBwYWRkaW5nOiA1cHgsIDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jZHJvcGRvd24tbWVudSB7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogNXB4O1xyXG59XHJcblxyXG4jbmF2YmFyRHJvcGRvd24gYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5iZy1jdXN0b20ge1xyXG4gIGJhY2tncm91bmQ6ICMyNzI3Mjc7XHJcbn1cclxuXHJcbi51c2VyX2ljb24ge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC51c2VyX2ljb24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5teC1hdXRvIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGEge1xyXG4gIGNvbG9yOiAjZjdmN2Y3O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmIyYztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHRyYW5zaXRpb246IDc1MG1zIGVhc2U7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4ubmF2YmFyLWNvbGxhcHNlIHtcclxuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXIuc2Nyb2xsZWQge1xyXG4gIGJhY2tncm91bmQ6ICMyOTJiMmMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtLXNpZ251cCB7XHJcbiAgYm9yZGVyOiAxLjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map