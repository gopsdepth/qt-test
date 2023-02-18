import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLayoutComponent } from './menu-layout/menu-layout.component';
import { RouterModule } from '@angular/router';
import { MenuService } from './menu.service';
import { MenuItemComponent } from './menu-item/menu-item.component';



@NgModule({
  declarations: [
    MenuLayoutComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [MenuService],
  exports: [
    MenuLayoutComponent
  ],
})
export class SharedModule { }
