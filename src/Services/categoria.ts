import {Categoria} from "../models/categoria";
import {Plato} from "../models/plato";

export class CategoriaService{
  private categorias: Categoria[] = [];

  getCategorias(){
    return this.categorias.slice();
  }

  removeCategoria(index: number){
    this.categorias.splice(index, 1);
  }

  addCategoria(name: string,
               icon: string,
               platos: Plato[]){
    this.categorias.push(new Categoria(name, icon, platos));
  }

  updateCategoria(index: number,
                  name: string,
                  icon: string,
                  platos: Plato[]){
    this.categorias[index] = new Categoria(name, icon, platos);
  }
}
