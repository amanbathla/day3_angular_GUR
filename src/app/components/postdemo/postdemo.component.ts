import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import{PostService} from '../../services/post.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-postdemo',
  templateUrl: './postdemo.component.html',
  styleUrls: ['./postdemo.component.css']
})
export class PostdemoComponent implements OnInit {

  postList:any;

  constructor(private postService:PostService) { 

  }

  ngOnInit() {
    this.postService.getPosts().subscribe(data=>{
      this.postList = data;
    })
  }

  createPost(){
    const post:Post = {
      id:null,
      title:'New post title',
      body:'hello and welcome to thr new blog post'
    }

    this.postService.createPost(post).subscribe(  data =>{
        this.postList.unshift(data);}
      )
    
  }

}
