import { InjectionToken } from '@angular/core';

export const BROWSER_CACHE = new InjectionToken<Storage>(
  'Browser cache',
  {
    providedIn: 'root',
    factory: () => localStorage
  }
);