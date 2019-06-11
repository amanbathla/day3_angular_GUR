import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  parentFavDish:string;
  myObject;
  childFavCountry:any;
  data4Child:string;

  constructor() { }

  ngOnInit() {
    this.parentFavDish = '';
    this.myObject={
      data1 :"abc",
      data2:"xyz",
      data3:34
    }
    this.childFavCountry = '';
    this.data4Child = '';

  }

  sendToChild(){
    this.data4Child = this.parentFavDish;
  }
  showCountry(event){
    console.log(event);
    this.childFavCountry = event;
  }

}
