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
            datanasc: [this.paciente.datanasc, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            cpf: [this.paciente.cpf, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            idade: [this.paciente.idade, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            gender: [this.paciente.gender],
            tel: [this.paciente.tel, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            cep: [this.paciente.cep],
            end: [this.paciente.end, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            bairro: [this.paciente.bairro, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            cidade: [this.paciente.cidade, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            mae: [this.paciente.mae, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            convenio: [this.paciente.convenio],
            ctg: [this.paciente.ctg, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            entd: [this.paciente.entd, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            ocupacao: [this.paciente.ocupacao],
            setor: [this.paciente.setor],
            leito: [this.paciente.leito, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            medico: [this.paciente.medico, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
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
            selector: 'page-editar-paciente',template:/*ion-inline-start:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/editar-paciente/editar-paciente.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form">\n\n        <ion-item>\n          <ion-label stacked>Nome</ion-label>\n          <ion-input type="text" formControlName="nome"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n          <div [hidden]="!form.controls.nome.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Data de Nascimento</ion-label>\n          <ion-input type="date" formControlName="datanasc"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.datanasc.valid && (form.controls.datanasc.dirty || form.controls.datanasc.touched)" color="danger">\n          <div [hidden]="!form.controls.datanasc.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>CPF</ion-label>\n          <ion-input type="number" formControlName="cpf"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.cpf.valid && (form.controls.cpf.dirty || form.controls.cpf.touched)" color="danger">\n          <div [hidden]="!form.controls.cpf.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Idade</ion-label>\n          <ion-input type="number" formControlName="idade"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.idade.valid && (form.controls.idade.dirty || form.controls.idade.touched)" color="danger">\n          <div [hidden]="!form.controls.idade.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Sexo</ion-label>\n          <ion-select formControlName="gender">\n            <ion-option value="f">Feminino</ion-option>\n            <ion-option value="m">Masculino</ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Telefone</ion-label>\n          <ion-input type="number" formControlName="tel"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.tel.valid && (form.controls.tel.dirty || form.controls.tel.touched)" color="danger">\n          <div [hidden]="!form.controls.tel.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>CEP</ion-label>\n          <ion-input type="number" formControlName="cep"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Endereço</ion-label>\n          <ion-input type="text" formControlName="end"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.end.valid && (form.controls.end.dirty || form.controls.end.touched)" color="danger">\n          <div [hidden]="!form.controls.end.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Bairro</ion-label>\n          <ion-input type="text" formControlName="bairro"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.bairro.valid && (form.controls.bairro.dirty || form.controls.bairro.touched)" color="danger">\n          <div [hidden]="!form.controls.bairro.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Cidade</ion-label>\n          <ion-input type="text" formControlName="cidade"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.cidade.valid && (form.controls.cidade.dirty || form.controls.cidade.touched)" color="danger">\n          <div [hidden]="!form.controls.cidade.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Nome da Mãe</ion-label>\n          <ion-input type="text" formControlName="mae"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.mae.valid && (form.controls.mae.dirty || form.controls.mae.touched)" color="danger">\n          <div [hidden]="!form.controls.mae.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Convênio</ion-label>\n          <ion-select formControlName="convenio">\n            <ion-option value="particular">Particular</ion-option>\n            <ion-option value="unimed">Unimed</ion-option>\n            <ion-option value="vale">Vale</ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Categoria</ion-label>\n          <ion-input type="text" formControlName="ctg"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.ctg.valid && (form.controls.ctg.dirty || form.controls.ctg.touched)" color="danger">\n          <div [hidden]="!form.controls.ctg.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Data da Entrada</ion-label>\n          <ion-input type="date" formControlName="entd"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.entd.valid && (form.controls.entd.dirty || form.controls.entd.touched)" color="danger">\n          <div [hidden]="!form.controls.entd.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Acomodação</ion-label>\n          <ion-input type="text" formControlName="ocupacao"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Setor</ion-label>\n          <ion-input type="text" formControlName="setor"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Quarto/Leito</ion-label>\n          <ion-input type="text" formControlName="leito"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.leito.valid && (form.controls.leito.dirty || form.controls.leito.touched)" color="danger">\n          <div [hidden]="!form.controls.leito.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label stacked>Médico Responsável</ion-label>\n          <ion-input type="text" formControlName="medico"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.medico.valid && (form.controls.medico.dirty || form.controls.medico.touched)" color="danger">\n          <div [hidden]="!form.controls.medico.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n        \n        <div padding>\n          <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n        </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/giordano/Documentos/Ionic Projetos/hydric/src/pages/editar-paciente/editar-paciente.html"*/,
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