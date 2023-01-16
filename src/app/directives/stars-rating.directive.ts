import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStarsRating]'
})
export class StarsRatingDirective {

  private startsNumber: number = 5

  constructor(
    elementRef: ElementRef
  ) { 
    elementRef.nativeElement
  }
}
