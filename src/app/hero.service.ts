import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MesssagesService } from './messsages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messagesService: MesssagesService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messagesService.add( 'HeroService: fetched heroes')
    return heroes;
  }
}
