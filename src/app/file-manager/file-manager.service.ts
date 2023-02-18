import { Injectable } from '@angular/core';

@Injectable()
export class FileManagerService {
  private readonly names: { [index: string]: string } = {
    ['tax-center']: 'Tax center',
    ['others']: 'Other documents',
  };

  constructor() { }

  getFolderName(folderUrlId: string): string {
    return this.names[folderUrlId];
  }
}
