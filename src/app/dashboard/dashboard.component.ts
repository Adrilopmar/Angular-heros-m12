import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MyDeckService} from '../my-deck.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes:Hero[]=[]
topDecks:any=[]
constructor(private heroService:HeroService, private MyDeckService:MyDeckService){ }
ngOnInit(): void {
  this.getHeroes();
  this.getTopDecks();
}
getTopDecks(){
  this.topDecks = this.MyDeckService.getTopDeccks()

}
  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes=> this.heroes = heroes.slice(1,5));
  }

  conse(){
    console.log(this.topDecks)
  }
}