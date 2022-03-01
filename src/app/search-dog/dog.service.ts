import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

type dataRes = {
  "message": object,
  "status": string
}

type resImage = {
  "message": string,
  "status": string
}


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(public http: HttpClient) { }

  public getDog(): Observable<dataRes> {
    return this.http.get("https://dog.ceo/api/breeds/list/all") as Observable<dataRes>
  }

  public getDogImage(breed: string): Observable<resImage> {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`) as Observable<resImage>
  }
}
