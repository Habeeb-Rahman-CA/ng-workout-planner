import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutService } from './service/workout.service';
import { GoalInputComponent } from "./components/goal-input/goal-input.component";
import { WorkoutScheduleComponent } from "./components/workout-schedule/workout-schedule.component";
import { ProgressTrackerComponent } from "./components/progress-tracker/progress-tracker.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ GoalInputComponent, WorkoutScheduleComponent, ProgressTrackerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  workoutService = inject(WorkoutService)

  goal: any = null
  workoutSchedule: any = null
  progressData: number[] = [0,0,0,0]

  onGoalSaved(goal: any){
    try {
      this.goal = goal;
      this.workoutService.saveGoal(goal);
      alert('Goal saved successfully!');
    } catch (error) {
      console.error('Error saving goal:', error);
      alert('Failed to save goal. Please try again.');
    }
  }

  onScheduleSaved(schedule: any) {
    this.workoutSchedule = schedule;
    this.workoutService.saveSchedule(schedule);
  }

  onProgressUpdated(progress: number[]){
    this.progressData = progress
  }

}
