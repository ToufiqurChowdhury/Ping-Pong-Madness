import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
//import * as storageForage from 'localforage';

//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { SqlStorage } from './shared';
import * as _ from 'lodash';

const win: any = window;

@Injectable()
export class UserSettings{
storage = new Storage(window.localStorage);

    // public db: SQLite;
    // public sql: SqlStorage;

    constructor(private events: Events){
        // if (win.sqlitePlugin) {
        //     this.sql = new SqlStorage();
        //     console.log(this.sql);
        // } else {
        //     console.warn('SQLite plugin not installed. Falling back to regular Ionic Storage.');
        // }        
        
     }

     favoriteTeam(team, tournamentId, tournamentName){
         let item = { team: team,
                      tournamentId: tournamentId,
                      tournamentName: tournamentName
                    };
        
         //this.storage.set(team.id, JSON.stringify(item));
         //storageForage.setItem(team.id, JSON.stringify(item));
         window.localStorage.setItem(team.id, JSON.stringify(item));
         this.events.publish('favorites:changed');
         //console.log(this.sql);         
     }

     unfavoriteTeam(team){
         //this.storage.remove(team.id);
         //storageForage.removeItem(team.id);
         window.localStorage.removeItem(team.id);
         this.events.publish('favorites:changed');         
     }

     isFavoriteTeam(teamId){
         //return this.storage.get(teamId).then(value => value ? true : false);
         //return storageForage.getItem(teamId).then(value => value ? true : false);
         return window.localStorage.getItem(teamId);
     }

     getAllFavorites(){
         let items = [];
         _.forIn(window.localStorage, (v, k) => {
             items.push(JSON.parse(v));
         })
         return items.length ? items : null;        
     }

    // initStorage(){
    //     if (this.sql){
    //         return this.sql.initializeDatabase();
    //     } else {
    //         return new Promise(resolve => resolve());
    //     }
    // }     

}
