import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../assets/config';
import { Story } from './story';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  public stories: Story[];

  constructor(private http: HttpClient) {
    this._initStories();
    console.log(this.stories);

  }

  _initStories() {
    this.stories = [
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
          { id: 1, name: 'Task1', state: 'not-started' },
          { id: 2, name: 'Task2', state: 'in-progress' },
          { id: 3, name: 'Task3', state: 'done' }]
      },
      {
        id: 3, name: 'Story3',
        tasks: [
          { id: 1, name: 'Task1', state: 'not-started' },
          { id: 2, name: 'Task2', state: 'in-progress' },
          { id: 3, name: 'Task3', state: 'done' }]
      },
      {
        id: 4, name: 'Story4',
        tasks: [
          { id: 1, name: 'Task1', state: 'not-started' },
          { id: 2, name: 'Task2', state: 'in-progress' },
          { id: 3, name: 'Task3', state: 'done' }]
      }
    ];
    this.http.get<any>(CONFIG.BASE_URL + CONFIG.API).subscribe((data) => {
      console.log('data: ', data);
      // this.stories = data;
    });
  }

}
