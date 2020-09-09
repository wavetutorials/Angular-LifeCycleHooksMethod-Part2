import {
  Component, Input,
  OnChanges, SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html'

})
export class AppChildComponent implements
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewChecked, AfterViewInit,
  OnDestroy {

  @Input() firstName: string;
  @Input() lastName: string;

  prevFirstName = undefined;

  constructor() {
   // console.log('AppChildComponent Constructor Executed');
  }

  ngOnChanges(changes: SimpleChanges) {
   // console.log('AppChildComponent ngOnChanges Executed');
    /*
    for (const change in changes) {
      const chng = changes[change];
      console.log('Property: ' + change + ':-');
      console.log('Previous Value: ' + chng.previousValue + ' | ' + 'Current Value: ' + chng.currentValue);
    }
    */
  }

  ngOnInit() {
   // console.log('AppChildComponent ngOnInit Executed');
  }

  ngDoCheck() {
   // console.log('AppChildComponent ngDoCheck Executed');
    /*
     if (this.firstName !== this.prevFirstName) {
      // console.log("Value changed from " + this.prevFirstName + " to " + this.firstName);
      this.prevFirstName = this.firstName;
    }
    */
  }

  ngAfterContentInit() {
   // console.log('AppChildComponent ngAfterContentInit Executed');
  }

  ngAfterContentChecked() {
   // console.log('AppChildComponent ngAfterContentChecked Executed');
  }

  ngAfterViewChecked() {
   // console.log('AppChildComponent ngAfterViewChecked Executed');
  }

  ngAfterViewInit() {
   // console.log('AppChildComponent ngAfterViewInit Executed');
  }

  ngOnDestroy() {
   // console.log('AppChildComponent ngOnDestroy Executed');
  }

}
