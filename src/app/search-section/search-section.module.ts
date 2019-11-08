import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSectionComponent } from './search-section.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchSectionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchSectionComponent]
})
export class SearchSectionModule { }
