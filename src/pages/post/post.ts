import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})

export class Post {

  Item: any;
  parking: string;


  constructor(public navCtrl: NavController, navParams: NavParams) {
      this.Item = navParams.get('item');
      if(this.Item.hasParking === true){
        this.parking = 'Да';
      } else {
        this.parking = 'Нет';
      }
  }

}
