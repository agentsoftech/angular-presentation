import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../../../../../libs/slides/src/slide-routes';
import { FeedbackModule } from '../../../feedback/feedback.module';
import { QuizComponent } from './quiz.component';
import { SlidesModule } from '../../../../../../../libs/slides/src/slides.module';
import { ExerciseModule } from '../../../exercise/exercise.module';

const routes = RouterModule.forChild(
  SlidesRoutes.get(QuizComponent)
);

@NgModule({
  imports: [routes, SlidesModule, FeedbackModule, ExerciseModule],
  declarations: [QuizComponent],
  exports: [QuizComponent]
})
export class QuizModule {

}
