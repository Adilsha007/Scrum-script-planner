import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoryDetailsService } from '../service/story.details.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css'],
})
export class StoryFormComponent {
  story = {
    name: '',
    point: null,
  };

  message! : string | null

  constructor(private storyService: StoryDetailsService){};

  addStoryClicked(storyForm: NgForm){
   
    const name = storyForm.value.name
    const point = storyForm.value.point
    this.storyService.addStory(name,point)
    
  }
}