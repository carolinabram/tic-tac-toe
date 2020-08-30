import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h3>Winner is {{winner}} </h3>
    <button (click)="reset()" style="margin-bottom:10px">Reset</button>
    <div *ngFor="let row of [1,2,3]; let indexR = index">
      <button *ngFor="let col of [1,2,3]; let indexC = index" 
        (click)="setValue(indexR, indexC)"
        style="height:40px; width:40px;margin:2px">
        {{ game[(indexR*3) + indexC] }}
      </button>
    </div>
  `
})
export class AppComponent {
  title = 'tic-tac-toe';
  game = [];
  turn = 0;
  cols = 3;
  winner = "";

  setValue(row: number, col:number){
    let place = (row*3) + col;
    if(this.game[place]) return;
    this.game[place] = this.turn % 2 ? 'X' : 'O';
    this.turn++;
    this.winner = this.whoWin();
  }

  whoWin(){
    for(let i = 0; i<this.game.length; i++){
      if(this.game[i]!== undefined){        
        // Before and next by the sides
        if(this.game[i] == this.game[i-1] && this.game[i] == this.game[i+1]){
          return this.game[i];
        }
        
        // The top and bottom
        if(this.game[i] == this.game[i-this.cols] && this.game[i] == this.game[i+this.cols]){
          return this.game[i];
        }
  
        // Corners top left and bottom right
        if(this.game[i] == this.game[i-this.cols-1] && this.game[i] == this.game[i+this.cols+1]){
          return this.game[i];
        }

        if(this.game[i] == this.game[i-this.cols+1] && this.game[i] == this.game[i+this.cols+1]){
          return this.game[i];
        }
      }
    }// for
  }

  reset(){
    this.game = [];
  }
}
