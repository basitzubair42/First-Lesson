import { Component, OnInit } from '@angular/core';
import { MatchDataService } from '../match-data.service';

@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.css']
})
export class MatchResultsComponent implements OnInit {

  matchData = null;
  getName = null;


  constructor(private md: MatchDataService) {


    this.matchData = md.matchResults;
    //this.getName=md.getName()//
  }

  getData() {
    this.getName = this.md.getName()
  }

  ngOnInit() {
  }

}
