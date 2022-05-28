/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  numero1: number;
  numero2: number;
  ch_name: string;
  hp: number;
  mana: number;
  status: string;
  buttonText: string;
  constructor(public alertController: AlertController) {
    this.numero1 = null;
    this.numero2 = null;
    this.ch_name = '';
    this.hp = 0;
    this.mana = 0;
    this.status = '';
    this.buttonText = 'Togli Hp';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Somma',
      subHeader: `${this.numero1 + this.numero2}`,
      message: 'Clicca OK per chiudere',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  togliHp() {
    this.hp--;
  }
}
