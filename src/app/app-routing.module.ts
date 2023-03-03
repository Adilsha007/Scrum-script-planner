import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoSelectedStoriesComponent } from './auto-selected-stories/auto-selected-stories.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryFormComponent } from './story-form/story-form.component';

const routes: Routes = [
  { path: 'add-story', component: StoryFormComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'sprit-calculater', component: SprintCalculatorComponent },
  { path: 'auto-story', component: AutoSelectedStoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
