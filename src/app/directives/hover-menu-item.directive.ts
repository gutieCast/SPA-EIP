import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverMenuItem]'
})
export class HoverMenuItemDirective {

  constructor(
    private elementRef: ElementRef
  ) { }
  
  @HostListener('mouseover') 
  public handleMouseOver() {
    this.elementRef.nativeElement.style.color = '#A1F76D'
    this.elementRef.nativeElement.style.fontSize = '1.5rem'
    this.elementRef.nativeElement.style.transition = 'all 0.3s ease-in-out'
  }

  @HostListener('mouseout')
  public handleMouseOut() {
    this.elementRef.nativeElement.style.color = '#FFFFFF'
    this.elementRef.nativeElement.style.fontSize = '1rem'
    this.elementRef.nativeElement.style.transition = 'all 0.3s ease-in-out'
  }
}
