import { PacienteProvider } from "./../../providers/paciente/paciente";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-editar-paciente',
  templateUrl: 'editar-paciente.html',
})
export class EditarPacientePage {
  title: string;
  form: FormGroup;
  paciente: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: PacienteProvider,
    private toast: ToastController) {
    this.paciente = this.navParams.data.paciente || {};
    this.createForm();
    this.setupPageTitle();    
  }
  private setupPageTitle() {
    this.title = this.navParams.data.paciente ? 'Alterando paciente' : 'Novo paciente';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.paciente.key],
      nome: [this.paciente.nome, Validators.required],
      datanasc: [this.paciente.datanasc, Validators.required],
      cpf: [this.paciente.cpf, Validators.required],
      idade: [this.paciente.idade, Validators.required],
      gender: [this.paciente.gender],
      tel: [this.paciente.tel, Validators.required],
      cep: [this.paciente.cep],
      end: [this.paciente.end, Validators.required],
      bairro: [this.paciente.bairro, Validators.required],
      cidade: [this.paciente.cidade, Validators.required],
      mae: [this.paciente.mae, Validators.required],
      convenio: [this.paciente.convenio],
      ctg: [this.paciente.ctg, Validators.required],
      entd: [this.paciente.entd, Validators.required],
      ocupacao: [this.paciente.ocupacao],
      setor: [this.paciente.setor],
      leito: [this.paciente.leito, Validators.required],
      medico: [this.paciente.medico, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Paciente salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o paciente.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}
