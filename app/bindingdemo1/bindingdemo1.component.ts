import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingdemo1',
  templateUrl: './bindingdemo1.component.html',
  styleUrls: ['./bindingdemo1.component.css']
})
export class Bindingdemo1Component {
  name:string;
  constructor(){
    this.name="achu";
  }
  sayhello(){
    alert("hello"+this.name);
  }
}
