import { Component, Output } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/icharacter';
import { ICharactersResponse } from 'src/app/interfaces/icharacters-response';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'hero-items',
  templateUrl: './hero-items.component.html',
  styleUrls: ['./hero-items.component.scss'],
})
export class HeroItemsComponent {
  character: ICharacter = {
    id: 0,
    name: '',
    status: '',
    species: '',
    location: { name: '' },
    origin: { name: '' },
    image: '',
  };
  characters: ICharacter[] = [];

  color: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) {
    this.rickAndMortyService
      .getCharacters()
      .subscribe((data: ICharactersResponse) => {
        this.characters = data.results;
      });
  }

  // saveCharacter() {
  //   this.rickAndMortyService.postCharacter(this.character);
  // }
}
