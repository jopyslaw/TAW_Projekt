import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { QuestionModel } from 'src/app/models/question.model';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  public questions: QuestionModel[] = [];
  userResponse: any[] = [];

  constructor(
    private service: QuestionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.service.getQuestions().subscribe((data) => {
      this.questions = data;
    });
  }

  saveUserResponse(data: any): void {
    const doubeldValue = this.userResponse.find(
      (userRep) => userRep.questionId === data.questionId
    );
    if (doubeldValue) {
      this.userResponse = this.userResponse.filter(
        (userRep) => userRep.questionId !== data.questionId
      );
    }
    this.userResponse.push(data);
  }

  finishGame(): void {
    let points: number = 0;
    this.userResponse.forEach((data, index) => {
      const question = this.questions[index];
      if (data.answer === question.goodAnswer) {
        points++;
      }
    });
    this.router.navigate(['end/' + points]);
  }
}
