import {Component, OnInit} from '@angular/core';
import {Events, IonicPage, NavParams} from 'ionic-angular';
import {Categoria} from "../../models/categoria";
import {PedidosService} from "../../Services/pedidos";
import {NgForm} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage implements OnInit{
  categoria: Categoria;
  categoriaIndex: number;
  platoChecked : any;

  constructor(private navParams: NavParams,
              private pedidosService: PedidosService,
              public events: Events){}

  ngOnInit(){
    this.categoria = this.navParams.get('categoria');
    this.categoriaIndex = this.navParams.get('index');
    this.platoChecked = new Array(this.categoria.platos.length)
  }

  updatePlatoChecked(index: number){
    if(this.platoChecked[index] == true){
      this.pedidosService.addPedido(index ,this.categoriaIndex, "",0);
      this.events.publish('pedidos:updated');
    }else{
      this.pedidosService.removePedido(index);
      this.events.publish('pedidos:updated');
    }
  }
  onComment(form: NgForm, index: number){
    this.pedidosService.updatePedidos(index ,this.categoriaIndex, form.value.comment,0);
  }
}
