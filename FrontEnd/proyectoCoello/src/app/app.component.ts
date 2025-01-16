import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderComponent, FooterComponent],
})
export class AppComponent {
  showHeader: boolean = true; // Controla si se muestra el header
  showFooter: boolean = true; // Controla si se muestra el footer

  constructor(private router: Router) {
    // Escucha cambios de ruta
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
  }

  checkRoute() {
    const noHeaderRoutes = ['/404','/login']; // Rutas sin header
    const noFooterRoutes = ['666']; // Rutas sin footer (si necesitas alguna)

    const currentRoute = this.router.url;

    this.showHeader = !noHeaderRoutes.includes(currentRoute);
    this.showFooter = !noFooterRoutes.includes(currentRoute);
  }
}
