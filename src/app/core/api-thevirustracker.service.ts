import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Api } from '../shared/models/api';

const url = 'https://thevirustracker.com/free-api?countryTimeline=BR'

@Injectable({
  providedIn: 'root'
})

export class ApiThevirustrackerService {

  constructor(private http: HttpClient) { }

  list(): Observable<Api[]> {
    return this.http.get<Api[]>(url);
  }
}
