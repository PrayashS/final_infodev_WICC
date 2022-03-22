import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  pageYoffset!: number;

  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
 }

constructor(private scroll: ViewportScroller) { }

scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
}
  ngOnInit(): void {
  }

}
