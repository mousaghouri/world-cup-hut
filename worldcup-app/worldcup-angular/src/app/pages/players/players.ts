import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.html',
  styleUrl: './players.css'
})
export class Players {

  players = [
    { name: 'Lionel Messi', country: 'Argentina', position: 'Forward', born: '1987', club: 'Inter Miami', wcGoals: 13, wcApps: 26, titles: 1, category: 'current' },
    { name: 'Cristiano Ronaldo', country: 'Portugal', position: 'Forward', born: '1985', club: 'Al Nassr', wcGoals: 8, wcApps: 22, titles: 0, category: 'current' },
    { name: 'Kylian Mbappe', country: 'France', position: 'Forward', born: '2000', club: 'Real Madrid', wcGoals: 12, wcApps: 14, titles: 1, category: 'current' },
    { name: 'Erling Haaland', country: 'Norway', position: 'Forward', born: '2000', club: 'Man City', wcGoals: 0, wcApps: 0, titles: 0, category: 'current' },
    { name: 'Vinicius Jr', country: 'Brazil', position: 'Forward', born: '2000', club: 'Real Madrid', wcGoals: 1, wcApps: 4, titles: 0, category: 'current' },
    { name: 'Jude Bellingham', country: 'England', position: 'Midfielder', born: '2003', club: 'Real Madrid', wcGoals: 3, wcApps: 7, titles: 0, category: 'current' },
    { name: 'Pedri', country: 'Spain', position: 'Midfielder', born: '2002', club: 'Barcelona', wcGoals: 0, wcApps: 3, titles: 0, category: 'current' },
    { name: 'Jamal Musiala', country: 'Germany', position: 'Midfielder', born: '2003', club: 'Bayern Munich', wcGoals: 2, wcApps: 4, titles: 0, category: 'current' },
    { name: 'Luka Modric', country: 'Croatia', position: 'Midfielder', born: '1985', club: 'Real Madrid', wcGoals: 2, wcApps: 20, titles: 0, category: 'current' },
    { name: 'Kevin De Bruyne', country: 'Belgium', position: 'Midfielder', born: '1991', club: 'Man City', wcGoals: 1, wcApps: 12, titles: 0, category: 'current' },
    { name: 'Son Heung-min', country: 'South Korea', position: 'Forward', born: '1992', club: 'Tottenham', wcGoals: 2, wcApps: 8, titles: 0, category: 'current' },
    { name: 'Achraf Hakimi', country: 'Morocco', position: 'Defender', born: '1998', club: 'PSG', wcGoals: 0, wcApps: 7, titles: 0, category: 'current' },
    { name: 'Pele', country: 'Brazil', position: 'Forward', born: '1940', club: 'Retired', wcGoals: 12, wcApps: 14, titles: 3, category: 'legend' },
    { name: 'Diego Maradona', country: 'Argentina', position: 'Forward', born: '1960', club: 'Retired', wcGoals: 8, wcApps: 21, titles: 1, category: 'legend' },
    { name: 'Ronaldo R9', country: 'Brazil', position: 'Forward', born: '1976', club: 'Retired', wcGoals: 15, wcApps: 19, titles: 2, category: 'legend' },
    { name: 'Zinedine Zidane', country: 'France', position: 'Midfielder', born: '1972', club: 'Retired', wcGoals: 5, wcApps: 12, titles: 1, category: 'legend' },
    { name: 'Miroslav Klose', country: 'Germany', position: 'Forward', born: '1978', club: 'Retired', wcGoals: 16, wcApps: 24, titles: 1, category: 'legend' },
    { name: 'Johan Cruyff', country: 'Netherlands', position: 'Forward', born: '1947', club: 'Retired', wcGoals: 3, wcApps: 7, titles: 0, category: 'legend' },
    { name: 'Gianluigi Buffon', country: 'Italy', position: 'Goalkeeper', born: '1978', club: 'Retired', wcGoals: 0, wcApps: 17, titles: 1, category: 'goalkeeper' },
    { name: 'Manuel Neuer', country: 'Germany', position: 'Goalkeeper', born: '1986', club: 'Bayern Munich', wcGoals: 0, wcApps: 16, titles: 1, category: 'goalkeeper' },
    { name: 'Gianluigi Donnarumma', country: 'Italy', position: 'Goalkeeper', born: '1999', club: 'PSG', wcGoals: 0, wcApps: 4, titles: 0, category: 'goalkeeper' },
  ];

  filteredPlayers = [...this.players];

  topScorers = [
    { name: 'Miroslav Klose', country: 'Germany', goals: 16, years: '2002-2014' },
    { name: 'Ronaldo R9', country: 'Brazil', goals: 15, years: '1994-2006' },
    { name: 'Gerd Muller', country: 'Germany', goals: 14, years: '1970-1974' },
    { name: 'Just Fontaine', country: 'France', goals: 13, years: '1958' },
    { name: 'Lionel Messi', country: 'Argentina', goals: 13, years: '2006-2022' },
    { name: 'Pele', country: 'Brazil', goals: 12, years: '1958-1970' },
    { name: 'Kylian Mbappe', country: 'France', goals: 12, years: '2018-2022' },
    { name: 'Sandor Kocsis', country: 'Hungary', goals: 11, years: '1954' },
    { name: 'Juergen Klinsmann', country: 'Germany', goals: 11, years: '1990-1998' },
    { name: 'Gabriel Batistuta', country: 'Argentina', goals: 10, years: '1994-2002' },
  ];

  filterByCategory(category: string) {
    if (category === 'all') {
      this.filteredPlayers = [...this.players];
    } else {
      this.filteredPlayers = this.players.filter(p => p.category === category);
    }
  }
}