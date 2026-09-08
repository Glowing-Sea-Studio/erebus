import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { ResourceLoader } from '@angular/compiler';

class DummyResourceLoader extends ResourceLoader {
  get(_url: string): Promise<string> {
    return Promise.resolve('');
  }
}

// @ts-ignore
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  // @ts-ignore
  platformBrowserDynamicTesting([{ provide: ResourceLoader, useClass: DummyResourceLoader, deps: [] }]),
  { teardown: { destroyAfterEach: false } }
);
