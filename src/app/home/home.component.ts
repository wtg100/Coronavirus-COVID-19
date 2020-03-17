import { Component, OnInit } from '@angular/core';
import { ApiThevirustrackerService } from '../core/api-thevirustracker.service';
import { Api } from '../shared/models/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  api: Api[];

  constructor(private apiService: ApiThevirustrackerService) { }

  ngOnInit() {
    this.apiService.list().subscribe((api: Api[]) => this.api = api);
  }

}
