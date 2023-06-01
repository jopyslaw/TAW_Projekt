import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private url = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/questions');
  }

  getQuestionsForCategory(categoryId: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/questions/' + categoryId);
  }

  addQuestion(data: any): Observable<any> {
    return this.http.post(this.url + '/question', data);
  }

  deleteQuestion(questionId: string): Observable<any> {
    return this.http.delete(this.url + '/question/' + questionId);
  }

  getQuestionById(questionId: string): Observable<any> {
    return this.http.get(this.url + '/question/' + questionId);
  }
}
