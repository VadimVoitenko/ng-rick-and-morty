import { ICharacter } from './icharacter'

export interface ICharacterResponse {
  results: ICharacter[]
  totalCount: number
}
