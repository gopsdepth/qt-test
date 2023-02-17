import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() state?: 'info' | 'success' | 'none';
  @Input() caption = '';

  getClassByState() {
    if (this.state == 'info') {
      return 'px-5 py-1 text-sm rounded w-auto text-sky-700 bg-sky-200';
    } else if(this.state == 'success') {
      return 'px-5 py-1 text-sm rounded w-auto text-green-900 bg-emerald-200';
    }
    return 'px-5 py-1 text-sm rounded w-auto text-gray-700 bg-gray-200';
  }
}
