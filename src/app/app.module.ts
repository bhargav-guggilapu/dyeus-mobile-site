import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FouthSectionComponent } from './fouth-section/fouth-section.component';
import { FifthComponentComponent } from './fifth-component/fifth-component.component';
import { SixthSectionComponent } from './sixth-section/sixth-section.component';
import { SeventhSectionComponent } from './seventh-section/seventh-section.component';
import { EightSectionComponent } from './eight-section/eight-section.component';
import { NinthSectionComponent } from './ninth-section/ninth-section.component';

@NgModule({
  declarations: [											
    AppComponent,
    NavComponent,
      FirstSectionComponent,
      SecondSectionComponent,
      ThirdSectionComponent,
      FouthSectionComponent,
      FifthComponentComponent,
      SixthSectionComponent,
      SeventhSectionComponent,
      EightSectionComponent,
      NinthSectionComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
