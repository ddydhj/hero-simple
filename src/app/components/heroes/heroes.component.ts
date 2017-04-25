import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../commons/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'heroes-component',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private heroService: HeroService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    let deleteSuccess = this.heroService.delete(hero)
    if (deleteSuccess) {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) { this.selectedHero = null; }
    } else {
      this.error = "删除失败";
    }
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
