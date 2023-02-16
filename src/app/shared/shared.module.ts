import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferencePipe } from './pipes/conference.pipe';
import { BaseCardComponent } from './components/base-card/base-card.component';

@NgModule({
  declarations: [ConferencePipe, BaseCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, ConferencePipe, BaseCardComponent],
})
export class SharedModule {}
