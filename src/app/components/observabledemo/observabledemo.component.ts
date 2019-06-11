import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import{ObservableService} from '../../services/observable.service'

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {

  myData:Observable<any>;

  constructor(private myService:ObservableService) { }

  ngOnInit() {

    this.myService.getData().subscribe(data => {
      this.myData = data;
    }
    );

  }

}
