import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

import * as _ from 'lodash';
import { TeamHomePage } from '../pages';
import { AppApi } from '../../shared/shared';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];
  queryText: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private appApi: AppApi,
    private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: "Fetching teams...",
      spinner: 'dots'
    });

    loader.present().then(() => {
    this.appApi.getTournamentsData(selectedTourney.id).subscribe(data => {

        this.allTeams = data.teams;
        this.allTeamDivisions = 
              _.chain(data.teams)
               .groupBy('division')
               .toPairs()
               .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
               .value();

        this.teams = this.allTeamDivisions;
        loader.dismiss();
      });
    });

  }

  itemTapped($event, team){
    this.navCtrl.push(TeamHomePage, team);
  }

  updateTeam(){
    let queryTextLower = this.queryText.toLowerCase();

    let filteredTeams = [];

    _.forEach(this.allTeamDivisions, td => {
      let teams = _.filter(td.divisionTeams, t => (<any>t).name.toLowerCase().includes(queryTextLower));
      if(teams.length){
        filteredTeams.push({divisionName: td.divisionName, divisionTeams: teams})
      }
    });

    this.teams = filteredTeams;
  }

}
