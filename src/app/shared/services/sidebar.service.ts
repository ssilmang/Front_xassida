import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private _collapsed = new BehaviorSubject<boolean>(true); // true = fermé/collapsé par défaut
  collapsed$ = this._collapsed.asObservable();

  toggle(): void {
    this._collapsed.next(!this._collapsed.getValue());
  }
  open(): void {
    this._collapsed.next(false);
  }
  close(): void {
    this._collapsed.next(true);
  }
  setCollapsed(v: boolean): void {
    this._collapsed.next(v);
  }
}