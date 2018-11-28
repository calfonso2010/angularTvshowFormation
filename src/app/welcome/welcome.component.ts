import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiService} from '../core/services/api.service';
import {Show} from '../shared/model/show';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  options: {label: string, value: string}[] = [
    {label: 'Popular', value: 'popularity'},
    {label: 'Followed', value: 'followers'}
  ];

  shows: Show[];

  selectedItem: { label: string, value: string } = this.options[0];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBestShow();
  }

  selectItem(event: Event): void {
    this.selectedItem = this.options.find(e => e.value === event.target['value']);
    this.getBestShow();
  }

  private getBestShow() {
    this.apiService.get(environment.best, {order: this.selectedItem.value, limit: 10})
      .subscribe(res => {
        this.shows = res['shows'];
      });
  }

}
