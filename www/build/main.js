webpackJsonp([5],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacienteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PacienteProvider = /** @class */ (function () {
    function PacienteProvider(db) {
        this.db = db;
        this.PATH = "pacientes/";
    }
    PacienteProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    PacienteProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    PacienteProvider.prototype.save = function (paciente) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (paciente.key) {
                _this.db.list(_this.PATH)
                    .update(paciente.key, { nome: paciente.nome, leito: paciente.leito })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ nome: paciente.nome, leito: paciente.leito })
                    .then(function () { return resolve(); });
            }
        });
    };
    PacienteProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    PacienteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], PacienteProvider);
    return PacienteProvider;
}());

//# sourceMappingURL=paciente.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajuda/ajuda.module": [
		495,
		4
	],
	"../pages/balanco-hidrico/balanco-hidrico.module": [
		496,
		1
	],
	"../pages/editar-paciente/editar-paciente.module": [
		497,
		0
	],
	"../pages/inicio/inicio.module": [
		498,
		3
	],
	"../pages/slider/slider.module": [
		499,
		2
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
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_paciente_paciente__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, provider, toast) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.toast = toast;
        this.pacientes = this.provider.getAll();
    }
    ListPage.prototype.novoPaciente = function () {
        this.navCtrl.push('EditarPacientePage');
    };
    ListPage.prototype.editarPaciente = function (paciente) {
        this.navCtrl.push('EditarPacientePage', { paciente: paciente });
    };
    ListPage.prototype.removerPaciente = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Paciente removido sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover o paciente.', duration: 3000 }).present();
            });
        }
    };
    ListPage.prototype.abrirProntuario = function (paciente) {
        this.navCtrl.push('SliderPage', { paciente: paciente });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hydric</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let paciente of pacientes | async">\n      <ion-item>\n        <h1>{{ paciente.nome }}</h1>\n        <p>Leito: {{ paciente.leito }}</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="editarPaciente(paciente)">\n          <ion-icon name="create"></ion-icon>\n          Editar\n        </button>\n        <button ion-button color="danger" (click)="removerPaciente(paciente.key)">\n          <ion-icon name="trash"></ion-icon>\n          Remover\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="abrirProntuario(paciente)">\n          <ion-icon name="list-box"></ion-icon>\n          Prontuário\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="novoPaciente()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_paciente_paciente__["a" /* PacienteProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(423);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sinais_vitais_sinais_vitais__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ajuda_ajuda__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_paciente_paciente__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_sinais_vitais_sinais_vitais__["a" /* SinaisVitaisPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ajuda_ajuda__["a" /* AjudaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajuda/ajuda.module#AjudaPageModule', name: 'AjudaPage', segment: 'ajuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/balanco-hidrico/balanco-hidrico.module#BalancoHidricoPageModule', name: 'BalancoHidricoPage', segment: 'balanco-hidrico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-paciente/editar-paciente.module#EditarPacientePageModule', name: 'EditarPacientePage', segment: 'editar-paciente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slider/slider.module#SliderPageModule', name: 'SliderPage', segment: 'slider', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyC7LeW-7yBXUea9ofafA8_kenD4Ut1eKII",
                    authDomain: "appfirebase-1bd5a.firebaseapp.com",
                    databaseURL: "https://appfirebase-1bd5a.firebaseio.com",
                    projectId: "appfirebase-1bd5a",
                    storageBucket: "appfirebase-1bd5a.appspot.com",
                    messagingSenderId: "314925257716"
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabaseModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_sinais_vitais_sinais_vitais__["a" /* SinaisVitaisPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ajuda_ajuda__["a" /* AjudaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_paciente_paciente__["a" /* PacienteProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_inicio_inicio__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ajuda_ajuda__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(288);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Índice</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/app/app.html"*/
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

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinaisVitaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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

/***/ })

},[290]);
//# sourceMappingURL=main.js.map