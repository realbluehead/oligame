import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss',
})
export class SudokuComponent {
  result = [
    [1, 2, 3, 4],
    [2, 3, 4, 1],
    [3, 4, 1, 2],
    [4, 1, 2, 3],
  ];

  private generateRow() {
    const arr = [1, 2, 3, 4];
    for (let i = 3; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  private validRow(currentRows: any, newRow: any): boolean {
    let found = false;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < currentRows.length; j++) {
        if (currentRows[j][i] == newRow[i]) found = true;
      }
    }
    return !found;
  }

  public regenerate() {
    let generatedRows = 0;
    let generated = [];

    while (generatedRows < 4) {
      const row = this.generateRow();
      if (this.validRow(generated, row)) {
        generated.push(row);
        generatedRows++;
      }
    }
    this.result = generated;
  }

  public isHoritzontallyConnected(i: number, j: number) {
    if (i < 3) {
      if (
        this.result[i][j] - 1 === this.result[i + 1][j] ||
        this.result[i][j] + 1 === this.result[i + 1][j]
      )
        return true;
      else return false;
    }
    return false;
  }

  public isVerticallyConnected(i: number, j: number) {
    if (j < 3) {
      if (
        this.result[i][j] - 1 === this.result[i][j + 1] ||
        this.result[i][j] + 1 === this.result[i][j + 1]
      )
        return true;
      else return false;
    }
    return false;
  }

  public cellChanged(i: number, j: number, value: any) {
    console.log(value);
  }
}
