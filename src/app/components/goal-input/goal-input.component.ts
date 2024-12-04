import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goal-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goal-input.component.html',
  styleUrl: './goal-input.component.css'
})
export class GoalInputComponent {

  @Output() goalSaved = new EventEmitter()

  goal = {
    type: '',
    target: 0
  }

  onSaveGoal(){
    if (this.goal.type && this.goal.target > 0) {
      this.goalSaved.emit(this.goal)
    } else {
      console.error('Invalid goal data', this.goal);
      
    }
    
  }

}
