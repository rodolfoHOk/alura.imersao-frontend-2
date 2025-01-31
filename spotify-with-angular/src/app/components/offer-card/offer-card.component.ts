import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  imports: [NgClass],
  templateUrl: './offer-card.component.html',
})
export class OfferCardComponent {
  @Input('title') title: string = '';
  @Input('imageUrl') imageUrl: string = '';
  @Input('color') color: string = '';
}
