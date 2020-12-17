import { InjectionToken } from '@angular/core';

export const BROWSER_CACHE = new InjectionToken<Storage>(
  'Shramba brskalnika',
  {
    providedIn: 'root',
    factory: () => localStorage
  }
);