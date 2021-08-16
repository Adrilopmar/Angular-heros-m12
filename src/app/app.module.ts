import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MyDeckComponent } from './my-deck/my-deck.component';
import { MyDeckService } from './my-deck.service';
import { BoardgameComponent } from './boardgame/boardgame.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatDialogModule} from '@angular/material/dialog'
import { MatButtonModule} from '@angular/material/button'
import { DialogComponent } from './dialog/dialog.component';
import { DialogTutorialComponent } from './dialog-tutorial/dialog-tutorial.component';





@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    MyDeckComponent,
    BoardgameComponent,
    BattlefieldComponent,
    DialogComponent,
    DialogTutorialComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false },),
    DragDropModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  entryComponents: [DialogComponent, DialogTutorialComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
