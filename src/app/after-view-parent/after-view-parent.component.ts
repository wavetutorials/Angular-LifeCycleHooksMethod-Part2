import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, AfterViewChecked } from '@angular/core';
import { AfterViewChildComponent } from '../after-view-child/after-view-child.component';

@Component({
  selector: 'app-after-view-parent',
  templateUrl: './after-view-parent.component.html',
  styles: [
  ]
})
export class AfterViewParentComponent implements AfterViewInit, AfterViewChecked {

  private prevValue = undefined;

  @ViewChild(AfterViewChildComponent) viewChild: AfterViewChildComponent;
  @ViewChildren(AfterViewChildComponent) viewChildren: QueryList<AfterViewChildComponent>

  constructor() { }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Executed');

    console.log(this.viewChild.name);

    this.viewChildren.forEach(x => {
      console.log(x.name);
      x.GetEmployee().forEach(element => {
        console.log(element.name);
      })

    })
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Executed');

    if (this.prevValue !== this.viewChild.name) {
      console.log('Value changed from ' + this.prevValue + ' to ' + this.viewChild.name);
      this.prevValue = this.viewChild.name;
    }

  }

}
