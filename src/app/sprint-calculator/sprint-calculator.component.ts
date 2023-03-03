import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { StoryDetailsService } from '../service/story.details.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.css'],
})
export class SprintCalculatorComponent {
  sprintpoint!: number;

  constructor(
    private storyService: StoryDetailsService,
    private router: Router
  ) {}

  storyCalculatorClicked(storyCalculatorForm: NgForm) {
    console.log(storyCalculatorForm.value);
    this.sprintpoint = storyCalculatorForm.value.sprintpoint;
    const autoSelectedStories = this.storyService.autoSelectStories(
      this.sprintpoint
    );
    console.log(autoSelectedStories);
    this.router.navigate(['/auto-story']);
  }

  clearStoriesClicked() {
    this.storyService.clearStories()
  }

  clearSprintClicked() {
    this.storyService.clearSprints()
  }
}
