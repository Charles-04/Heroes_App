import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import {HEROES} from "../mock-heroes"
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  heroes = HEROES

  constructor() { }

  ngOnInit(): void {
  }

}
