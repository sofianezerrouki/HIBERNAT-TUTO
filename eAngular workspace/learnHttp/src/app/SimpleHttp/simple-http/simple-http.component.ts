import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {

  data:Object;
  loading:boolean;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
  }

  makeRequest():boolean{
    this.loading=true;
    this.http
              .get('https://jsonplaceholder.typicode.com/posts/1')
              .subscribe(theData =>{
                  this.data=theData;
                  this.loading=false;
              });

    return false;
  }  
}
