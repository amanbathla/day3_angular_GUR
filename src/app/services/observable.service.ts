import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  
  subject:Observable<any>

  constructor() { }

  getData():Observable<any>{

    this.subject = new Observable<any>(
      observer => {
        setTimeout(()=>{
          observer.next(10);
        },2000);

        setTimeout(()=>{
          observer.next(20);
        },4000);

        setTimeout(()=>{
          observer.next(30);
        },6000);

        setTimeout(()=>{
          observer.next({name:'ABCD',age:45});
        },8000);

        



   }
    );
      
    
return this.subject;
  }
}
