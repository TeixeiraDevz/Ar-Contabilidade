import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-internal-layout',
  template: `
    <div class="internal-layout">
      <div class="internal-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./layout-module.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class InternalLayout {}
