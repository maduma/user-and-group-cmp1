import { Item, ItemSet } from './item';

const ITEMS: Item[] = [
    { id: 'snsakala', displayName: 'Stéphane Nsakala' },
    { id: 'mgrof', displayName: 'Misch Grof' },
    { id: 'dahubert', displayName: 'Damien Hubert' },
]

export const ITEMSET: ItemSet = {
    name: 'InfraTeam',
    items: ITEMS,
}

export const SEARCHRESULTS: Item[] = [
    { id: 'ckoenig', displayName: 'Clément Koenig' },
    { id: 'tstempel', displayName: 'Tom Stempel' },
    { id: 'manmuller', displayName: 'Manuel Muller' },
    { id: 'bdavid', displayName: 'Benoît David' },
    { id: 'cpinte', displayName: 'Catherine Pinte' },
]