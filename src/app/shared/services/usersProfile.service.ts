import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserProfile} from '../models/userProfile';


@Injectable({providedIn: 'root'})
export class UserProfileService {
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<UserProfile[]>(this.apiUrl + '/profile');
  }

  getById(id: string) {
    return this.http.get<UserProfile>(this.apiUrl + '/profile/' + id);
  }

  getByUserId(userId: any) {
    return this.http.get<UserProfile>(this.apiUrl + '/profile/user/' + userId);
  }

  create(data: UserProfile) {
    return this.http.post<UserProfile>(this.apiUrl + '/profile/', data);
  }

  update(data: UserProfile) {
    return this.http.put<UserProfile>(this.apiUrl + '/profile/', data);
  }

  remove(id: string) {
    return this.http.delete<any>(this.apiUrl + '/profile/' + id);
  }
}
