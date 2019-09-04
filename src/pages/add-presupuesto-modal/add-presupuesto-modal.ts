import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BackendServiceProvider } from '../../providers/backend-service/backend-service';

/**
 * Generated class for the AddPresupuestoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-presupuesto-modal',
  templateUrl: 'add-presupuesto-modal.html',
})
export class AddPresupuestoModalPage {

  public titulo: string;
  public descripcion: string;

  constructor(public navCtrl: NavController, private view :ViewController, public navParams: NavParams, private backendServiceProvider: BackendServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPresupuestoModalPage');
  }

  addPresupuesto(){
    this.view.dismiss();
    this.backendServiceProvider.addPresupuesto(this.titulo, this.descripcion)
      .then(function (docRef) {
        console.info("Documento guardado con ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error guardando documento: " + error);
      });
  }
}
