import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalancoHidricoPage } from './balanco-hidrico';

@NgModule({
  declarations: [
    BalancoHidricoPage,
  ],
  imports: [
    IonicPageModule.forChild(BalancoHidricoPage),
  ],
})
export class BalancoHidricoPageModule {}
