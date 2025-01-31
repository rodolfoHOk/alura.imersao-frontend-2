import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faShip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  imports: [FontAwesomeModule],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  faSearch = faSearch;
  faShip = faShip;
}
