import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { AfterContentChildComponent } from '../after-content-child/after-content-child.component';

@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styles: [
  ]
})
export class AfterContentParentComponent implements AfterContentInit, AfterContentChecked {

  private prevValue = undefined;

  @ContentChild(AfterContentChildComponent) contentChild: AfterContentChildComponent;
  @ContentChildren(AfterContentChildComponent) contentChildren: QueryList<AfterContentChildComponent>;


  constructor() { }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Executed');

    console.log(this.contentChild.name);

    this.contentChildren.forEach(x => {
      console.log(x.name);

      x.GetEmployee().forEach(element => {
        console.log(element.name);
      });
    });
  }


  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Executed');

    if (this.prevValue !== this.contentChild.name) {
      console.log('Value changed from ' + this.prevValue + ' to ' + this.contentChild.name);
      this.prevValue = this.contentChild.name;
    }

  }

}
