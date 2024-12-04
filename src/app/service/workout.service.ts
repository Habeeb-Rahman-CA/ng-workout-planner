import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  goal: any = null
  schedule: any = null

  saveGoal(goal: any){
    this.goal = goal
  }

  saveSchedule(schedule: any) {
    this.schedule = schedule;
  }

  getGoal() {
    return this.goal;
  }

  getSchedule() {
    return this.schedule;
  }

}
