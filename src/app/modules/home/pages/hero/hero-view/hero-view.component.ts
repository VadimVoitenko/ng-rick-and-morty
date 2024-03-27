import { Component, OnInit } from '@angular/core'
import { ICharacter } from '../../../interfaces/icharacter'
import { CharacterService } from '../../../services/character.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.scss'],
})
export class HeroViewComponent implements OnInit {
  id!: number
  characterItem!: ICharacter

  constructor(private characterService: CharacterService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id'])
      this.getCharacter(this.id)
    })
  }

  getCharacter(id: number): void {
    this.characterService.getCharacterById(id).subscribe(
      (response: any) => {
        this.characterItem = response
      },
      (error) => {
        console.error('Error fetching data:', error)
      },
    )
  }

  getStatusColor(charcterItem: ICharacter): string {
    switch (charcterItem.status) {
      case 'Alive':
        return 'alive'
      case 'Dead':
        return 'dead'
      default:
        return 'unknown'
    }
  }

  goBack() {
    // this.router.navigate(['/home'])
    // this.router.navigate(['/home', this.id])
    this.location.back()
  }
}
