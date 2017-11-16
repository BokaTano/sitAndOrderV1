///<reference path="../../node_modules/ionic-angular/navigation/nav-controller.d.ts"/>
import {Component, ViewChild} from '@angular/core';
import { MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {MenuPage} from "../user-pages/menu/menu";
import {CuentaPage} from "../user-pages/cuenta/cuenta";
import {HistoriaPage} from "../user-pages/historia/historia";
import {RegistrarPage} from "../user-pages/registrar/registrar";
import {PedidosPage} from "../restaurant-pages/pedidos/pedidos";
import {EditMenuPage} from "../restaurant-pages/edit-menu/edit-menu";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  menuPage = MenuPage;
  cuentaPage = CuentaPage;
  historiaPage = HistoriaPage;
  registrarPage = RegistrarPage;
  pedidosPage = PedidosPage;
  editMenuPage = EditMenuPage;
  drawerOptions: any;
  @ViewChild('nav') nav: NavController;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    this.initializeApp();
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
