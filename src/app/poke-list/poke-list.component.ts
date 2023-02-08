import { Component, OnInit } from '@angular/core';
import { PokeListService } from './poke-list.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.sass']
})

export class PokeListComponent implements OnInit {
  pokelist: any = []
  constructor(public pokeListService: PokeListService){}
  ngOnInit(): void {
    this.pokeListService.getList().subscribe(
      success => {
        console.log(success);
        this.pokelist = success.results
      }
    )
  }

}
