import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FieldsService {

  constructor(private http: HttpClient) { }


  getFields() {
    return this.http.get('/assets/fields.json')
      .toPromise()
    }

}
