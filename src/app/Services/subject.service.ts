import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  readonly API_URL = 'http://internship-back-svc:8082/internship-app/subjects';

  constructor(private httpClient: HttpClient) { }

  getAllSubjects() {
    return this.httpClient.get(`${this.API_URL}`);
  }
  addSubject(Subject: any) {
    return this.httpClient.post(`${this.API_URL}/addSubject`, Subject);
  }
  editSubject(id: any, Subject: any) {
    return this.httpClient.put(`${this.API_URL}/updateSubject/${id}`, Subject);
  }
  deleteSubject(id: any) {
    return this.httpClient.delete(`${this.API_URL}/deleteSubject/${id}`);
  }
}
