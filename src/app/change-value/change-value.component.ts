import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-value.component.html',
  styleUrls: ['./change-value.component.scss']
})
export class ChangeValueComponent implements OnInit {
  value = 0;
  constructor() { }

  ngOnInit() {
  }

  onChange(change: boolean) {
    change ? this.value++ : this.value--;
  }
}
