import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {}
