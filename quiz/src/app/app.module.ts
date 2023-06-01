import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/questions/question/question.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CategoryService } from './services/category.service';
import { AuthService } from './services/auth.service';
import { QuestionService } from './services/question.service';
import { EndScreenComponent } from './components/end-screen/end-screen.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ModifyDataComponent } from './components/modify-data/modify-data.component';
import { FormsModule } from '@angular/forms';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CategoryComponent,
    QuestionsComponent,
    QuestionComponent,
    SigninComponent,
    SignupComponent,
    EndScreenComponent,
    AddDataComponent,
    ModifyDataComponent,
    UpdateDataComponent,
    UpdateCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    CategoryService,
    AuthService,
    QuestionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
