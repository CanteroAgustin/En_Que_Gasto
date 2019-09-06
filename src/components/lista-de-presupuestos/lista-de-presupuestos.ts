import { Component, Input } from '@angular/core';
import { Presupuesto } from '../../Clases/Presupuesto';


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

  @Input() presupuestos: Presupuesto[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  public itemSelected(id: number) {
    alert(id);
  }

}
