import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {MatchNotes} from '../models/matchNotes';


@Injectable({providedIn: 'root'})
export class MatchNotesServices {
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getAll(entrieId: string) {
    return this.http.get<MatchNotes[]>(this.apiUrl + '/match_notes/' + entrieId);
  }

  getMyNotes(entrieId: string, userId: string) {
    return this.http.get<MatchNotes[]>(this.apiUrl + '/match_notesh/' + entrieId + '/' + userId);
  }

  create(data: MatchNotes) {
    return this.http.post<MatchNotes>(this.apiUrl + '/match_notes/', data);
  }

  update(data: MatchNotes) {
    return this.http.put<MatchNotes>(this.apiUrl + '/match_notes/', data);
  }

  remove(id: string) {
    return this.http.delete<MatchNotes>(this.apiUrl + '/match_notes/' + id);
  }
}
