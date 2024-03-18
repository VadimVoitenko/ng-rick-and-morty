import { Injectable, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ICharacterResponse } from '../interfaces/icharacters-response'
import { ICharacter } from '../interfaces/icharacter'

export interface RickAndMortyResponse {
  results: ICharacter[]
  info: {
    next: string
  }
}

@Injectable()
export class RickAndMortyService implements OnInit {
  private apiURL = 'https://rickandmortyapi.com/api/'

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getCharacters(currentPage: number): Observable<ICharacterResponse> {
    return this.http.get<ICharacterResponse>(this.apiURL + 'character/?page' + currentPage)
  }
}
