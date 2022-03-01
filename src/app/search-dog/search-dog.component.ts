import { Component, OnInit } from '@angular/core';
import {DogService} from "./dog.service";
import {LoadingService} from "./loading.service";
import {NetworkInterceptor} from "./network.interceptor";

type dataRes = {
  "message": object,
  "status": string
}
type resImage = {
  "message": string,
  "status": string
}
@Component({
  selector: 'app-search-dog',
  templateUrl: './search-dog.component.html',
  styleUrls: ['./search-dog.component.scss']
})

export class SearchDogComponent implements OnInit {
  public options: Array<string> = [];
  public selectedItem: string = "";
  public imageUrl: string = "";
  public loading$ = this.loader.loading$;

  public selectDog () {

    this.dogService.getDogImage(this.selectedItem).subscribe((data: resImage) => {
      this.imageUrl = data.message;
  })
  }

  constructor(public dogService: DogService, public loader: LoadingService) {
    this.dogService.getDog().subscribe((data: dataRes) => {
      console.log(data.message);
      this.options = Object.keys(data.message);
      console.log(this.options);
    })

    }


  ngOnInit(): void {
  }
}
