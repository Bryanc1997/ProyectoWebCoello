import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true, // Standalone Component
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
  imports: [IonicModule, RouterModule], // Importar IonicModule y RouterModule
})
export class Error404Component {}
