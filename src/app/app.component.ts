import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`.newTextColor{
    color: grey;
}`]
})
export class AppComponent {
  displayPassword = false;
  clicks = [];
  count = 0;

  onDisplayPress(){
    this.displayPassword = true;
    this.count++;
    this.clicks.push(this.count);
  }

  // getColor(){
  //   return this.clicks.length > 4 ? 'blue' : 'red';
// }
}
