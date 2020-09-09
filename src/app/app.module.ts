import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { AfterViewChildComponent } from './after-view-child/after-view-child.component';
import { AfterContentChildComponent } from './after-content-child/after-content-child.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { AddBtnComponent } from './add-btn/add-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    AfterViewParentComponent,
    AfterViewChildComponent,
    AfterContentChildComponent,
    AfterContentParentComponent,
    AddBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
   // console.log('AppModule Constructor Executed');
  }
}
