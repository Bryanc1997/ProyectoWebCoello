import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, // Declaraciones principales
  ],
  imports: [
    BrowserModule, // Módulo base para navegadores
    IonicModule.forRoot(), // Configuración principal de Ionic
    AppRoutingModule, // Configuración de rutas
    FormsModule, // Para formularios simples
    ReactiveFormsModule, // Para formularios reactivos (si los usas)
  ],
  providers: [],
  bootstrap: [AppComponent], // Componente principal
})
export class AppModule {}
