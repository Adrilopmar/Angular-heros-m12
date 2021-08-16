import { Component, OnInit, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MyDeckService, savedDecks } from '../my-deck.service';


@Component({
  selector: 'app-my-deck',
  templateUrl: './my-deck.component.html',
  styleUrls: ['./my-deck.component.css']
})
export class MyDeckComponent implements OnInit {
  public isShown:boolean= false
  heroes:Hero[]=[];
  deck = this.myDeckService.userDeck;
  userSavedDecks = this.myDeckService.userSavedDecks;
  userDeck:Hero[]=[]
  cardToShow:number=0;
  getHeroes():void{
    this.heroService.getHeroes()
     .subscribe(heroes=>this.heroes=heroes);
 }
  pickCard(pick:Hero):void{
    if(this.myDeckService.userDeck.length <4 && this.myDeckService.userDeck.indexOf(pick)===-1){
      this.myDeckService.updateUserDeck(pick)
      console.log(pick.attack)
    }
    this.deck = this.myDeckService.userDeck
  }
  delete(deck:Hero):void{
    this.myDeckService.userDeck= this.myDeckService.userDeck.filter(h=>h !==deck);
    this.myDeckService.userDeck.splice(deck.id)
    this.deck = this.myDeckService.userDeck
  }
  saveDeck(deckName:string):void{
    if(this.myDeckService.userDeck.length==4){
      this.myDeckService.savingUserDeck(deckName)
      this.deck= this.myDeckService.userDeck
      
    }
    this.AppComponent.userCanPlay()
  }
  deckDetails(){
    this.isShown = !this.isShown
  }
  deleteDeck(deckToDelete:any):void{
    console.log(deckToDelete)
    console.log(this.myDeckService.userSavedDecks.filter((h: any)=>h!==deckToDelete))
    this.myDeckService.userSavedDecks = this.myDeckService.userSavedDecks.filter((h: any)=>h!==deckToDelete);
    this.userSavedDecks = this.myDeckService.userSavedDecks;
    this.AppComponent.userCanPlay()
  }
  showCard(id:string){
    this.myDeckService.showCard(id)
  }
  hideShowedCard(){
    this.myDeckService.hideShowedCard()
  }

  constructor(private heroService:HeroService, private myDeckService:MyDeckService, private ElementRef:ElementRef, private AppComponent:AppComponent){}
conse(){
  
  console.log(this.myDeckService.userDeck)
  console.log(this.userSavedDecks)
  
}
  ngOnInit(): void {
    this.getHeroes()
  }
}

function updateUserDeck(pick: Hero) {
  throw new Error('Function not implemented.');
}
