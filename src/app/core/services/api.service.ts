import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  static buildUrl(path: string, params?: {[key: string]: string | number}): string {
    let url = environment.endpoint + path;
    let separator = '?';
    Object.keys(params).forEach(k => {
      url = url + separator + k + '=' + params[k];
      separator = '&';
    });
    return url;
  }

  // @ts-ignore
  get<T>(path: string, params?: {[key: string]: string | number}): Observable<T> {
    const url = ApiService.buildUrl(path, params);
    return this.httpClient.get <T>(url, {headers: {'X-BetaSeries-Key': 'dca6069dbd33'}});
  }
}
