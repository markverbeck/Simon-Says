import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import { map, catchError, withLatestFrom, exhaustMap, switchMap, concatMap, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GameFunctionStore } from 'src/app/models/game-function.model';
import { gameFunctionActions } from '.';
@Injectable()
export class GameFunctionEffects {
    constructor(
        private actions$: Actions,
        private store: Store<GameFunctionStore>,
        
        ){
            
        }

    addNextStep$ = createEffect(() => 
        this.actions$.pipe(
            ofType(gameFunctionActions.NEXT_STEP),
            exhaustMap((_) => {
               return this.chooseNextStep().pipe(
                 map(success => {
                     return gameFunctionActions.ADD_NEXT_STEP({nextStep: success})
                 })  
               )
            })
        )
    )
    chooseNextStep(): Observable<number> {
        return of(Math.floor(Math.random() * 4) + 1)
    }
}