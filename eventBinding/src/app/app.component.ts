import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventBinding';

  myButtonfun(myeventdata:any)
  {
    console.log("I am working");
    console.log(myeventdata);
  }

}
