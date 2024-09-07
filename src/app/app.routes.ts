import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PlayerComponent } from './player/player.component';

export const routes: Routes = [
  { path: 'first-component', component: CardComponent },
  { path: 'second-component', component: PlayerComponent},
];
