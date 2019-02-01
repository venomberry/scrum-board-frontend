import { Component } from '@angular/core';
import { StoriesService } from './services/stories.service';
import { Story } from './services/story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public stories: Story[];

  constructor(private storiesService: StoriesService) {
    this.stories = storiesService.stories;
  }
}
