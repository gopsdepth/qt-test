import { Component, Input } from '@angular/core';
import { MenuItemModel } from 'src/app/models/menu-item.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-layout',
  templateUrl: './menu-layout.component.html',
  styleUrls: ['./menu-layout.component.css']
})
export class MenuLayoutComponent {
  private isMenuOpen = true;

  menus: MenuItemModel[] = [];
  @Input() currentPage = '';

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menus = this.menuService.getMenu();
    this.menus.forEach((menu) => {
      console.log(menu.id);
      console.log(this.currentPage);
      menu.isActive = this.currentPage.includes(menu.id);
      menu.children?.forEach((subMenu) => {
        subMenu.isActive = this.currentPage.includes(subMenu.id);
      });
    });
  }

  toggleMenu(sideMenu: any) {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      sideMenu.classList.remove('ml-[-250px]');
      sideMenu.classList.add('ml-0');
    } else {
      sideMenu.classList.remove('ml-0');
      sideMenu.classList.add('ml-[-250px]');
    }
  }
}
