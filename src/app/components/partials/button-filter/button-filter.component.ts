import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-filter',
  templateUrl: './button-filter.component.html',
  styleUrls: ['./button-filter.component.scss'],
})
export class ButtonComponent implements OnInit {
  activeFilter: boolean = true;
  isClick: boolean = false;

  @Input()
  text: string = 'Filter';

  items: string[] = ['Character', 'Location', 'Episodes'];

  constructor() {}
  ngOnInit(): void {}

  onClick() {
    this.activeFilter = !this.activeFilter;
    this.isClick = !this.isClick;
  }

  search() {}
}
