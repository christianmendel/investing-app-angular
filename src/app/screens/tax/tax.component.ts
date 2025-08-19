import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax',
  imports: [CommonModule, FormsModule],
  templateUrl: './tax.component.html',
  styleUrl: './tax.component.scss',
})
export class TaxComponent {
  purchasePrice: number = 0;
  salePrice: number = 0;
  quantity: number = 0;
  taxRate: number = 15;
  tax: number | null = null;
  profit: number | null = null;

  calculateTax() {
    const totalPurchase = this.purchasePrice * this.quantity;
    const totalSale = this.salePrice * this.quantity;
    this.profit = totalSale - totalPurchase;

    if (this.profit > 0) {
      this.tax = (this.profit * this.taxRate) / 100;
    } else {
      this.tax = 0; // sem imposto se prejuízo
    }
  }

  reset() {
    this.purchasePrice = 0;
    this.salePrice = 0;
    this.quantity = 0;
    this.tax = null;
    this.profit = null;
  }
}
