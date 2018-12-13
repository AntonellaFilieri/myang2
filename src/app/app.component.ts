import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myang';
  myArticle;
  constructor() {
    this.myArticle = {
      title: 'Creare componenti Angular 2',
      author: 'Mario Rossi',
      content: 'Creare componenti con Angular 2 è molto semplice.',
      numberlike: 0,
    };
  }
}
