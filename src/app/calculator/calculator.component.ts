import { Component, OnInit } from '@angular/core';
import { MlsService } from '../services/mls.service';
import { MlsPlayer } from '../models/mls-player';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  constructor(private mlsService: MlsService) { }
  players: MlsPlayer[];
  selectedRound = 1;

  ngOnInit() {
    this.mlsService.getPlayers().subscribe(players => {
      this.players = players.sort(this.alphabetizePlayers);
    }, error => {
      console.log(error);
    });
  }

  private alphabetizePlayers(a, b) {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  }
}
