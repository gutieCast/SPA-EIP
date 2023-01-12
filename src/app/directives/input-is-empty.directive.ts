import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputIsEmpty]'
})
export class InputIsEmptyDirective {

  constructor(
    private elementRef: ElementRef,
  ) {}

  @HostListener('blur')
  public checkValidity() {
    this.elementRef.nativeElement.validity.valid === true
    ? this.elementRef.nativeElement.style.border = '3px solid #A1F76D'
    : this.elementRef.nativeElement.style.border = '3px solid #DD4A68'
  }
}
