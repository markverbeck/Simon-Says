import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GameFunctionStore } from "src/app/models/game-function.model";

export const selectGameFunctionState = createFeatureSelector<GameFunctionStore>('gameFunctionStore');

export const selectSteps = createSelector(selectGameFunctionState, (state) => state.steps)
export const selectRed = createSelector(selectGameFunctionState, (state) => state.red)
export const selectYellow = createSelector(selectGameFunctionState, (state) => state.yellow)
export const selectGreen = createSelector(selectGameFunctionState, (state) => state.green)
export const selectBlue = createSelector(selectGameFunctionState, (state) => state.blue)