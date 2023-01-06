import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[validar]' //directiva validar, permite evaluar si el input esta vacio
})
export class ValidacionDirective implements OnInit{

  constructor( private me:ElementRef) {

   }

   @Input() color = "red";
   @Input() nombre!:String;

   ngOnInit():void {
    if (this.nombre) {
      
    }
    this.me.nativeElement.style.color = this.color;
    this.me.nativeElement.style.borderColor = this.color;
   }



}
