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

  addPedido(plato: number,
            categoria: number,
            comment: string,
            orden: number){
    const pedido = new Pedido(plato, categoria, comment, orden);
    this.pedidos.push(pedido);
    console.log(pedido);
  }

  updatePedidos(plato: number,
                categoria: number,
                comment: string,
                orden: number){
    this.pedidos[plato] = new Pedido(plato, categoria, comment, orden);
  }
}
