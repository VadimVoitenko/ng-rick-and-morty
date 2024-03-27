import { Component, Input } from '@angular/core'
import { ICharacter } from '../../../../interfaces/icharacter'

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharacterItemComponent {
  @Input()
  characterItem!: ICharacter

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
}
