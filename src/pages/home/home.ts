import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddPresupuestoModalPage } from '../add-presupuesto-modal/add-presupuesto-modal';
import { BackendServiceProvider } from '../../providers/backend-service/backend-service'
import { Presupuesto } from '../../Clases/Presupuesto';
import { Events } from 'ionic-angular';

const EVENTO_ACTUALIZAR_PRESUPUESTOS: string = "listado:ActualizarPresupuestos";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  presupuestos: Presupuesto[] = [];
  titulo: String;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
    private backendServiceProvider: BackendServiceProvider, private events: Events) {
    this.titulo = "PRESUPUESTOS";
  }

  ionViewWillEnter(){
    this.getPresupuestos();
    this.events.subscribe(EVENTO_ACTUALIZAR_PRESUPUESTOS, (time) => {
      this.getPresupuestos();
    });
  }

  addPresupuesto() {
    this.presentModal();
  }

  presentModal() {
    const modal = this.modalCtrl.create(AddPresupuestoModalPage);
    modal.present();
    modal.onDidDismiss(presupuesto=>{
      this.backendServiceProvider.addPresupuesto(presupuesto).then(data=>{
        this.events.publish(EVENTO_ACTUALIZAR_PRESUPUESTOS,Date.now());
      }).catch(error=>{
        console.error(error);
      });
    })
  }

  public getPresupuestos() {
    this.backendServiceProvider.getAllPresupuestos()
      .subscribe((querySnapshot) => {
        this.presupuestos = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          this.presupuestos.push(new Presupuesto(
            data.titulo,
            data.descripcion,
            data.importe
          ));
        });
      }, (error) => {
        console.error(error);
        alert("Error al obtener los datos");
    });
  }
}
