

import { Component, OnInit } from '@angular/core';
import { ActionSequence } from 'protractor';
import {Actor} from '../../model/actor.model'
import{ActorService} from '../../services/actor.service'

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {
  

  actorList:Actor[];
  newName:string;
  newCity:string;
  newRating:number;
  tempActor:Actor;
  tempActorList:Actor[];
  
  selectedIndex:number;


    constructor(private actorService:ActorService) { }


  ngOnInit() {
   
   
    this.actorList = this.actorService.getActorList();
    console.log(this.actorList);

    this.newCity = '';
    this.newName = '';
    this.newRating = null;
    this.tempActor = null;
    this.tempActorList = this.actorList.slice();
  }

  addActor(){
    const actor:Actor = {
      name:this.newName,
      city:this.newCity,
      rating:this.newRating
    }

    this.actorService.addActor(actor);
    // this.actorList.push({
    //   name:this.newName ,
    //   city:this.newCity,
    //   rating:this.newRating
 
    // });
   
   this.newCity = '';
   this.newName = '';
   this.newRating = null;

  }

  

  deleteActor(index){
    this.actorService.deleteActor(index);
    //this.actorList.splice(index,1);
  }

  editActor(index){

    this.selectedIndex = index;

    //Aproach 1 (Not Recommended)

    // this.tempActor = {
    //   name:this.actorList[index].name ,
    //   city:this.actorList[index].city,
    //   rating:this.actorList[index].rating
    // } 
  
  //Approach 2(Recommended)
  this.tempActor = JSON.parse(JSON.stringify(this.actorList[index]));

  }


  saveActor(index){
    this.selectedIndex = -1;

  }

  cancelActor(index){
    this.actorService.updateActor(index,this.tempActor);
 //  this.actorList.splice(index,1,this.tempActor);
   this.selectedIndex = -1;
  }




  // Resset and compare functions

  resetList(){
    this.actorList = this.tempActorList.slice();
     }
  
  sortList(prop,direction){
       this.actorList.sort(
         (first,second) =>{
           if(direction == 'ascending'){
             if(prop === 'name' || prop === 'city'){
                if(first[prop] < second[prop]){
                       return -1;
                     }
                 if(first[prop] > second[prop]){
                       return 1;
                 }
                   else{
                     return 0;
                 }
             }
             // else properrty is rating 
             else{
               return first[prop] - second[prop];
             }
           }
           // desending order

           else{
            if(prop === 'name' || prop === 'city'){
              if(first[prop] < second[prop]){
                     return 1;
                   }
               if(first[prop] > second[prop]){
                     return -1;
               }
                 else{
                   return 0;
               }
           }
           // else properrty is rating 
           else{
             return second[prop] - first[prop];
           }

           }
         }      )
     }
}
