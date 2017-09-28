import {Component, OnInit} from "@angular/core";
import {TestService} from "./test.service";
import {FormBuilder, Validators} from "@angular/forms";

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

  constructor(private testService: TestService) {
    this.test();
  }

  ngOnInit() {
  }

  test() {
    this.testService.testService()
      .subscribe(
        response => {
          this.serviceValue = response.text()
        },
        err => {
          console.log(err);
        });
    ;
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
