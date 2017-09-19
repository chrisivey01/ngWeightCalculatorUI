import {Component, OnInit} from '@angular/core';
import $ from 'jquery';
import {CalcBoxService} from './calc-box.service';
import {Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-calc-box',
  templateUrl: './calc-box.component.html',
  styleUrls: ['./calc-box.component.css']
})
export class CalcBoxComponent implements OnInit {
  leftWeights;
  rightWeights;
  standardHeight = 0.45;
  blanks = 20;
  totalWeight;
  fortyFives;
  twentyFives;
  tens;
  fives;
  twoPointFives;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  calcForm = this.fb.group({
    targetWeightText: ["", Validators.required]
  });

  calculateWeight() {
    this.leftWeights = []
    this.rightWeights = []
    this.blanks = 20;
    this.totalWeight = 45;
    this.fortyFives = 0;
    this.twentyFives = 0;
    this.tens = 0;
    this.fives = 0;
    this.twoPointFives = 0;

    let weight = this.calcForm.controls.targetWeightText.value
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
  }
}
