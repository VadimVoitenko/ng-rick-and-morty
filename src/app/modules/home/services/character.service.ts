import { ICharacterResponse } from '../interfaces/icharacters-response'
import { Injectable, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ICharacter } from '../interfaces/icharacter'

@Injectable()
export class CharacterService {
  private readonly apiURL = 'https://rickandmortyapi.com/api/'

  constructor(private readonly http: HttpClient) {}

  public getCharacters(currentPage: number): Observable<ICharacterResponse> {
    return this.http.get<ICharacterResponse>(this.apiURL + 'character/?page=' + currentPage)
  }

  public getCharacterById(id: number): Observable<ICharacter> {
    return this.http.get<ICharacter>(this.apiURL + 'character/' + id)
  }
}
