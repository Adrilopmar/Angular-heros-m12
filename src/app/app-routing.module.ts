import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MyDeckComponent } from './my-deck/my-deck.component';
import { BoardgameComponent } from './boardgame/boardgame.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';

const routes:Routes=[
  {path:'heroes', component: HeroesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'messages', component: MessagesComponent},
  {path:'detail/:id', component:HeroDetailComponent},
  {path:'mydeck', component:MyDeckComponent},
  {path:'boardgame', component: BoardgameComponent},
  {path: 'battlefield', component: BattlefieldComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }