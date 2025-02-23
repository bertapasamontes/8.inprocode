import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-charts',
    imports: [],
    templateUrl: './charts.component.html',
    styleUrl: './charts.component.scss'
})
export class ChartsComponent {
    @ViewChild('chartCanvas') chartCanvas!: ElementRef;
    constructor() {
        Chart.register(...registerables); // 🔹 ¡Registra los componentes!
      }

    ngAfterViewInit() {
        const ctx = this.chartCanvas.nativeElement.getContext('2d'); // Obtener el contexto
    
        if (ctx) {
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Enero', 'Febrero', 'Marzo'],
              datasets: [
                {
                  label: 'Ventas',
                  data: [100, 200, 150],
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
            },
          });
        }
      }
}
