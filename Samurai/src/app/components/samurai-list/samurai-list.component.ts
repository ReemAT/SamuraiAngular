import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-samurai-list',
  templateUrl: './samurai-list.component.html',
  styleUrls: ['./samurai-list.component.scss']
})
export class SamuraiListComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ApiUrl:string = "https://samuraiappapi20210622145951.azurewebsites.net/api/samurai";
  samuraiResults: any[] = [];
  ngOnInit(): void {
    this.httpClient.get<any>(this.ApiUrl, ({ withCredentials: true })).subscribe((result: any) => {
      console.log(result);
      this.samuraiResults = result.$values;
    });
  }

}
