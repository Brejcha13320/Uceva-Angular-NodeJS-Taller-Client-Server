import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarConfig, NavbarOrganism } from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, NavbarOrganism],
})
export class App {
  navbarConfig: NavbarConfig = {
    title: 'Angular Client',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Usuarios', url: '/users' },
      { text: 'Productos', url: '/products' },
    ]
  }
}