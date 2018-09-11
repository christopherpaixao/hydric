import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

//import { SinaisVitaisPage } from '../sinais-vitais/sinais-vitais';
import { SliderPage } from "../slider/slider";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['contact', 'contact', 'contact', 'contact', 'contact'];

    this.items = [];
    for(let i = 1; i < 6; i++) {
      this.items.push({
        title: 'Paciente ' + i,
        note: 'Prontuário: ' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(SliderPage, {
      item: item
    });
  }
}
