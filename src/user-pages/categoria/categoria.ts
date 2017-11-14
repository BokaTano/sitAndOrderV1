import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {Categoria} from "../../models/categoria";
import {PedidosService} from "../../Services/pedidos";

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage implements OnInit{
  categoria: Categoria;
  index: number;
  platoChecked : any;

  constructor(private navParams: NavParams,
              private pedidosService: PedidosService){}

  ngOnInit(){
    this.categoria = this.navParams.get('categoria');
    this.index = this.navParams.get('index');
    this.platoChecked = new Array(this.categoria.platos.length)
  }

  updatePlatoChecked(index: number){
    if(this.platoChecked[index] == true){
      this.pedidosService.addPedido("", this.index, 0);
      console.log("Checkbox changed to " + this.platoChecked);
    }else{
      this.pedidosService.removePedido(index);
    }

  }
}
