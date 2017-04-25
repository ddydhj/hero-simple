import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Hero } from '../commons/hero';
import { HeroData } from '../commons/hero-data';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) { }

    search(term: string): Hero[] {
        return HeroData.filter(function (v) {
            return v.name.indexOf(term) > -1;
        });
    }
}