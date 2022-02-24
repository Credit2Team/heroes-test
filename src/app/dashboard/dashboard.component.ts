import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .pipe(map((heroes) => this.filterHeroByE(heroes)))
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }

  private filterHeroByE(heros: Hero[]): Hero[] {
    return heros.filter((hero) => hero.name.toLowerCase().includes('e'));
  }
}
