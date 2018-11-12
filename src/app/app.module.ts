import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CircusPipe } from './shared/pipes/circus/circus.pipe';
import { HighlightDirective } from './shared/directives/highlight/highlight.directive';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  exports: [
    CircusPipe,
    HighlightDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
