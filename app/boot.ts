import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';

//Creates the root component whenever the site is started or reloaded, the ROUTER_PROVIDERS is needed for routing
bootstrap(AppComponent, [ROUTER_PROVIDERS]);