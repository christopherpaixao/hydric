webpackJsonp([1],{

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPacientePageModule", function() { return EditarPacientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar_paciente__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarPacientePageModule = /** @class */ (function () {
    function EditarPacientePageModule() {
    }
    EditarPacientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editar_paciente__["a" /* EditarPacientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editar_paciente__["a" /* EditarPacientePage */]),
            ],
        })
    ], EditarPacientePageModule);
    return EditarPacientePageModule;
}());

//# sourceMappingURL=editar-paciente.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPacientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_paciente_paciente__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditarPacientePage = /** @class */ (function () {
    function EditarPacientePage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.paciente = this.navParams.data.paciente || {};
        this.createForm();
        this.setupPageTitle();
    }
    EditarPacientePage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.paciente ? 'Alterando paciente' : 'Novo paciente';
    };
    EditarPacientePage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.paciente.key],
            nome: [this.paciente.nome, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            leito: [this.paciente.leito, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    EditarPacientePage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Paciente salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o paciente.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    EditarPacientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-editar-paciente',template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/editar-paciente/editar-paciente.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" formControlName="nome" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n      <div [hidden]="!form.controls.nome.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Leito</ion-label>\n      <ion-input type="tel" formControlName="leito"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.leito.valid && (form.controls.leito.dirty || form.controls.leito.touched)" color="danger">\n      <div [hidden]="!form.controls.leito.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/editar-paciente/editar-paciente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__providers_paciente_paciente__["a" /* PacienteProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], EditarPacientePage);
    return EditarPacientePage;
}());

//# sourceMappingURL=editar-paciente.js.map

/***/ })

});
//# sourceMappingURL=1.js.map