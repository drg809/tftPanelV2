import { SummonersStats, SummonersStatsDetails } from '../../../shared/models/summonersStats';
import { SummonerService } from '../../../shared/services/summoners.service';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Utils } from 'app/shared/helpers/utils';
import { User } from 'app/shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareSumComponent implements OnInit {
  summonerStats: SummonersStats;
  positions: SummonersStatsDetails;
  counts: any;
  user: User;
  summonerStatsOther: SummonersStats;
  positionsOther: SummonersStatsDetails;
  countsOther: any;
  sumId: string | null;

  constructor(private summonerService: SummonerService,
              private route: ActivatedRoute) { }

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

  async ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      this.sumId = this.route.snapshot.paramMap.get('sumId');
      await this.summonerService.getLeaguesEntries({main: this.sumId}).subscribe((x: any) => {
        this.summonerStatsOther = x;
        this.positionsOther = x.positions;
        this.countsOther = x.count;
      });
      this.summonerService.getLeaguesEntries(this.user).subscribe((data: any) => {
        this.summonerStats = data;
        this.positions = data.positions;
        this.counts = data.count;
        const dataPositionMatchesChart = {
          labels: ['Top1', 'Top2', 'Top3', 'Top4', 'Top5', 'Top6', 'Top7', 'Top8'],
          series: [
            [this.positions.top1, this.positions.top2, this.positions.top3, this.positions.top4, this.positions.top5, this.positions.top6, this.positions.top7, this.positions.top8],
            [this.positionsOther.top1, this.positionsOther.top2, this.positionsOther.top3, this.positionsOther.top4, this.positionsOther.top5, this.positionsOther.top6, this.positionsOther.top7, this.positionsOther.top8]
          ]
        };
        //const number = Object.values(this.positions);
        //console.log(number);
        const optionsPositionMatchesChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: this.positions.maxV + 3,
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
                this.countsOther.top4.TFT3_GameVariation_Bonanza,
                this.countsOther.top4.TFT3_GameVariation_FreeNeekos,
                this.countsOther.top4.TFT3_GameVariation_FreeRerolls,
                this.countsOther.top4.TFT3_GameVariation_LittlerLegends,
                this.countsOther.top4.TFT3_GameVariation_MidGameFoN,
                this.countsOther.top4.TFT3_GameVariation_None,
                this.countsOther.top4.TFT3_GameVariation_SmallerBoards,
                this.countsOther.top4.TFT3_GameVariation_StartingItems,
                this.countsOther.top4.TFT3_GameVariation_TwoItemMax,
                this.countsOther.top4.TFT3_GameVariation_TwoStarCarousels,
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
            high: this.counts.perGalaxie.maxV,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        };
        const galaxiesMatchesChart = new Chartist.Bar('#galaxiesMatchesChart', datagalaxiesMatchesChart, optionsgalaxiesMatchesChart, responsiveOptions);

        const datagalaxiesMatchesChart1: any = {
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
              ],
              [
                this.countsOther.total.TFT3_GameVariation_Bonanza,
                this.countsOther.total.TFT3_GameVariation_FreeNeekos,
                this.countsOther.total.TFT3_GameVariation_FreeRerolls,
                this.countsOther.total.TFT3_GameVariation_LittlerLegends,
                this.countsOther.total.TFT3_GameVariation_MidGameFoN,
                this.countsOther.total.TFT3_GameVariation_None,
                this.countsOther.total.TFT3_GameVariation_SmallerBoards,
                this.countsOther.total.TFT3_GameVariation_StartingItems,
                this.countsOther.total.TFT3_GameVariation_TwoItemMax,
                this.countsOther.total.TFT3_GameVariation_TwoStarCarousels,
              ]
          ]
        };
        const optionsgalaxiesMatchesChart1 = {
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
            high: this.counts.perGalaxie.maxV,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        };
        const galaxiesMatchesChart1 = new Chartist.Bar('#galaxiesMatchesChart1', datagalaxiesMatchesChart1, optionsgalaxiesMatchesChart1);

        if (this.summonerStats != null) {
          this.startAnimationForBarChart(galaxiesMatchesChart1);
          this.startAnimationForBarChart(positionsMatchesChart);
          this.startAnimationForBarChart(galaxiesMatchesChart);
        }
      });
  }

}
