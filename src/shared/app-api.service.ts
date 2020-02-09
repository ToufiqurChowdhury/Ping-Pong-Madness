import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppApi{

    private baseUrl = 'https://game-schedule.firebaseio.com/';
    currentTourney: any = {};
    private tourneyData = {};

    constructor(private http: Http){ }

    getTournaments(){
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe( res => resolve(res.json()));
        })
    }

    getTournamentsData(tourneyId, forceRefresh: boolean = false): Observable<any> {
        if(!forceRefresh && this.tourneyData[tourneyId]){
            this.currentTourney = this.tourneyData[tourneyId];
            console.log("Just return the data");
            return Observable.of(this.currentTourney);
        }

        console.log("Data is not available");
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
                .map((response: Response) => {
                    this.currentTourney = response.json();
                    return this.currentTourney;
                });                 
    }    

    // getTournamentsData(tourneyId): Observable<any> {
    //     return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    //             .map((response: Response) => {
    //                 this.currentTourney = response.json();
    //                 return this.currentTourney;
    //             });                 
    // }

    getCurrentTourney(){
        return this.currentTourney;
    }

    refreshCurrentTourney(){
        return this.getTournamentsData(this.currentTourney.tournament.id, true);
    }
}
