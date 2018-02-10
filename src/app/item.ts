import {Pipe, PipeTransform } from '@angular/core';

export class Item {
    id: string;
    displayName: string;
}

export class ItemSet {
    name: string;
    items: Item[];
}

export enum Action {Add, Remove}

export class Change {
    action: Action;
    item: Item;
}

@Pipe({name: 'action'})
export class ActionPipe implements PipeTransform {
    transform(action: Action): string {
        if (action == Action.Add) return '+';
        if (action == Action.Remove) return '-';
    }
}