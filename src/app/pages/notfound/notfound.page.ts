import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export
@Component({
  selector: 'app-notfound-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notfound.page.html',
  styleUrl: './notfound.page.scss',
})
class NotfoundPage {}
