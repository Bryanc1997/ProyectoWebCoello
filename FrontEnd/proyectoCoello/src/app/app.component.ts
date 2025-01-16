import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true, // Hace el AppComponent standalone
  imports: [IonicModule, RouterModule, HeaderComponent, FooterComponent], // Importa Header y Footer
})
export class AppComponent {}