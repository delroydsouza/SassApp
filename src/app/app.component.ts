import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SassApp';
  constructor(){}

  changeTheme(theme:string){
    document.body.className=''
    document.body.classList.add(theme)
  }
}

enum THEME {
  BLUE="blue",
  GREEN="green",
  RED="red"
}