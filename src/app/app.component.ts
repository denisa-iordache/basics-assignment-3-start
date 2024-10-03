import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`.newTextColor{
    color: white;
}`]
})
export class AppComponent {
  displayPassword = false;
  clicks = [];
  count = 0;

  onDisplayPress(){
    this.displayPassword = !this.displayPassword;
    // this.count++;
    // this.clicks.push(this.count);
    this.clicks.push(new Date());
  }
}
