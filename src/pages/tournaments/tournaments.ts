import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TournamentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

import { TeamsPage } from '../pages';
import { AppApi } from '../../shared/shared';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private appApi: AppApi,
    private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');

    let loader = this.loadingController.create({
      content: "Fetching tournaments...",
      //spinner: 'dots'
    });

    loader.present().then(() => {
      this.appApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });

    

    console.log(this.tournaments);

  }

  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }

}
