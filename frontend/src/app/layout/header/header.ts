import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggle();
  }
}
