import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-predictor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './predictor.html',
  styleUrl: './predictor.css'
})
export class Predictor implements OnInit {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5278/api/predictions';

  teams = [
    { name: 'Argentina', titles: 3, appearances: 18, fifaRank: 1 },
    { name: 'France', titles: 2, appearances: 16, fifaRank: 2 },
    { name: 'Belgium', titles: 0, appearances: 14, fifaRank: 3 },
    { name: 'Brazil', titles: 5, appearances: 22, fifaRank: 5 },
    { name: 'England', titles: 1, appearances: 16, fifaRank: 5 },
    { name: 'Portugal', titles: 0, appearances: 8, fifaRank: 6 },
    { name: 'Netherlands', titles: 0, appearances: 11, fifaRank: 7 },
    { name: 'Spain', titles: 1, appearances: 16, fifaRank: 8 },
    { name: 'Italy', titles: 4, appearances: 18, fifaRank: 9 },
    { name: 'Croatia', titles: 0, appearances: 7, fifaRank: 10 },
    { name: 'USA', titles: 0, appearances: 11, fifaRank: 13 },
    { name: 'Morocco', titles: 0, appearances: 6, fifaRank: 14 },
    { name: 'Mexico', titles: 0, appearances: 17, fifaRank: 15 },
    { name: 'Germany', titles: 4, appearances: 20, fifaRank: 16 },
    { name: 'Uruguay', titles: 2, appearances: 14, fifaRank: 17 },
    { name: 'Japan', titles: 0, appearances: 7, fifaRank: 18 },
    { name: 'Switzerland', titles: 0, appearances: 12, fifaRank: 19 },
    { name: 'Senegal', titles: 0, appearances: 3, fifaRank: 20 },
    { name: 'Denmark', titles: 0, appearances: 6, fifaRank: 21 },
    { name: 'South Korea', titles: 0, appearances: 11, fifaRank: 23 },
    { name: 'Poland', titles: 0, appearances: 9, fifaRank: 26 },
    { name: 'Serbia', titles: 0, appearances: 13, fifaRank: 33 },
    { name: 'Australia', titles: 0, appearances: 6, fifaRank: 25 },
    { name: 'Canada', titles: 0, appearances: 2, fifaRank: 43 },
  ];

  homeTeam: string = '';
  awayTeam: string = '';
  result: any = null;
  isLoading: boolean = false;
  errorMessage: string = '';
  savedPredictions: any[] = [];

  ngOnInit() {
    this.loadPredictions();
  }

  loadPredictions() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => this.savedPredictions = data,
      error: (err) => console.error('Error loading predictions:', err)
    });
  }

  predict() {
    this.errorMessage = '';
    this.result = null;

    if (!this.homeTeam || !this.awayTeam) {
      this.errorMessage = 'Please select both teams!';
      return;
    }

    if (this.homeTeam === this.awayTeam) {
      this.errorMessage = 'Please select two different teams!';
      return;
    }

    const home = this.teams.find(t => t.name === this.homeTeam)!;
    const away = this.teams.find(t => t.name === this.awayTeam)!;

    const homeRankScore = (50 - home.fifaRank) * 2;
    const awayRankScore = (50 - away.fifaRank) * 2;
    const homeTitleScore = home.titles * 15;
    const awayTitleScore = away.titles * 15;
    const homeAppScore = home.appearances * 2;
    const awayAppScore = away.appearances * 2;

    const homeTotal = homeRankScore + homeTitleScore + homeAppScore;
    const awayTotal = awayRankScore + awayTitleScore + awayAppScore;
    const totalScore = homeTotal + awayTotal;

    let homeWinPct = Math.round((homeTotal / totalScore) * 100);
    let awayWinPct = 100 - homeWinPct;

    let winner = '';

    if (Math.abs(homeWinPct - awayWinPct) < 8) {
      winner = 'Draw';
    } else if (homeWinPct > awayWinPct) {
      winner = home.name;
    } else {
      winner = away.name;
    }

    this.result = {
      homeTeam: home.name,
      awayTeam: away.name,
      winner: winner,
      homeWinPct: homeWinPct,
      awayWinPct: awayWinPct,
      homeTitles: home.titles,
      awayTitles: away.titles,
      homeRank: home.fifaRank,
      awayRank: away.fifaRank,
    };
  }

  savePrediction() {
    if (this.result) {
      const payload = {
        homeTeam: this.result.homeTeam,
        awayTeam: this.result.awayTeam,
        predictedWinner: this.result.winner
      };

      this.http.post(this.apiUrl, payload).subscribe({
        next: () => this.loadPredictions(),
        error: (err) => console.error('Error saving prediction:', err)
      });
    }
  }

  deletePrediction(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => this.loadPredictions(),
      error: (err) => console.error('Error deleting prediction:', err)
    });
  }
}