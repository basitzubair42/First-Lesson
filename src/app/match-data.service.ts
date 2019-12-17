import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {
  matchResults = [
    {
      homeTeam: 'Lions',
      guestTeam: 'Pacers',
      matchType: 'T20',
      league: 'CTCL Summer T20 Div A-League',
      ground: 'Round Rock Cricket Ground',
      tossWond: 'Lions',
      matchDate: 'Dec 8, 2019',
      matchNumber: '14',
      firstInnings: {
        teamName: 'Lions',
        score: '157',
        wickets: '8',
        overs: 20.0
      },
      secondInnings: {
        teamName: 'Pacers',
        score: '158',
        wickets: '7',
        overs: 19.4
      }
    }
  ];

  constructor() { }

  getName(){
    return "basit";
  }
}
