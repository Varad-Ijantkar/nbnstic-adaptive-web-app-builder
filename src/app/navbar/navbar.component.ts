import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  // styleUrl: './navbar.component.css'
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // added : 
  isRotated = false;

  constructor() {
    // Set default theme to light
    document.documentElement.setAttribute('data-theme', 'light');
  }

  toggle_theme(): void {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark')
    }

    // Toggle Rotation
    this.isRotated = !this.isRotated;
  }

  get logoImgSrc(): string {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    return currentTheme === 'light'
      ? 'assets/images/magnus-node-package-logo-for-light-theme.jpg'
      : 'assets/images/magnus-node-package-logo-for-dark-theme.jpg';
  }

}
