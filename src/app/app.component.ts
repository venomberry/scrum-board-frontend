import { Component } from '@angular/core';
import { StoriesService } from './services/stories.service';
import { Story } from './services/story';
import { Task } from './services/task';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public stories: Story[];
  public chosenTask: Task;

  constructor(private storiesService: StoriesService) {
    this.stories = storiesService.stories;
    this.chosenTask = {};
    this.chosenTask.id = null;
    this.chosenTask.name = '';
    this.chosenTask.state = '';

  }

  log(task: Task) {
    console.log(task);
    this.chosenTask = task;
  }
}
