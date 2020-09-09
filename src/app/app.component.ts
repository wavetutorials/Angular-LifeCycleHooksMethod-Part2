import { Component, OnInit, Input } from '@angular/core';
import { visitAll } from '@angular/compiler';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Lifecycle Hooks in Angular - Part2';
  userFirstName = "Wave";
  userLastName = "Tutorials";

  loadDestroyComp: boolean = true;

  constructor() {
    // console.log('AppComponent Constructor Executed');
  }

  ngOnInit() {
    // console.log('AppComponent Constructor Executed');
  }

  LoadDestroyComponent(val: boolean) {
    this.loadDestroyComp = val;
  }

}