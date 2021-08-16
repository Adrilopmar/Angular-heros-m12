import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class MyDeckService {

  userSavedDecks:any=[]
  userDeck: Hero[]=[];
  private userDeckSubject = new Subject<Hero[]>();
  //private userSavedDecksSubject = new Subject();

  get fullUserDeck$(): Observable<Hero[]>{
    return this.userDeckSubject.asObservable();
  }

  getTopDeccks(){
    return TOPDECKS
  }
  private userDeckSaved(card:Hero){
    this.userDeck.push(card)
    this.userDeckSubject.next(this.userDeck)
  }

  updateUserDeck(card:Hero){
    this.userDeckSaved(card)
  }
  savingUserDeck(deckName:string){
    let newDeck = new savedDecks(deckName, this.userDeck[0],this.userDeck[1],this.userDeck[2],this.userDeck[3])
    console.log(newDeck)
    this.userSavedDecks.push(newDeck)
    this.userDeck= []
   // this.userSavedDecksSubject.next(this.userSavedDecks)
  }
  showCard(id:string){
    console.log(id)
    //let createImgToShow = document.createElement('img');
    //createImgToShow.classList.add('showed-card')
    //createImgToShow.src='assets/img/'+ id +'-card.png';
    let imgtoget = <HTMLImageElement>document.getElementById('appended-image')
    imgtoget.src='assets/img/'+ id +'-card.png';
    imgtoget.classList.remove('d-none')
  }
  hideShowedCard(){
    let imgtoget = <HTMLImageElement>document.getElementById('appended-image')
    imgtoget.classList.add('d-none')
  }
  constructor() { }
} 
export class savedDecks {
name:string = ""
  cards:Deck[]=[
    {name:'', id:0, image:'', attack:0, defense:0, help:0},
    {name:'', id:0, image:'', attack:0, defense:0, help:0},
    {name:'', id:0, image:'', attack:0, defense:0, help:0},
    {name:'', id:0, image:'', attack:0, defense:0, help:0},
]
  
  constructor(deckName:string,card1:Hero,card2:Hero,card3:Hero,card4:Hero) {
    this.name = deckName
    this.cards[0].id = card1.id
    this.cards[0].name =card1.name
    this.cards[0].attack =card1.attack
    this.cards[0].defense =card1.defense
    this.cards[0].help =card1.help
    this.cards[0].image = '/assetes/data.json/'+card1.name+'-card.png';
    this.cards[1].id = card2.id
    this.cards[1].name =card2.name
    this.cards[1].attack =card2.attack
    this.cards[1].defense =card2.defense
    this.cards[1].help =card1.help
    this.cards[1].image = '/assetes/data.json/'+card2.name+'-card.png';
    this.cards[2].id = card3.id
    this.cards[2].name =card3.name
    this.cards[2].attack =card3.attack
    this.cards[2].defense =card3.defense
    this.cards[2].help =card2.help
    this.cards[2].image = '/assetes/data.json/'+card3.name+'-card.png';
    this.cards[3].id = card4.id
    this.cards[3].name =card4.name
    this.cards[3].attack =card4.attack
    this.cards[3].defense =card4.defense
    this.cards[3].help =card3.help
    this.cards[3].image = '/assetes/data.json/'+card4.name+'-card.png';
    
  }
}
export interface Deck{
  name:string
  image:string
  id:number
  attack:number
  defense:number
  help:number
}
export const TOPDECKS=[
  {name:"Hop House",
   cards:[
    { id: 12, name: 'Narco', attack: 2, defense: 1, help:3 },
    { id: 16, name: 'RubberMan', attack: 6, defense: 6, help:0  },
    { id: 20, name: 'Tornado', attack: 3, defense: 3, help:2  },
    { id: 11, name: 'Dr Nice', attack: 5, defense: 2, help:1 },
   ]},
   {name: "Open Gates",
   cards:[
    { id: 13, name: 'Bombasto', attack: 2, defense: 4, help:2  },
    { id: 14, name: 'Celeritas', attack: 3, defense: 4, help:1  },
    { id: 19, name: 'Magma', attack: 5, defense: 4, help:0  },
    { id: 18, name: 'Dr IQ', attack: 4, defense: 3, help:1  }
   ]
   },
   {name: "Kopopov Bros",
    cards:[
      { id: 14, name: 'Celeritas', attack: 3, defense: 4, help:1  },
      { id: 17, name: 'Dynama', attack: 5, defense: 2, help:1  },
      { id: 16, name: 'RubberMan', attack: 6, defense: 6, help:0  },
      { id: 11, name: 'Dr Nice', attack: 5, defense: 2, help:1 },
    ]},
    {name:"Ricochet Gods",
    cards:[
      { id: 15, name: 'Magneta', attack: 3, defense: 2, help:2  },      
      { id: 18, name: 'Dr IQ', attack: 4, defense: 3, help:1  },      
      { id: 16, name: 'RubberMan', attack: 6, defense: 6, help:0  },
      { id: 17, name: 'Dynama', attack: 5, defense: 2, help:1  },
    ]}
 ]
