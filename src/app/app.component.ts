import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  width: number = 100;
	height: number = 100;
  params: object = {
    particles: {
      number: {
        value: 150,
      },
      color: {
        value: '#000'
      },
      shape: {
        type: 'triangle',
      },
    }
  };
}
