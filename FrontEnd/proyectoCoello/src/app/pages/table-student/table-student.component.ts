import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // Marca el componente como standalone
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss'],
  imports: [IonicModule, CommonModule], // Importa IonicModule y CommonModule
})
export class TableStudentComponent {}
