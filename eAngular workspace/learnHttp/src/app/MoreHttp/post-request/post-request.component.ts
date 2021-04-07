import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  makePostRequest():boolean{
    console.info('submit clicked !')
    this.loading=true;
    this.http
             .post(
                "https://jsonplaceholder.typicode.com/posts",
                JSON.stringify({
                  body:"bar",
                  title:"3afsa",
                  userId:1
                })
             )
             .subscribe(theData=>{
                this.data=theData,
                this.loading=false
              });
    return false;          
  }

}
