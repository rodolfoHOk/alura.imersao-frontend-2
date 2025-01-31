import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistsResponse } from '../../models/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  BASE_URL = 'http://localhost:4000/api';

  constructor(private httpClient: HttpClient) {}

  getPopularArtists(): Observable<ArtistsResponse> {
    return this.httpClient.get<ArtistsResponse>(
      `${this.BASE_URL}/artists/popular`
    );
  }

  searchArtists(searchTerm: string): Observable<ArtistsResponse> {
    return this.httpClient.get<ArtistsResponse>(
      `${this.BASE_URL}/artists?search=${searchTerm}`
    );
  }
}
