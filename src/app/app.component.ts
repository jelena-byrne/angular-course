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
// mechanism that coordinates interaction between the model/data and the view of the app
export class AppComponent {

  // a way of clearly separating the data/model in our app from the view (html template)
  data = {
    title:'<h1>newbie</h1><script>alert("Attack")</script>' // secure way to update a view of our data - safeguard against common security attacks
  }; // built in change detection mechanism and can also auto sync data with view

  onLogoClicked() {
    alert('Hello world');
  }
  onKeyUp(newTitle:string){

    this.data.title = newTitle;

  }

}
