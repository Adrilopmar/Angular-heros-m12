import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, inject } from '@angular/core';
import { BoardGameService } from '../boardgame.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { INPUT_MODALITY_DETECTOR_OPTIONS } from '@angular/cdk/a11y';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css']
})
export class BattlefieldComponent implements OnInit {

  deckPlayerOne= this.BoardGameService.cardsOfDeck.map((a: any) => a)
  deckPlayerTwo= this.BoardGameService.cardsOfDeckTwo.map((a:any)=>a)
  fightingCard:any=[]
  fightingCardTwo:any=[]
  turn:string='player1'
  playerOneIs:string=''
  playerTwoIs:string=''
  poointsPlayerOne:number=0
  poointsPlayerTwo:number=0
  turnPoints:number=0
  usedCardsOne:any=[]
  usedCardsTwo:any=[]
  winner:string=''
  winningText:string=''
  cardPlayed:boolean=false
  
  constructor(
    private BoardGameService:BoardGameService, 
    public matDialog:MatDialog, 
    private AppComponent:AppComponent) { }

  validateDrop(event:CdkDragDrop<string[]>, player:string, side:string){
    console.log(event.previousContainer.element.nativeElement.id)
    console.log(side)
    console.log(this.fightingCard.name)
    console.log(this.deckPlayerOne.length)
    console.log(event.previousContainer.element.nativeElement.childElementCount)
    this.cardPlayed=false
    
    if(this.turn==='player1' && player==='one' && side==='attackOne' &&  event.previousContainer.element.nativeElement.childElementCount===4 ){
        this.onDrop(event)
    }
    else if(this.turn==='player1' && side==='handOne'){
      this.onDrop(event)
    }
    if(this.turn==='player2' && player==='two'&& side==='attackTwo' && event.previousContainer.element.nativeElement.childElementCount===4){
      this.onDrop(event)
    }
    else if(this.turn==='player2' && side==='handTwo'){
      this.onDrop(event)
    }
  }
onDrop(event:CdkDragDrop<string[]>){
  console.log(event.previousContainer.element.nativeElement.id)
  if(event.previousContainer === event.container){
    moveItemInArray(event.container.data, 
      event.previousIndex, 
      event.currentIndex);
  }
  else{
    transferArrayItem(event.previousContainer.data, 
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
}
ready(player:string){
  console.log(this.turn)
  //console.log(this.fightingCard[0].name)
  if(this.turn==='player1' && player ==='one' && this.usedCardsOne.indexOf(this.fightingCard[0].name)===-1){   
    this.playerOneIs= 'ready'
    this.turn='player2'
  }
  else if(this.turn==='player2' && player ==='two' && this.usedCardsTwo.indexOf(this.fightingCardTwo[0].name)===-1){
    this.playerTwoIs= 'ready'
    this.turn='player1'
  }
  else {
    this.cardPlayed=true
    console.log('pick another card. this is already used')
  }
  if(this.playerOneIs === 'ready' && this.playerTwoIs === 'ready'){
    this.fight(player)
  }
}
openDialog():void{
  const dialogRef = this.matDialog.open(DialogComponent, {data:{win:this.winningText}})
  dialogRef.afterClosed().subscribe(res => {console.log(res), this.AppComponent.onBattle = false})
}
fight(player:string){
  console.log('FIGHT!!')
  if(player==='two' && this.fightingCard[0].attack >= this.fightingCardTwo[0].defense){
    console.log('player 1 killed player 2')
    console.log(this.fightingCard[0].attack)
    console.log( this.fightingCardTwo[0].defense)
    this.poointsPlayerOne ++
  }
  else if(player==='two' && this.fightingCardTwo[0].attack >= this.fightingCard[0].defense){
      console.log('player 2 has defended and has killed player 1')
      console.log(this.fightingCardTwo[0].attack)
    console.log( this.fightingCard[0].defense)
      this.poointsPlayerTwo ++
    }
  if(player==='one' && this.fightingCardTwo[0].attack >= this.fightingCard[0].defense){
    console.log(this.fightingCardTwo[0].attack)
    console.log( this.fightingCard[0].defense)
      console.log('player 2 killed player 1')
      this.poointsPlayerTwo ++
  }
  else if(player==='one' && this.fightingCard[0].attack  >= this.fightingCardTwo[0].defense){
    console.log(this.fightingCard[0].attack)
    console.log( this.fightingCardTwo[0].defense)
    console.log('player 1 has defended and has killed player 2')
    this.poointsPlayerOne ++
  }
    this.turnPoints ++
  if(this.turnPoints ==4){
    if(this.poointsPlayerOne>this.poointsPlayerTwo){
      this.winner='player1'
      this.winningText = 'Well done! ' +this.winner+ ' wins'
    }
    else if(this.poointsPlayerOne<this.poointsPlayerTwo){
      this.winner='player2'
      this.winningText = 'Well done! ' +this.winner+ ' wins'
    }
    else{
      this.winner='draw'
      this.winningText = 'The battle ends in a ' +this.winner
    }
    this.openDialog()
    this.turnPoints=0
  }
    if(this.turn === 'player2'){
      this.turn= 'player1'
    }
    else{
      this.turn='player2'
    }
    
    this.usedCardsOne.push(this.fightingCard[0].name)
    this.usedCardsTwo.push(this.fightingCardTwo[0].name)
    this.deckPlayerOne= this.deckPlayerOne.concat( this.fightingCard)
    this.deckPlayerTwo= this.deckPlayerTwo.concat( this.fightingCardTwo)
    this.fightingCard =[];
    this.fightingCardTwo=[]
    this.playerOneIs= ''
    this.playerTwoIs= ''
}
  conse(){
    
    //console.log(this.fightingCard[0].attack)
   // console.log(this.fightingCardTwo[0].attack)
    console.log(this.fightingCard)
    console.log(this.fightingCardTwo)
    console.log(this.deckPlayerOne)
    console.log(this.deckPlayerTwo)
    console.log(this.turn) 
    console.log(this.playerOneIs)
    console.log(this.playerTwoIs)
    console.log(this.usedCardsOne)
    console.log(this.usedCardsTwo)
    console.log(this.poointsPlayerOne)
    console.log(this.poointsPlayerTwo)
    console.log(this.winner)
    console.log(this.BoardGameService.cardsOfDeck)
    console.log(this.BoardGameService.cardsOfDeckTwo)



  }
  ngOnInit(): void {
  }

}
