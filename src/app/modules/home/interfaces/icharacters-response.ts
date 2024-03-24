import { ICharacter } from './icharacter'

export interface ICharacterResponse {
  results: ICharacter[]
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
}
