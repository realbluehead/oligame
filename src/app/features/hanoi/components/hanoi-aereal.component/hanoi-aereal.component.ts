import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hanoi-aereal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hanoi-aereal.component.html',
  styleUrl: './hanoi-aereal.component.scss',
})
export class HanoiAerealComponent {
  @Input() colors: Array<string> = [];
}
