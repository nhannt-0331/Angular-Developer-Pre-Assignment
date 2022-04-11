import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { BuilderFormComponent } from './builder-form/builder-form.component';

const routes: Routes = [
  {path: 'form/builder', component: BuilderFormComponent},
  {path: 'form/answers', component: AnswerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
