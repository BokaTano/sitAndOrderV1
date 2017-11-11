import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Categoria} from "../../models/categoria";
import {CategoriaPage} from "../categoria/categoria";
import platos from '../../data/platos'
import {Plato} from "../../models/plato";

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  categorias: { name: string, icon: string, platos: Plato[]}[];
  drawerOptions: any;

  constructor(private navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }

  ionViewWillEnter(){
    this.categorias = platos;
  }

  private onLoadCategoria(categoria: Categoria, index: number){
    this.navCtrl.push(CategoriaPage, {categoria: categoria, index: index})
  }

}
