import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';

const URL  = 'https://jsonplaceholder.typicode.com';

const httpOptions = {
  headers:new HttpHeaders({
    'content-Type':'application/json',
    'Access-Control-Allow_origin':'*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{
    const endpoints = `${URL}/posts`;
    return this.http.get(endpoints,httpOptions);
  }



  createPost(post:Post){

    const endpoints = `${URL}/posts`;
    return this.http.post(endpoints,post,httpOptions);

  }
}
