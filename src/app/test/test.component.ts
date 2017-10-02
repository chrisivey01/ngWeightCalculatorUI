import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';

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
}

export interface Element {
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
