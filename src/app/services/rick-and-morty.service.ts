import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharactersResponse } from '../interfaces/icharacters-response';
import { ICharacter } from '../interfaces/icharacter';

@Injectable()
export class RickAndMortyService {
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get<ICharactersResponse>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  // postCharacter(data: ICharacter) {
  //   return this.http.post<ICharactersResponse>(
  //     'https://rickandmortyapi.com/api/character',
  //     data
  //   );
  // }

  // deleteCharacter() {
  //   return this.http.delete<ICharactersResponse>(
  //     'https://rickandmortyapi.com/api/character'
  //   );
  // }

  // updateCharacter(data: ICharacter) {
  //   return this.http.put<ICharactersResponse>(
  //     'https://rickandmortyapi.com/api/character',
  //     data
  //   );
  // }
}
