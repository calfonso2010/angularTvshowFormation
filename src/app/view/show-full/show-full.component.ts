import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../core/services/api.service';
import {environment} from '../../../environments/environment';
import {Show} from '../../shared/model/show';

@Component({
  selector: 'app-show-full',
  templateUrl: './show-full.component.html',
  styleUrls: ['./show-full.component.scss']
})
export class ShowFullComponent implements OnInit {

  show: Show;
  lastView: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.get(environment.full, {id: id}).subscribe(
      res => {
        this.show = res['show'];
      });
  }

  episodeWatched(code: string): void {
    this.lastView = code;
  }

}
