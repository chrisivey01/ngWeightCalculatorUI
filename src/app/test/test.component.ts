import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import {element} from "protractor";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  serviceValue;
  squatGraph = false;
  benchGraph = false;
  deadLiftGraph = false;
  week1Weight: number;
  week1SquatWeight: number;
  week1GoalSquatWeight: string;
  week2Weight: number;
  week3Weight: number;
  week4Weight: number;

  threes = [
    {value: 'squat', viewValue: 'Squat'},
    {value: 'bench', viewValue: 'Bench'},
    {value: 'deadLift', viewValue: 'Deadlift'}
  ];

  displayedColumns = ['week1', 'week2', 'week3', 'week4'];
  dataSource = new WeightDataSource();


  constructor() {
  }

  ngOnInit() {
  }

  picker(event) {
    this.benchGraph = false;
    this.squatGraph = false;
    this.deadLiftGraph = false;

    if (event.value == 'bench')
      this.benchGraph = true;
    else if (event.value == 'squat')
      this.squatGraph = true;
    else if (event.value == 'deadLift')
      this.deadLiftGraph = true;
  }


  addToTable() {


    let a = 2* Math.round(this.week1Weight * 1.025/2);
    if(isNaN(a)){
      a = 0;
    }
    let b = 2* Math.round(this.week2Weight * 1.025/2);
    if(isNaN(b)){
      b = 0;
    }
    let c = 2* Math.round(this.week3Weight * 1.025/2);
    if(isNaN(c)){
      c = 0;
    }
    let d = 2* Math.round(this.week4Weight * 1.025/2);
    if(isNaN(d)){
      d = 0;
    }

    document.getElementById('week1GoalSquatWeight').innerHTML = a.toFixed()
    document.getElementById('week2GoalSquatWeight').innerHTML = b.toFixed()
    document.getElementById('week3GoalSquatWeight').innerHTML = c.toFixed()
    document.getElementById('week4GoalSquatWeight').innerHTML = d.toFixed()

  }

}

export interface Element  {
  squatPosition: number;
  squatWeek1: number;
  squatWeek2: number;
  squatWeek3: number;
  squatWeek4: number;

// benchPosition:number;
// benchWeek1: number;
// benchWeek2: number;
// benchWeek3: number;
// benchWeek4: number;
}

const data: Element[] = [{squatPosition: 1, squatWeek1: 225, squatWeek2: 225, squatWeek3: 245, squatWeek4: 255}];

export class WeightDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }
  disconnect() {
  }


}
