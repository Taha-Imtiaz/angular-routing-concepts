import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = "purple"
    
    // for hiding custom heading
    // el.nativeElement.style.display = "none"

  }

}
