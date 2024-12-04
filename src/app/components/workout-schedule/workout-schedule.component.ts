import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkoutDays } from '../../model/workout';

@Component({
  selector: 'app-workout-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-schedule.component.html',
  styleUrl: './workout-schedule.component.css'
})
export class WorkoutScheduleComponent {

  @Input() goal: any
  @Output() scheduleSaved = new EventEmitter()

  daysOfWeeks = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  workoutSchedule: { [key: string]: string } = {
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  };

  onSaveSchedule() {
    this.scheduleSaved.emit(this.workoutSchedule)
  }

}
