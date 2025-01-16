import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TableStudentComponent } from './pages/table-student/table-student.component';

export const routes: Routes = [
  { path: 'table-student', loadComponent: () => import('./pages/table-student/table-student.component').then(m => m.TableStudentComponent) },
  { path: 'login', component: LoginComponent },
  { path: '404', loadComponent: () => import('./components/error404/error404.component').then(m => m.Error404Component) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
  
];

export class AppRoutingModule {}
