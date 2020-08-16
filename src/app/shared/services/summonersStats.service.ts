import { SummonersStats } from './../models/summonersStats';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class SummonerStatsService {
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getOne(summonerId: string) {
    return this.http.get<SummonersStats>(this.apiUrl + '/summonerStats/' + summonerId );
  }
}
