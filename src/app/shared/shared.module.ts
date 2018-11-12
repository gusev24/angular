import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { CircusPipe } from './pipes/circus/circus.pipe';
import { CardComponent } from './components/card/card.component';
import { TemplateDirective } from './directives/template/template.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    CircusPipe,
    CardComponent,
    TemplateDirective
  ],
  exports: [
    HighlightDirective,
    CircusPipe,
    CardComponent,
    TemplateDirective
  ]
})
export class SharedModule { }
