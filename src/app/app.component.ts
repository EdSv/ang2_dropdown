import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import {Movie} from './movie';
import {MovieService} from './movie.service';

@Component({
  providers:[MovieService],
  selector: 'my-app',
  templateUrl:'./dropdown.component.html',
  styleUrls:['./dropdown.component.css'],
  animations:[ 
    trigger('menuState', 
    [state('closed', style({
        display:'block',
        height:'0px',
      }),
      ),
      state('open',   style({
        display:'block',
        height:'150px',
      }),
      ),
      transition('closed => open', animate('600ms 50ms ease')),
      transition('open => closed', animate('600ms 50ms ease'))
    ])],  
})

export class AppComponent implements OnInit {
  constructor(private itemService:MovieService) { }
  category = 'Movie: ';
  selectedItem: string;
  movies: Movie [];
  getMovies():void {
  //this.movies = this.itemService.getMovies();
  //this.itemService.getMovies().then(items => console.log("mv: ", items.length));
  this.itemService.getMovies().then(items => this.movies = items);
  
}

ngOnInit () {
  this.getMovies();
}
  showClear = "";
  onSelect(item:Movie):void {
    this.selectedItem = item.title;
    this.showClear = "";//css classname
    this.toggleMenu();
  };

  onClear():void {
    this.selectedItem = "";
    this.showClear = "no";
  }

  state = "closed";//closed or open
  toggleMenu():void {
    if(this.state == "closed") {
    this.state = "open";
    } else {
    this.state = "closed";
    }
  }
}