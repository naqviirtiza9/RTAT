import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private username="Irtiza"

  get UserName(){
    return this.username;
  }

  OnClick(){
    alert("Clicked")
  }
}
