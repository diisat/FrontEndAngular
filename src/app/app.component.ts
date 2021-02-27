import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CarvajalAngularFrontEnd';
  dia:string;
  respuesta:Int16Array;

  ngOnInit(): void{
    this.dia="1";
  }

  public getNextDay(){
    console.log("El día escrito es: "+ this.dia);
  }


 
}
