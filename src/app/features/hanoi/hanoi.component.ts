import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HanoiAerealComponent } from './components/hanoi-aereal.component/hanoi-aereal.component';

@Component({
  selector: 'app-hanoi',
  standalone: true,
  imports: [CommonModule, HanoiAerealComponent, HanoiAerealComponent],
  templateUrl: './hanoi.component.html',
  styleUrl: './hanoi.component.scss',
})
export class HanoiComponent {}
