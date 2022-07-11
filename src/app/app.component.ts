import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';

  ckChange(event:any) {
    console.log('ck change in app component...', event);
  }

  ckDataChange(event: any) {
    console.log('ck data change in app component...', event);
  }
}
