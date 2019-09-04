import { Component } from '@angular/core';
import { Presupuesto } from '../../Clases/Presupuesto';
import { BackendServiceProvider } from '../../providers/backend-service/backend-service'


/**
 * Generated class for the ListaDePresupuestosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lista-de-presupuestos',
  templateUrl: 'lista-de-presupuestos.html'
})
export class ListaDePresupuestosComponent {

  presupuestos: Presupuesto[] = [];

  constructor(private backendServiceProvider: BackendServiceProvider) {

    this.backendServiceProvider.getAllPresupuestos()
      .subscribe((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          this.presupuestos.push(new Presupuesto(
            data.titulo,
            data.descripcion,
          ));
        });
      }, (error) => {
        console.error(error);
        alert("Error al obtener los datos");
      });
  }

  public itemSelected(id: number) {
    alert(id);
  }
}
