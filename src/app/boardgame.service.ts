import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { Hero } from './hero';
import { MyDeckService, TOPDECKS } from './my-deck.service';



@Injectable({
  providedIn: 'root'
})
export class BoardGameService {

  userSavedDecks= this.MyDeckService.userSavedDecks;
  chosenDeck:any=[]
  cardsOfDeck:any=[]
  cardsOfDeckTwo:any=[]
  topDecks= TOPDECKS
  chosenDeckTwo:any=[]
  
  
  selectingDeck(name:string, player:string){
    let allDecks= this.topDecks.concat(this.userSavedDecks)
     this.chosenDeck = allDecks.filter((h:any)=>h.name ===name)
    if(this.chosenDeck.length =1){
      this.cardsOfDeck= this.chosenDeck[0].cards
    }
  }
  selectingDeckTwo(name:string, player:string){
    let allDecks= this.topDecks.concat(this.userSavedDecks)
    this.chosenDeckTwo = allDecks.filter((h:any)=>h.name===name)
    if(this.chosenDeckTwo.length =1){
      this.cardsOfDeckTwo= this.chosenDeckTwo[0].cards
    }
  }
    

  constructor(private MyDeckService:MyDeckService) { }
}
