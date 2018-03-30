import { Injectable } from '@angular/core';

import { Hero } from '../data/hero';
import { HEROES } from '../data/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
