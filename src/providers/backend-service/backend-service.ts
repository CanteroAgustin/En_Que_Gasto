import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore } from 'angularfire2/firestore';
import { Presupuesto } from '../../Clases/Presupuesto';

/*
  Generated class for the BackendServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendServiceProvider {

  presupuestos: Presupuesto[] = [];

  constructor(public http: HttpClient, private fireStore: AngularFirestore) {
    console.log('Hello BackendServiceProvider Provider');
  }

  getAllPresupuestos() {
    return this.fireStore.collection("presupuestos").get();
  }

  addPresupuesto(presupuesto: Presupuesto) {
    return this.fireStore.collection("presupuestos").add({
      titulo: presupuesto.titulo,
      descripcion: presupuesto.descripcion,
      importe: presupuesto.importe
    });
  }
}
