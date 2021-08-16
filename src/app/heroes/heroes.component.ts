import { Component, OnInit } from '@angular/core';
//import { HeapProfiler } from 'inspector';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MyDeckService } from '../my-deck.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes:Hero[]=[];
  constructor(private heroService:HeroService,
              private MyDeckService:MyDeckService){}
  
  getHeroes():void{
   this.heroService.getHeroes()
    .subscribe(heroes=>this.heroes=heroes);
} 
  ngOnInit(): void {
    this.getHeroes()
}
add(name:string):void{
  name=name.trim();
  if(!name){return;}
  this.heroService.addHero({name}as Hero).subscribe(hero =>{this.heroes.push(hero)})
}
delete(hero:Hero):void{
  this.heroes= this.heroes.filter(h=>h !==hero);
  this.heroService.deleteHero(hero.id).subscribe();
}
showCard(name:string){
  this.MyDeckService.showCard(name)
}
hideShowedCard(){
  this.MyDeckService.hideShowedCard()
}
}