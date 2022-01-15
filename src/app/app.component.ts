import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Calculator';
  fnumb!: number;
  snumb!: number;
  ans!: number;
  
  constructor(){

  }
  public inputfnumb(event:any){
    console.log(event.target.value);
    this.fnumb = event.target.value;
  }

  public inputsnumb(event:any){
    console.log(event.target.value);
    this.snumb = event.target.value;
  }
public plus(){
    this.ans = +this.fnumb  +  +this.snumb;
    console.log(this.ans); 
}
public minus(){
  this.ans = +this.fnumb  -  +this.snumb;
  console.log(this.ans);
}
public division(){
  this.ans = +this.fnumb  /  +this.snumb;
  console.log(this.ans);
}
public multiplication(){
  this.ans = +this.fnumb  *  +this.snumb;
  console.log(this.ans);
}
public clear(){
  this.ans = 0 ;
  
}
}
