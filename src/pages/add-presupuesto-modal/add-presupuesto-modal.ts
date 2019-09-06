import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BackendServiceProvider } from '../../providers/backend-service/backend-service';
import { Events } from 'ionic-angular';
import { Presupuesto } from '../../Clases/Presupuesto';

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
  public importe: number;
  
  constructor(public navCtrl: NavController, public view: ViewController,
    public navParams: NavParams, private backendServiceProvider: BackendServiceProvider,
    public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPresupuestoModalPage');
  }

  addPresupuesto() {
    this.view.dismiss(new Presupuesto(this.titulo,this.descripcion,this.importe));
  }
}
