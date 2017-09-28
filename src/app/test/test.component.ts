import {Component, OnInit} from "@angular/core";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";

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
  position: number;
  week1: number;
  week2: number;
  week3: number;
  week4: number;
}

const data: Element[] = [{position: 1, week1: 225, week2: 225, week3: 245, week4: 255}];

export class WeightDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {
  }
}
