import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  public questions: any[] = [];

  constructor(private service: QuestionService) {}

  ngOnInit(): void {}

  getQuestions(): void {
    this.service.getQuestions().subscribe((data) => {
      this.questions = data;
    });
  }
}
