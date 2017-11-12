import {Pedido} from "../models/pedido";

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

  addPedido(index: number,
            checked: boolean,
            comment: string,
            orden: number){
    this.pedidos.push(new Pedido(index, checked, comment, orden));
  }

  updatePedidos(index: number,
                checked: boolean,
                comment: string,
                orden: number){
    this.pedidos[index] = new Pedido(index, checked, comment, orden);
  }
}
