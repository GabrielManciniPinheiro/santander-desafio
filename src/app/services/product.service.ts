// Local: src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root', // faz com que o Angular forneça uma única instância deste serviço para toda a aplicação.
})
export class ProductService {
  // Simulação do banco de dados com dados iniciais.
  private products: Product[] = [
    {
      id: 1,
      nome: 'Tesouro Selic 2029',
      categoria: 'Renda Fixa',
      valorMinimo: 145.5,
      QtdCarteira: 5,
    },
    {
      id: 2,
      nome: 'Ação PETR4',
      categoria: 'Ações',
      valorMinimo: 38.2,
      QtdCarteira: 100,
    },
    {
      id: 3,
      nome: 'Fundo Imobiliário MXRF11',
      categoria: 'Fundos Imobiliários',
      valorMinimo: 10.5,
      QtdCarteira: 230,
    },
  ];
  private nextId = 4; // Para gerar IDs para novos Investimentos

  // BehaviorSubject para os componentes ouvirem as mudanças na lista de investimentos.
  private products$ = new BehaviorSubject<Product[]>(this.products);

  // --- MÉTODOS CRUD ---

  //Retorna a lista de produtos como um Observable.
  // Qualquer componente que assinar este método receberá a lista atualizada sempre que ela mudar.
  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  // CREATE: Adiciona um novo investimento.
  // Omit<Product, 'id'> significa que o objeto recebido terá todos os campos de Product, menos o 'id'.
  addProduct(productData: Omit<Product, 'id'>): void {
    const newProduct: Product = { ...productData, id: this.nextId++ };
    this.products.push(newProduct);
    this.products$.next([...this.products]); // Emite a nova lista
  }

  // UPDATE: Atualiza o investimento existente.
  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct; //Substitui o antigo pelo novo
      this.products$.next([...this.products]);
    }
  }

  // DELETE: Remove o investimento pelo ID.
  deleteProduct(id: number): void {
    this.products = this.products.filter((p) => p.id !== id);
    this.products$.next([...this.products]);
  }
}
