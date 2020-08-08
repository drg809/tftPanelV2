import { SummonersStats, SummonersStatsDetails } from './../../shared/models/summonersStats';
import { SummonerService } from './../../shared/services/summoners.service';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  summonerStats: SummonersStats;
  positions: SummonersStatsDetails;

  constructor(private summonerService: SummonerService) { }
  startAnimationForLineChart(chart) {
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart) {
      let seq2: any, delays2: any, durations2: any;

      seq2 = 1;
      delays2 = 200;
      durations2 = 800;
      chart.on('draw', function(data) {
        if (data.type === 'bar') {
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 1;
  };

  ngOnInit() {
      this.summonerService.getLeaguesEntries().subscribe((data: any) => {
        this.summonerStats = data;
        this.positions = data.positions;



        setTimeout(() => {
          const datawebsiteViewsChart = {
            labels: ['Top1', 'Top2', 'Top3', 'Top4', 'Top5', 'Top6', 'Top7', 'Top8'],
            series: [
              [this.positions.top1, this.positions.top2, this.positions.top3, this.positions.top4, this.positions.top5, this.positions.top6, this.positions.top7, this.positions.top8]
            ]
          };
          const optionswebsiteViewsChart = {
              axisX: {
                  showGrid: false
              },
              low: 0,
              high: 30,
              chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
          };
          const responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                }
              }
            }]
          ];
          const websiteViewsChart = new Chartist.Bar('#websiteViewsChart',
                                                        datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
          this.startAnimationForBarChart(websiteViewsChart);
        }, 100);

        const dataDailySalesChart: any = {
          labels: ['Top 1', 'Top 2', 'Top 3', 'Top 4', 'Top 5', 'Top 6', 'Top 7', 'Top 8'],
          series: [
              [this.positions.top1, this.positions.top2, this.positions.top3, this.positions.top4, this.positions.top5, this.positions.top6, this.positions.top7, this.positions.top8]
          ]
        };

        const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        this.startAnimationForLineChart(dailySalesChart);

      });
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */



     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 30, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [20, 22, 25, 30, 24, 31, 18, 24]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 40, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */




  }

}
