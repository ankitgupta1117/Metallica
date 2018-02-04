webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n\r\n.pad10{\r\n    padding: 10px;\r\n}\r\n\r\n.pad20{\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service_user_service__ = __webpack_require__("../../../../../src/shared/services/user-service/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(refDataStore, userService) {
        this.refDataStore = refDataStore;
        this.userService = userService;
        this.title = 'Mettalica';
        this.userName = "";
        // this.refDataStore.init();
        var that = this;
        this.userService.getUserName().subscribe(function (data) {
            console.log("USER: " + data);
            that.userName = data;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.refDataStore.init();
    };
    AppComponent.prototype.logout = function () {
        this.userService.logout().subscribe(function (data) { console.log("Logout successfull"); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n  <mat-toolbar color=\"primary\"> \n  \n  <span [routerLink]=\"['/']\" ><b>Metallica</b> </span>\n  <span class=\"toolbar-spacer\"></span>\n<!--  <i class=\"material-icons  pad10\" [routerLink]=\"['/']\">home</i> -->\n  <b> {{ userName }} </b>\n  <i class=\"material-icons pad10\">perm_identity</i>\n  <!-- <i class=\"material-icons pad10\" (click)=\"logout()\">power_settings_new</i>  -->\n  </mat-toolbar>\n  <market-ticker> </market-ticker>\n  <tab-comp> </tab-comp>\n  ",
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].Emulated
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_ref_data_store__["a" /* ReferenceDataStore */], __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initializeDataStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tabs_tabs_module__ = __webpack_require__("../../../../../src/components/tabs/tabs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_trade_trade_module__ = __webpack_require__("../../../../../src/components/trade/trade.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_market_ticker_market_ticker_module__ = __webpack_require__("../../../../../src/components/market-ticker/market-ticker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_services_module__ = __webpack_require__("../../../../../src/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_user_service_user_service__ = __webpack_require__("../../../../../src/shared/services/user-service/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function initializeDataStore(refDataStore) {
    return function () { return refDataStore.init(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_tabs_tabs_module__["a" /* TabsModule */], __WEBPACK_IMPORTED_MODULE_5__components_trade_trade_module__["a" /* TradesModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_market_ticker_market_ticker_module__["a" /* MarketTickerModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_services_services_module__["a" /* ServicesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* APP_ROUTES */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__shared_services_user_service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_ref_data_store__["a" /* ReferenceDataStore */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* APP_INITIALIZER */],
                    useFactory: initializeDataStore,
                    deps: [__WEBPACK_IMPORTED_MODULE_9__shared_services_ref_data_store__["a" /* ReferenceDataStore */]],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRADE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_trade_trade_detail_trade_details_component__ = __webpack_require__("../../../../../src/components/trade/trade-detail/trade-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_trade_new_trade_new_trade_component__ = __webpack_require__("../../../../../src/components/trade/new-trade/new-trade.component.ts");


var TRADE_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_trade_new_trade_new_trade_component__["a" /* NewTradeComponent */], pathMatch: "full" },
    { path: 'tradedetails/:id', component: __WEBPACK_IMPORTED_MODULE_0__components_trade_trade_detail_trade_details_component__["a" /* TradeDetailsComponent */] },
    { path: 'newtrade', component: __WEBPACK_IMPORTED_MODULE_1__components_trade_new_trade_new_trade_component__["a" /* NewTradeComponent */] }
];
var APP_ROUTES = [];


/***/ }),

/***/ "../../../../../src/components/market-live-feed/market-feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".up-arrow-green{\r\n    color: rgb(31, 223, 6);\r\n    /* font-size: 40px; */\r\n}\r\n\r\n.down-arrow-red{\r\n    color: #df0d06;\r\n}\r\n\r\n.market-feed{\r\n    padding: 7px;\r\n    margin: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/market-live-feed/market-feed.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"market-feed\">           \r\n    <div *ngIf=\"isPositive\" style=\"display: inline\" >\r\n        <!-- <i class=\"material-icons up-arrow-green\">arrow_drop_up</i> -->\r\n          <mat-icon fontSet=\"fa\" fontIcon=\"fa-arrow-up\" class=\"up-arrow-green\" aria-hidden=\"true\"> </mat-icon>\r\n        </div>\r\n        <div *ngIf=\"!isPositive\" style=\"display: inline\"> \r\n                <!-- <i class=\"material-icons down-arrow-red\">arrow_drop_down</i> -->\r\n        <mat-icon fontSet=\"fa\" fontIcon=\"fa-arrow-down\" class=\"down-arrow-red\" aria-hidden=\"true\"> </mat-icon>\r\n    </div>\r\n    <!-- {{ isPositive }} -->\r\n    {{ commodity }}<b> {{ price }}</b>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/components/market-live-feed/market-feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarketFeedComponent = (function () {
    function MarketFeedComponent(_matIconRegistry) {
        this._matIconRegistry = _matIconRegistry;
        this.isPositive = false;
        this.price = 0;
        _matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('isPositive'),
        __metadata("design:type", Boolean)
    ], MarketFeedComponent.prototype, "isPositive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('price'),
        __metadata("design:type", Number)
    ], MarketFeedComponent.prototype, "price", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('name'),
        __metadata("design:type", String)
    ], MarketFeedComponent.prototype, "commodity", void 0);
    MarketFeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'market-feed',
            template: __webpack_require__("../../../../../src/components/market-live-feed/market-feed.component.html"),
            styles: [__webpack_require__("../../../../../src/components/market-live-feed/market-feed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatIconRegistry */]])
    ], MarketFeedComponent);
    return MarketFeedComponent;
}());



/***/ }),

/***/ "../../../../../src/components/market-live-feed/market-feed.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketFeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_feed_component__ = __webpack_require__("../../../../../src/components/market-live-feed/market-feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pipes_PipesModules__ = __webpack_require__("../../../../../src/shared/pipes/PipesModules.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MarketFeedModule = (function () {
    function MarketFeedModule() {
    }
    MarketFeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__market_feed_component__["a" /* MarketFeedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_pipes_PipesModules__["a" /* PipesModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__market_feed_component__["a" /* MarketFeedComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatIconRegistry */]]
        })
    ], MarketFeedModule);
    return MarketFeedModule;
}());



/***/ }),

/***/ "../../../../../src/components/market-ticker/market-ticker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".market-feed{\r\n    padding: 5px;\r\n    margin: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/market-ticker/market-ticker.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n    \r\n        <market-feed *ngFor=\"let feed of tickers\" [name]=\"feed\" \r\n        [price]=\"tickerData.get(feed).price\" [isPositive]= \"tickerData.get(feed).isup\"\r\n        class=\"market-feed\"> \r\n        </market-feed>\r\n               \r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/components/market-ticker/market-ticker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketTickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_notification_notification_service__ = __webpack_require__("../../../../../src/shared/services/notification/notification-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketTickerComponent = (function () {
    function MarketTickerComponent(refData, _notificationService) {
        var _this = this;
        this.refData = refData;
        this._notificationService = _notificationService;
        this.tickerData = new Map();
        this.tickers = [];
        this.codeToDescMap = new Map();
        this.refData.getCommodities().forEach(function (commodity) {
            _this.tickerData.set(commodity.description, { price: 100, isup: false });
            _this.tickers.push(commodity.description);
            _this.codeToDescMap.set(commodity.code, commodity.description);
        });
        var that = this;
        this._notificationService.getMarketData().subscribe({
            next: function (value) {
                var commodity = that.codeToDescMap.get(value.event.commoditycode);
                var newPrice = value.event.price;
                var oldPrice = that.tickerData.get(commodity).price;
                var bool = newPrice > oldPrice;
                that.tickerData.set(commodity, { price: newPrice, isup: bool });
            }
        });
    }
    MarketTickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'market-ticker',
            template: __webpack_require__("../../../../../src/components/market-ticker/market-ticker.component.html"),
            styles: [__webpack_require__("../../../../../src/components/market-ticker/market-ticker.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_ref_data_store__["a" /* ReferenceDataStore */], __WEBPACK_IMPORTED_MODULE_1__shared_services_notification_notification_service__["a" /* NotificationService */]])
    ], MarketTickerComponent);
    return MarketTickerComponent;
}());



/***/ }),

/***/ "../../../../../src/components/market-ticker/market-ticker.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketTickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_ticker_component__ = __webpack_require__("../../../../../src/components/market-ticker/market-ticker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_live_feed_market_feed_module__ = __webpack_require__("../../../../../src/components/market-live-feed/market-feed.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_refrerence_service_reference_service__ = __webpack_require__("../../../../../src/shared/services/refrerence-service/reference-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_notification_notification_service__ = __webpack_require__("../../../../../src/shared/services/notification/notification-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MarketTickerModule = (function () {
    function MarketTickerModule() {
    }
    MarketTickerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__market_ticker_component__["a" /* MarketTickerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__market_live_feed_market_feed_module__["a" /* MarketFeedModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__market_ticker_component__["a" /* MarketTickerComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_refrerence_service_reference_service__["a" /* ReferenceService */], __WEBPACK_IMPORTED_MODULE_6__shared_services_notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_7__shared_services_ref_data_store__["a" /* ReferenceDataStore */]]
        })
    ], MarketTickerModule);
    return MarketTickerModule;
}());



/***/ }),

/***/ "../../../../../src/components/tabs/tabs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-group {\r\n    border: 3px solid #0449c0;\r\n  }\r\n  \r\n  .tab-content {\r\n    padding: 16px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabComponent = (function () {
    function TabComponent() {
    }
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-comp',
            template: "<mat-tab-group >\n\n      <mat-tab label=\"Trades\" class=\"tab-content\"> <trade-app> </trade-app> </mat-tab>\n      <mat-tab label=\"Transfers\"  > <span md-colors=\"{color: 'primary'}\"> Content 2 </span></mat-tab>\n      <mat-tab label=\"Transport\"  > Content 2 </mat-tab>\n\n    </mat-tab-group>",
            styles: [__webpack_require__("../../../../../src/components/tabs/tabs.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].Emulated
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "../../../../../src/components/tabs/tabs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_component__ = __webpack_require__("../../../../../src/components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trade_trade_module__ = __webpack_require__("../../../../../src/components/trade/trade.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tabs_component__["a" /* TabComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__trade_trade_module__["a" /* TradesModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__tabs_component__["a" /* TabComponent */]]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ }),

/***/ "../../../../../src/components/trade/new-trade/new-trade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n  }\r\n  .main-container  {\r\n    margin: 10px;\r\n\r\n    /*width: 20%*/\r\n  }\r\n  .example-radio-group {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n  }\r\n  .example-container form {\r\n    margin-bottom: 20px;\r\n  }\r\n  .example-container form > * {\r\n    margin: 5px 0;\r\n  }\r\n  .example-radio-button {\r\n    margin: 5px;\r\n  }\r\n  .example-selected-value {\r\n    margin: 15px 0;\r\n  }\r\n  mat-form-field.mat-form-field {\r\n    font-size: 16px;\r\n    }\r\n  mat-label {\r\n    font-size: 16px;\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/trade/new-trade/new-trade.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"main-container mat-elevation-z8\">\r\n    <!--color=\"primary\" style=\"flex: 1 1 auto;\"-->\r\n    <mat-card-title> New Trade Details </mat-card-title>\r\n    <mat-card-content>\r\n        <div>\r\n            <form #newtradeform=\"ngForm\" (ngSubmit)=\"submit()\">\r\n\r\n                <mat-form-field floatLabel=\"always\">\r\n\r\n                    <mat-label>\r\n                        <b>Trade Date </b>\r\n                    </mat-label>\r\n                    <input matInput name=\"tradedate\" [matDatepicker]=\"tradeDatePicker\r\n                \" ngControl=\"tradedate\" [(ngModel)]=\"trade.tradeDate\" disabled required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"tradeDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #tradeDatePicker disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n                <div>\r\n                    <mat-form-field floatLabel=\"always\">\r\n                        <mat-label><b>Commodity</b></mat-label>\r\n                        <!--formControlName=\"commodity\" -->\r\n                        <mat-select [(ngModel)]=\"trade.commodity\" name=\"commodity\">\r\n                            <mat-option *ngFor=\"let commodity of commodities\" [value]=\"commodity.code\">{{commodity.description}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <label>Side: </label>\r\n                    <mat-radio-group class=\"example-radio-group\" layout-align=\"start center\" [(ngModel)]=\"trade.side\" name=\"sides\">\r\n\r\n                        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let side of sides\" [value]=\"side[0]\" labelPosition=\"after\"> {{side[1]}}\r\n                        </mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n                <div>\r\n                    <br>\r\n                </div>\r\n                <div> \r\n                    <mat-form-field floatLabel=\"always\">\r\n                            <mat-label><b>Counterparty</b></mat-label>\r\n                            <mat-select [(ngModel)]=\"trade.cntrParty\" name=\"counterparty\">\r\n                                <mat-option *ngFor=\"let counterparty of counterparties\" [value]=\"counterparty.id\">{{counterparty.name}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <mat-form-field floatLabel=\"always\">\r\n                        <mat-label>\r\n                            <b>Price</b>\r\n                        </mat-label>\r\n                        <input matInput name=\"price\" ngControl=\"price\" [(ngModel)]=\"trade.price\" required>\r\n                        <span matSuffix>USD</span>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <mat-form-field floatLabel=\"always\">\r\n                        <mat-label>\r\n                            <b>Quantity</b>\r\n                        </mat-label>\r\n                        <input matInput name=\"qty\" ngControl=\"qty\" [(ngModel)]=\"trade.quantity\" required>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div>\r\n                        <mat-form-field floatLabel=\"always\">\r\n                                <mat-label><b>Location</b></mat-label>\r\n                                <mat-select ngControl=\"location\" [(ngModel)]=\"trade.location\" required name=\"location\">\r\n                                    <mat-option *ngFor=\"let location of locations\" [value]=\"location.code\">{{location.name}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                </div>\r\n                <div>\r\n                    <button mat-raised-button color=\"accent\" text-transform=\"uppercase\" type=\"reset\"> Cancel</button>\r\n                    <button mat-raised-button color=\"primary\" text-transform=\"uppercase\" type=\"submit\"> Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/components/trade/new-trade/new-trade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_trade_service_trade_service__ = __webpack_require__("../../../../../src/shared/services/trade-service/trade-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_trade__ = __webpack_require__("../../../../../src/shared/models/trade.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewTradeComponent = (function () {
    function NewTradeComponent(refData, _tradeService, _datePipe) {
        this.refData = refData;
        this._tradeService = _tradeService;
        this._datePipe = _datePipe;
        this.selectedSide = '';
        this.sides = [['B', "Buy"], ['S', "Sell"]];
        this.trade = new __WEBPACK_IMPORTED_MODULE_3__shared_models_trade__["a" /* Trade */]();
        this.locations = [];
        this.counterparties = [];
        this.commodities = [];
    }
    NewTradeComponent.prototype.ngOnInit = function () {
        this.locations.push.apply(this.locations, this.refData.getLocations());
        this.commodities.push.apply(this.commodities, this.refData.getCommodities());
        this.counterparties.push.apply(this.counterparties, this.refData.getCounterparties());
    };
    NewTradeComponent.prototype.submit = function () {
        console.log(this.trade);
        this.trade.tradeDate = this._datePipe.transform(this.trade.tradeDate, 'dd-MM-yyyy');
        this._tradeService.createTrade(this.trade).subscribe(function (data) {
            console.log("Trade created " + data);
        });
    };
    NewTradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'new-trade',
            template: __webpack_require__("../../../../../src/components/trade/new-trade/new-trade.component.html"),
            styles: [__webpack_require__("../../../../../src/components/trade/new-trade/new-trade.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_ref_data_store__["a" /* ReferenceDataStore */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_trade_service_trade_service__["a" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], NewTradeComponent);
    return NewTradeComponent;
}());



/***/ }),

/***/ "../../../../../src/components/trade/trade-detail/trade-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trade-id-toolbar {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    padding: 0px 2px 16px 0px;\r\n    background-color: #ffffff;\r\n  }\r\n\r\n  .main-container  {\r\n    margin: 10px;\r\n\r\n    /*width: 20%*/\r\n  }\r\n\r\n  .trade-id-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n\r\n  .material-icons {\r\n    cursor: pointer;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/trade/trade-detail/trade-details.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"main-container mat-elevation-z8\">\r\n        <!--color=\"primary\" style=\"flex: 1 1 auto;\"-->\r\n        <mat-toolbar class=\"trade-id-toolbar\"> \r\n                <span>Trade ID: {{ trade.id }} </span>\r\n                <span class=\"trade-id-spacer\"></span>\r\n                <div style=\"float: right;\">\r\n                    <i class=\"material-icons\" [routerLink]=\"['/newtrade']\" >add</i>\r\n                    <i class=\"material-icons\" (click)=\"changeMode('EDIT')\">mode_edit</i>\r\n                </div>\r\n        </mat-toolbar>\r\n        \r\n            <div style=\"padding-top: 10px;\">\r\n                <form #edittradeform=\"ngForm\" (ngSubmit)=\"updateTrade()\">\r\n    \r\n                    <mat-form-field floatLabel=\"always\">\r\n    \r\n                        <mat-label>\r\n                            <b>Trade Date </b>\r\n                        </mat-label>\r\n                        <input matInput name=\"tradedate\" [matDatepicker]=\"tradeDatePicker\" ngControl=\"tradedate\" [(ngModel)]=\"tradeDate\" disabled required>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"tradeDatePicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #tradeDatePicker [disabled]=\"isDisabled\"></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <div>\r\n                        <mat-form-field floatLabel=\"always\">\r\n                            <mat-label><b>Commodity</b></mat-label>\r\n                            <!--formControlName=\"commodity\" -->\r\n                            <mat-select [(ngModel)]=\"trade.commodity\" name=\"commodity\"  [disabled]=\"isDisabled\">\r\n                                <mat-option *ngFor=\"let commodity of commodities\" [value]=\"commodity.code\">{{commodity.description}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div>\r\n                        <label>Side: </label>\r\n                        <mat-radio-group class=\"example-radio-group\" layout-align=\"start center\" [(ngModel)]=\"trade.side\" name=\"sides\" [disabled]=\"isDisabled\">\r\n    \r\n                            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let side of sides\" [value]=\"side[0]\" labelPosition=\"after\"> {{side[1]}}\r\n                            </mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                    <div>\r\n                        <br>\r\n                    </div>\r\n                    <div> \r\n                        <mat-form-field floatLabel=\"always\">\r\n                                <mat-label><b>Counterparty</b></mat-label>\r\n                                <mat-select [disabled]=\"isDisabled\" [(ngModel)]=\"trade.cntrParty\" name=\"counterparty\">\r\n                                    <mat-option *ngFor=\"let counterparty of counterparties\" [value]=\"counterparty.id\">{{counterparty.name}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                    </div>\r\n                    <div>\r\n                        <mat-form-field floatLabel=\"always\">\r\n                            <mat-label>\r\n                                <b>Price</b>\r\n                            </mat-label>\r\n                            <input [disabled]=\"isDisabled\" matInput name=\"price\" ngControl=\"price\" [(ngModel)]=\"trade.price\" required>\r\n                            <span matSuffix>USD</span>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div>\r\n                        <mat-form-field floatLabel=\"always\">\r\n                            <mat-label>\r\n                                <b>Quantity</b>\r\n                            </mat-label>\r\n                            <input matInput name=\"qty\" [disabled]=\"isDisabled\" ngControl=\"qty\" [(ngModel)]=\"trade.quantity\" required>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div>\r\n                            <mat-form-field floatLabel=\"always\">\r\n                                    <mat-label><b>Location</b></mat-label>\r\n                                    <mat-select ngControl=\"location\" [disabled]=\"isDisabled\" [(ngModel)]=\"trade.location\" required name=\"location\">\r\n                                        <mat-option *ngFor=\"let location of locations\" [value]=\"location.code\">{{location.name}}</mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                    </div>\r\n                    <div [style.display]=\"showButtons()\">\r\n                        <button mat-raised-button color=\"accent\" text-transform=\"uppercase\" (click)=\"changeMode('DETAIL')\" type=\"button\"> Cancel</button>\r\n                        <button mat-raised-button color=\"primary\" text-transform=\"uppercase\" type=\"submit\"> Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        \r\n    </mat-card>"

/***/ }),

/***/ "../../../../../src/components/trade/trade-detail/trade-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_trade__ = __webpack_require__("../../../../../src/shared/models/trade.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_trade_service_trade_service__ = __webpack_require__("../../../../../src/shared/services/trade-service/trade-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TradeDetailsComponent = (function () {
    function TradeDetailsComponent(refData, _route, _tradeService, _datePipe) {
        var _this = this;
        this.refData = refData;
        this._route = _route;
        this._tradeService = _tradeService;
        this._datePipe = _datePipe;
        this.trade = new __WEBPACK_IMPORTED_MODULE_1__shared_models_trade__["a" /* Trade */]();
        this.locations = [];
        this.counterparties = [];
        this.commodities = [];
        this.isDisabled = true;
        this._route.params.subscribe(function (params) {
            _this.getDetails(params['id']);
        });
    }
    TradeDetailsComponent.prototype.ngOnInit = function () {
        this.locations.push.apply(this.locations, this.refData.getLocations());
        this.commodities.push.apply(this.commodities, this.refData.getCommodities());
        this.counterparties.push.apply(this.counterparties, this.refData.getCounterparties());
    };
    TradeDetailsComponent.prototype.getDetails = function (id) {
        var _this = this;
        console.log("Trade ID recieved: " + id);
        this.isDisabled = true;
        this._tradeService.getTrade(id).subscribe(function (data) {
            _this.trade = data;
            var tradeDateStr = _this.trade.tradeDate.split("-").reverse().join("/");
            _this.tradeDate = new Date(tradeDateStr);
            console.log("Trade = " + JSON.stringify(_this.trade));
        });
    };
    TradeDetailsComponent.prototype.changeMode = function (mode) {
        if ('EDIT' === mode) {
            this.isDisabled = false;
        }
        else {
            this.isDisabled = true;
        }
    };
    TradeDetailsComponent.prototype.showButtons = function () {
        return (this.isDisabled) ? "none" : "";
    };
    TradeDetailsComponent.prototype.updateTrade = function () {
        this.trade.tradeDate = this._datePipe.transform(this.tradeDate, 'dd-MM-yyyy');
        console.log(" NEw Trade = " + JSON.stringify(this.trade));
        this._tradeService.updateTrade(this.trade).subscribe(function (data) {
            console.log("Trade updated " + data);
        });
    };
    TradeDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'trade-detail',
            template: __webpack_require__("../../../../../src/components/trade/trade-detail/trade-details.component.html"),
            styles: [__webpack_require__("../../../../../src/components/trade/trade-detail/trade-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_services_ref_data_store__["a" /* ReferenceDataStore */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_trade_service_trade_service__["a" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]])
    ], TradeDetailsComponent);
    return TradeDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/components/trade/trade-notificaition/trade-notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeNotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_notification_service__ = __webpack_require__("../../../../../src/shared/services/notification/notification-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TradeNotificationComponent = (function () {
    function TradeNotificationComponent(_snakBar, _notificationService) {
        this._snakBar = _snakBar;
        this._notificationService = _notificationService;
        var that = this;
        this._notificationService.getTradeNotifications()
            .subscribe({
            next: function (data) {
                console.log("TRADE EVENT RECIEVED " + data);
                if (data.event.eventType == 'CREATE') {
                    that._snakBar.open("New Trade created successfully with ID: " + data.event.payload, "", { duration: 4000 });
                }
                if (data.event.eventType == 'UPDATE') {
                    that._snakBar.open("Trade updated successfully", "", { duration: 4000 });
                }
                if (data.event.eventType == 'DELETE') {
                    that._snakBar.open("Trade deleted successfully with ID: " + data.event.payload, "", { duration: 4000 });
                }
            }
        });
    }
    TradeNotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notification-app',
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_notification_service__["a" /* NotificationService */]])
    ], TradeNotificationComponent);
    return TradeNotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/components/trade/trade-search-results/table-search-results.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".results-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  /*max-height: 800px;*/\r\n  /*max-width: 50%;*/\r\n  min-width: 900px;\r\n  margin: 10px;\r\n\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  /*padding-left: 200px;*/\r\n  max-height: 568px;\r\n}\r\n\r\n.user-row {\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.user-row :hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\n.user-row :active {\r\n  background: #eaeaea;\r\n}\r\n\r\n.mat-table-selectable .mat-row:hover {\r\n  background: #bfc4eb;\r\n}\r\n\r\n.mat-table-selectable .mat-row.selected {\r\n  background: #f5f5f5;\r\n}\r\n\r\n.fa{\r\n  font-size: large;\r\n}\r\n\r\n.delete-icon{\r\n  display: none;\r\n}\r\n\r\n.mat-cell:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.mat-row:hover .delete-icon{\r\n  display: inline;\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/trade/trade-search-results/trade-search-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeSearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_trade_service_trade_service__ = __webpack_require__("../../../../../src/shared/services/trade-service/trade-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TradeSearchResultsComponent = (function () {
    function TradeSearchResultsComponent(_tradeService, _router) {
        this._tradeService = _tradeService;
        this._router = _router;
        this.columnsToBeDisplayed = ['tradeDate', 'commodity', 'side', 'price',
            'quantity', 'counterParty', 'location', 'del-icon'];
    }
    TradeSearchResultsComponent.prototype.handleRow = function (action, row) {
        console.log("action=" + action + ", " + row.id);
        if (action == "delete") {
            console.log("Delete Request " + row.id);
            var that_1 = this;
            this._tradeService.deleteTrade("" + row.id).subscribe({
                next: function (data) {
                    console.log("Trade with Id: " + row.id + " deleted.");
                    console.log("Before " + that_1.dataset.data.length);
                    that_1.removeTrade(row);
                    console.log(that_1.dataset.data.length);
                }
            });
        }
        else {
            this._router.navigate(["/tradedetails", "" + row.id]);
        }
    };
    TradeSearchResultsComponent.prototype.removeTrade = function (trade) {
        this.dataset.data.splice(this.dataset.data.indexOf(trade), 1);
        this.dataset.data = this.dataset.data;
    };
    TradeSearchResultsComponent.prototype.ngOnInit = function () {
        this.dataset = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTableDataSource */]();
    };
    TradeSearchResultsComponent.prototype.onSearch = function (trades) {
        this.dataset.data = trades;
    };
    TradeSearchResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'trade-search-results',
            template: __webpack_require__("../../../../../src/components/trade/trade-search-results/trade-search-results.html"),
            styles: [__webpack_require__("../../../../../src/components/trade/trade-search-results/table-search-results.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__shared_services_trade_service_trade_service__["a" /* TradeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_trade_service_trade_service__["a" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], TradeSearchResultsComponent);
    return TradeSearchResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/components/trade/trade-search-results/trade-search-results.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"results-container mat-elevation-z8\">\r\n  <mat-table #resultsTable [dataSource]=\"dataset\" class=\"mat-table-selectable\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"tradeDate\" >\r\n      <mat-header-cell *matHeaderCellDef> Trade Date</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" (click)=\"handleRow('details',element)\"> {{ element.tradeDate | todate |date:'mediumDate'}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"commodity\">\r\n      <mat-header-cell *matHeaderCellDef> Commodity</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" (click)=\"handleRow('details',element)\"> {{ element.commodity | commoditypipe }}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"side\" >\r\n      <mat-header-cell *matHeaderCellDef> Side</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" (click)=\"handleRow('details',element)\"> {{element.side | side}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"price\" >\r\n      <mat-header-cell *matHeaderCellDef> Price</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" (click)=\"handleRow('details',element)\"> {{element.price|currency}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"quantity\">\r\n      <mat-header-cell *matHeaderCellDef> Quantity</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" (click)=\"handleRow('details',element)\"> {{element.quantity}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"counterParty\" >\r\n      <mat-header-cell *matHeaderCellDef> CounterParty</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" (click)=\"handleRow('details',element)\"> {{element.cntrParty}}</mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"location\" >\r\n    <mat-header-cell *matHeaderCellDef> Location</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\" (click)=\"handleRow('details',element)\"> {{element.location|locationpipe }}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"del-icon\" (click)=\"handleRow('details',row)\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\" style=\"text-align: center;\">\r\n        <i class=\"material-icons delete-icon\" (click)=\"handleRow('delete',element)\">delete</i>\r\n       <!-- <mat-icon fontSet=\"fa\" fontIcon=\"fa-trash\"  aria-hidden=\"true\" > </mat-icon> -->\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"columnsToBeDisplayed\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: columnsToBeDisplayed;\"\r\n                mat-ripple >\r\n\r\n    </mat-row>\r\n\r\n  </mat-table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/components/trade/trade-search/trade-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container  {\r\n  margin: 10px;\r\n\r\n  /*width: 20%*/\r\n}\r\n.mat-simple-snackbar{\r\n  font-size: 17px;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/trade/trade-search/trade-search.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"main-container mat-elevation-z11\">\r\n\r\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"doSearch()\" (ngReset)=\"doReset()\">\r\n    <mat-form-field class=\"style: margin-right=3px;\">\r\n      <!--<mat-label>Trade Date</mat-label>-->\r\n      <input matInput name=\"fromDate\" [matDatepicker]=\"fromDatePicker\" ngControl=\"tradedate\" formControlName=\"fromDate\" >\r\n      <mat-placeholder>From Date</mat-placeholder>\r\n      <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #fromDatePicker ></mat-datepicker>\r\n      <!--<mat-error *ngIf=\"searchForm.controls.fromDate.invalid\">Invalid Date</mat-error>-->\r\n    </mat-form-field>\r\n    To\r\n    <mat-form-field>\r\n      <input matInput name=\"toDate\" [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\">\r\n      <mat-placeholder>Till Date</mat-placeholder>\r\n      <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #toDatePicker disabled=\"false\"></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <!--<mat-form-field floatLabel=\"always\">-->\r\n    <mat-form-field>\r\n    <mat-label>Commodity</mat-label>\r\n    <mat-select formControlName=\"commodity\" [ngModel]=\"commodities[0].code\">\r\n      <mat-option *ngFor=\"let commodity of commodities\" [value]=\"commodity.code\">{{commodity.description}}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n\r\n<!--\r\n    <mat-form-field floatLabel=\"always\">\r\n-->\r\n      <mat-form-field>\r\n      <mat-label>Counterparty</mat-label>\r\n      <mat-select formControlName=\"counterparty\" [ngModel]=\"counterparties[0].id\">\r\n        <mat-option *ngFor=\"let counterparty of counterparties\" [value]=\"counterparty.id\">{{counterparty.name}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n<!--\r\n    <mat-form-field floatLabel=\"always\">\r\n-->\r\n    <mat-form-field>\r\n      <mat-label>Location</mat-label>\r\n      <mat-select formControlName=\"location\" [ngModel]=\"locations[0].code\">\r\n        <mat-option *ngFor=\"let location of locations\"\r\n\r\n                    [value]=\"location.code\">{{location.name}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button color=\"accent\" text-transform=\"uppercase\" type=\"reset\"> Cancel</button>\r\n    <button mat-raised-button color=\"primary\" text-transform=\"uppercase\" type=\"submit\"> Search</button>\r\n\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/components/trade/trade-search/trade-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_refrerence_service_reference_service__ = __webpack_require__("../../../../../src/shared/services/refrerence-service/reference-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_trade_service_trade_service__ = __webpack_require__("../../../../../src/shared/services/trade-service/trade-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TradeSearchComponent = (function () {
    function TradeSearchComponent(refData, _tradeService, _datePipe, _snakBar) {
        this.refData = refData;
        this._tradeService = _tradeService;
        this._datePipe = _datePipe;
        this._snakBar = _snakBar;
        this.locations = [{ code: '',
                name: 'All' }];
        this.counterparties = [{ id: '', name: 'All' }];
        this.commodities = [{ code: '', description: 'All' }];
        this.onSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TradeSearchComponent.prototype.ngOnInit = function () {
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            fromDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](new Date()),
            toDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](new Date()),
            commodity: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            counterparty: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            location: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('')
        });
        this.locations.push.apply(this.locations, this.refData.getLocations());
        this.commodities.push.apply(this.commodities, this.refData.getCommodities());
        this.counterparties.push.apply(this.counterparties, this.refData.getCounterparties());
        console.log("Search component initialized");
    };
    TradeSearchComponent.prototype.doSearch = function () {
        var _this = this;
        console.log(this.searchForm.value);
        var fromDateVal = this._datePipe.transform(this.searchForm.controls.fromDate.value, 'dd-MM-yyyy');
        var toDateVal = this._datePipe.transform(this.searchForm.controls.toDate.value, 'dd-MM-yyyy');
        var commodityVal = this.searchForm.controls.commodity.value;
        var counterpartyVal = this.searchForm.controls.counterparty.value;
        var locationVal = this.searchForm.controls.location.value;
        var searchResult;
        this._tradeService.searchTrades(fromDateVal, toDateVal, commodityVal, counterpartyVal, locationVal)
            .subscribe(function (data) {
            searchResult = data;
            console.log(searchResult);
            _this.onSearch.emit(data);
            _this._snakBar.open("Trades found: " + data.length.toString(), "", { duration: 4000 });
        });
    };
    TradeSearchComponent.prototype.doReset = function () {
        this.searchForm.reset();
        this.searchForm.controls.commodity.setValue(' ');
    };
    TradeSearchComponent.prototype.getErrorMessage = function (fromContrlName) {
        // console.log("dfs"+ fromContrlName);
        if (fromContrlName == "fromDate") {
            return "Enter a Valid Date";
        }
    };
    TradeSearchComponent.prototype.isDateValid = function () {
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], TradeSearchComponent.prototype, "onSearch", void 0);
    TradeSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'trade-search',
            template: __webpack_require__("../../../../../src/components/trade/trade-search/trade-search.component.html"),
            styles: [__webpack_require__("../../../../../src/components/trade/trade-search/trade-search.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_refrerence_service_reference_service__["a" /* ReferenceService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_trade_service_trade_service__["a" /* TradeService */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_services_ref_data_store__["a" /* ReferenceDataStore */], __WEBPACK_IMPORTED_MODULE_3__shared_services_trade_service_trade_service__["a" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSnackBar */]])
    ], TradeSearchComponent);
    return TradeSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/components/trade/trade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TradeComponent = (function () {
    function TradeComponent() {
    }
    TradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'trade-app',
            template: "\n  <div class=\"body-margin center-align\">\n      <trade-search (onSearch) = \"tradeslist.onSearch($event)\"></trade-search>\n      <div class=\"trade-container\"> <trade-search-results #tradeslist></trade-search-results> \n      <router-outlet></router-outlet>\n      <!--  <new-trade></new-trade> -->\n      </div>\n      <notification-app> </notification-app>\n  </div>\n \n  ",
            styles: [__webpack_require__("../../../../../src/components/trade/trade.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].Emulated
        })
    ], TradeComponent);
    return TradeComponent;
}());



/***/ }),

/***/ "../../../../../src/components/trade/trade.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trade-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/trade/trade.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_trade_new_trade_component__ = __webpack_require__("../../../../../src/components/trade/new-trade/new-trade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__trade_detail_trade_details_component__ = __webpack_require__("../../../../../src/components/trade/trade-detail/trade-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__trade_component__ = __webpack_require__("../../../../../src/components/trade/trade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trade_search_results_trade_search_results_component__ = __webpack_require__("../../../../../src/components/trade/trade-search-results/trade-search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__trade_search_trade_search_component__ = __webpack_require__("../../../../../src/components/trade/trade-search/trade-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_pipes_PipesModules__ = __webpack_require__("../../../../../src/shared/pipes/PipesModules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_trade_service_trade_service__ = __webpack_require__("../../../../../src/shared/services/trade-service/trade-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_notification_notification_service__ = __webpack_require__("../../../../../src/shared/services/notification/notification-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__trade_notificaition_trade_notification_component__ = __webpack_require__("../../../../../src/components/trade/trade-notificaition/trade-notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_services_module__ = __webpack_require__("../../../../../src/shared/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var TradesModule = (function () {
    function TradesModule() {
    }
    TradesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_13__trade_component__["a" /* TradeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__new_trade_new_trade_component__["a" /* NewTradeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__trade_detail_trade_details_component__["a" /* TradeDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__trade_search_results_trade_search_results_component__["a" /* TradeSearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__trade_search_trade_search_component__["a" /* TradeSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_21__trade_notificaition_trade_notification_component__["a" /* TradeNotificationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_15__app_app_routes__["b" /* TRADE_ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["n" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_services_module__["a" /* ServicesModule */],
                __WEBPACK_IMPORTED_MODULE_18__shared_pipes_PipesModules__["a" /* PipesModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_13__trade_component__["a" /* TradeComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_19__shared_services_trade_service_trade_service__["a" /* TradeService */], __WEBPACK_IMPORTED_MODULE_20__shared_services_notification_notification_service__["a" /* NotificationService */]]
        })
    ], TradesModule);
    return TradesModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/shared/models/trade.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trade; });
var Trade = (function () {
    function Trade(tradeDate, commodity, side, counterparty, price, qty, location, status) {
        if (tradeDate === void 0) { tradeDate = ""; }
        if (commodity === void 0) { commodity = ""; }
        if (side === void 0) { side = ""; }
        if (counterparty === void 0) { counterparty = ""; }
        if (price === void 0) { price = 0; }
        if (qty === void 0) { qty = 0; }
        if (location === void 0) { location = ""; }
        if (status === void 0) { status = "New"; }
        this.commodity = commodity;
        this.tradeDate = tradeDate;
        this.cntrParty = counterparty;
        this.price = price;
        this.quantity = qty;
        this.side = side;
        this.location = location;
        this.status = status;
    }
    return Trade;
}());



/***/ }),

/***/ "../../../../../src/shared/pipes/PipesModules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commodity_pipe__ = __webpack_require__("../../../../../src/shared/pipes/commodity.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_pipe__ = __webpack_require__("../../../../../src/shared/pipes/location.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__to_date_pipe__ = __webpack_require__("../../../../../src/shared/pipes/to-date.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__side_pipe__ = __webpack_require__("../../../../../src/shared/pipes/side.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__commodity_pipe__["a" /* CommodityPipe */], __WEBPACK_IMPORTED_MODULE_2__location_pipe__["a" /* LocationPipe */], __WEBPACK_IMPORTED_MODULE_3__to_date_pipe__["a" /* ToDatePipe */], __WEBPACK_IMPORTED_MODULE_4__side_pipe__["a" /* SidePipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__commodity_pipe__["a" /* CommodityPipe */], __WEBPACK_IMPORTED_MODULE_2__location_pipe__["a" /* LocationPipe */], __WEBPACK_IMPORTED_MODULE_3__to_date_pipe__["a" /* ToDatePipe */], __WEBPACK_IMPORTED_MODULE_4__side_pipe__["a" /* SidePipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_ref_data_store__["a" /* ReferenceDataStore */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "../../../../../src/shared/pipes/commodity.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommodityPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommodityPipe = (function () {
    // private _promise = this._refservice.getAllCommodities().toPromise();
    function CommodityPipe(refDataStore) {
        var _this = this;
        this.refDataStore = refDataStore;
        this._commodities = new Map();
        this.refDataStore.getCommodities()
            .forEach(function (c) { return _this._commodities.set(c.code, c.description); });
        // this._promise.then(
        //     (data: Commodity[])=>{
        //         data.forEach( (c:Commodity)=> this._commodities.set(c.code, c.description));
        //     }
        // );
        // this._refservice.getAllCommodities().subscribe();
    }
    CommodityPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return this._commodities.get(value);
    };
    CommodityPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'commoditypipe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ref_data_store__["a" /* ReferenceDataStore */]])
    ], CommodityPipe);
    return CommodityPipe;
}());



/***/ }),

/***/ "../../../../../src/shared/pipes/location.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ref_data_store__ = __webpack_require__("../../../../../src/shared/services/ref-data-store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationPipe = (function () {
    function LocationPipe(refDataStore) {
        var _this = this;
        this.refDataStore = refDataStore;
        this._locations = new Map();
        this.refDataStore.getLocations()
            .forEach(function (c) { return _this._locations.set(c.code, c.name); });
        // this._refservice.getAllLocations().subscribe((data:Location[])=>{
        //     data.forEach( (c:Location)=> this._locations.set(c.code, c.name));
        // });
    }
    LocationPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return this._locations.get(value);
    };
    LocationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'locationpipe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ref_data_store__["a" /* ReferenceDataStore */]])
    ], LocationPipe);
    return LocationPipe;
}());



/***/ }),

/***/ "../../../../../src/shared/pipes/side.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidePipe = (function () {
    function SidePipe() {
    }
    SidePipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        if ('B' == value) {
            return "Buy";
        }
        else if ('S' == value) {
            return "Sell";
        }
        return value;
    };
    SidePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'side' })
    ], SidePipe);
    return SidePipe;
}());



/***/ }),

/***/ "../../../../../src/shared/pipes/to-date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToDatePipe = (function () {
    function ToDatePipe() {
    }
    ToDatePipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        value = value.split("-").reverse().join("/");
        return new Date(value);
    };
    ToDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'todate' })
    ], ToDatePipe);
    return ToDatePipe;
}());



/***/ }),

/***/ "../../../../../src/shared/services/Configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Configuration = (function () {
    function Configuration() {
        this.server = 'http://localhost';
    }
    Configuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Configuration);
    return Configuration;
}());



/***/ }),

/***/ "../../../../../src/shared/services/notification/notification-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs__ = __webpack_require__("../../../../stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sockjs_client__ = __webpack_require__("../../../../sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sockjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SERVER_URL = 'http://localhost:9001/notification-websocket';
var NotificationService = (function () {
    function NotificationService() {
        var socket = new __WEBPACK_IMPORTED_MODULE_2_sockjs_client__('http://localhost:9001/notification-websocket');
        // Attempt connection, passing in a callback
        this.marketClient = __WEBPACK_IMPORTED_MODULE_1_stompjs__["over"](socket);
        var socket1 = new __WEBPACK_IMPORTED_MODULE_2_sockjs_client__('http://localhost:9001/notification-websocket');
        this.tradeClient = __WEBPACK_IMPORTED_MODULE_1_stompjs__["over"](socket1);
    }
    NotificationService.prototype.getMarketData = function () {
        var stompClient = this.marketClient;
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        stompClient.connect({}, function (frame) {
            stompClient.subscribe('/market/feeds', function (data) {
                sub.next(JSON.parse(data.body));
            });
        });
        return sub;
    };
    NotificationService.prototype.getTradeNotifications = function () {
        var stompClient = this.tradeClient;
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        stompClient.connect({}, function (frame) {
            stompClient.subscribe('/trade/feeds', function (data) {
                console.log(data.body);
                sub.next(JSON.parse(data.body));
            });
        });
        return sub;
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/ref-data-store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferenceDataStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__refrerence_service_reference_service__ = __webpack_require__("../../../../../src/shared/services/refrerence-service/reference-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/zip.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReferenceDataStore = (function () {
    function ReferenceDataStore(refService) {
        this.refService = refService;
        this.locations = [];
        this.counterparties = [];
        this.commodities = [];
        console.log("Refernce Data Store Constructed.");
    }
    ReferenceDataStore.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve) {
            console.log("Calling services to get Refernce Data");
            var that = _this;
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].zip(_this.refService.getAllCommodities(), _this.refService.getAllCounterParties(), _this.refService.getAllLocations())
                .subscribe(function (a) {
                console.log(a[0]);
                console.log(a[1]);
                console.log(a[2]);
                that.commodities = a[0];
                that.counterparties = a[1];
                that.locations = a[2];
                resolve(true);
            });
        });
    };
    ReferenceDataStore.prototype.getCommodities = function () {
        return this.commodities;
    };
    ReferenceDataStore.prototype.getCounterparties = function () {
        return this.counterparties;
    };
    ReferenceDataStore.prototype.getLocations = function () {
        return this.locations;
    };
    ReferenceDataStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__refrerence_service_reference_service__["a" /* ReferenceService */]])
    ], ReferenceDataStore);
    return ReferenceDataStore;
}());



/***/ }),

/***/ "../../../../../src/shared/services/refrerence-service/reference-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferenceService; });
/* unused harmony export CustomInterceptor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Configuration__ = __webpack_require__("../../../../../src/shared/services/Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReferenceService = (function () {
    function ReferenceService(_httpClient, _config) {
        this._httpClient = _httpClient;
        this._config = _config;
        this.locationUrl = '/ref/location';
        this.counterPartyUrl = '/ref/counterparty';
        this.commodityUrl = '/ref/commodity';
    }
    ReferenceService.prototype.getAllLocations = function () {
        var url = this._config.server + this.locationUrl + "/list";
        return this._httpClient.get(url);
    };
    ReferenceService.prototype.getAllCounterParties = function () {
        var url = this._config.server + this.counterPartyUrl + "/list";
        return this._httpClient.get(url);
    };
    ReferenceService.prototype.getAllCommodities = function () {
        var url = this._config.server + this.commodityUrl + "/list";
        return this._httpClient.get(url);
    };
    ReferenceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__Configuration__["a" /* Configuration */]])
    ], ReferenceService);
    return ReferenceService;
}());

var CustomInterceptor = (function () {
    function CustomInterceptor() {
    }
    CustomInterceptor.prototype.intercept = function (req, next) {
        console.log(JSON.stringify(req.headers));
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    };
    CustomInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], CustomInterceptor);
    return CustomInterceptor;
}());



/***/ }),

/***/ "../../../../../src/shared/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Configuration__ = __webpack_require__("../../../../../src/shared/services/Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {ReferenceService} from './reference-service';

var ServicesModule = (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            /*declarations: [
              ReferenceService
            ],*/
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__Configuration__["a" /* Configuration */]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "../../../../../src/shared/services/trade-service/trade-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Configuration__ = __webpack_require__("../../../../../src/shared/services/Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TradeService = (function () {
    function TradeService(_httpClient, _config) {
        this._httpClient = _httpClient;
        this._config = _config;
        this.searchTradeUrl = "/api/trades/search";
        this.tradesUrl = "/api/trades";
    }
    TradeService.prototype.searchTrades = function (fromDate, toDate, commodity, counterparty, location) {
        var url = this._config.server + this.searchTradeUrl;
        var params = new Map();
        if (commodity != "" && commodity != null && commodity != undefined) {
            params.set("commcd", commodity);
        }
        if (counterparty != "" && counterparty != null && counterparty != undefined) {
            params.set("cntrPrty", counterparty);
        }
        if (location != "" && location != null && location != undefined) {
            params.set("loc", location);
        }
        if (fromDate != "" && fromDate != null && fromDate != undefined) {
            params.set("from", fromDate);
        }
        if (toDate != "" && toDate != null && toDate != undefined) {
            params.set("to", toDate);
        }
        var httpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params.forEach(function (key, val) {
            httpParams = httpParams.append(val, key);
        });
        return this._httpClient.get(url, { params: httpParams });
    };
    TradeService.prototype.deleteTrade = function (tradeId) {
        var url = this._config.server + this.tradesUrl;
        var httpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        httpParams = httpParams.append("id", tradeId);
        console.log("Delete Trade Service " + httpParams);
        return this._httpClient.delete(url, { params: httpParams });
    };
    TradeService.prototype.getTrade = function (tradeId) {
        var url = this._config.server + this.tradesUrl;
        var httpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        httpParams = httpParams.append("id", tradeId);
        return this._httpClient.get(url, { params: httpParams });
    };
    TradeService.prototype.createTrade = function (trade) {
        var url = this._config.server + this.tradesUrl;
        return this._httpClient.post(url, trade);
    };
    TradeService.prototype.updateTrade = function (trade) {
        var url = this._config.server + this.tradesUrl;
        return this._httpClient.put(url, trade);
    };
    TradeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__Configuration__["a" /* Configuration */]])
    ], TradeService);
    return TradeService;
}());



/***/ }),

/***/ "../../../../../src/shared/services/user-service/user-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Configuration__ = __webpack_require__("../../../../../src/shared/services/Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http, _config) {
        this.http = http;
        this._config = _config;
        this.userUrl = "/user";
        this.logoutUrl = "/logout";
    }
    UserService.prototype.logout = function () {
        var url = this._config.server + this.logoutUrl;
        console.log("logging out " + url);
        return this.http.post(url, {});
    };
    UserService.prototype.getUserName = function () {
        var url = this._config.server + this.userUrl;
        console.log("Getting User information");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'text/plain'
        });
        return this.http.get(url);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__Configuration__["a" /* Configuration */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map