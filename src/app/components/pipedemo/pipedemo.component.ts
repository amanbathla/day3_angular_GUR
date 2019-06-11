import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  message:string;
  today:Date;
  student;
  price:number;
  constructor() { }

  ngOnInit() {
    this.message = "Welcome to Pipe demo";
    this.today = new Date();
    this.student = {
      name:'ABCD',
      cgpa:3.5
    };

    this.price = 23.8;
  }

}
