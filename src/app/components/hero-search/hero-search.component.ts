import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../commons/hero';
import { HeroSearchService } from '../../services/hero-search.service';

@Component({
  selector: 'hero-search-component',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
  heroes: Hero[];

  constructor(private router: Router, private heroSearchService: HeroSearchService)
  { }

  search(term: string): void {
    if (term.trim().length > 0) {
      this.heroes = this.heroSearchService.search(term);
    }
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
