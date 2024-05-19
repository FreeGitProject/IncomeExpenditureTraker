import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { CustomTitlecasePipe } from '../titlecase.pipe'; // Adjust the path as needed


@Component({
  selector: 'side-nav',
  standalone: true,
  imports: [MaterialModule, RouterModule,CustomTitlecasePipe],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  navItems: { name: string; link: string }[] = [
    { name: 'maintenance', link: 'maintenance' },
    { name: 'view data', link: 'view' },
  ];
}