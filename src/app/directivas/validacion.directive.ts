import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[validar]' //directiva validar, permite evaluar si el input esta vacio
})
export class ValidacionDirective implements OnInit{

  constructor( private me:ElementRef) {

   }

  //  se importa y declara el color para la variable color
   @Input() color = "red";

  //  se importa la variable del input del homeComponent
   @Input() nombre!:String;

  //  segun ciclo de vida, se inicializa con el color por defecto
   ngOnInit():void {
      this.me.nativeElement.style.color = this.color;
      this.me.nativeElement.style.borderColor = this.color;  
      // alert(this.nombre);  
   }

  //  error: falta implementar condicional en directiva para validar el input ingresado y aplicar nuevos cambios
   if (nombre:String) {
    this.color = "green"
    this.me.nativeElement.style.color = this.color;
    this.me.nativeElement.style.borderColor = this.color;
  }

}
