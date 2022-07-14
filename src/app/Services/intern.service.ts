import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  readonly API_URL = 'http://localhost:8080/internship-app/interns';

  constructor(private httpClient: HttpClient) { }

  getAllInterns() {
    return this.httpClient.get(`${this.API_URL}`);
  }
  addIntern(Intern: any) {
    return this.httpClient.post(`${this.API_URL}/addIntern`, Intern);
  }
  editIntern(Intern: any) {
    return this.httpClient.put(`${this.API_URL}/updateIntern`, Intern);
  }
  deleteIntern(id: any) {
    return this.httpClient.delete(`${this.API_URL}/deleteIntern/${id}`);
  }
  affectSubject(idi: any,ids: any) {
    return this.httpClient.put(`${this.API_URL}/affectSubject/${idi}/${ids}`, null);
  }
}
