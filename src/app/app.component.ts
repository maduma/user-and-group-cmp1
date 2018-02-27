import { Component } from '@angular/core';
import { ITEMSET, SEARCHRESULTS } from './mock-set';
import { Item, Change, Action } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemSet = ITEMSET;
  searchResults = SEARCHRESULTS;
  changes: Change[] = [];

  remove(item: Item): void {
    const change = {action: Action.Remove, item: item};
    const invChange = {action: Action.Add, item: item};
    const invChangeIndex = this.changes.findIndex(
      (a) => a.action === invChange.action && a.item === invChange.item
    );
    console.log(change)
    console.log(invChangeIndex);
    if (invChangeIndex != -1) {
      this.changes.splice(invChangeIndex, 1);
      return;
    }
    this.changes.push(change);
    const index = this.itemSet.items.indexOf(item);
    console.log(item);
    this.itemSet.items.splice(index, 1);
    this.searchResults.push(item);
    console.log('remove', index, item);
  }

  add(item: Item): void {
    const change = {action: Action.Add, item: item};
    const invChange = {action: Action.Remove, item: item};
    const invChangeIndex = this.changes.findIndex(
      (a) => a.action === invChange.action && a.item === invChange.item
    );

    console.log(change)
    console.log(invChangeIndex);
    if (invChangeIndex !== -1) {
      this.changes.splice(invChangeIndex, 1);
    } else {
      this.changes.push(change);
    }

    this.itemSet.items.push(item);
    this.itemSet.items = this.itemSet.items.sort(
      (a,b) => a.displayName > b.displayName ? 1:0
    );
    const index = this.searchResults.indexOf(item);
    this.searchResults.splice(index, 1);
    console.log('add', index, item);
  }
}
