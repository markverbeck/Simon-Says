import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { GameFunction } from 'src/app/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {
  private _unsubscribe$: Subject<void> = new Subject<void>();
  public steps: number[] = []
  public currentStep: number = 0
  public red: string = ''
  public green: string = ''
  public blue: string = ''
  public yellow: string = ''
  public NextStep: number = 0
  public simonPlaying: boolean = false
  public whosTurn: string = ''
  constructor(private gameFunction: GameFunction) {}

  ngOnInit(): void {
    this.gameFunction.steps.pipe(takeUntil(this._unsubscribe$)).subscribe( steps => {
      this.steps = steps
    })
    this.gameFunction.red.pipe(takeUntil(this._unsubscribe$)).subscribe( color => {
      this.red = color
    })
    this.gameFunction.yellow.pipe(takeUntil(this._unsubscribe$)).subscribe( color => {
      this.yellow = color
    })
    this.gameFunction.green.pipe(takeUntil(this._unsubscribe$)).subscribe( color => {
      this.green = color
    })
    this.gameFunction.blue.pipe(takeUntil(this._unsubscribe$)).subscribe( color => {
      this.blue = color
    })
  }

  nextStep(){
    this.gameFunction.nextStep();
  }

  resetSteps(){
    this.gameFunction.resetSteps();
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next()
    this._unsubscribe$.complete()
  }

  startGame(){
    this.whosTurn = "Simon's Turn"
    this.nextStep()
    this.simonsTurn()
  }
  pressedColor(color: string){
    this.gameFunction.colorPress(color)
  }

  releasedColor(color: string){
    this.gameFunction.colorRelease(color)
  }

  simonsStep(color: string){
    this.gameFunction.colorPress(color)
        this.NextStep = this.NextStep + 1
        setTimeout(() => {
          this.gameFunction.colorRelease(color)
        }, 800)
  }

  simonsTurn(){
   const takeTurn = setInterval(() => {
     this.simonPlaying = true
     this.currentStep = 0;
     
      if(this.steps[this.NextStep] === undefined){

        this.gameFunction.colorRelease('red')
        this.gameFunction.colorRelease('blue')
        this.gameFunction.colorRelease('yellow')
        this.gameFunction.colorRelease('green')
        this.simonPlaying = false
        clearInterval(takeTurn)
        this.whosTurn = "Player's Turn"
        this.NextStep = 0

      }else if(this.steps[this.NextStep] === 1){

        this.simonsStep('red')

      }else if(this.steps[this.NextStep] === 2){

        this.simonsStep('green')

      }else if(this.steps[this.NextStep] === 3){

        this.simonsStep('yellow')

      }else if(this.steps[this.NextStep] === 4){

        this.simonsStep('blue')

      }
    }, 1000)
  }
  
  playersTurn(choice: number){
    // is there something in the step array? 
    if(this.steps.length > 0){

      // if the current step and choice match.
      if(this.steps[this.currentStep] === choice ){
        
        // if there are no more choices to be made. 
        if(this.steps.length === (this.currentStep + 1)){
          this.whosTurn = "Simon's Turn"
          this.currentStep = 0
          this.nextStep()
          this.simonsTurn()
        }

        // move on to the next choice
        this.currentStep = this.currentStep + 1

        // if the current step and choice don't match. 
      }else{
        this.gameOver()
      }
        
      
    }
  }

  gameOver(){
      this.whosTurn = "Game Over"
      this.gameFunction.resetSteps()
      this.currentStep = 0
      this.NextStep = 0
  }
}

