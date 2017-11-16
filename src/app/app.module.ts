import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CategoriaService} from "../Services/categoria";

import {CuentaPage} from "../user-pages/cuenta/cuenta";
import {HistoriaPage} from "../user-pages/historia/historia";
import {RegistrarPage} from "../user-pages/registrar/registrar";
import {MenuPage} from "../user-pages/menu/menu";
import {CategoriaPage} from "../user-pages/categoria/categoria";
import {ContentDrawer} from "../components/drawer/drawer";
import {PedidosPage} from "../restaurant-pages/pedidos/pedidos";
import {EditMenuPage} from "../restaurant-pages/edit-menu/edit-menu";
import {PedidosService} from "../Services/pedidos";

@NgModule({
  declarations: [
    MyApp,
    CuentaPage,
    HistoriaPage,
    RegistrarPage,
    MenuPage,
    CategoriaPage,
    ContentDrawer,
    PedidosPage,
    EditMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CuentaPage,
    HistoriaPage,
    RegistrarPage,
    MenuPage,
    CategoriaPage,
    PedidosPage,
    EditMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoriaService,
    PedidosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
