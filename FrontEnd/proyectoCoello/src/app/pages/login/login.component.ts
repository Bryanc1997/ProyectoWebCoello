import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true, // Importante para standalone
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonicModule, // Importa los módulos de Ionic
    CommonModule,
    FormsModule,
  ],
})
export class LoginComponent {}
