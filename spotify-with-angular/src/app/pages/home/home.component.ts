import { Component, OnInit } from '@angular/core';
import { ArtistCardComponent } from '../../components/artist-card/artist-card.component';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../../models/artist';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ArtistCardComponent, NgFor],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private artistsService: ArtistsService) {}

  ngOnInit(): void {
    this.artistsService
      .getPopularArtists()
      .subscribe((response) => (this.artists = response.artists));
  }
}
