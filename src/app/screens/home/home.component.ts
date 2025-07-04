import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  valorInicial: number = 5000;
  aporteMensal: number = 500;
  prazoAnos: number = 20;
  taxaAnual: number = 8;

  resultadoFinal: number = 0;
  totalInvestido: number = 0;
  tabelaEvolucao: {
    mes: number;
    aporte: number;
    juros: number;
    saldo: number;
  }[] = [];

  calcular() {
    const meses = this.prazoAnos * 12;
    const taxaMensal = this.taxaAnual / 100 / 12;

    let saldo = this.valorInicial;
    this.totalInvestido = this.valorInicial;
    this.tabelaEvolucao = [];

    for (let mes = 1; mes <= meses; mes++) {
      const juros = saldo * taxaMensal;
      saldo += juros + this.aporteMensal;
      this.totalInvestido += this.aporteMensal;

      this.tabelaEvolucao.push({
        mes,
        aporte: this.aporteMensal,
        juros: +juros.toFixed(2),
        saldo: +saldo.toFixed(2),
      });
    }

    this.resultadoFinal = +saldo.toFixed(2);
  }
}
