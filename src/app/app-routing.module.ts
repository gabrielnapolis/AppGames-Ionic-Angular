import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'game-add',
    loadChildren: () => import('./pages/game/game-add/game-add.module').then(m=> m.GameAddPageModule)
  },
  {
    path: 'player-add',
    loadChildren: () => import('./pages/player/player-add/player-add.module').then(m=> m.PlayerAddPageModule)
  },
  {
    path: 'match-add',
    loadChildren: () => import('./pages/match/match-add/match-add.module').then(m=> m.MatchAddPageModule)
  },
  {
    path: 'game-read',
    loadChildren: () => import('./pages/game/game-read/game-read.module').then( m => m.GameReadPageModule)
  },
  {
    path: 'match-read',
    loadChildren: () => import('./pages/match/match-read/match-read.module').then( m => m.MatchReadPageModule)
  },
  {
    path: 'player-read',
    loadChildren: () => import('./pages/player/player-read/player-read.module').then( m => m.PlayerReadPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'game-update/:id',
    loadChildren: () => import('./pages/game/game-update/game-update.module').then( m => m.GameUpdatePageModule)
  },
  {
    path: 'player-update/:id',
    loadChildren: () => import('./pages/player/player-update/player-update.module').then( m => m.PlayerUpdatePageModule)
  },
  {
    path: 'match-update/:id',
    loadChildren: () => import('./pages/match/match-update/match-update.module').then( m => m.MatchUpdatePageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
