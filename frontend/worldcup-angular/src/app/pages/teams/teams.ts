import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.html',
  styleUrl: './teams.css'
})
export class Teams {

  teams = [
    { name: 'Brazil', flag: '🇧🇷', confederation: 'CONMEBOL', titles: 5, appearances: 22, fifaRank: 5, starPlayer: 'Vinicius Jr', coach: 'Dorival Junior' },
    { name: 'Germany', flag: '🇩🇪', confederation: 'UEFA', titles: 4, appearances: 20, fifaRank: 16, starPlayer: 'Jamal Musiala', coach: 'Julian Nagelsmann' },
    { name: 'Italy', flag: '🇮🇹', confederation: 'UEFA', titles: 4, appearances: 18, fifaRank: 9, starPlayer: 'Gianluigi Donnarumma', coach: 'Luciano Spalletti' },
    { name: 'Argentina', flag: '🇦🇷', confederation: 'CONMEBOL', titles: 3, appearances: 18, fifaRank: 1, starPlayer: 'Lionel Messi', coach: 'Lionel Scaloni' },
    { name: 'France', flag: '🇫🇷', confederation: 'UEFA', titles: 2, appearances: 16, fifaRank: 2, starPlayer: 'Kylian Mbappe', coach: 'Didier Deschamps' },
    { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', confederation: 'UEFA', titles: 1, appearances: 16, fifaRank: 5, starPlayer: 'Jude Bellingham', coach: 'Gareth Southgate' },
    { name: 'Spain', flag: '🇪🇸', confederation: 'UEFA', titles: 1, appearances: 16, fifaRank: 8, starPlayer: 'Pedri', coach: 'Luis de la Fuente' },
    { name: 'Uruguay', flag: '🇺🇾', confederation: 'CONMEBOL', titles: 2, appearances: 14, fifaRank: 17, starPlayer: 'Darwin Nunez', coach: 'Marcelo Bielsa' },
    { name: 'Netherlands', flag: '🇳🇱', confederation: 'UEFA', titles: 0, appearances: 11, fifaRank: 7, starPlayer: 'Virgil van Dijk', coach: 'Ronald Koeman' },
    { name: 'Portugal', flag: '🇵🇹', confederation: 'UEFA', titles: 0, appearances: 8, fifaRank: 6, starPlayer: 'Cristiano Ronaldo', coach: 'Roberto Martinez' },
    { name: 'Belgium', flag: '🇧🇪', confederation: 'UEFA', titles: 0, appearances: 14, fifaRank: 3, starPlayer: 'Kevin De Bruyne', coach: 'Domenico Tedesco' },
    { name: 'Croatia', flag: '🇭🇷', confederation: 'UEFA', titles: 0, appearances: 7, fifaRank: 10, starPlayer: 'Luka Modric', coach: 'Zlatko Dalic' },
    { name: 'USA', flag: '🇺🇸', confederation: 'CONCACAF', titles: 0, appearances: 11, fifaRank: 13, starPlayer: 'Christian Pulisic', coach: 'Gregg Berhalter' },
    { name: 'Mexico', flag: '🇲🇽', confederation: 'CONCACAF', titles: 0, appearances: 17, fifaRank: 15, starPlayer: 'Hirving Lozano', coach: 'Jaime Lozano' },
    { name: 'Canada', flag: '🇨🇦', confederation: 'CONCACAF', titles: 0, appearances: 2, fifaRank: 43, starPlayer: 'Alphonso Davies', coach: 'Jesse Marsch' },
    { name: 'Japan', flag: '🇯🇵', confederation: 'AFC', titles: 0, appearances: 7, fifaRank: 18, starPlayer: 'Takefusa Kubo', coach: 'Hajime Moriyasu' },
    { name: 'South Korea', flag: '🇰🇷', confederation: 'AFC', titles: 0, appearances: 11, fifaRank: 23, starPlayer: 'Son Heung-min', coach: 'Jurgen Klinsmann' },
    { name: 'Morocco', flag: '🇲🇦', confederation: 'CAF', titles: 0, appearances: 6, fifaRank: 14, starPlayer: 'Achraf Hakimi', coach: 'Walid Regragui' },
    { name: 'Senegal', flag: '🇸🇳', confederation: 'CAF', titles: 0, appearances: 3, fifaRank: 20, starPlayer: 'Sadio Mane', coach: 'Aliou Cisse' },
    { name: 'Australia', flag: '🇦🇺', confederation: 'AFC', titles: 0, appearances: 6, fifaRank: 25, starPlayer: 'Mat Ryan', coach: 'Graham Arnold' },
    { name: 'Switzerland', flag: '🇨🇭', confederation: 'UEFA', titles: 0, appearances: 12, fifaRank: 19, starPlayer: 'Granit Xhaka', coach: 'Murat Yakin' },
    { name: 'Denmark', flag: '🇩🇰', confederation: 'UEFA', titles: 0, appearances: 6, fifaRank: 21, starPlayer: 'Christian Eriksen', coach: 'Kasper Hjulmand' },
    { name: 'Poland', flag: '🇵🇱', confederation: 'UEFA', titles: 0, appearances: 9, fifaRank: 26, starPlayer: 'Robert Lewandowski', coach: 'Fernando Santos' },
    { name: 'Serbia', flag: '🇷🇸', confederation: 'UEFA', titles: 0, appearances: 13, fifaRank: 33, starPlayer: 'Dusan Vlahovic', coach: 'Dragan Stojkovic' },
  ];

  filteredTeams = [...this.teams];

  filterTeams(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input.value.toLowerCase();
    this.filteredTeams = this.teams.filter(team =>
      team.name.toLowerCase().includes(query) ||
      team.confederation.toLowerCase().includes(query) ||
      team.starPlayer.toLowerCase().includes(query)
    );
  }
}