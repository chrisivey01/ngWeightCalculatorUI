import {Component, OnInit} from '@angular/core';
import {TestService} from "./test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  leftWeights = [];
  rightWeights = [];
  standardHeight = 0.45;
  blanks = 20;
  totalWeight = 45;
  service;
  fortyFives = 0;
  twentyFives = 0;
  tens = 0;
  fives = 0;
  twoPointFives = 0;

  constructor(service: TestService) {
    this.service = service;

    let weight = 290;
    weight -= 45;

    while (weight >= 5 && this.blanks > 0) {
      if (weight >= 90) {
        this.leftWeights.push(45);
        this.rightWeights.push(45);
        this.fortyFives += 2;
        this.totalWeight += 90;
        weight = weight - 90;
      } else if (weight >= 50) {
        this.leftWeights.push(25);
        this.rightWeights.push(25);
        this.twentyFives += 2;
        this.totalWeight += 50;
        weight = weight - 50;
      } else if (weight >= 20) {
        this.leftWeights.push(10);
        this.rightWeights.push(10);
        this.tens += 2;
        this.totalWeight += 20;
        weight = weight - 20;
      } else if (weight >= 10) {
        this.leftWeights.push(5);
        this.rightWeights.push(5);
        this.fives += 2;
        this.totalWeight += 10;
        weight = weight - 10;
      } else {
        this.leftWeights.push(2.5);
        this.rightWeights.push(2.5);
        this.twoPointFives += 2;
        this.totalWeight += 5;
        weight = weight - 5;
      }
      this.blanks -= 2;
    }

    this.leftWeights.reverse();

    // this.testService()
  }

  ngOnInit() {
  }

  testService() {
    this.service.testService()
      .subscribe(
        response => {
          console.log(response.text())
        },
        err => {
          console.log(err);
        });
    ;
  }
}
