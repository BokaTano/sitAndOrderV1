import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {Categoria} from "../../models/categoria";

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage implements OnInit{
  categoria: Categoria;
  index: number;

  constructor(private navParams: NavParams){}

  ngOnInit(){
    this.categoria = this.navParams.get('categoria');
    this.index = this.navParams.get('index');
  }
}
