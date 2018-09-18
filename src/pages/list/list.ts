import { PacienteProvider } from "../../providers/paciente/paciente";
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  pacientes: Observable<any>;
  
  constructor(public navCtrl: NavController, private provider: PacienteProvider,
    private toast: ToastController) {
      this.pacientes = this.provider.getAll();
  }

  novoPaciente(){
    this.navCtrl.push('EditarPacientePage');
  }

  editarPaciente(paciente: any){
    this.navCtrl.push('EditarPacientePage', { paciente: paciente});
  }

  removerPaciente(key: string){
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Paciente removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o paciente.', duration: 3000 }).present();
        });
    }
  }

  abrirProntuario(paciente: any){
    this.navCtrl.push('SliderPage', { paciente: paciente });
  }
  
}
