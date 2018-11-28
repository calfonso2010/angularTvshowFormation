import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {environment} from '../../../environments/environment';
import {Episode} from '../../shared/model/episode';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  @Input()
  id: number;

  @Output()
    episodeWatched = new EventEmitter<string>();

  episodes$: Observable<Episode[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.episodes$ = this.apiService.get(environment.episodes, {id: this.id})
      .pipe(map(res => res['episodes']));
  }
  watchEpisode(code: string){
    this.episodeWatched.emit(code);
  }
}
