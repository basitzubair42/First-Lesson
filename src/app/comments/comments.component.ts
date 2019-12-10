import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

comments=null;

constructor(private cmt : HttpClient) {
  this.cmt
    .get('https://jsonplaceholder.typicode.com/comments')
    .subscribe(response => {
      this.comments = response;
    });
  }

  ngOnInit() {
  }

}
