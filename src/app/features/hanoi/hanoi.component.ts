import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hanoi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hanoi.component.html',
  styleUrl: './hanoi.component.scss',
})
export class HanoiComponent {}
