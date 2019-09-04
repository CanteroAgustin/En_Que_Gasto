import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddPresupuestoModalPage } from '../add-presupuesto-modal/add-presupuesto-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titulo: String;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.titulo = "PRESUPUESTOS";
  }

  addPresupuesto() {
    this.presentModal();
    
  }

  presentModal() {
    const modal = this.modalCtrl.create(AddPresupuestoModalPage);
    modal.present();
  }

}
