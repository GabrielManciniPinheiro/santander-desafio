import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatDialogModule, // Necessário para mat-dialog-title, content, actions
    MatButtonModule, // Necessário para os botões
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  // O construtor injeta os dados que foram passados ao abrir o diálogo.
  // No nosso caso, vamos passar um objeto como: { message: 'Tem certeza...?' }
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
