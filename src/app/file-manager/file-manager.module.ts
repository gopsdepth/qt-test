import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerPageComponent } from './file-manager-page/file-manager-page.component';
import { SharedModule } from '../shared/shared.module';
import { FileManagerService } from './file-manager.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FileManagerPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    FileManagerService,
  ],
})
export class FileManagerModule { }
