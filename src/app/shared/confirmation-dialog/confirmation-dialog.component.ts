import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatDialogModule, // Necessário para mat-dialog-title
    MatButtonModule, // Necessário para os botões
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  //  injeta os dados que foram passados ao abrir o diálogo.
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
