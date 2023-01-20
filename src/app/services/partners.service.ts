import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Partners } from '../Partners.Interface';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewPartnersService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/influencer-connect/partner`;

  constructor(private httpClient: HttpClient) {}

  createPartner(formData: FormData): Observable<FormData> {
    return this.httpClient.post<FormData>(this.apiUrl, formData);
  }
}
