import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './pages/exams/exam/exam.component';
import { ResultComponent } from './pages/exams/result/result.component';

const routes: Routes = [
  {path:'exam',component:ExamComponent},
  {path:'result',component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
