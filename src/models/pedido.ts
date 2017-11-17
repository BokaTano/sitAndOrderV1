export class Pedido{
  constructor(public plato: number,
              public categoria: number,
              public comment: string,
              public orden: number,
              public estados: boolean[]){}
}
// TODO add estados(sentPedidos, cooking, ready) and Mesa/wantToPay
