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

  constructor(public fb: FormBuilder, public service: CalcBoxService) {
  }

  public calcForm = this.fb.group({
    targetWeightText: ["", Validators.required]
  });

  ngOnInit() {
    // $(function(){
    //   alert('Hello');
    // });

  }

  getWeightCalc() {
    console.log("in calc box component");

    this.service.getWeightCalc(this.calcForm.controls.targetWeightText.value)
      .subscribe(
        weights => {
          console.log(weights)
        },
        err => {
          console.log(err);
        });
  }
}
