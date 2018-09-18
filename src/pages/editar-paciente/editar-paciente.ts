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
      leito: [this.paciente.leito, Validators.required],
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
