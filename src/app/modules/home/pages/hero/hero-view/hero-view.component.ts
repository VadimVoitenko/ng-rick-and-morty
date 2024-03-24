import { Component, OnInit } from '@angular/core'
import { ICharacter } from '../../../interfaces/icharacter'
import { RickAndMortyService } from '../../../services/rick-and-morty.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.scss'],
})
export class HeroViewComponent implements OnInit {
  id!: number
  characterItem!: ICharacter

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id'])
      this.getCharacter(this.id)
    })
  }

  getCharacter(id: number): void {
    this.rickAndMortyService.getCharacterById(id).subscribe(
      (response: any) => {
        this.characterItem = response
      },
      (error) => {
        console.error('Error fetching data:', error)
      },
    )
  }

  goBack() {
    // this.router.navigate(['/home'])
    // this.router.navigate(['/home', this.id])
    this.location.back()
  }
}
