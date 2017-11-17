import {Component, OnInit} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {Categoria} from "../../models/categoria";
import {Pedido} from "../../models/pedido";
import {PedidosService} from "../../Services/pedidos";
import platos from "../../data/platos";

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage implements OnInit{
  pedidos: Pedido[] =[];
  platos: Categoria[] = [];

  constructor(private pedidosService: PedidosService){}

  ngOnInit(){
    this.pedidos = this.pedidosService.getPedidos();
    this.platos = platos;
  }

}
