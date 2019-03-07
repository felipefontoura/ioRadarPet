import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissedDetailsPage } from './missed-details';

@NgModule({
  declarations: [
    MissedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MissedDetailsPage),
  ],
})
export class MissedDetailsPageModule {}
