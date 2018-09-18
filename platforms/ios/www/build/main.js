webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastro de Pacientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n <!-- <ion-title>Preencha os Dados</ion-title> -->\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Data de Nascimento</ion-label>\n      <ion-input type="date"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>CPF</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Idade</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Sexo</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Feminino</ion-option>\n        <ion-option value="m">Masculino</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Fone Contato</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>CEP</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Endereço</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Bairro</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Cidade</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Nome da Mãe</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Convênio</ion-label>\n      <ion-select [(ngModel)]="convenio">\n        <ion-option value="particular">Particular</ion-option>\n        <ion-option value="unimed">Unimed</ion-option>\n        <ion-option value="vale">Vale</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Categoria</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Data</ion-label>\n      <ion-input type="date"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Acomodação</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Setor</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Quarto/Leito</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Médico Responsável</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button>Cadastrar Paciente</button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SliderPage = /** @class */ (function () {
    function SliderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SliderPage');
    };
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/slider/slider.html"*/'<ion-content>\n  <ion-slides pager>\n\n    <ion-slide>\n      <ion-header>\n        <ion-navbar>\n          <button menuToggle *ngIf="!selectedItem">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Sinais Vitais</ion-title>\n        </ion-navbar>\n      </ion-header>  \n    </ion-slide>\n\n  <ion-slide>\n    <ion-header>\n      <ion-navbar>\n         <ion-title>Balanço Hídrico</ion-title>\n      </ion-navbar>\n    </ion-header>\n  </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/slider/slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajuda/ajuda.module": [
		272,
		3
	],
	"../pages/balanco-hidrico/balanco-hidrico.module": [
		273,
		0
	],
	"../pages/inicio/inicio.module": [
		274,
		2
	],
	"../pages/slider/slider.module": [
		275,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_slider__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SinaisVitaisPage } from '../sinais-vitais/sinais-vitais';

var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['contact', 'contact', 'contact', 'contact', 'contact'];
        this.items = [];
        for (var i = 1; i < 6; i++) {
            this.items.push({
                title: 'Paciente ' + i,
                note: 'Prontuário: ' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__slider_slider__["a" /* SliderPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de Pacientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sinais_vitais_sinais_vitais__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ajuda_ajuda__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_sinais_vitais_sinais_vitais__["a" /* SinaisVitaisPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ajuda_ajuda__["a" /* AjudaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajuda/ajuda.module#AjudaPageModule', name: 'AjudaPage', segment: 'ajuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/balanco-hidrico/balanco-hidrico.module#BalancoHidricoPageModule', name: 'BalancoHidricoPage', segment: 'balanco-hidrico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slider/slider.module#SliderPageModule', name: 'SliderPage', segment: 'slider', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_sinais_vitais_sinais_vitais__["a" /* SinaisVitaisPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ajuda_ajuda__["a" /* AjudaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_inicio_inicio__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ajuda_ajuda__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make ListPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            //{ title: 'Hello Ionic', component: HelloIonicPage },
            { title: 'Lista de Pacientes', component: __WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */] },
            { title: 'Cadastro de Pacientes', component: __WEBPACK_IMPORTED_MODULE_3__pages_inicio_inicio__["a" /* InicioPage */] },
            { title: 'Ajuda', component: __WEBPACK_IMPORTED_MODULE_4__pages_ajuda_ajuda__["a" /* AjudaPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Hydric</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinaisVitaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SinaisVitaisPage = /** @class */ (function () {
    function SinaisVitaisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    SinaisVitaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sinais-vitais',template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/sinais-vitais/sinais-vitais.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Prontuário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n    {{selectedItem.title}}    \n  </h3>\n\n  <!--<h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>-->\n  <ion-item>\n    <ion-label>Horário</ion-label>\n    <ion-select [(ngModel)]="horario">\n      <ion-option value="oito">08:00</ion-option>\n      <ion-option value="dez">10:00</ion-option>\n      <ion-option value="doze">12:00</ion-option>\n      <ion-option value="quatorze">14:00</ion-option>\n      <ion-option value="dezesseis">16:00</ion-option>\n      <ion-option value="dezoito">18:00</ion-option>\n      <ion-option value="vinte">20:00</ion-option>\n      <ion-option value="vinteeduas">22:00</ion-option>\n      <ion-option value="vinteequatro">24:00</ion-option>\n      <ion-option value="duas">02:00</ion-option>\n      <ion-option value="quatro">04:00</ion-option>\n      <ion-option value="seis">06:00</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Pressão Arterial</ion-label>\n    <ion-input></ion-input>\n  </ion-item>  \n\n  <ion-item>\n    <ion-label floating>Frequência Cardíaca</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>TAX / ISOLETE</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Saturação SPO2</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>FIO2 / Nebulização</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>FR PAC / FR VM</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Modo VENT PEEP</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>P. INSP / T. INSP</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>PVC / PIC / PIA</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>DEXTRO</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Mudança Decúbito</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Densidade Urinária</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n<ion-item>\n  <button ion-button block>Salvar</button>\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/sinais-vitais/sinais-vitais.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SinaisVitaisPage);
    return SinaisVitaisPage;
}());

//# sourceMappingURL=sinais-vitais.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the AjudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjudaPage = /** @class */ (function () {
    function AjudaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AjudaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjudaPage');
    };
    AjudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajuda',template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/ajuda/ajuda.html"*/'<!--\n  Generated template for the AjudaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ajuda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/ajuda/ajuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AjudaPage);
    return AjudaPage;
}());

//# sourceMappingURL=ajuda.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map