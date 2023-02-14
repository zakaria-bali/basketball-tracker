import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferencePipe } from './pipes/conference.pipe';



@NgModule({
  declarations: [
    ConferencePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommonModule, FormsModule, ConferencePipe]
})
export class SharedModule { }
