import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileManagerService } from '../file-manager.service';

@Component({
  selector: 'app-file-manager-page',
  templateUrl: './file-manager-page.component.html',
  styleUrls: ['./file-manager-page.component.css']
})
export class FileManagerPageComponent {
  folderUrlId = ''
  folderName = '';

  constructor(
      private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly elementRef: ElementRef,
      private readonly service: FileManagerService,
  ) {}

  ngOnInit() {
    this.folderUrlId = this.route.snapshot.paramMap.get("id") || '';
    if (!this.folderUrlId) this.router.navigate(['invest-summary']);

    this.route.url.subscribe((val) => {
      this.folderUrlId = val[0].parameterMap.get('id') || '';
      this.folderName = this.service.getFolderName(this.folderUrlId);
    });

    this.folderName = this.service.getFolderName(this.folderUrlId);
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.className = 'bg-slate-200';
  }
}
