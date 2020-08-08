import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Summoner} from '../models/summoner';
import { SumMatch, MatchesPagination } from '../models/match';


@Injectable({ providedIn: 'root' })
export class SummonerService {
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Summoner[]>(this.apiUrl + '/summoners');
  }

  getById(id: string) {
    return this.http.get<Summoner>(this.apiUrl + '/summoners/' + id);
  }

  getByUserId(id: string) {
    return this.http.get<Summoner>(this.apiUrl + '/summoners/users/' + id);
  }

  create(data: Summoner) {
    console.log('service');
    return this.http.post<Summoner>(this.apiUrl + '/summoners/', data);
  }

  update(data: Summoner) {
    return this.http.put<Summoner>(this.apiUrl + '/summoners/', data);
  }

  remove(id: string) {
    return this.http.delete<any>(this.apiUrl + '/summoners/' + id);
  }

  getMatches(data: any) {
    console.log(data);
    return this.http.post<Summoner>(this.apiUrl + '/summoners/get_matches_ext', data);
  }

  setLastMatchInfo(data: any) {
    return this.http.post<Summoner>(this.apiUrl + '/summoners/match_info_ext', data);
  }

  getMatchInfo(id: string | null) {
    return this.http.get<SumMatch>(this.apiUrl + '/summoners/match/' + id);
  }

  setMainSummoner(data: any) {
    return this.http.put<Summoner>(this.apiUrl + '/summoners/main/' + data.id, data);
  }

  getMatchesHistoric(params: any) {
    return this.http.post<MatchesPagination>(this.apiUrl + '/summoners/match_history/' + params.userId, params);
  }

  getLeaguesEntriesExt() {
    return this.http.post<any>(this.apiUrl + '/summoners/leagueEntries_ext', {});
  }

  getApexLeaguesEntriesExt() {
    return this.http.post<any>(this.apiUrl + '/summoners/apexLeagues_ext', {});
  }

  getLeaguesEntries() {
    return this.http.post<any>(this.apiUrl + '/summoners/stats', {});
  }
}
