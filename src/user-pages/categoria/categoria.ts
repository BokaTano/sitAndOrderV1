import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {Categoria} from "../../models/categoria";

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage implements OnInit{
  categoria: Categoria;
  index: number;
  platoChecked : any;
  drawerOptions: any;

  constructor(private navParams: NavParams){
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }

  ngOnInit(){
    this.categoria = this.navParams.get('categoria');
    this.index = this.navParams.get('index');
    this.platoChecked = new Array(this.categoria.platos.length)
  }

  updatePlatoChecked(){
    console.log("Checkbox changed to " + this.platoChecked);
  }
}
