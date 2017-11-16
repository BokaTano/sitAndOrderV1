import {Component, Input, ElementRef, Renderer2, OnInit} from '@angular/core';
import {Platform, DomController, Events} from 'ionic-angular';
import {Pedido} from "../../models/pedido";
import platos from "../../data/platos";
import {PedidosService} from "../../Services/pedidos";
import {Categoria} from "../../models/categoria";

@Component({
  selector: 'drawer',
  templateUrl: 'drawer.html'
})
export class ContentDrawer implements OnInit{

  @Input('options') options: any;

  handleHeight: number = 50;
  bounceBack: boolean = true;
  thresholdTop: number = 200;
  thresholdBottom: number = 200;

  categorias: Categoria[] = [];
  pedidos: Pedido[] = [];
  platoEdit: any;


  constructor(public element: ElementRef,
              public renderer: Renderer2,
              public domCtrl: DomController,
              public platform: Platform,
              public events: Events,
              public pedidoService: PedidosService) {

    this.events.subscribe('pedidos:updated',() => {
      this.pedidos = pedidoService.getPedidos();
    });

  }

  ngOnInit(){
    this.categorias = platos;
  }


  ngAfterViewInit() {

    if(this.options.handleHeight){
      this.handleHeight = this.options.handleHeight;
    }

    if(this.options.bounceBack){
      this.bounceBack = this.options.bounceBack;
    }

    if(this.options.thresholdFromBottom){
      this.thresholdBottom = this.options.thresholdFromBottom;
    }

    if(this.options.thresholdFromTop){
      this.thresholdTop = this.options.thresholdFromTop;
    }

    this.renderer.setStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
    this.renderer.setStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });

  }

  handlePan(ev) {

    let newTop = ev.center.y;

    let bounceToBottom = false;
    let bounceToTop = false;

    if (this.bounceBack && ev.isFinal) {

      let topDiff = newTop - this.thresholdTop;
      let bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;

      topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;

    }

    if ((newTop < this.thresholdTop && ev.additionalEvent === "panup") || bounceToTop) {

      this.domCtrl.write(() => {
        this.renderer.setStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setStyle(this.element.nativeElement, 'top', '0px');
      });

    } else if (((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === "pandown") || bounceToBottom) {

      this.domCtrl.write(() => {
        this.renderer.setStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
      });

    } else {

      this.renderer.setStyle(this.element.nativeElement, 'transition', 'none');

      if (newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {

        if (ev.additionalEvent === "panup" || ev.additionalEvent === "pandown") {

          this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, 'top', newTop + 'px');
          });

        }


      }

    }
  }
}

