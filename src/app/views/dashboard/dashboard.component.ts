import { SummonersStats, SummonersStatsDetails } from './../../shared/models/summonersStats';
import { SummonerService } from './../../shared/services/summoners.service';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Utils } from 'app/shared/helpers/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  summonerStats: SummonersStats;
  positions: SummonersStatsDetails;
  counts: any;

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
        this.counts = data.count;
        console.log(data.count);

        const dataPositionMatchesChart = {
          labels: ['Top1', 'Top2', 'Top3', 'Top4', 'Top5', 'Top6', 'Top7', 'Top8'],
          series: [
            [this.positions.top1, this.positions.top2, this.positions.top3, this.positions.top4, this.positions.top5, this.positions.top6, this.positions.top7, this.positions.top8]
          ]
        };
        const optionsPositionMatchesChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 30,
            height: '250px',
            chartPadding: { top: 0, right: 2, bottom: 0, left: 0}
        };
        const responsiveOptions: any[] = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 3,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        const positionsMatchesChart = new Chartist.Bar('#positionsMatchesChart', dataPositionMatchesChart, optionsPositionMatchesChart, responsiveOptions);
        this.startAnimationForBarChart(positionsMatchesChart);

        const datagalaxiesMatchesChart: any = {
          labels: [
            Utils.getGalaxie('TFT3_GameVariation_Bonanza'),
            Utils.getGalaxie('TFT3_GameVariation_FreeNeekos'),
            Utils.getGalaxie('TFT3_GameVariation_FreeRerolls'),
            Utils.getGalaxie('TFT3_GameVariation_LittlerLegends'),
            Utils.getGalaxie('TFT3_GameVariation_MidGameFoN'),
            Utils.getGalaxie('TFT3_GameVariation_None'),
            Utils.getGalaxie('TFT3_GameVariation_SmallerBoards'),
            Utils.getGalaxie('TFT3_GameVariation_StartingItems'),
            Utils.getGalaxie('TFT3_GameVariation_TwoItemMax'),
            Utils.getGalaxie('TFT3_GameVariation_TwoStarCarousels'),
          ],
          series: [
              [
                this.counts.top4.TFT3_GameVariation_Bonanza,
                this.counts.top4.TFT3_GameVariation_FreeNeekos,
                this.counts.top4.TFT3_GameVariation_FreeRerolls,
                this.counts.top4.TFT3_GameVariation_LittlerLegends,
                this.counts.top4.TFT3_GameVariation_MidGameFoN,
                this.counts.top4.TFT3_GameVariation_None,
                this.counts.top4.TFT3_GameVariation_SmallerBoards,
                this.counts.top4.TFT3_GameVariation_StartingItems,
                this.counts.top4.TFT3_GameVariation_TwoItemMax,
                this.counts.top4.TFT3_GameVariation_TwoStarCarousels,
              ],
              [
                this.counts.total.TFT3_GameVariation_Bonanza,
                this.counts.total.TFT3_GameVariation_FreeNeekos,
                this.counts.total.TFT3_GameVariation_FreeRerolls,
                this.counts.total.TFT3_GameVariation_LittlerLegends,
                this.counts.total.TFT3_GameVariation_MidGameFoN,
                this.counts.total.TFT3_GameVariation_None,
                this.counts.total.TFT3_GameVariation_SmallerBoards,
                this.counts.total.TFT3_GameVariation_StartingItems,
                this.counts.total.TFT3_GameVariation_TwoItemMax,
                this.counts.total.TFT3_GameVariation_TwoStarCarousels,
              ]
          ]
        };
        const optionsgalaxiesMatchesChart = {
            axisX: {
                scaleMinSpace: 50,
                offset: 30
            },
            axisY: {
                offset: 120,
            },
            height: '250px',
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            low: 0,
            high: 30,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        };
        const galaxiesMatchesChart = new Chartist.Bar('#galaxiesMatchesChart', datagalaxiesMatchesChart, optionsgalaxiesMatchesChart, responsiveOptions);
        this.startAnimationForBarChart(galaxiesMatchesChart);

        const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 30, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }

        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        const dataChampsChart: any = {
            labels: [this.counts.champs[0].x.split('TFT3_')[1], this.counts.champs[1].x.split('TFT3_')[1], this.counts.champs[2].x.split('TFT3_')[1], this.counts.champs[3].x.split('TFT3_')[1], this.counts.champs[4].x.split('TFT3_')[1], this.counts.champs[5].x.split('TFT3_')[1], this.counts.champs[6].x.split('TFT3_')[1], this.counts.champs[7].x.split('TFT3_')[1]],
            series: [
                [this.counts.champs[0].y, this.counts.champs[1].y, this.counts.champs[2].y, this.counts.champs[3].y, this.counts.champs[4].y, this.counts.champs[5].y, this.counts.champs[6].y, this.counts.champs[7].y]
            ]
        };

        const optionsChampsChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            reverseData: true,
            horizontalBars: true,
            height: '250px',
            high: 60,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        }

        const completedTasksChart = new Chartist.Line('#champsChart', dataChampsChart, optionsChampsChart);

        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
      });
  }

}
