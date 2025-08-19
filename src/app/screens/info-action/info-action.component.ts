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

  constructor(private brapiService: BrapiService) {}

  searchStock() {
    if (!this.symbol) return;

    this.stock = null;

    this.brapiService.getStock(this.symbol).subscribe((data) => {
      this.stock = data.results[0];
    });
  }
}
