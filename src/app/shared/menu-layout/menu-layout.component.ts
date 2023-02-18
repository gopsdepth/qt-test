import { Component, Input } from '@angular/core';
import { MenuItemModel } from 'src/app/models/menu-item.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-layout',
  templateUrl: './menu-layout.component.html',
  styleUrls: ['./menu-layout.component.css'],
})
export class MenuLayoutComponent {
  private isMenuOpen = true;
  private _currentPage = '';
  get currentPage(): string {
    return this._currentPage;
  }

  @Input()
  set currentPage(value: string) {
    this._currentPage = value;
    this.updateMenu();
  }

  menus: MenuItemModel[] = [];

  constructor(private readonly menuService: MenuService) {}

  ngOnInit() {
    this.menus = this.menuService.getMenu();
    this.updateMenu();
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

  private updateMenu() {
    this.menus.forEach((menu) => {
      menu.isActive = this.currentPage.includes(menu.id);
      menu.children?.forEach((subMenu) => {
        subMenu.isActive = this.currentPage == subMenu.id;
      });
    });
  }
}
