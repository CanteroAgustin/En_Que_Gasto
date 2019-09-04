import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPresupuestoModalPage } from './add-presupuesto-modal';

@NgModule({
  declarations: [
    AddPresupuestoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPresupuestoModalPage),
  ],
})
export class AddPresupuestoModalPageModule {}
