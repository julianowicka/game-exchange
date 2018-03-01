import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { GamesComponent } from './games/games.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameService } from './game.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AddNewGameComponent } from './add-new-game/add-new-game.component';
import {FormsModule} from '@angular/forms';
import { AddGameComponent } from './add-game/add-game.component';
import { UsersComponent } from './users/users.component';
import {UserService} from './user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PipeFilterPipe } from './pipe-filter.pipe';
import { TransactionComponent } from './transaction/transaction.component';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    GamesComponent,
    GameSearchComponent,
    GameDetailComponent,
    DashboardComponent,
    AddNewGameComponent,
    AddGameComponent,
    UsersComponent,
    UserDetailComponent,
    PipeFilterPipe,
    TransactionComponent,
    LoginComponent,
    LogoffComponent,

  ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,


        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        InMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        AppRoutingModule,
    ],
  providers: [GameService, InMemoryDataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
