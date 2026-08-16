import { Component, effect, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

export interface SidebarItem {
  label: string;
  icon: string;
  route?: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar implements OnInit {
  isCollapsed = signal(true);
  constructor(){
    
  }
  ngOnInit(): void {
    
  }
  toggleSidebar(): void {
    this.isCollapsed.update(state => !state);
  }
  alert(): void {
    alert('dashboard');
  }
}