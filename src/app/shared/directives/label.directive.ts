import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLabel]'
})
export class LabelDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.addClass(element.nativeElement, 'margo-label');
  }

}
