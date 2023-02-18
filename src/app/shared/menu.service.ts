import { Injectable } from '@angular/core';
import { MenuItemModel } from '../models/menu-item.model';

@Injectable()
export class MenuService {

  constructor() { }
  
  getMenu(): MenuItemModel[] {
    return [
      { id: 'invest-summary', caption: 'Investor summary', isActive: false, children: null },
      { id: 'fund-perf', caption: 'Fund performance', isActive: false, children: [
        { id: 'fund-perf/usd-fund-v', caption: 'USD Fund V', isActive: false, children: null },
        { id: 'fund-perf/usd-fund-vi', caption: 'USD Fund VI', isActive: false, children: null },
      ]},
      { id: 'highlight-port', caption: 'Highlighted portfolio', isActive: false, children: [
        { id: 'highlight-port/alibaba', caption: 'Alibaba', isActive: false, children: null },
        { id: 'highlight-port/taikang-insurance', caption: 'Taikang insurance', isActive: false, children: null },
        { id: 'highlight-port/gme-asset', caption: 'GME Asset', isActive: false, children: null },
      ]},
      { id: 'file-manager', caption: 'File manager', isActive: false, children: [
        { id: 'file-manager/tax-center', caption: 'Tax center', isActive: false, children: null },
        { id: 'file-manager/others', caption: 'Other documents', isActive: false, children: null },
      ] },
    ];
  }
}
