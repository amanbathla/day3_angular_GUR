import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { ActorService } from '../app/services/actor.service'
import { ObservableService } from '../app/services/observable.service'
import { PostService } from './services/post.service';

import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';

import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ObservabledemoComponent } from './components/observabledemo/observabledemo.component';


import { PostdemoComponent } from './components/postdemo/postdemo.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component'


@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    ParentComponent,
    ChildComponent,
    PipedemoComponent,
    ReverseTextPipe,
    PiglatinPipe,
    ObservabledemoComponent,
    PostdemoComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ActorService,ObservableService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
