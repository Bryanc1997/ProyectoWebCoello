import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

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
export class LoginComponent {
  cedula: string = '';
  contrasena: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.cedula || !this.contrasena) {
      this.error = 'Por favor ingrese todos los campos.';
      return;
    }

    this.authService.login(this.cedula, this.contrasena).subscribe(
      (response) => {
        // Guardar el token en localStorage
        localStorage.setItem('token', response.Token);

        // Redirigir según el tipo de usuario
        switch (response.TipoUsuario) {
          case 'Administrador':
            this.router.navigate(['/admin-dashboard']);
            break;
          case 'Estudiante':
            this.router.navigate(['/student-process']);
            break;
          case 'Secretaria':
            this.router.navigate(['/client-dashboard']);
            break;
          default:
            this.error = 'Tipo de usuario desconocido.';
        }
      },
      (error) => {
        this.error = 'Cédula o contraseña incorrecta.';
      }
    );
  }
}
