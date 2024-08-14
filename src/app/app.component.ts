import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  // template: `
  //             <app-headbar></app-headbar>
  //             <app-navbar></app-navbar>`,
  imports: [RouterOutlet, NavbarComponent, HeadbarComponent, HomepageComponent]
})
export class AppComponent {
  title = 'adaptive-web-app-builder';
} 