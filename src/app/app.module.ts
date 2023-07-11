import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule, MetaReducer } from '@ngrx/store';
import * as fromStore from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects'
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { GameContainerComponent } from './containers/game-container/game-container/game-container.component';
import { GameFunctionEffects } from './store/game-function/game-function.effects';
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [
    AppComponent,
    GameContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({gameFunctionStore: fromStore.gameFunctionReducers.gameFunctionReducer}, {metaReducers}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([GameFunctionEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
