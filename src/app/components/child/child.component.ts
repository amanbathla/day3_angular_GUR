import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import {Output} from '@angular/core'
import{ EventEmitter } from '@angular/core'
import { from } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  favCountry:string;

  @Input() favDish:string;
  @Input() customData:Object;

  @Output() countryEvent = new EventEmitter();

  constructor() {
    
   }

  ngOnInit() {
    this.favCountry = '';
  }
  
  sendData2Parent(){
  this.countryEvent.emit(this.favCountry);

  }

}
