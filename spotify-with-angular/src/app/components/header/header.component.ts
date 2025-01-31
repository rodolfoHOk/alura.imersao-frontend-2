import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faDownload } from '@fortawesome/free-solid-svg-icons';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, SearchInputComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  faHome = faHome;
  faDownload = faDownload;
}
