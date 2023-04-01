import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyModel } from '../models/company.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(private _httpClient: HttpClient) {
  }

  getInfo(): Observable<CompanyModel> {
    return this._httpClient.get<CompanyModel>(environment.companyEndpoint);
  }
}
