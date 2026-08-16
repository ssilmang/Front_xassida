import { Component } from '@angular/core';

import { Sidebar } from '../components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [Navbar,RouterOutlet,Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
