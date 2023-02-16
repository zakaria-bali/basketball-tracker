import { Conference } from './../../core/models/nba-data.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conference',
})
export class ConferencePipe implements PipeTransform {
  transform(value: Conference | undefined): 'Eastern' | 'Western' | undefined {
    if (value === 'East') {
      return 'Eastern';
    }

    if (value === 'West') {
      return 'Western';
    }

    return value;
  }
}
