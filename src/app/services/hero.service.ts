import { Injectable } from '@angular/core';
import { Hero } from '../commons/hero';
import { HeroData } from '../commons/hero-data'

@Injectable()
export class HeroService {

    getHeroes(): Hero[] {
        return HeroData;
    }

    getHero(id: number): Hero {
        var heroData = this.getHeroes();
        var hero = heroData.find(function (hero) {
            return hero.id == id;
        });
        return hero;
    }

    // 保存英雄数据
    save(hero: Hero): boolean {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    // 删除英雄数据
    delete(hero: Hero): boolean {
        var heroData = this.getHeroes();
        var startIndex = heroData.findIndex(function (h) {
            return h.id == hero.id;
        });
        var deleteHero = null;
        if (startIndex > -1) {
            deleteHero = heroData.splice(startIndex, 1);
        }
        return deleteHero ? true : false;
    }

    // 添加一个英雄数据
    private post(hero: Hero): boolean {
        var heroData = this.getHeroes();
        return heroData.push(hero) > 0 ? true : false;
    }

    // 修改英雄数据
    private put(hero: Hero): boolean {
        var heroData = this.getHeroes();
        var index = heroData.findIndex(function (h) {
            return h.id == hero.id;
        })

        if (index == -1) {
            return false;
        }
        heroData[index].name = hero.name;
        return true;
    }
}
