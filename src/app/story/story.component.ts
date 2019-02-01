import { Component, OnInit, Input } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { Story } from '../services/story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;

  public stories: Story[];

  constructor(private storiesService: StoriesService) {
    this.stories = storiesService.stories;
  }

  ngOnInit() {
  }

}
