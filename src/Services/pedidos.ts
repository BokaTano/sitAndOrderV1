import {Pedido} from "../models/pedido";
import {ContentDrawer} from "../components/drawer/drawer";

export class PedidosService{
  private pedidos: Pedido[] = [];

  getPedidos(){
    return this.pedidos.slice();
  }

  getOnePedido(index: number){
    return this.pedidos[index];
  }

  removePedido(index: number){
    this.pedidos.splice(index, 1);
  }

  addPedido(comment: string,
            categoria: number,
            orden: number){
    this.pedidos.push(new Pedido(this.pedidos.length, categoria, comment, orden));
    console.log("pedido added" + this.pedidos.length + categoria + comment + orden);
  }

  updatePedidos(index: number,
                comment: string,
                categoria: number,
                orden: number){
    this.pedidos[index] = new Pedido(index, categoria, comment, orden);
  }
}
