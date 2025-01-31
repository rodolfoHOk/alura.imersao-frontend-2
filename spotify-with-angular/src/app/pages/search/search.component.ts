import { Component } from '@angular/core';
import { OfferCardComponent } from '../../components/offer-card/offer-card.component';
import offers from '../../../offers.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [OfferCardComponent, NgFor],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  offers = offers.offers;
}
