import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, tap } from 'rxjs';

import { Partners } from '../Partners.Interface';
import { ResponsePartner } from '../Partners.Interface';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  apiUrl: string = 'http://localhost:3000';

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  partners: ResponsePartner[] = [];

  constructor(private httpClient: HttpClient) {
    this.partners = this.partners;
  }

  public getPartners(): Observable<ResponsePartner[]> {
    return this.httpClient.get<ResponsePartner[]>(
      `${this.apiUrl}/influencer-connect/partner`
    );
  }

  public getPartner(id: number): Observable<ResponsePartner> {
    return this.httpClient
      .get<ResponsePartner>(`${this.apiUrl}/influencer-connect/partner/${id}`)
      .pipe(tap((data) => console.log(data)));
  }

  createPartner(formData: FormData): Observable<FormData> {
    return this.httpClient.post<FormData>(
      `${this.apiUrl}/influencer-connect/partner`,
      formData
    );
  }

  //TODO******************************************
  //Make soft delete method
  removePartner(id: number) {
    return from(
      this.httpClient.delete(`${this.apiUrl}/influencer-connect/partner/${id}`)
    );
  }
  //*************************************************

  //TODO******************************************
  //make Edit method
  updatePartner(id: number, formData: FormData): Observable<FormData> {
    return this.httpClient.patch<FormData>(
      `${this.apiUrl}/influencer-connect/partner/${id}`,
      formData
    );
  }
}
