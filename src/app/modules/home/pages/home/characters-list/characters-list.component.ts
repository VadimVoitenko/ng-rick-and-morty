import { Component, OnInit, Output } from '@angular/core'
import { RickAndMortyService } from '../../../services/rick-and-morty.service'
import { ICharacter } from '../../../interfaces/icharacter'

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  charactersList: ICharacter[] = []
  // currentPage = 1
  // totalRecords: number = 0

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadCharacters(1)
  }

  loadCharacters(page: number): void {
    this.rickAndMortyService.getCharacters(page).subscribe((data: any) => {
      this.charactersList = data.results
    })
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
