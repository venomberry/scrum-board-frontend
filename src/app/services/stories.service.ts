import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../assets/config';
import { Story } from './story';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  public stories: Story[] = [];

  constructor(private http: HttpClient) {
    this._initStories();
    console.log(this.stories);

  }

  _initStories() {
    // Au cas ou l'application node ne marche pas, tu peux essayer avec ce mock
    /*this.stories = [
      {
        id: 1, name: 'Story1',
        tasks: [
          { id: 1, name: 'Task1', state: 'not-started' },
          { id: 2, name: 'Task2', state: 'in-progress' },
          { id: 3, name: 'Task3', state: 'done' }]
      },
      {
        id: 2, name: 'Story2',
        tasks: [
          { id: 4, name: 'Task1', state: 'not-started' },
          { id: 5, name: 'Task2', state: 'in-progress' },
          { id: 6, name: 'Task3', state: 'done' }]
      },
      {
        id: 3, name: 'Story3',
        tasks: [
          { id: 7, name: 'Task1', state: 'not-started' },
          { id: 8, name: 'Task2', state: 'in-progress' },
          { id: 9, name: 'Task3', state: 'done' }]
      },
      {
        id: 4, name: 'Story4',
        tasks: [
          { id: 10, name: 'Task1', state: 'not-started' },
          { id: 11, name: 'Task2', state: 'in-progress' },
          { id: 12, name: 'Task3', state: 'done' }]
      }
    ];*/
    this.http.get(CONFIG.BASE_URL + '/stories').subscribe((data) => {
      for (let index = 0; index < Object.keys(data).length; index++) {
        this.stories.push(data[index]);
      }
    });
  }

}
