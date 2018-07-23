import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'Holy fucking ***';
  version:Number = 1.0;
  disabled:boolean = true;

  changeTitle(event){
    //console.log(event.target.value);
    this.title = event.target.value;
  }
}
