import { createReducer, on, Action } from '@ngrx/store';
import { GET_STEPS, ADD_NEXT_STEP, RESET_STEPS, RED_DARK, RED_LIGHT, YELLOW_DARK, YELLOW_LIGHT, GREEN_DARK, GREEN_LIGHT, BLUE_DARK, BLUE_LIGHT, COLOR_PRESS, COLOR_RELEASE } from './game-function.actions';
import { initialGameFunctionState } from './game-function.state';


const _gameFunctionReducer = createReducer(
    initialGameFunctionState,
    on(GET_STEPS, state => {
        return {
            ...state
        }
    }),
    on(ADD_NEXT_STEP, (state, {nextStep}) =>{
        return{
            ...state,
            steps:[...state.steps, nextStep]
        }
    }),
    on(RESET_STEPS, state => {
        return {
            ...state,
            steps: []
        }
    }),
    on(RED_LIGHT, (state, {color}) => {
        return{
            ...state,
            red: color
        }
    }),
    on(RED_DARK, (state, {color}) => {
        return{
            ...state,
            red: color
        }
    }),
    on(YELLOW_LIGHT, (state, {color}) => {
        return{
            ...state,
            yellow: color
        }
    }),
    on(YELLOW_DARK, (state, {color}) => {
        return{
            ...state,
            yellow: color
        }
    }),
    on(GREEN_LIGHT, (state, {color}) => {
        return{
            ...state,
            green: color
        }
    }),
    on(GREEN_DARK, (state, {color}) => {
        return{
            ...state,
            green: color
        }
    }),
    on(BLUE_LIGHT, (state, {color}) => {
        return{
            ...state,
            blue: color
        }
    }),
    on(BLUE_DARK, (state, {color}) => {
        return{
            ...state,
            blue: color
        }
    }),
    on(COLOR_PRESS, (state, {color}) => {
        return {
            ...state,
            [color]: `bg-${color}-400`
        }
    }),
    on(COLOR_RELEASE, (state, {color}) => {
        return {
            ...state,
            [color]: `bg-${color}-600`
        }
    })
)

export function gameFunctionReducer(state = initialGameFunctionState, action: any){
    return _gameFunctionReducer(state, action)
}