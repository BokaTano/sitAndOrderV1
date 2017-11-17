import {Pedido} from "../models/pedido";
import platos from "../data/platos";
import {Categoria} from "../models/categoria";

export class PedidosService{
  pedidos: Pedido[] = [];

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
    const pedido = new Pedido(plato, categoria, comment, orden, [false, false, false]);
    this.pedidos.push(pedido);
    console.log(pedido);
  }

  updatePedidos(plato: number,
                categoria: number,
                comment: string,
                orden: number,
                estados: boolean[]){
    this.pedidos[plato] = new Pedido(plato, categoria, comment, orden, estados); //TODO in future make this not possible when already sent
  }

  getCheckedPlatos(categoriaIndex: number, length: number){
    var checkedArray: boolean[] = new Array(length);

    this.pedidos.forEach(function(pedido) {
      if(pedido.categoria == categoriaIndex){
        checkedArray[pedido.plato] = true;
      }
    });
    return checkedArray;
  }

  getPrecio(){
    //mo funciona.. no lo sé porque ?! TODO
  }
}
