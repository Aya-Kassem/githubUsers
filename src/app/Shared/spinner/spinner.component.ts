import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  userExist!: boolean;
  // gameInfo$ : Observable<Game> = this._Store.select('GameInfo');
  // private _Store: Store<{ 'GameInfo': Game }>
  constructor() { }
  ngOnInit() {
      console.log('Spinner init'); 
  }
}
