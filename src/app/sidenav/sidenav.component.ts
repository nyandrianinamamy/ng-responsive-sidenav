import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  id = 0;
  submenu = 0;

  screenWidth: number;
  isDesktop = false;
  collapsed = false;
  desktopWidth = 768;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth >= this.desktopWidth) {
          this.isDesktop = this.collapsed;
      } else {
          this.isDesktop = false;
      }
  }

  constructor() {
    this.onResize();
  }

  ngOnInit() {
  }

  log(j: number) {
    console.log(j)
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this.isDesktop = this.collapsed;
  }
}