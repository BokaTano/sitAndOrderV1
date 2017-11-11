import {Plato} from "./plato";

export class Categoria{
  constructor(public name: string,
              public icon: string,
              public platos: Plato[]){}
}
