import { Component, OnInit } from '@angular/core';
import { FestivalDataService } from '../service/FestivalDataService';

export class MusicFestival {
  constructor(
    public name: string,
    public band: Band
  ) {}
}

export class Band {
  constructor(
    public name: string,
    public recordLabel: string
  ) {}
}

@Component({
  selector: 'app-list-recordlabels',
  templateUrl: './list-recordlabels.component.html',
  styleUrls: ['./list-recordlabels.component.css']
})
export class ListRecordLabelsComponent implements OnInit {
  musicFestivals = [];
  constructor(private festivalDataService: FestivalDataService) { }

  ngOnInit() {
    this.refreshMusicFestival();
  }

  refreshMusicFestival() {
    this.festivalDataService.retrieveAllFestivals().subscribe(
      response => {
        console.log(response);
        this.musicFestivals = response;
      }
    );
  }
}
