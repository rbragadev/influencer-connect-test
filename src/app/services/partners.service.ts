import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, take, tap } from 'rxjs';

import { Partners } from '../Partners.Interface';
import { ResponsePartner } from '../Partners.Interface';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  private readonly API = `${environment.API}`;

  /*httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };*/

  partners: ResponsePartner[] = [];

  constructor(private httpClient: HttpClient) {
    this.partners = this.partners;
  }

  public getPartners(): Observable<ResponsePartner> {
    return this.httpClient.get<ResponsePartner>(`${this.API}partner`);
  }

  public getPartner(id: number): Observable<ResponsePartner> {
    return this.httpClient
      .get<ResponsePartner>(`${this.API}partner/${id}`)
      .pipe(tap((data) => console.log(data)));
  }

  createPartner(partners: any) {
    return this.httpClient.post(`${this.API}partner`, partners).pipe(take(1));
  }

  //TODO******************************************
  //Make soft delete method
  removePartner(id: number) {
    return from(this.httpClient.delete(`${this.API}partner/${id}`));
  }
  //*************************************************

  //TODO******************************************
  //make Edit method
  updatePartner(id: number, formData: FormData): Observable<FormData> {
    return this.httpClient.patch<FormData>(
      `${this.API}partner/${id}`,
      formData
    );
  }
}
