import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ChildComponent } from './InputAndOutput/Child/child/child.component';
import { ParentComponent } from './InputAndOutput/Parent/parent/parent.component';
import { CustomDirectiveComponent } from './InputAndOutput/custom-directive/custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    CustomDirectiveComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
