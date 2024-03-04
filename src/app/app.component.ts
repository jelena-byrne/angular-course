import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// this file allows us to link styles and templates with typeScript logic

// decorator that identifies as an Angular component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // application component linked by templateUrl property
  templateUrl: './app.component.html',
  // application component style file
  styleUrl: './app.component.css'
})

// typeScript class
export class AppComponent {

  data = {
    randomProperty:'Foos!'
  };

  // property title
  title = 'Angular Core Deep Dive';
}
