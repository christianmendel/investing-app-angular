import { Component } from '@angular/core';
import { BrapiService } from '../../services/brapi.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-action',
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [BrapiService],
  templateUrl: './info-action.component.html',
  styleUrl: './info-action.component.scss',
})
export class InfoActionComponent {
  symbol: string = 'PETR4';
  stock: any = null;
  loading = false;
  error = '';

  constructor(private brapiService: BrapiService) {}

  searchStock() {
    if (!this.symbol) return;

    this.stock = null;

    this.brapiService.getStock(this.symbol).subscribe({
      next: (data) => {
        this.stock = JSON.parse(data.body).results[0];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ação não encontrada ou erro na API.';
        this.loading = false;
      },
    });
  }
}
