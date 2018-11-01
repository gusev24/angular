import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { MySecondComponentComponent } from './components/my-second-component/my-second-component.component';
import { CircusPipe } from './pipes/circus.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MySecondComponentComponent,
    CircusPipe,
    HighlightDirective,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
