import { Component } from '@angular/core';
@Component({
  selector: 'msg-app',
  templateUrl: 'app/app.component.html', 
  styleUrls: ['app/app.component.css']
})
export class AppComponent { 
   message = "Hello Angular 2 World with TypeScript";
}