import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

import { Post } from '../post/post';

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {
  hotels: Array<{
    imageUrl: string,
    title: string,
    description: string,
    roomCost: number,
    hasParking: boolean,
    address: string,
    phone: string
  }>;

  arr = [];
  inputValue1: string = "";
  inputValue2: string = "";

  checked: boolean;


  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.hotels = [
      {
        imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
        title: 'Будапешт',
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: 'Москва, ул. Петровские Линии, 2',
        phone: '8 (495) 729-35-01'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
        title: 'Космос',
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: false,
        address: 'Москва, пр-т Мира, 150',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/ext/a3/07/a307a1998279948ca373e91031e34b6ade991ecf.jpeg',
        title: 'Империя',
        description: 'Отель "Империя"',
        roomCost: 2500,
        hasParking: true,
        address: 'Москва, 1-й Боткинский проезд, д.6',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/content/e3/5e/e35ed0c578f1952919adeb72bd5cccaf91ad401f.jpeg',
        title: 'Гостиница Ибис Москва Октябрьское Поле 3*',
        description: 'Гостиница Ибис Москва Октябрьское Поле 3*',
        roomCost: 4600,
        hasParking: false,
        address: 'Москва, 123060, ул. Маршала Рыбалко, д.2, корпус 5',
        phone: '8 (495) 234-12-06'
      }
    ]
    this.arr = this.hotels;
  }



  filterSearch() {
    if(this.inputValue1 === ''){
      this.arr = this.hotels;
    } else {
      this.arr = this.hotels.filter(data => {
        return data.roomCost >= Number(this.inputValue1);
      });
    }

    if(this.inputValue2 === ''){
      this.arr = this.arr;
    } else {
      this.arr = this.arr.filter(data => {
        return data.roomCost <= Number(this.inputValue2);
      });
    }

    if(this.checked === false){
      this.arr = this.arr;
    } else {
      this.arr = this.arr.filter(data => {
        return data.hasParking === this.checked;
      });
    }
  }


  openPostPage(item) {
    this.navCtrl.push(Post, { item: item });
  }

}
