import { Component, OnInit } from '@angular/core';
import { ApiThevirustrackerService } from '../core/api-thevirustracker.service';
import { Api } from '../shared/models/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  items: Api_data[] = [];

  constructor(private apiService: ApiThevirustrackerService) { }

  ngOnInit() {
    this.apiService.list()
      .subscribe({
        next: (data: any) => {
          this.data = data.timelineitems[0];
          /*console.log('data: ' + data.countrytimelinedata[0].info.title);
          console.log('data: ' + data.timelineitems[0]['3/19/2020'].total_cases);
          this.items = data['timelineitems'];*/

          this.getDados('3/18/2020');
          this.getDados('3/19/2020');

        }
      });
  }

  private getDados(dataDesejada: string) {
    let dado: Api_data = new Api_data();
    dado.data = dataDesejada;
    dado.total_cases = this.data[dado.data].total_cases;
    console.log('total_cases: ' + dado.total_cases);
    this.items.push(dado);
  }

}
