import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
createDb(){
  const heroes=[
    { id: 11, name: 'Dr Nice', attack: 5, defense: 2, help:1 },
    { id: 12, name: 'Narco', attack: 2, defense: 1, help:3 },
    { id: 13, name: 'Bombasto', attack: 2, defense: 4, help:2  },
    { id: 14, name: 'Celeritas', attack: 3, defense: 4, help:1  },
    { id: 15, name: 'Magneta', attack: 3, defense: 2, help:2  },
    { id: 16, name: 'RubberMan', attack: 6, defense: 6, help:0  },
    { id: 17, name: 'Dynama', attack: 5, defense: 2, help:1  },
    { id: 18, name: 'Dr IQ', attack: 4, defense: 3, help:1  },
    { id: 19, name: 'Magma', attack: 5, defense: 4, help:0  },
    { id: 20, name: 'Tornado', attack: 3, defense: 3, help:2  }
  ];
  return{heroes};
}
genId(heroes: Hero[]): number {
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;}
  constructor() { }
}
