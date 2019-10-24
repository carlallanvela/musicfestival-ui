import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENERGY_AUSTRALIA_API } from 'src/app/app.constants';
import { MusicFestival } from '../list-recordlabels/list-recordlabels.component';

@Injectable({
  providedIn: 'root'
})
export class FestivalDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllFestivals() {
    return this.http.get<MusicFestival[]>(`${ENERGY_AUSTRALIA_API}/api/v1/festivals`);
  }
}
