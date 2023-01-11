import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() title?: string;
  navitems: string[] = ['Nav One', 'Nav Two', 'Nav Three'];
}
