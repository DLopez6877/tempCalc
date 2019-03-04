import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MlsPlayer } from '../models/mls-player';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MlsService {
  private players: Observable<MlsPlayer[]>;

  constructor(private http: HttpClient) { }

  private initializePlayers(): Observable<MlsPlayer[]> {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://fgp-data-us.s3.amazonaws.com/json/mls_mls/players.json?_=1550956194696';
    this.players = this.http.get<MlsPlayer[]>(corsAnywhere + url).pipe(
      map (res => {
        res.forEach(player => {
          player.squad_name = this.translateSquadId(player.squad_id);
        });
        return res;
      })
    );
    return this.players;
  }

  getPlayers(): Observable<MlsPlayer[]> {
    if (this.players == null) {
      this.initializePlayers();
    }
    return this.players;
  }

  translateSquadId(id: number): string {
    // tslint:disable: curly
    if ( id === 11091 )
      return 'Atlanta United FC';
    if ( id === 1207 )
      return 'Chicago Fire';
    if ( id === 436 )
      return 'Colorado Rapids';
    if ( id === 454 )
      return 'Columbus Crew SC';
    if ( id === 1326 )
      return 'Columbus Crew SC';
    if ( id === 11504 )
      return 'FC Cincinnati';
    if ( id === 1903 )
      return 'FC Dallas';
    if ( id === 1897 )
      return 'Houston Dynamo';
    if ( id === 1230 )
      return 'LA Galaxy';
    if ( id === 11690 )
      return 'Los Angeles FC';
    if ( id === 6977 )
      return 'Minnesota United FC';
    if ( id === 1616 )
      return 'Montreal Impact';
    if ( id === 928 )
      return 'New England Revolution';
    if ( id === 9668 )
      return 'New York City FC';
    if ( id === 399 )
      return 'New York Red Bulls';
    if ( id === 6900 )
      return 'Orlando City SC';
    if ( id === 5513 )
      return 'Philadelphia Union';
    if ( id === 1581 )
      return 'Portland Timbers';
    if ( id === 1899 )
      return 'Real Salt Lake';
    if ( id === 1131 )
      return 'San Jose Earthquakes';
    if ( id === 3500 )
      return 'Seattle Sounders FC';
    if ( id === 421 )
      return 'Sporting Kansas City';
    if ( id === 2077 )
      return 'Toronto FC';
    if ( id === 1708 )
      return 'Vancouver Whitecaps FC';
    return 'IDK';
  }
}
