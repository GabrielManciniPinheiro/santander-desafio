import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// 1. IMPORTAMOS O NOSSO COMPONENTE DA LISTA DE PRODUTOS
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. ADICIONAMOS ELE NO ARRAY 'IMPORTS' PARA QUE O HTML O RECONHEÇA
  imports: [CommonModule, RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'santander-desafio';
}
