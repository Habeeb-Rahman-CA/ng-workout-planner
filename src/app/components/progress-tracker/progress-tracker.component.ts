import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-progress-tracker',
  standalone: true,
  imports: [],
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.css'
})
export class ProgressTrackerComponent implements OnInit, OnDestroy {

  @Input() progressData: any
  chart: any

  ngOnInit(): void {
    Chart.register(...registerables)
    const progressLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    const progressValues = this.progressData ? this.progressData : [0, 0, 0, 0]

    this.chart = new Chart('progressChart', {
      type: 'line',
      data: {
        labels: progressLabels,
        datasets: [{
          label: 'Progress',
          data: progressValues,
          borderColor: 'rgba(59, 130, 246, 1)',
          fill: false
        }]
      }
    });
  }

  ngOnDestroy(): void {
      if(this.chart){
        this.chart.destroy()
      }
  }

}
