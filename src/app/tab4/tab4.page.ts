import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  risultato: number;
  operazioneLatoS: string;
  operazioneLatoD: string;
  operatore: string;
  stringInserita: string;

  constructor() {
    this.risultato = null;
    this.operazioneLatoS = null;
    this.operazioneLatoD = null;
    this.operatore = null;
    this.stringInserita = null;
  }

  ngOnInit() {}

  addNumber(myNumber: string) {
    if (this.operatore === null) {
      if (this.operazioneLatoS === null) {
        this.operazioneLatoS = myNumber;
      } else {
        this.operazioneLatoS += myNumber;
      }
    } else if (this.operatore !== null) {
      if (this.operazioneLatoD === null) {
        this.operazioneLatoD = myNumber;
      } else {
        this.operazioneLatoD += myNumber;
      }
    }
    if (this.stringInserita !== null) {
      this.stringInserita += myNumber;
    } else {
      this.stringInserita = myNumber;
    }
    console.log(this.stringInserita);
  }

  addOperator(myOperator) {
    this.operatore = myOperator;
    this.stringInserita += this.operatore;
  }

  ottieniRisultato() {
    switch (this.operatore) {
      case '+':
        this.risultato =
          Number(this.operazioneLatoS) + Number(this.operazioneLatoD);
        this.resetNumberAndOperator();
        break;
      case '-':
        this.risultato =
          Number(this.operazioneLatoS) - Number(this.operazioneLatoD);
        this.resetNumberAndOperator();
        break;
      case '*':
        this.risultato =
          Number(this.operazioneLatoS) * Number(this.operazioneLatoD);
        this.resetNumberAndOperator();
        break;
      case '/':
        this.risultato =
          Number(this.operazioneLatoS) / Number(this.operazioneLatoD);
        this.resetNumberAndOperator();
        break;
      default:
        break;
    }
  }

  resetNumberAndOperator() {
    this.operazioneLatoD = null;
    this.operazioneLatoS = null;
    this.operatore = null;
    this.stringInserita = null;
  }
}
