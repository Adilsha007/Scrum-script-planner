import { Component, OnInit } from '@angular/core';
import { StoryDetailsService } from '../service/story.details.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  stories!: Array<{ name: string; point: number }>;

  constructor(private storyService: StoryDetailsService) {}

  ngOnInit(): void {
    this.stories=this.storyService.getStories()
  }
}
