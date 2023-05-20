import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(this.url + '/api/categories');
  }
}
