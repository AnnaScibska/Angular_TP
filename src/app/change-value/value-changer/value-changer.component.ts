import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-value-changer',
  templateUrl: './value-changer.component.html',
  styleUrls: ['./value-changer.component.scss']
})
export class ValueChangerComponent implements OnInit {
  @Output()
  changed = new EventEmitter<boolean>()
  @Input() isDisable: boolean;
  constructor() { }

  ngOnInit() {
  }

  change(change: boolean) {
    this.changed.emit(change);
  }

}
