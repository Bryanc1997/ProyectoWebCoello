import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // Asegúrate de que el componente sea standalone
  selector: 'app-student-process',
  templateUrl: './student-process.component.html',
  styleUrls: ['./student-process.component.scss'],
  imports: [IonicModule, CommonModule], // Importa IonicModule y CommonModule
})
export class StudentProcessComponent {}
