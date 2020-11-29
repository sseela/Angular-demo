import { Component, OnInit, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Component({
  selector: '[custom]',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  @HostBinding('style.backgroundColor') c_colorrr = "red"; 
  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnter() {
    this.c_colorrr = "yellow";
  }
  @HostListener('mouseleave') mouseLeave() {
    this.c_colorrr = "blue";
  }

}
