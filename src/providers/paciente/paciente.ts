import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class PacienteProvider {
  private PATH = "pacientes/";

  constructor(private db: AngularFireDatabase) {    
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('nome'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(paciente: any) {
    return new Promise((resolve, reject) => {
      if (paciente.key) {
        this.db.list(this.PATH)
          .update(paciente.key, { 
            nome: paciente.nome,
            datanasc: paciente.datanasc,
            cpf: paciente.cpf,
            idade: paciente.idade,
            gender: paciente.gender,
            tel: paciente.tel,
            cep: paciente.cep,
            end: paciente.end,
            bairro: paciente.bairro,
            cidade: paciente.cidade,
            mae: paciente.mae,
            convenio: paciente.convenio,
            ctg: paciente.ctg,
            entd: paciente.entd,
            ocupacao: paciente.ocupacao,
            setor: paciente.setor,
            leito: paciente.leito,
            medico: paciente.medico
          })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({
            nome: paciente.nome,
            datanasc: paciente.datanasc,
            cpf: paciente.cpf,
            idade: paciente.idade,
            gender: paciente.gender,
            tel: paciente.tel,
            cep: paciente.cep,
            end: paciente.end,
            bairro: paciente.bairro,
            cidade: paciente.cidade,
            mae: paciente.mae,
            convenio: paciente.convenio,
            ctg: paciente.ctg,
            entd: paciente.entd,
            ocupacao: paciente.ocupacao,
            setor: paciente.setor,
            leito: paciente.leito,
            medico: paciente.medico })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
