import { Injectable } from '@angular/core';
import {Actor} from '../model/actor.model'

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorList:Actor[] = [];

  constructor() {
    
    this.actorList = [
      {name:"Amitabh Bacchan",city:"Mumbai",rating:9.0},
      {name:"Salman Khan",city:"Mumbai",rating:8.0},
      {name:"Kamal Hasan",city:"Chennai",rating:7.0},
      {name:"Deepika Padukone",city:"Mumbai",rating:9.3},
      {name:"Priyanka Chopra",city:"Hollywood",rating:9.3},
      {name:"Rajnikant",city:"Chennai",rating:10.0},
    ];
   }



   getActorList(){
    
     return this.actorList;
   }


   addActor(actor:Actor){
     this.actorList.push(actor);
   }


   deleteActor(index:number){
     this.actorList.splice(index,1);
   }

   updateActor(index:number,actor:Actor){
     this.actorList.splice(index,1,actor);
   }
}
