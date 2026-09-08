import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { ResourceLoader } from '@angular/compiler';

class DummyResourceLoader extends ResourceLoader {
  get(url: string): Promise<string> {
    return Promise.resolve('');
  }
}

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting([{ provide: ResourceLoader, useClass: DummyResourceLoader, deps: [] }]),
  { teardown: { destroyAfterEach: false } }
);
