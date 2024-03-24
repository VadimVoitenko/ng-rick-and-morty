import { Component, OnInit, Output } from '@angular/core'
import { RickAndMortyService } from '../../../services/rick-and-morty.service'
import { ICharacter } from '../../../interfaces/icharacter'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characterList: ICharacter[] = []
  // currentPage = 1
  // totalRecords: number = 0

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.getCharacters(1)
  }

  getCharacters(page: number): void {
    this.rickAndMortyService.getCharacters(page).subscribe((data: any) => (this.characterList = data.results))
  }

  // nextPage(): void {
  //   this.currentPage++
  //   this.loadCharacters(this.currentPage)
  // }

  // previousPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--
  //     this.loadCharacters(this.currentPage)
  //   }
  // }
}
