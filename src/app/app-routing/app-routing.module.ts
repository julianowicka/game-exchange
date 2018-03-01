import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import { GamesComponent }      from '../games/games.component';
import  {DashboardComponent} from '../dashboard/dashboard.component';
import {GameDetailComponent} from '../game-detail/game-detail.component';
import {AddNewGameComponent} from '../add-new-game/add-new-game.component';
import {GameSearchComponent} from '../game-search/game-search.component';
import {UsersComponent} from '../users/users.component';
import {UserDetailComponent} from '../user-detail/user-detail.component';
import {TransactionComponent} from '../transaction/transaction.component';
import {LoginComponent} from '../login/login.component';
import {LogoffComponent} from '../logoff/logoff.component';

const routes: Routes = [
    {path: 'users', component: UsersComponent},
    {path: 'user/:id', component: UserDetailComponent},
    {path: 'games', component: GamesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'game-detail/:id', component: GameDetailComponent},
    {path: 'add', component: AddNewGameComponent},
    {path: 'search', component: GameSearchComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'transaction', component: TransactionComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logoff', component: LogoffComponent},
]

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
