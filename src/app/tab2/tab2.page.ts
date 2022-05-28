import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  items: any[];
  itemToRemove: string;
  name: string;
  amount: number;
  desc: string;
  isOpen: boolean;

  constructor() {
    this.name = '';
    this.amount = null;
    this.desc = '';
    this.items = [{ name: 'Cosa', amount: 15 }];
    this.isOpen = false;
  }

  addItem() {
    if (this.name !== '') {
      const itemToAdd = {
        name: this.name,
        amount: this.amount,
        desc: this.desc,
      };
      this.items.push(itemToAdd);
    }
  }
  removeItem(itemToRemove: string) {
    const index = this.items.indexOf(itemToRemove);
    if (index !== -1) {
      console.log(index);
      this.items.splice(index, 1);
    }
  }
}
