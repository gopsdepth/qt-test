import { Component, Input, ViewChild } from '@angular/core';
import { MenuItemModel } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  private isMenuShown = false;

  @Input() menu: Partial<MenuItemModel> = {};
  @ViewChild('menuList') menuList: any; 
  @ViewChild('chevron') chevron: any;

  ngAfterViewInit() {
    if (this.menu.children && this.menu.isActive) {
      this.isMenuShown = true;
    }
    this.updateStyle();
  }

  toggleMenu() {
    this.isMenuShown = !this.isMenuShown;
    this.updateStyle();
  }

  private updateStyle() {
    if (!this.menuList || !this.chevron) return;
    if (this.isMenuShown) {
      this.menuList.nativeElement.classList.remove('max-h-0');
      this.menuList.nativeElement.classList.remove('pt-0');
      this.menuList.nativeElement.classList.add('max-h-32');
      this.menuList.nativeElement.classList.add('pt-5');
      this.chevron.nativeElement.classList.remove('fa-chevron-down');
      this.chevron.nativeElement.classList.add('fa-chevron-up');
    } else {
      this.menuList.nativeElement.classList.remove('max-h-32');
      this.menuList.nativeElement.classList.remove('pt-5');
      this.menuList.nativeElement.classList.add('max-h-0');
      this.menuList.nativeElement.classList.add('pt-0');
      this.chevron.nativeElement.classList.remove('fa-chevron-up');
      this.chevron.nativeElement.classList.add('fa-chevron-down');
    }
  }
}
