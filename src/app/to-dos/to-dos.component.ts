import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})


export class ToDosComponent implements OnInit {
 
  todos=null;

  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe(response => {
        this.todos = response;
      });
    }
  ngOnInit() {
  }

}
