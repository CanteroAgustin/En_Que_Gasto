import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './credentials';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ListaDePresupuestosComponent } from '../components/lista-de-presupuestos/lista-de-presupuestos'
import { BackendServiceProvider } from '../providers/backend-service/backend-service';
import { AddPresupuestoModalPage } from '../pages/add-presupuesto-modal/add-presupuesto-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaDePresupuestosComponent,
    AddPresupuestoModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPresupuestoModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackendServiceProvider
    
  ]
})
export class AppModule {}
