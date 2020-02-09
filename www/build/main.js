webpackJsonp([0],{

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(393);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            // HomePage,
            // ListPage,
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["c" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["h" /* TournamentsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["g" /* TeamsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["e" /* TeamDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["d" /* StandingsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["f" /* TeamHomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["b" /* MapPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM' })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            // HomePage,
            // ListPage,
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["c" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["h" /* TournamentsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["g" /* TeamsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["e" /* TeamDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["d" /* StandingsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["f" /* TeamHomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pages__["b" /* MapPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams__ = __webpack_require__(445);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tournaments_tournaments__ = __webpack_require__(716);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__tournaments_tournaments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(717);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__game_game__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__ = __webpack_require__(718);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teams_teams__ = __webpack_require__(720);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__teams_teams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__standings_standings__ = __webpack_require__(721);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__standings_standings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_home_team_home__ = __webpack_require__(722);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__team_home_team_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(723);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__map_map__["a"]; });








//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_api_service__ = __webpack_require__(446);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_settings_service__ = __webpack_require__(713);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__user_settings_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sql_storage_service__ = __webpack_require__(714);
/* unused harmony namespace reexport */



//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, appApi, userSettings, loadingController, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appApi = appApi;
        this.userSettings = userSettings;
        this.loadingController = loadingController;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["c" /* MyTeamsPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.refreshFavorites();
            _this.events.subscribe('favorites:changed', function () { return _this.refreshFavorites(); });
            // this.userSettings.initStorage().then(() => {
            //         this.rootPage = MyTeamsPage;
            //         this.refreshFavorites();
            //         this.events.subscribe('favorites:changed', () => this.refreshFavorites());
            //       });
        });
    };
    /*openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }*/
    MyApp.prototype.refreshFavorites = function () {
        this.favoriteTeams = this.userSettings.getAllFavorites();
    };
    MyApp.prototype.goHome = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["c" /* MyTeamsPage */]);
    };
    MyApp.prototype.goToTournaments = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["h" /* TournamentsPage */]);
    };
    MyApp.prototype.goToTeam = function (favorite) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this.appApi.getTournamentsData(favorite.tournamentId)
            .subscribe(function (t) { return _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["f" /* TeamHomePage */], favorite.team); });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="cDarkorange">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Navigate</ion-list-header>\n      <button menuClose ion-item (click)="goHome()">Home</button>\n      <button menuClose ion-item (click)="goToTournaments()">Find a Tournaments</button>\n    </ion-list>\n    <ion-list *ngIf="favoriteTeams">\n       <ion-list-header>Favorites</ion-list-header>\n       <button menuClose ion-item *ngFor="let fab of favoriteTeams" (click)="goToTeam(fab)">\n            {{fab.team.name}}\n       </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\app\app.html"*/,
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__shared_shared__["a" /* AppApi */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared__["b" /* UserSettings */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_6__shared_shared__["b" /* UserSettings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyTeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


var MyTeamsPage = (function () {
    // favorites =[
    //   {
    //     team: {id: 6182, name: 'HC Elite 7th', coach: 'Michelotti'},
    //     tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
    //     tournamentName: 'March Madness Tournament' 
    //   },
    //   {
    //     team: {id: 805, name: 'HC Elite', coach: 'Michelotti'},
    //     tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
    //     tournamentName: 'Holiday Hoops Challenge'       
    //   }
    // ];
    function MyTeamsPage(navCtrl, navParams, appApi, userSettings, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.userSettings = userSettings;
        this.loadingController = loadingController;
        this.favorites = [];
    }
    MyTeamsPage.prototype.favoriteTapped = function ($event, favorite) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this.appApi.getTournamentsData(favorite.tournamentId)
            .subscribe(function (t) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["f" /* TeamHomePage */], favorite.team); });
    };
    MyTeamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTeamsPage');
    };
    MyTeamsPage.prototype.goToTournaments = function () {
        console.log('Goto TournamentsPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["h" /* TournamentsPage */]);
    };
    MyTeamsPage.prototype.ionViewDidEnter = function () {
        this.favorites = this.userSettings.getAllFavorites();
        console.log(this.favorites);
    };
    return MyTeamsPage;
}());
MyTeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-teams',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\my-teams\my-teams.html"*/'<!--\n  Generated template for the MyTeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ping Pong Madness</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="secondary">\n    <ion-title>My Teams</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngIf="!favorites">\n    <ion-card-header class="my-teams-header">No Followed Teams</ion-card-header>\n    <ion-card-content>\n      <p>You are not currently following any teams.</p>\n      <p>First select a tournament, then you can follow teams from their team page.</p>\n\n      <button ion-button full (click)="goToTournaments()">\n          <ion-icon name="search" padding></ion-icon>\n          Find a Tournament\n      </button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="favorites">\n    <ion-card-content>\n      <ion-list>\n          <ion-list-header class="my-teams-header">Followed Teams</ion-list-header>\n          <button ion-item *ngFor="let item of favorites" (click)="favoriteTapped($event, item)">\n            <ion-icon name="star"></ion-icon>\n            {{item.team.name}}\n            <p>{{item.tournamentName}}</p>\n          </button>\n      </ion-list>\n      <p>To follow more teams, select a tournament, \n        then you can follow teams from their team page.</p>\n\n      <button ion-button full (click)="goToTournaments()">\n          <ion-icon name="search" padding></ion-icon>\n          Find a Tournament\n      </button>      \n    </ion-card-content>\n  </ion-card>\n  \n    <!--<ion-list>\n      <ion-list-header>Followed Teams</ion-list-header>\n      <button ion-item *ngFor="let item of favorites" (click)="favoriteTapped($event, item)">\n        <ion-icon name="star"></ion-icon>\n        {{item.team.name}}\n        <p>{{item.tournamentName}}</p>\n      </button>\n    </ion-list>\n    \n    <p>To follow more teams, select a tournament, \n      then you can follow teams from their team page.</p>\n\n    <button ion-button full (click)="goToTournaments()">\n        <ion-icon name="search" padding></ion-icon>\n        Find a Tournament\n    </button>-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\my-teams\my-teams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["b" /* UserSettings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], MyTeamsPage);

//# sourceMappingURL=my-teams.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppApi = (function () {
    function AppApi(http) {
        this.http = http;
        this.baseUrl = 'https://game-schedule.firebaseio.com/';
        this.currentTourney = {};
        this.tourneyData = {};
    }
    AppApi.prototype.getTournaments = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.baseUrl + "/tournaments.json")
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    AppApi.prototype.getTournamentsData = function (tourneyId, forceRefresh) {
        var _this = this;
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (!forceRefresh && this.tourneyData[tourneyId]) {
            this.currentTourney = this.tourneyData[tourneyId];
            console.log("Just return the data");
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.currentTourney);
        }
        console.log("Data is not available");
        return this.http.get(this.baseUrl + "/tournaments-data/" + tourneyId + ".json")
            .map(function (response) {
            _this.currentTourney = response.json();
            return _this.currentTourney;
        });
    };
    // getTournamentsData(tourneyId): Observable<any> {
    //     return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    //             .map((response: Response) => {
    //                 this.currentTourney = response.json();
    //                 return this.currentTourney;
    //             });                 
    // }
    AppApi.prototype.getCurrentTourney = function () {
        return this.currentTourney;
    };
    AppApi.prototype.refreshCurrentTourney = function () {
        return this.getTournamentsData(this.currentTourney.tournament.id, true);
    };
    return AppApi;
}());
AppApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AppApi);

//# sourceMappingURL=app-api.service.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as storageForage from 'localforage';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { SqlStorage } from './shared';

var win = window;
var UserSettings = (function () {
    // public db: SQLite;
    // public sql: SqlStorage;
    function UserSettings(events) {
        // if (win.sqlitePlugin) {
        //     this.sql = new SqlStorage();
        //     console.log(this.sql);
        // } else {
        //     console.warn('SQLite plugin not installed. Falling back to regular Ionic Storage.');
        // }        
        this.events = events;
        this.storage = new __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */](window.localStorage);
    }
    UserSettings.prototype.favoriteTeam = function (team, tournamentId, tournamentName) {
        var item = { team: team,
            tournamentId: tournamentId,
            tournamentName: tournamentName
        };
        //this.storage.set(team.id, JSON.stringify(item));
        //storageForage.setItem(team.id, JSON.stringify(item));
        window.localStorage.setItem(team.id, JSON.stringify(item));
        this.events.publish('favorites:changed');
        //console.log(this.sql);         
    };
    UserSettings.prototype.unfavoriteTeam = function (team) {
        //this.storage.remove(team.id);
        //storageForage.removeItem(team.id);
        window.localStorage.removeItem(team.id);
        this.events.publish('favorites:changed');
    };
    UserSettings.prototype.isFavoriteTeam = function (teamId) {
        //return this.storage.get(teamId).then(value => value ? true : false);
        //return storageForage.getItem(teamId).then(value => value ? true : false);
        return window.localStorage.getItem(teamId);
    };
    UserSettings.prototype.getAllFavorites = function () {
        var items = [];
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forIn"](window.localStorage, function (v, k) {
            items.push(JSON.parse(v));
        });
        return items.length ? items : null;
    };
    return UserSettings;
}());
UserSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
], UserSettings);

//# sourceMappingURL=user.settings.service.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SqlStorage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SqlStorage = (function () {
    function SqlStorage() {
        console.log(this.sql);
    }
    SqlStorage.prototype.getAll = function () {
        return this.sql.executeSql('SELECT key, value FROM kv', []).then(function (data) {
            var results = [];
            for (var i = 0; i < data.rows.length; i++) {
                results.push(JSON.parse(data.rows.item(i).value));
            }
            return results;
        });
    };
    SqlStorage.prototype.get = function (key) {
        return this.sql.executeSql('select key, value from kv where key = ? limit 1', [key]).then(function (data) {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    };
    SqlStorage.prototype.remove = function (key) {
        return this.sql.executeSql('delete from kv where key = ?', [key]);
    };
    SqlStorage.prototype.set = function (key, value) {
        return this.sql.executeSql('insert or replace into kv(key, value) values (?, ?)', [key, value]).then(function (data) {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    };
    /**
     * Should be called after deviceready event is fired
     */
    SqlStorage.prototype.initializeDatabase = function () {
        this.db = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]();
        return this.db.create({
            name: 'data.db',
            location: 'default'
        }).then(function (sql) {
            return sql.executeSql('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)', []).then(function (data) {
                console.log('**after CREATE TABLE check', data);
            });
        });
    };
    return SqlStorage;
}());
SqlStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SqlStorage);

//# sourceMappingURL=sql-storage.service.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TournamentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


var TournamentsPage = (function () {
    function TournamentsPage(navCtrl, navParams, appApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.loadingController = loadingController;
    }
    TournamentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TournamentsPage');
        var loader = this.loadingController.create({
            content: "Fetching tournaments...",
        });
        loader.present().then(function () {
            _this.appApi.getTournaments().then(function (data) {
                _this.tournaments = data;
                loader.dismiss();
            });
        });
        console.log(this.tournaments);
    };
    TournamentsPage.prototype.itemTapped = function ($event, tourney) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["g" /* TeamsPage */], tourney);
    };
    return TournamentsPage;
}());
TournamentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tournaments',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\tournaments\tournaments.html"*/'<!--\n  Generated template for the TournamentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Select a Tournament</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of tournaments" (click)="itemTapped($even, item)">\n        {{item.name}}\n    </button>  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\tournaments\tournaments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], TournamentsPage);

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


var GamePage = (function () {
    function GamePage(navCtrl, navParams, appApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.game = this.navParams.data;
    }
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
        this.game.gameTime = Date.parse(this.game.time);
    };
    GamePage.prototype.teamTapped = function (teamId) {
        var tourneyData = this.appApi.getCurrentTourney();
        var team = tourneyData.teams.find(function (t) { return t.id === teamId; });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["f" /* TeamHomePage */], team);
    };
    GamePage.prototype.goToDirection = function () {
        var tourneyData = this.appApi.getCurrentTourney();
        var location = tourneyData.locations[this.game.locationId];
        window.location = 'geo:${location.latitude},${location.longitude};u=35';
    };
    GamePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* MapPage */], this.game);
    };
    GamePage.prototype.isWinner = function (score1, score2) {
        return Number(score1) > Number(score2);
    };
    return GamePage;
}());
GamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-game',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\game\game.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Game</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-row>\n    <ion-col col-6 text-center class="divider-col">\n      <button ion-button clear full (click)="teamTapped(game.team1Id)">Home</button>\n    </ion-col>\n    <ion-col col-6 text-center>\n      <button ion-button clear full (click)="teamTapped(game.team2Id)">Away</button>\n    </ion-col>    \n  </ion-row>\n\n  <ion-row center>\n    <ion-col col-6 text-center class="divider-col" (click)="teamTapped(game.team1Id)">\n      <h4>{{game.team1}}</h4>\n    </ion-col>\n    <ion-col col-6 text-center (click)="teamTapped(game.team2Id)">\n      <h4>{{game.team2}}</h4>\n    </ion-col>    \n  </ion-row>\n\n  <ion-row baseline class="top-buttom-border">\n    <ion-col col-4 text-center (click)="teamTapped(game.team1Id)">\n      <h1>{{game.team1Score}}</h1>\n    </ion-col>\n    <ion-col col-4 text-center>\n      <ion-label>Score</ion-label>\n    </ion-col>    \n    <ion-col col-4 text-center (click)="teamTapped(game.team2Id)">\n      <h1>{{game.team2Score}}</h1>\n    </ion-col>    \n  </ion-row>\n  \n  <ion-card>\n    <ion-item>\n      <ion-icon outline name="calendar" item-left></ion-icon>\n      {{game.time | date:\'M/d/yy\'}}{{game.time | date:\'shortTime\'}}\n    </ion-item>\n    <ion-row>\n      <ion-col col-7>\n        <ion-label>{{game.location}}</ion-label>        \n      </ion-col>\n      <ion-col col-5 text-right>\n        <button ion-button outline (click)="goToMap()">\n          <ion-icon name="map"></ion-icon>\n        </button>\n        <button ion-button outline (click)="goToDirection()">\n          <ion-icon name="navigate"></ion-icon>\n        </button>        \n      </ion-col>        \n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\game\game.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* AppApi */]])
], GamePage);

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeamDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */




var TeamDetailPage = (function () {
    function TeamDetailPage(navCtrl, navParams, appApi, alertController, toastController, userSettings) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.userSettings = userSettings;
        this.isFollowing = false;
        this.team = this.navParams.data;
    }
    TeamDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TeamDetailPage');
        this.tourneyData = this.appApi.getCurrentTourney();
        this.games = __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](this.tourneyData.games)
            .filter(function (g) { return g.team1Id === _this.team.id || g.team2Id === _this.team.id; })
            .map(function (g) {
            var isTeam1 = (g.team1Id == _this.team.id);
            var opponentName = isTeam1 ? g.team2 : g.team1;
            var scoreDisplay = _this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
            return {
                gameId: g.id,
                opponent: opponentName,
                time: Date.parse(g.time),
                location: g.location,
                locationUrl: g.locationUrl,
                scoreDisplay: scoreDisplay,
                homeAway: (isTeam1 ? "vs." : "at")
            };
        })
            .value();
        this.allGames = this.games;
        this.teamStanding = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.tourneyData.standings, { 'teamId': this.team.id });
        //this.userSettings.isFavoriteTeam(this.team.id).then(value => this.isFollowing = value);
        if (this.userSettings.isFavoriteTeam(this.team.id)) {
            this.isFollowing = true;
        }
    };
    TeamDetailPage.prototype.getScoreDisplay = function (isTeam1, team1Score, team2Score) {
        if (team1Score && team2Score) {
            var teamScore = (isTeam1 ? team1Score : team2Score);
            var opponentScore = (isTeam1 ? team2Score : team1Score);
            var winIndicator = teamScore > opponentScore ? "W:" : "L:";
            return winIndicator + teamScore + "-" + opponentScore;
        }
        else {
            return "";
        }
    };
    TeamDetailPage.prototype.gameClicked = function ($event, game) {
        var sourceGame = this.tourneyData.games.find(function (g) { return g.id === game.gameId; });
        this.navCtrl.parent.parent.push(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* GamePage */], sourceGame);
    };
    TeamDetailPage.prototype.dateChanged = function () {
        var _this = this;
        if (this.useDateFilter) {
            this.games = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.allGames, function (g) { return __WEBPACK_IMPORTED_MODULE_3_moment__(g.time).isSame(_this.dateFilter, 'day'); });
        }
        else {
            this.games = this.allGames;
        }
    };
    TeamDetailPage.prototype.getScoreWorL = function (game) {
        return game.scoreDisplay ? game.scoreDisplay[0] : '';
    };
    TeamDetailPage.prototype.getScoreDisplayBadgeClass = function (game) {
        return game.scoreDisplay.indexOf('W:') === 0 ? 'badge-primary' : 'badge-danger';
    };
    TeamDetailPage.prototype.touggleFollow = function () {
        var _this = this;
        if (this.isFollowing) {
            var confirm_1 = this.alertController.create({
                title: 'Unfollow!',
                message: 'Are you sure you want to unfollow?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.isFollowing = false;
                            _this.userSettings.unfavoriteTeam(_this.team);
                            var toast = _this.toastController.create({
                                message: 'You have unfollowed this team.',
                                duration: 2000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    },
                    {
                        text: 'No'
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            this.isFollowing = true;
            this.userSettings.favoriteTeam(this.team, this.tourneyData.tournament.id, this.tourneyData.tournament.name);
        }
    };
    TeamDetailPage.prototype.refreshAll = function (refresher) {
        var _this = this;
        this.appApi.refreshCurrentTourney().subscribe(function () {
            refresher.complete();
            _this.ionViewDidLoad();
        });
    };
    return TeamDetailPage;
}());
TeamDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-team-detail',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\team-detail\team-detail.html"*/'<!--\n  Generated template for the TeamDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="refreshAll($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col *ngIf="teamStanding" col-6>\n          <h2>Record: {{teamStanding.wins}} - {{teamStanding.losses}}</h2>\n          <p>Coach: {{team.coach}}</p>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <button ion-button outline (click)="touggleFollow()" *ngIf="!isFollowing">\n              <ion-icon name="star" class="padding-right-3"></ion-icon>\n              Add Favorite\n          </button>\n          <button ion-button (click)="touggleFollow()" *ngIf="isFollowing">\n              <ion-icon name="star"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-label>Date Filter:</ion-label>\n        <ion-toggle [(ngModel)]="useDateFilter"\n                    (ionChange)="dateChanged()">\n        </ion-toggle>\n        <ion-datetime displayFormat="M/D/YYYY" \n                      pickerFormat="M/D/YYYY"\n                      [(ngModel)]="dateFilter"\n                      (ionChange)="dateChanged()"\n                      [(disabled)]="!useDateFilter">\n        </ion-datetime>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <ion-item *ngFor="let game of games" (click)="gameClicked($event, game)">\n      <ion-grid>\n        <ion-row align-items-start>\n          <ion-col col-3 align-self-start>\n            <p>{{game.time | date:\'M/d/yy\'}}</p>\n            <p>{{game.time | date:\'shortTime\'}}</p>\n          </ion-col>\n          <ion-col col-6 align-self-start>\n            <p>{{game.homeAway}} {{game.opponent}}</p>\n            <p>{{game.location}}</p>\n          </ion-col>\n          <ion-col col-2 align-self-start>\n            <h4>{{game.scoreDisplay}}</h4>\n            <ion-badge [ngClass]="getScoreDisplayBadgeClass(game)">{{getScoreWorL(game)}}</ion-badge>\n          </ion-col>                    \n        </ion-row>\n        </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\team-detail\team-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__shared_shared__["b" /* UserSettings */]])
], TeamDetailPage);

//# sourceMappingURL=team-detail.js.map

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 273,
	"./af.js": 273,
	"./ar": 274,
	"./ar-dz": 275,
	"./ar-dz.js": 275,
	"./ar-kw": 276,
	"./ar-kw.js": 276,
	"./ar-ly": 277,
	"./ar-ly.js": 277,
	"./ar-ma": 278,
	"./ar-ma.js": 278,
	"./ar-sa": 279,
	"./ar-sa.js": 279,
	"./ar-tn": 280,
	"./ar-tn.js": 280,
	"./ar.js": 274,
	"./az": 281,
	"./az.js": 281,
	"./be": 282,
	"./be.js": 282,
	"./bg": 283,
	"./bg.js": 283,
	"./bn": 284,
	"./bn.js": 284,
	"./bo": 285,
	"./bo.js": 285,
	"./br": 286,
	"./br.js": 286,
	"./bs": 287,
	"./bs.js": 287,
	"./ca": 288,
	"./ca.js": 288,
	"./cs": 289,
	"./cs.js": 289,
	"./cv": 290,
	"./cv.js": 290,
	"./cy": 291,
	"./cy.js": 291,
	"./da": 292,
	"./da.js": 292,
	"./de": 293,
	"./de-at": 294,
	"./de-at.js": 294,
	"./de-ch": 295,
	"./de-ch.js": 295,
	"./de.js": 293,
	"./dv": 296,
	"./dv.js": 296,
	"./el": 297,
	"./el.js": 297,
	"./en-au": 298,
	"./en-au.js": 298,
	"./en-ca": 299,
	"./en-ca.js": 299,
	"./en-gb": 300,
	"./en-gb.js": 300,
	"./en-ie": 301,
	"./en-ie.js": 301,
	"./en-nz": 302,
	"./en-nz.js": 302,
	"./eo": 303,
	"./eo.js": 303,
	"./es": 304,
	"./es-do": 305,
	"./es-do.js": 305,
	"./es.js": 304,
	"./et": 306,
	"./et.js": 306,
	"./eu": 307,
	"./eu.js": 307,
	"./fa": 308,
	"./fa.js": 308,
	"./fi": 309,
	"./fi.js": 309,
	"./fo": 310,
	"./fo.js": 310,
	"./fr": 311,
	"./fr-ca": 312,
	"./fr-ca.js": 312,
	"./fr-ch": 313,
	"./fr-ch.js": 313,
	"./fr.js": 311,
	"./fy": 314,
	"./fy.js": 314,
	"./gd": 315,
	"./gd.js": 315,
	"./gl": 316,
	"./gl.js": 316,
	"./gom-latn": 317,
	"./gom-latn.js": 317,
	"./he": 318,
	"./he.js": 318,
	"./hi": 319,
	"./hi.js": 319,
	"./hr": 320,
	"./hr.js": 320,
	"./hu": 321,
	"./hu.js": 321,
	"./hy-am": 322,
	"./hy-am.js": 322,
	"./id": 323,
	"./id.js": 323,
	"./is": 324,
	"./is.js": 324,
	"./it": 325,
	"./it.js": 325,
	"./ja": 326,
	"./ja.js": 326,
	"./jv": 327,
	"./jv.js": 327,
	"./ka": 328,
	"./ka.js": 328,
	"./kk": 329,
	"./kk.js": 329,
	"./km": 330,
	"./km.js": 330,
	"./kn": 331,
	"./kn.js": 331,
	"./ko": 332,
	"./ko.js": 332,
	"./ky": 333,
	"./ky.js": 333,
	"./lb": 334,
	"./lb.js": 334,
	"./lo": 335,
	"./lo.js": 335,
	"./lt": 336,
	"./lt.js": 336,
	"./lv": 337,
	"./lv.js": 337,
	"./me": 338,
	"./me.js": 338,
	"./mi": 339,
	"./mi.js": 339,
	"./mk": 340,
	"./mk.js": 340,
	"./ml": 341,
	"./ml.js": 341,
	"./mr": 342,
	"./mr.js": 342,
	"./ms": 343,
	"./ms-my": 344,
	"./ms-my.js": 344,
	"./ms.js": 343,
	"./my": 345,
	"./my.js": 345,
	"./nb": 346,
	"./nb.js": 346,
	"./ne": 347,
	"./ne.js": 347,
	"./nl": 348,
	"./nl-be": 349,
	"./nl-be.js": 349,
	"./nl.js": 348,
	"./nn": 350,
	"./nn.js": 350,
	"./pa-in": 351,
	"./pa-in.js": 351,
	"./pl": 352,
	"./pl.js": 352,
	"./pt": 353,
	"./pt-br": 354,
	"./pt-br.js": 354,
	"./pt.js": 353,
	"./ro": 355,
	"./ro.js": 355,
	"./ru": 356,
	"./ru.js": 356,
	"./sd": 357,
	"./sd.js": 357,
	"./se": 358,
	"./se.js": 358,
	"./si": 359,
	"./si.js": 359,
	"./sk": 360,
	"./sk.js": 360,
	"./sl": 361,
	"./sl.js": 361,
	"./sq": 362,
	"./sq.js": 362,
	"./sr": 363,
	"./sr-cyrl": 364,
	"./sr-cyrl.js": 364,
	"./sr.js": 363,
	"./ss": 365,
	"./ss.js": 365,
	"./sv": 366,
	"./sv.js": 366,
	"./sw": 367,
	"./sw.js": 367,
	"./ta": 368,
	"./ta.js": 368,
	"./te": 369,
	"./te.js": 369,
	"./tet": 370,
	"./tet.js": 370,
	"./th": 371,
	"./th.js": 371,
	"./tl-ph": 372,
	"./tl-ph.js": 372,
	"./tlh": 373,
	"./tlh.js": 373,
	"./tr": 374,
	"./tr.js": 374,
	"./tzl": 375,
	"./tzl.js": 375,
	"./tzm": 376,
	"./tzm-latn": 377,
	"./tzm-latn.js": 377,
	"./tzm.js": 376,
	"./uk": 378,
	"./uk.js": 378,
	"./ur": 379,
	"./ur.js": 379,
	"./uz": 380,
	"./uz-latn": 381,
	"./uz-latn.js": 381,
	"./uz.js": 380,
	"./vi": 382,
	"./vi.js": 382,
	"./x-pseudo": 383,
	"./x-pseudo.js": 383,
	"./yo": 384,
	"./yo.js": 384,
	"./zh-cn": 385,
	"./zh-cn.js": 385,
	"./zh-hk": 386,
	"./zh-hk.js": 386,
	"./zh-tw": 387,
	"./zh-tw.js": 387
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 719;

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */



var TeamsPage = (function () {
    function TeamsPage(navCtrl, navParams, appApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.loadingController = loadingController;
        this.teams = [];
    }
    TeamsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TeamsPage');
        var selectedTourney = this.navParams.data;
        var loader = this.loadingController.create({
            content: "Fetching teams...",
            spinner: 'dots'
        });
        loader.present().then(function () {
            _this.appApi.getTournamentsData(selectedTourney.id).subscribe(function (data) {
                _this.allTeams = data.teams;
                _this.allTeamDivisions =
                    __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](data.teams)
                        .groupBy('division')
                        .toPairs()
                        .map(function (item) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["zipObject"](['divisionName', 'divisionTeams'], item); })
                        .value();
                _this.teams = _this.allTeamDivisions;
                loader.dismiss();
            });
        });
    };
    TeamsPage.prototype.itemTapped = function ($event, team) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["f" /* TeamHomePage */], team);
    };
    TeamsPage.prototype.updateTeam = function () {
        var queryTextLower = this.queryText.toLowerCase();
        var filteredTeams = [];
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](this.allTeamDivisions, function (td) {
            var teams = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](td.divisionTeams, function (t) { return t.name.toLowerCase().includes(queryTextLower); });
            if (teams.length) {
                filteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams });
            }
        });
        this.teams = filteredTeams;
    };
    return TeamsPage;
}());
TeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-teams',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\teams\teams.html"*/'<!--\n  Generated template for the TeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Teams</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar placeholder="Search"\n                    [(ngModel)]="queryText"\n                    (ionInput)="updateTeam()">\n    </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-group *ngFor="let division of teams">\n      <ion-item-divider color="secondary">{{division.divisionName}}</ion-item-divider>\n      <button ion-item *ngFor="let team of division.divisionTeams" (click)="itemTapped($event, team)">\n          {{team.name}}\n      </button>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list>\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\teams\teams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], TeamsPage);

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StandingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


var StandingsPage = (function () {
    function StandingsPage(navCtrl, navParams, appApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.team = this.navParams.data;
    }
    StandingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StandingsPage');
        var tourneyData = this.appApi.getCurrentTourney();
        this.standings = tourneyData.standings;
        this.allStandings =
            __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](this.standings)
                .groupBy('division')
                .toPairs()
                .map(function (item) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["zipObject"](['divisionName', 'divisionStandings'], item); })
                .value();
        //  console.log('standings: ', this.standings);
        //  console.log('division standings: ', this.allStandings);
    };
    return StandingsPage;
}());
StandingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-standings',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\standings\standings.html"*/'<!--\n  Generated template for the StandingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-group *ngFor="let division of allStandings">\n      <ion-item-divider color="secondary">\n        {{division.divisionName}}\n      </ion-item-divider>\n      <ion-item *ngFor="let team of division.divisionStandings">\n          <ion-row>\n            <ion-col>\n              <h2 color="primary">{{team.teamName}}</h2>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h4>Wins</h4>\n            </ion-col>\n            <ion-col>\n              <h4>Losses</h4>\n            </ion-col>\n            <ion-col>\n              <h4>Games</h4>\n            </ion-col>\n            <ion-col>\n              <h4>SW</h4>\n            </ion-col>\n            <ion-col>\n              <h4>SL</h4>\n            </ion-col>\n            <!--<ion-col>\n              <h4>Diff</h4>\n            </ion-col>           -->\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h4>{{team.wins}}</h4>\n            </ion-col>\n            <ion-col>\n              <h4>{{team.losses}}</h4>\n            </ion-col>\n            <ion-col>\n              <h4>{{team.games}}</h4>\n            </ion-col>\n            <ion-col>\n              <h4>{{team.setWon}}</h4>\n            </ion-col>\n            <ion-col>\n              <h4>{{team.setLost}}</h4>\n            </ion-col>\n            <!--<ion-col>\n              <h4>{{team.pointsDiff}}</h4>\n            </ion-col>           -->\n          </ion-row>          \n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\standings\standings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* AppApi */]])
], StandingsPage);

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeamHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

var TeamHomePage = (function () {
    function TeamHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamDetailTab = __WEBPACK_IMPORTED_MODULE_2__pages__["e" /* TeamDetailPage */];
        this.standingsTab = __WEBPACK_IMPORTED_MODULE_2__pages__["d" /* StandingsPage */];
        this.team = this.navParams.data;
    }
    TeamHomePage.prototype.goHome = function () {
        this.navCtrl.popToRoot();
    };
    TeamHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamHomePage');
    };
    return TeamHomePage;
}());
TeamHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-team-home',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\team-home\team-home.html"*/'<!--\n  Generated template for the TeamHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{team.name}}</ion-title>\n    <ion-buttons end>    \n        <button ion-button icon-only (click)="goHome()">\n          <ion-icon name="home"></ion-icon>\n        </button>\n    </ion-buttons>    \n  </ion-navbar>\n</ion-header>\n\n<ion-tabs>\n  <ion-tab tabTitle="Team" [root]="teamDetailTab" [rootParams]="team" tabIcon="tennisball"></ion-tab>\n  <ion-tab tabTitle="Standings" [root]="standingsTab"  [rootParams]="team" tabIcon="podium"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\team-home\team-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TeamHomePage);

//# sourceMappingURL=team-home.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AgmCoreModule } from 'angular2-google-maps/core';
/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

var MapPage = (function () {
    function MapPage(navCtrl, navParams, appApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        var game = this.navParams.data;
        var tourneyData = this.appApi.getCurrentTourney();
        var location = tourneyData.locations[game.locationId];
        this.map = {
            lat: location.latitude,
            lng: location.longitude,
            zoom: 12,
            markerLabel: game.location
        };
    };
    MapPage.prototype.getDirection = function () {
        window.location = 'geo:${this.map.lat},${this.map.lng};u=35';
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-map',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\map\map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="map-page" *ngIf="map">\n    <ion-fab bottom left class="fab-map">\n      <button ion-fab (click)="getDirection()">\n        <ion-icon name="navigate"></ion-icon>\n      </button>\n    </ion-fab>\n    <sebm-google-map id="map" [latitude]="map.lat" [longitude]="map.lng" [zoom]="map.zoom">\n      <sebm-google-map-marker [latitude]="map.lat" [longitude]="map.lng">\n        <sebm-google-map-info-window>\n          <strong>{{map.markerLabel}}</strong>\n        </sebm-google-map-info-window>          \n      </sebm-google-map-marker>\n    </sebm-google-map>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\map\map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* AppApi */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ })

},[388]);
//# sourceMappingURL=main.js.map