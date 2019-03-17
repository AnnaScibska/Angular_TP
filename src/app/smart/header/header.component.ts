import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  template:
    '<p>' +
    '  Dumb: {{titleInSmart}}' +
    '</p>'
})
export class HeaderComponent implements OnInit {
  @Input('titleInDumb') titleInSmart: string;
  ngOnInit() {
  }
}
