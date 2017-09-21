import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

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
  totalWeight = 0;
  hundreds = 0;
  fiftyFives = 0;
  fortyFives = 0;
  thirtyFives = 0;
  twentyFives = 0;
  tens = 0;
  fives = 0;
  twoPointFives = 0;
  onePointTwoFives = 0;
  hundredPlate;
  fiftyFivePlate;
  fortyFivePlate = true;
  thirtyFivePlate;
  twentyFivePlate = true;
  tenPlate = true;
  fivePlate = true;
  twoPointFivePlate = true;
  onePointTwoFivePlate;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  calcForm = this.fb.group({
    targetWeightText: ["", Validators.required]
  });

  calculateWeight() {
    this.leftWeights = [];
    this.rightWeights = [];
    this.blanks = 20;
    this.totalWeight = 45;
    this.hundreds = 0;
    this.fortyFives = 0;
    this.thirtyFives = 0;
    this.twentyFives = 0;
    this.tens = 0;
    this.fives = 0;
    this.twoPointFives = 0;
    this.onePointTwoFives = 0;

    let weight = this.calcForm.controls.targetWeightText.value;

    if(weight >= 50){
      weight -= 45;

      while (weight >= 5 && this.blanks > 0) {
        if (this.hundredPlate && weight >= 200) {
          this.leftWeights.push(100);
          this.rightWeights.push(100);
          this.hundreds += 2;
          this.totalWeight += 200;
          weight = weight - 200;
        } else if (this.fiftyFivePlate && weight >= 110) {
          this.leftWeights.push(55);
          this.rightWeights.push(55);
          this.fiftyFives += 2;
          this.totalWeight += 110;
          weight = weight - 110;
        } else if (this.fortyFivePlate && weight >= 90) {
          this.leftWeights.push(45);
          this.rightWeights.push(45);
          this.fortyFives += 2;
          this.totalWeight += 90;
          weight = weight - 90;
        } else if (this.thirtyFivePlate && weight >= 70) {
          this.leftWeights.push(35);
          this.rightWeights.push(35);
          this.thirtyFives += 2;
          this.totalWeight += 70;
          weight = weight - 70;
        } else if (this.twentyFivePlate && weight >= 50) {
          this.leftWeights.push(25);
          this.rightWeights.push(25);
          this.twentyFives += 2;
          this.totalWeight += 50;
          weight = weight - 50;
        } else if (this.tenPlate && weight >= 20) {
          this.leftWeights.push(10);
          this.rightWeights.push(10);
          this.tens += 2;
          this.totalWeight += 20;
          weight = weight - 20;
        } else if (this.fivePlate && weight >= 10) {
          this.leftWeights.push(5);
          this.rightWeights.push(5);
          this.fives += 2;
          this.totalWeight += 10;
          weight = weight - 10;
        } else if(this.twoPointFivePlate && weight >= 5){
          this.leftWeights.push(2.5);
          this.rightWeights.push(2.5);
          this.twoPointFives += 2;
          this.totalWeight += 5;
          weight = weight - 5;
        } else if (this.onePointTwoFivePlate && weight >= 2.5) {
          this.leftWeights.push(1.25);
          this.rightWeights.push(1.25);
          this.onePointTwoFives += 2;
          this.totalWeight += 2.5;
          weight = weight - 2.5;
        }
        this.blanks -= 2;
      }

      this.leftWeights.reverse();
    }else{
      this.totalWeight = 0;
    }



  }
}
