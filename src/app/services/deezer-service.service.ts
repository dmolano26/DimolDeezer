import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeezerServiceService {
  public deezerApi: String;

  constructor(public http: HttpClient) {
    this.deezerApi = "https://api.deezer.com/";
  }

  getProfiles() {
    return this.http.get('https://api.myjson.com/bins/w076v');
  }

  getProfileDetail(profileId) {
    return this.http.get(this.deezerApi + 'user/' + profileId);
  }

}
