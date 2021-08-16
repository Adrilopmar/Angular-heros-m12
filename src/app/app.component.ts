import { Component } from '@angular/core';
import { MyDeckService } from './my-deck.service';
import { BoardGameService } from './boardgame.service';
import { DialogTutorialComponent } from './dialog-tutorial/dialog-tutorial.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Heroes';
  onBattle:boolean = false
  canPlay:boolean = false

 userCanPlay(){
  console.log(this.MyDeckServices.userSavedDecks.length)
  if(this.MyDeckServices.userSavedDecks.length){
  this.canPlay=true
  }
  else{
    this.canPlay=false
  }
 }

 tutorial():void{
  const dialogTutorialRef = this.matDialogTutorial.open(DialogTutorialComponent,{autoFocus:false})
    dialogTutorialRef.afterClosed().subscribe(res => {console.log(res)})
 }
  constructor(
    private MyDeckServices:MyDeckService, 
    private BoardGameService:BoardGameService,
    public matDialogTutorial:MatDialog){}
}
