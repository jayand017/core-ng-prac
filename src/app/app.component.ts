import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ninja = {
    name: '',
    belt: ''
  }

  onName(val)
  {
    this.ninja.name = val;
  }

  onBelt(val)
  {
    this.ninja.belt = val;
  }
}
