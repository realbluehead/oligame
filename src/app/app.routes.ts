import { Routes } from '@angular/router';
import { SudokuComponent } from './features/sudoku/sudoku.component';
import { HomePage } from './pages/home/home.page';
import { NotfoundPage } from './pages/notfound/notfound.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'sudoku', component: SudokuComponent },
  { path: '**', component: NotfoundPage },
];
