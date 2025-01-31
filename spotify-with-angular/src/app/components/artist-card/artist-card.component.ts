import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Artist } from '../../../models/artist';

@Component({
  selector: 'app-artist-card',
  imports: [FontAwesomeModule],
  templateUrl: './artist-card.component.html',
})
export class ArtistCardComponent {
  faPlay = faPlay;
  @Input('artist') artist!: Artist;
}
