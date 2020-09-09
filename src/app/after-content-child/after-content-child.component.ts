import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-content-child',
  templateUrl: './after-content-child.component.html',
  styles: [
  ]
})
export class AfterContentChildComponent {

  name = "AfterContentChild";

  constructor() { }

  GetEmployee(): any[] {
    return [
       { name: 'Jack' },
       { name: 'Mark' },
       { name: 'Smith' },
     ]
   }



}
