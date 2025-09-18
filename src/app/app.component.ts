import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// IMPORTAM O  COMPONENTE DA LISTA DE PRODUTOS
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // ADICIONA ELE NO ARRAY 'IMPORTS' PARA O HTML O RECONHEce
  imports: [CommonModule, RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'santander-desafio';
}
