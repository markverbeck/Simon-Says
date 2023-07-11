import { createAction, props } from "@ngrx/store";

export const GET_STEPS = createAction("[game-function] retrieve current steps")

export const NEXT_STEP = createAction("[game-function] advance to next step")

export const ADD_NEXT_STEP = createAction("[game-function] add next step to step array", props<{nextStep: number}>())

export const RESET_STEPS = createAction("[game-function] reset game steps")

export const RED_LIGHT = createAction("[game-function] change red color to light", props<{color: string}>())
export const RED_DARK = createAction("[game-function] change red color to dark", props<{color: string}>())

export const YELLOW_LIGHT = createAction("[game-function] change yellow color to light", props<{color: string}>())
export const YELLOW_DARK = createAction("[game-function] change yellow color to dark", props<{color: string}>())

export const GREEN_LIGHT = createAction("[game-function] change green color to light", props<{color: string}>())
export const GREEN_DARK = createAction("[game-function] change green color to dark", props<{color: string}>())

export const BLUE_LIGHT = createAction("[game-function] change blue color to light", props<{color: string}>())
export const BLUE_DARK = createAction("[game-function] change blue color to dark", props<{color: string}>())

export const COLOR_PRESS = createAction("[game-function] button press color", props<{color: string}>())

export const COLOR_RELEASE = createAction("[game-function] button release color", props<{color: string}>())