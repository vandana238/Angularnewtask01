import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chartgraph',
  templateUrl: './chartgraph.page.html',
  styleUrls: ['./chartgraph.page.scss'],
})
export class ChartgraphPage implements  AfterViewInit {

  @ViewChild('barCanvas') private barCanvas: ElementRef | undefined;
  barChart: Chart | undefined;
  graphschart: string | null | undefined;

  constructor(private activatedRoute:ActivatedRoute) {}

ngOnInit(): void {
    this.graphschart=this.activatedRoute.snapshot.paramMap.get('id');
     }
 
  ngAfterViewInit() {
    this.barChartMethod();
  }

  barChartMethod() {
    if (this.barCanvas && this.barCanvas.nativeElement) {
      const ctx = this.barCanvas.nativeElement.getContext('2d');
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
}