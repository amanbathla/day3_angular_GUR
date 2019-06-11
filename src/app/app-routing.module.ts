import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PostdemoComponent } from './components/postdemo/postdemo.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'pipedemo',component:PipedemoComponent},
  {path:'actors',component:ActorlistComponent},
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'posts',component:PostdemoComponent},
  {path:'**' ,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
