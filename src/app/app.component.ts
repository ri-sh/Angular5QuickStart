import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tabs = [ 
    {name:"Home", link:"/main"},
    {name:"Segments", link:"/segments"},
    {name:"Product-Recommendation", link:"/main"},
    {name:"Review", link:"/"}
   ];
}
