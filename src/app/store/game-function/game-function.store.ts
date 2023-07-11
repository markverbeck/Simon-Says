import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as selectors from "./game-function.selectors"
import { Injectable } from '@angular/core';
import { gameFunctionActions } from '.';

@Injectable({ providedIn: 'root' })
export class GameFunction{
    public steps: Observable<number[]>
    public red: Observable<string>
    public yellow: Observable<string>
    public green: Observable<string>
    public blue: Observable<string>
    constructor(private store: Store<GameFunction>){
        this.steps = this.store.select(selectors.selectSteps)
        this.red = this.store.select(selectors.selectRed)
        this.yellow = this.store.select(selectors.selectYellow)
        this.green = this.store.select(selectors.selectGreen)
        this.blue = this.store.select(selectors.selectBlue)
    }

    getSteps(){
        this.store.dispatch(gameFunctionActions.GET_STEPS())
    }
    nextStep(){
        this.store.dispatch(gameFunctionActions.NEXT_STEP())
    }
    resetSteps(){
        this.store.dispatch(gameFunctionActions.RESET_STEPS())
    }
    redLight(){
        this.store.dispatch(gameFunctionActions.RED_LIGHT({color: 'bg-red-400'}))
    }
    redDark(){
        this.store.dispatch(gameFunctionActions.RED_DARK({color: 'bg-red-600'}))
    }
    yellowLight(){
        this.store.dispatch(gameFunctionActions.YELLOW_LIGHT({color: 'bg-yellow-400'}))
    }
    yellowDark(){
        this.store.dispatch(gameFunctionActions.YELLOW_DARK({color: 'bg-yellow-600'}))
    }
    greenLight(){
        this.store.dispatch(gameFunctionActions.GREEN_LIGHT({color: 'bg-green-400'}))
    }
    greenDark(){
        this.store.dispatch(gameFunctionActions.GREEN_DARK({color: 'bg-green-600'}))
    }
    blueLight(){
        this.store.dispatch(gameFunctionActions.BLUE_LIGHT({color: 'bg-blue-400'}))
    }
    blueDark(){
        this.store.dispatch(gameFunctionActions.BLUE_DARK({color: 'bg-blue-600'}))
    }
    colorPress(color: string){
        this.store.dispatch(gameFunctionActions.COLOR_PRESS({color: color}))
    }
    colorRelease(color: string){
        this.store.dispatch(gameFunctionActions.COLOR_RELEASE({color: color}))
    }
    
}