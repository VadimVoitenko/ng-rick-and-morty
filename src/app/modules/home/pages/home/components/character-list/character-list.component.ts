import { Component, OnInit } from '@angular/core'
import { ICharacter } from '../../../../interfaces/icharacter'
import { ICharacterResponse } from '../../../../interfaces/icharacters-response'
import { CharacterService } from '../../../../services/character.service'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characterList: ICharacter[] = []
  currentPage: number = 1
  maxSize: number = 0
  pageSize: number = 20
  totalCharacters: number = 0

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters()
    this.calculateMaxSize()
  }

  getCharacters(): void {
    this.characterService.getCharacters(this.currentPage).subscribe((data: ICharacterResponse) => {
      this.characterList = data.results
      this.totalCharacters = data.info.count
    })
  }

  calculateMaxSize() {
    const screenWidth = window.innerWidth
    this.maxSize = screenWidth < 390 ? 3 : 5
  }

  onPageChange(page: number) {
    this.currentPage = page
    this.getCharacters()
  }
}
