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
    this.chosenTask = { id: null, name: '', state: ''};
  }

  log(task: Task) {
    console.log(task);
    this.chosenTask = task;
  }

  moveToProgress(chosenTask: Task) {
    this.chosenTask.state = 'in-progress';
  }

  moveToDone(chosenTask: Task) {
    this.chosenTask.state = 'done';
  }
}
