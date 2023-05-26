import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  public questions: any[] = [];
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
      console.log(data);
      this.questions = data;
    });
  }

  saveUserResponse(data: any): void {
    const doubeldValue = this.userResponse.find(
      (userRep) => userRep.questionId === data.questionId
    );
    if (doubeldValue) {
      console.log('if work');
      this.userResponse = this.userResponse.filter(
        (userRep) => userRep.questionId !== data.questionId
      );
    }
    this.userResponse.push(data);
    console.log(this.userResponse);
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
