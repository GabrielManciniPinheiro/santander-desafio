// Local: src/app/components/product-dialog/product-dialog.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { Product } from '../../models/product.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, //  para formGroup e formControlName
  ],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.scss',
})
export class ProductDialogComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.productForm = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      valorMinimo: [0, [Validators.required, Validators.min(0.01)]],
      QtdCarteira: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.productForm.patchValue(this.data);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
