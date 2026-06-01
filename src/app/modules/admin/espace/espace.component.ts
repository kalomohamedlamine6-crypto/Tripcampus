import { Component, ViewEncapsulation } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}




 @Component({
    selector: 'espace',
    templateUrl: './espace.component.html',
    encapsulation: ViewEncapsulation.None,
})


export class EspaceComponent {
    tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: '#7a7da8'},
    {text: 'Two', cols: 1, rows: 2, color: '#3a3a3d'},
    {text: 'Three', cols: 1, rows: 1, color: '#252d94'},
    {text: 'Four', cols: 2, rows: 1, color: '#0a1394'},
  ];
}

