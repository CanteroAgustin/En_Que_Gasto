import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ListaDePresupuestosComponent } from './lista-de-presupuestos/lista-de-presupuestos';
@NgModule({
	declarations: [HeaderComponent,
    ListaDePresupuestosComponent],
	imports: [],
	exports: [HeaderComponent,
    ListaDePresupuestosComponent]
})
export class ComponentsModule {}
