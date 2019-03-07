import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import { PetProvider } from '../../providers/pet/pet';

@IonicPage()
@Component({
  selector: 'page-missed-details',
  templateUrl: 'missed-details.html',
})
export class MissedDetailsPage {
  pet;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public petProvider: PetProvider) {

    this.pet = petProvider.getMissedPet(navParams.get('id'));
  }
}
