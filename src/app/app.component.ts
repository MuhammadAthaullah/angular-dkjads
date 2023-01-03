import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pattern: any = '*';
  arr = [
    {
      c1: 1,
      c2: 2,
      c3: 3,
      c4: 4,
    },
    {
      c1: 5,
      c2: 6,
      c3: 7,
      c4: 8,
    },
    {
      c1: 9,
      c2: 10,
      c3: '',
      c4: '',
    },
  ];
  ngOnInit(): void {}
  name = 'Angular';
}
