import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { AgmCoreModule } from 'angular2-google-maps/core';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

import { AppApi } from '../../shared/shared';
declare var window: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',  
  
})
export class MapPage {
  map: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private appApi: AppApi) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
      let game = this.navParams.data;            
      let tourneyData = this.appApi.getCurrentTourney();
      let location = tourneyData.locations[game.locationId];

      this.map = {
        lat : location.latitude,
        lng : location.longitude,
        zoom: 12,
        markerLabel: game.location
      }  

  }

  getDirection(){
      window.location = 'geo:${this.map.lat},${this.map.lng};u=35'
  }  

}
