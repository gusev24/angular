import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { CircusPipe } from './pipes/circus/circus.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    CircusPipe
  ],
  exports: [
    HighlightDirective,
    CircusPipe
  ]
})
export class SharedModule { }
