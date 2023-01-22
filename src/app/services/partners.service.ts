import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

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
}
/*getAllPartners() {
    this.httpClient
      .get<ResponsePartner[]>(`${this.apiUrl}/influencer-connect/partner`)
      .subscribe((res) => {
        let partners = res;
        for (let partner of partners) {
          console.log(partner.partner_first_name);
        }
        console.log(res[0].partner_first_name);
        console.log(partners);
      });
  }
}

/*public getPartners(): Observable<ResponsePartner[]> {
    return this.httpClient.get<ResponsePartner[]>(
      host + 'influencer-connect/partner'
    );
  }

  public getPartners() {
    return this.httpClient
      .get(`${host} + /influencer-connect/partner`)
      .subscribe((res) => console.log(res));
  }*/

/*export class NewPartnersService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/influencer-connect/partner`;

  constructor(private httpClient: HttpClient) {}

  public getPartners(): Observable<Response<Partners[]>> {
    return this.httpClient.get<Response<Partners[]>>(this.apiUrl);
  }

  createPartner(formData: FormData): Observable<FormData> {
    return this.httpClient.post<FormData>(this.apiUrl, formData);
  }
}*/
