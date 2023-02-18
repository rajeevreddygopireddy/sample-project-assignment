import 'zone.js/dist/zone';
import { NotesAppModule } from './notes-app/notes-app.module';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(NotesAppModule)
  .catch((err) => console.error(err));
