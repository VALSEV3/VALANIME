import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Card } from './models/card';
import { HeaderComponent } from './header/header.component';
import { NgIf } from '@angular/common';
import { PlayerComponent } from './player/player.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, HeaderComponent, NgIf,PlayerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ValFilm';

  demon_Slayer: Card = {
    title: "Клинок рассекающий демонов",
    description: "Мой брат любит это аниме как и я. И оно про войну между людьми и демонами",
    img: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
   
  };

  shadow: Card = {
    title: "Восхождение в тени!",
    description: "Это аниме про перерождение в другой мир. У гг всегда была мечта Восхождение в тени!",
    img: "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/6319d10357dec953113094.jpg",
   
  };

  atackOnTitan: Card = {
    title: "Атака Титанов",
    description: "Загнанное в угол человечество доживает свои последние дни под гнётом титанов.",
    img: "https://desu.shikimori.one/uploads/poster/animes/16498/main_2x-3eaf768f3122e9c016485cbb9deebde1.webp",
  
  };

  naruto: Card = {
    title: "Наруто",
    description: "Познакомьтесь с Наруто Узумаки – юным ниндзя, которому предстоит пройти долгий путь к своей мечте.",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e63beb56-0433-4bbf-ae70-5d85a5ed8945/600x900",
    
  };

demonclick=false

onDemonClick(){
  this.demonclick=true
}
shadowClick=false;
onShadowClick(){
  this.shadowClick=true;
}
titanClick=false;
onTitanClick(){
  this.titanClick=true;
}
narutoClick=false
onNarutoClick(){
  this.narutoClick=true;
}
}
