import { Directive, ElementRef, OnInit, OnDestroy, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(
    private el: ElementRef
  ) {}

  @HostBinding('style.backgroundColor')
  backgroundColor = 'transparent';


  @HostListener('mouseover')
  handleMouseOver(el) {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseout')
  handleMouseLeave(el) {
    this.backgroundColor = 'transparent';
  }
  ngOnInit() { }
}
