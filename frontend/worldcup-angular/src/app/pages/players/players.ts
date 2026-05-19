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
    { name: 'Lionel Messi', country: 'Argentina', flag: '🇦🇷', position: 'Forward', born: '1987', club: 'Inter Miami', wcGoals: 13, wcApps: 26, titles: 1, category: 'current' },
    { name: 'Cristiano Ronaldo', country: 'Portugal', flag: '🇵🇹', position: 'Forward', born: '1985', club: 'Al Nassr', wcGoals: 8, wcApps: 22, titles: 0, category: 'current' },
    { name: 'Kylian Mbappe', country: 'France', flag: '🇫🇷', position: 'Forward', born: '2000', club: 'Real Madrid', wcGoals: 12, wcApps: 14, titles: 1, category: 'current' },
    { name: 'Erling Haaland', country: 'Norway', flag: '🇳🇴', position: 'Forward', born: '2000', club: 'Man City', wcGoals: 0, wcApps: 0, titles: 0, category: 'current' },
    { name: 'Vinicius Jr', country: 'Brazil', flag: '🇧🇷', position: 'Forward', born: '2000', club: 'Real Madrid', wcGoals: 1, wcApps: 4, titles: 0, category: 'current' },
    { name: 'Jude Bellingham', country: 'England', flag: '🏴', position: 'Midfielder', born: '2003', club: 'Real Madrid', wcGoals: 3, wcApps: 7, titles: 0, category: 'current' },
    { name: 'Pedri', country: 'Spain', flag: '🇪🇸', position: 'Midfielder', born: '2002', club: 'Barcelona', wcGoals: 0, wcApps: 3, titles: 0, category: 'current' },
    { name: 'Jamal Musiala', country: 'Germany', flag: '🇩🇪', position: 'Midfielder', born: '2003', club: 'Bayern Munich', wcGoals: 2, wcApps: 4, titles: 0, category: 'current' },
    { name: 'Luka Modric', country: 'Croatia', flag: '🇭🇷', position: 'Midfielder', born: '1985', club: 'Real Madrid', wcGoals: 2, wcApps: 20, titles: 0, category: 'current' },
    { name: 'Kevin De Bruyne', country: 'Belgium', flag: '🇧🇪', position: 'Midfielder', born: '1991', club: 'Man City', wcGoals: 1, wcApps: 12, titles: 0, category: 'current' },
    { name: 'Son Heung-min', country: 'South Korea', flag: '🇰🇷', position: 'Forward', born: '1992', club: 'Tottenham', wcGoals: 2, wcApps: 8, titles: 0, category: 'current' },
    { name: 'Achraf Hakimi', country: 'Morocco', flag: '🇲🇦', position: 'Defender', born: '1998', club: 'PSG', wcGoals: 0, wcApps: 7, titles: 0, category: 'current' },
    { name: 'Pele', country: 'Brazil', flag: '🇧🇷', position: 'Forward', born: '1940', club: 'Retired', wcGoals: 12, wcApps: 14, titles: 3, category: 'legend' },
    { name: 'Diego Maradona', country: 'Argentina', flag: '🇦🇷', position: 'Forward', born: '1960', club: 'Retired', wcGoals: 8, wcApps: 21, titles: 1, category: 'legend' },
    { name: 'Ronaldo R9', country: 'Brazil', flag: '🇧🇷', position: 'Forward', born: '1976', club: 'Retired', wcGoals: 15, wcApps: 19, titles: 2, category: 'legend' },
    { name: 'Zinedine Zidane', country: 'France', flag: '🇫🇷', position: 'Midfielder', born: '1972', club: 'Retired', wcGoals: 5, wcApps: 12, titles: 1, category: 'legend' },
    { name: 'Miroslav Klose', country: 'Germany', flag: '🇩🇪', position: 'Forward', born: '1978', club: 'Retired', wcGoals: 16, wcApps: 24, titles: 1, category: 'legend' },
    { name: 'Johan Cruyff', country: 'Netherlands', flag: '🇳🇱', position: 'Forward', born: '1947', club: 'Retired', wcGoals: 3, wcApps: 7, titles: 0, category: 'legend' },
    { name: 'Gianluigi Buffon', country: 'Italy', flag: '🇮🇹', position: 'Goalkeeper', born: '1978', club: 'Retired', wcGoals: 0, wcApps: 17, titles: 1, category: 'goalkeeper' },
    { name: 'Manuel Neuer', country: 'Germany', flag: '🇩🇪', position: 'Goalkeeper', born: '1986', club: 'Bayern Munich', wcGoals: 0, wcApps: 16, titles: 1, category: 'goalkeeper' },
    { name: 'Gianluigi Donnarumma', country: 'Italy', flag: '🇮🇹', position: 'Goalkeeper', born: '1999', club: 'PSG', wcGoals: 0, wcApps: 4, titles: 0, category: 'goalkeeper' },
  ];

  filteredPlayers = [...this.players];

  topScorers = [
    { name: 'Miroslav Klose', country: 'Germany', flag: '🇩🇪', goals: 16, years: '2002-2014' },
    { name: 'Ronaldo R9', country: 'Brazil', flag: '🇧🇷', goals: 15, years: '1994-2006' },
    { name: 'Gerd Muller', country: 'Germany', flag: '🇩🇪', goals: 14, years: '1970-1974' },
    { name: 'Just Fontaine', country: 'France', flag: '🇫🇷', goals: 13, years: '1958' },
    { name: 'Lionel Messi', country: 'Argentina', flag: '🇦🇷', goals: 13, years: '2006-2022' },
    { name: 'Pele', country: 'Brazil', flag: '🇧🇷', goals: 12, years: '1958-1970' },
    { name: 'Kylian Mbappe', country: 'France', flag: '🇫🇷', goals: 12, years: '2018-2022' },
    { name: 'Sandor Kocsis', country: 'Hungary', flag: '🇭🇺', goals: 11, years: '1954' },
    { name: 'Juergen Klinsmann', country: 'Germany', flag: '🇩🇪', goals: 11, years: '1990-1998' },
    { name: 'Gabriel Batistuta', country: 'Argentina', flag: '🇦🇷', goals: 10, years: '1994-2002' },
  ];

  filterByCategory(category: string) {
    if (category === 'all') {
      this.filteredPlayers = [...this.players];
    } else {
      this.filteredPlayers = this.players.filter(p => p.category === category);
    }
  }
}