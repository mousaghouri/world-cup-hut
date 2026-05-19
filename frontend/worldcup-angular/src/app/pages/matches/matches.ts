import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches.html',
  styleUrl: './matches.css'
})
export class Matches {

  matches = [
    { id: 1, homeTeam: 'Argentina', awayTeam: 'France', homeFlag: '🇦🇷', awayFlag: '🇫🇷', homeScore: 3, awayScore: 3, date: '18 Dec 2022', time: 'FT', venue: 'Lusail Stadium, Qatar', stage: 'FINAL', status: 'completed' },
    { id: 2, homeTeam: 'Argentina', awayTeam: 'Croatia', homeFlag: '🇦🇷', awayFlag: '🇭🇷', homeScore: 3, awayScore: 0, date: '13 Dec 2022', time: 'FT', venue: 'Lusail Stadium, Qatar', stage: 'SEMI-FINAL', status: 'completed' },
    { id: 3, homeTeam: 'France', awayTeam: 'Morocco', homeFlag: '🇫🇷', awayFlag: '🇲🇦', homeScore: 2, awayScore: 0, date: '14 Dec 2022', time: 'FT', venue: 'Al Bayt Stadium, Qatar', stage: 'SEMI-FINAL', status: 'completed' },
    { id: 4, homeTeam: 'Croatia', awayTeam: 'Morocco', homeFlag: '🇭🇷', awayFlag: '🇲🇦', homeScore: 2, awayScore: 1, date: '17 Dec 2022', time: 'FT', venue: 'Khalifa Stadium, Qatar', stage: '3RD PLACE', status: 'completed' },
    { id: 5, homeTeam: 'Brazil', awayTeam: 'Croatia', homeFlag: '🇧🇷', awayFlag: '🇭🇷', homeScore: 1, awayScore: 1, date: '9 Dec 2022', time: 'FT', venue: 'Education City, Qatar', stage: 'QUARTER-FINAL', status: 'completed' },
    { id: 6, homeTeam: 'Netherlands', awayTeam: 'Argentina', homeFlag: '🇳🇱', awayFlag: '🇦🇷', homeScore: 2, awayScore: 2, date: '9 Dec 2022', time: 'FT', venue: 'Lusail Stadium, Qatar', stage: 'QUARTER-FINAL', status: 'completed' },
    { id: 7, homeTeam: 'Morocco', awayTeam: 'Portugal', homeFlag: '🇲🇦', awayFlag: '🇵🇹', homeScore: 1, awayScore: 0, date: '10 Dec 2022', time: 'FT', venue: 'Al Thumama, Qatar', stage: 'QUARTER-FINAL', status: 'completed' },
    { id: 8, homeTeam: 'England', awayTeam: 'France', homeFlag: '🏴', awayFlag: '🇫🇷', homeScore: 1, awayScore: 2, date: '10 Dec 2022', time: 'FT', venue: 'Al Bayt Stadium, Qatar', stage: 'QUARTER-FINAL', status: 'completed' },
    { id: 9, homeTeam: 'USA', awayTeam: 'Mexico', homeFlag: '🇺🇸', awayFlag: '🇲🇽', homeScore: 0, awayScore: 0, date: '11 Jun 2026', time: '18:00', venue: 'MetLife Stadium, New York', stage: 'GROUP STAGE', status: 'upcoming' },
    { id: 10, homeTeam: 'Brazil', awayTeam: 'Argentina', homeFlag: '🇧🇷', awayFlag: '🇦🇷', homeScore: 0, awayScore: 0, date: '15 Jun 2026', time: '21:00', venue: 'Rose Bowl, Los Angeles', stage: 'GROUP STAGE', status: 'upcoming' },
    { id: 11, homeTeam: 'England', awayTeam: 'France', homeFlag: '🏴', awayFlag: '🇫🇷', homeScore: 0, awayScore: 0, date: '17 Jun 2026', time: '20:00', venue: 'SoFi Stadium, Los Angeles', stage: 'GROUP STAGE', status: 'upcoming' },
    { id: 12, homeTeam: 'Germany', awayTeam: 'Spain', homeFlag: '🇩🇪', awayFlag: '🇪🇸', homeScore: 0, awayScore: 0, date: '18 Jun 2026', time: '18:00', venue: 'AT&T Stadium, Dallas', stage: 'GROUP STAGE', status: 'upcoming' },
    { id: 13, homeTeam: 'Portugal', awayTeam: 'Belgium', homeFlag: '🇵🇹', awayFlag: '🇧🇪', homeScore: 0, awayScore: 0, date: '20 Jun 2026', time: '21:00', venue: 'Hard Rock Stadium, Miami', stage: 'GROUP STAGE', status: 'upcoming' },
    { id: 14, homeTeam: 'Netherlands', awayTeam: 'Japan', homeFlag: '🇳🇱', awayFlag: '🇯🇵', homeScore: 0, awayScore: 0, date: '22 Jun 2026', time: '18:00', venue: 'Levis Stadium, San Francisco', stage: 'GROUP STAGE', status: 'upcoming' },
    { id: 15, homeTeam: 'Morocco', awayTeam: 'Senegal', homeFlag: '🇲🇦', awayFlag: '🇸🇳', homeScore: 0, awayScore: 0, date: '23 Jun 2026', time: '15:00', venue: 'Estadio Azteca, Mexico City', stage: 'GROUP STAGE', status: 'upcoming' },
    { id: 16, homeTeam: 'Canada', awayTeam: 'South Korea', homeFlag: '🇨🇦', awayFlag: '🇰🇷', homeScore: 0, awayScore: 0, date: '24 Jun 2026', time: '18:00', venue: 'BMO Field, Toronto', stage: 'GROUP STAGE', status: 'upcoming' },
    { id: 17, homeTeam: 'TBD', awayTeam: 'TBD', homeFlag: '🏆', awayFlag: '🏆', homeScore: 0, awayScore: 0, date: '19 Jul 2026', time: '18:00', venue: 'MetLife Stadium, New York', stage: 'FINAL', status: 'upcoming' },
    { id: 18, homeTeam: 'TBD', awayTeam: 'TBD', homeFlag: '🥉', awayFlag: '🥉', homeScore: 0, awayScore: 0, date: '18 Jul 2026', time: '15:00', venue: 'Hard Rock Stadium, Miami', stage: '3RD PLACE', status: 'upcoming' },
  ];

  filteredMatches = [...this.matches];

  filterMatches(filter: string) {
    if (filter === 'all') {
      this.filteredMatches = [...this.matches];
    } else if (filter === 'final') {
      this.filteredMatches = this.matches.filter(m => m.stage === 'FINAL' || m.stage === '3RD PLACE');
    } else {
      this.filteredMatches = this.matches.filter(m => m.status === filter);
    }
  }
}