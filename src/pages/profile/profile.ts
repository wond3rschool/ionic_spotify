import { Component } from '@angular/core';
import { ViewController,NavController, NavParams } from 'ionic-angular';
import { SpotifydataProvider } from '../../providers/spotifydata/spotifydata';
import { CollectionPage } from '../../pages/collection/collection';
import { FindfriendsPage } from '../../pages/findfriends/findfriends';

import { ModalController } from 'ionic-angular';
import { ModalsSongPage } from '../modals-song/modals-song';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  ImageUrl:string='';
  public tap1: number = 0;
  public tap2: number = 0;
  public tap3: number = 0;

  status:boolean;
  

  constructor(private modalCtrl:ModalController,public viewCtrl: ViewController,spotify:SpotifydataProvider,public navCtrl: NavController, public navParams: NavParams) {
   this.ImageUrl = spotify.getImage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    // this.viewCtrl.setBackButtonText('');
  }

  modalsTapped(){
    let modal = this.modalCtrl.create(ModalsSongPage);
    modal.present();
  }

  changeButton(){
    this.status=!this.status;
    console.log(this.status);
  }

  findfriends(){
    this.navCtrl.push(FindfriendsPage);
  }

  tapEvent1(e) {
    this.tap1++
  }
  tapEvent2(e) {
    this.tap2++
  }
  tapEvent3(e) {
    this.tap3++
  }

  back(){
    this.navCtrl.push(CollectionPage);
  }

  

}
