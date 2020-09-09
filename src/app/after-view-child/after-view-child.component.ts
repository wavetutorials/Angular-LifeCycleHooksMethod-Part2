import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-view-child',
  templateUrl: './after-view-child.component.html',
  styles: [
  ]
})
export class AfterViewChildComponent implements OnInit {

  name = "AfterViewChild";

  constructor() { }

  GetEmployee(): any[] {
    return [
      { name: 'Jack' },
      { name: 'Mark' },
      { name: 'Smith' }
    ]

  }

  ngOnInit(): void {
  }

}
