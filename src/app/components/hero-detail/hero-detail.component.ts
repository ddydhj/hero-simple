import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../../commons/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'hero-detail-component',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;

  @Output()
  close = new EventEmitter();

  navigated = false;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = parseInt(params['id']);
        this.navigated = true;
        this.hero = this.heroService.getHero(id)
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  save(): void {
    let saveSuccess = this.heroService.save(this.hero);
    if (saveSuccess) {
      this.goBack(this.hero);
    }
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);
    if (this.navigated) {
      window.history.back();
    }
  }
}