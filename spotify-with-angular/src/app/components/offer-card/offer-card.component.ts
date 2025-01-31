import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  imports: [],
  templateUrl: './offer-card.component.html',
})
export class OfferCardComponent {
  @Input('title') title: string = '';
  @Input('imageUrl') imageUrl: string = '';
}
