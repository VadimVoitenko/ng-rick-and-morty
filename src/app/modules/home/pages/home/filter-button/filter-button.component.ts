import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
})
export class FilterButtonComponent {
  activeFilter: boolean = false
  isClick: boolean = false

  @Input()
  selectedItem!: string
  selectedCharacter!: string
  selectedEpisodes!: string
  selectedLocation!: string

  items: string[] = ['Character', 'Location', 'Episodes']
  characters: string[] = ['Name', 'Status', 'Species', 'Type', 'Gender']
  episodes: string[] = ['Name', 'Episodes']
  locations: string[] = ['Name', 'Type', 'Dimension']

  constructor() {}

  onClick() {
    this.activeFilter = !this.activeFilter
    this.isClick = !this.isClick
  }

  search() {}
}
