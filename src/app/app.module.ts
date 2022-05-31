import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamComponent } from './pages/exams/exam/exam.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './pages/exams/result/result.component';

@NgModule({
  declarations: [AppComponent, ExamComponent, HeaderComponent,FooterComponent, ResultComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
