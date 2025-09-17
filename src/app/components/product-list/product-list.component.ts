import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

// --- NOVAS IMPORTAÇÕES NECESSÁRIAS ---
import { CommonModule } from '@angular/common'; // Para o pipe 'currency' e outras diretivas
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  standalone: true, // <-- ADICIONADO: Marca o componente como independente
  imports: [
    // <-- ADICIONADO: Lista tudo que o TEMPLATE HTML usa
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nome',
    'categoria',
    'valorMinimo',
    'QtdCarteira',
    'acoes',
  ];
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openProductDialog(product?: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.id) {
          this.productService.updateProduct(result);
        } else {
          this.productService.addProduct(result);
        }
      }
    });
  }

  deleteProduct(id: number): void {
    // Abre o nosso novo diálogo de confirmação
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Tem certeza que deseja excluir este item?' }, // Passa a mensagem para o diálogo
    });

    // Fica "escutando" o resultado do diálogo (true ou false)
    dialogRef.afterClosed().subscribe((result) => {
      // Se o resultado for 'true' (usuário clicou em Confirmar)
      if (result) {
        this.productService.deleteProduct(id); // Aí sim, chama o serviço para deletar
      }
    });
  }
}
