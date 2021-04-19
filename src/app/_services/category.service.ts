import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../_model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly APIUrl = 'http://localhost:22566/api';
  //readonly PhotoUrl = 'http://localhost:50439/Photos';

  constructor(private http: HttpClient) { }

  getCateList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/categories');
  }

}
